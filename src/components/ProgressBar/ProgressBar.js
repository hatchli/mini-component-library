/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    borderRadius: 4,
    padding: 0,
    height: 8
  },
  medium: {
    borderRadius: 4,
    padding: 0,
    height: 12 
  },
  large: {
    borderRadius: 8,
    padding: 4,
    height: 16
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  return (
   <Wrapper 
   aria-valuenow={value}
   aria-valuemin={0}
   aria-valuemax={100}
   role="progressbar"
   style={{
    '--padding': styles.padding + 'px',
    '--borderRadius': styles.borderRadius + 'px'
   }}

   >
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper >
      <Bar value={value}
        style={{
          '--width':value+'%',
          '--height':styles.height+'px'
        }}
        
      />
    </BarWrapper>
   </Wrapper>
  )
}

const Wrapper = styled.div`
background-color: ${COLORS.transparentGray15};
padding: var(--padding);
border-radius: var(--borderRadius);
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

//this BarWrapper is because of the padding at large size, which adds breathing room, so the overflow hidden doesn't come in to effect because the progress-bar never comes up to the edge of the wrapper. Thus, we need to add a internal wrapper that hides the overflow of the progress bar and set the border radius of the progressbar
const BarWrapper = styled.div`
border-radius: 4px;
// trim off corners when progress bar is near full
overflow:hidden;
`

const Bar = styled.div`
height: var(--height);
width: var(--width);
background-color: ${COLORS.primary};
border-radius: 4px 0 0 4px;
`;







export default ProgressBar;
