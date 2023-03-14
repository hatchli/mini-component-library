import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    border: 1,
    padding: 4,
    fontSize: 14,
    iconSize: 16,
    height: 24
  },
  large: {
    border: 2,
    padding: 7,
    height: 16,
    fontSize: 18,
    iconSize: 24,
    height: 36
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = SIZES[size]
  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{
      '--iconSize':styles.iconSize + "px",
      }}>
        <Icon id={icon} size={styles.iconSize}/>
    </IconWrapper>
    <InputNative
      type="search"
      id="site-search"  
      name="q"
      size={size}
      placeholder={placeholder}
      style={{
        '--fontSize': styles.fontSize/16 + "rem",
        '--border': styles.border + "px",
        '--padding': styles.padding +"px",
        '--width': width + "px",
        '--height': styles.height/16+ "rem"
      }}
      >  
    </InputNative>
  </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color:${COLORS.black}
  }
`;

const IconWrapper = styled.div`
position:absolute;
top:0;
bottom:0;
/* left:var(--padding); */
margin:auto;
height: var(--iconSize);

/* width: var(--iconSize); */
`;

const InputNative = styled.input`
  padding-left: var(--height);
  appearance: none;
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  color:${COLORS.gray700};
  font-size:var(--fontSize);
  font-weight:700;
  height: var(--height);
  width: var(--width);
  color: inherit;

  &::placeholder {
    font-family: 'Roboto',sans-serif;
  font-style: normal;
  color:${COLORS.gray500};
  font-size:var(--fontSize);
  font-weight:400;
  }
`;

export default IconInput;
