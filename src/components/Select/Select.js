import React from 'react';
import { ChevronDown } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  

  return (
    <Wrapper>
    <Selector value={value} onChange={onChange}>
      {children}
    </Selector>
    <PresentationalBits>
      {displayedValue}
      <IconWrapper style={{'--size':24+"px"}}>
      <Icon id="chevron-down" strokeWidth={1} size={24}/>
      </IconWrapper>
    </PresentationalBits>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position:relative; 
  width:max-content;
  /* isolation: isolate; */
`;

const Selector = styled.select`
  position: absolute;
  top:0;
  left: 0;
  width:100%;
  height:100%;
  opacity:0;
  appearance: none;
  /* z-index:2; */
  /* -webkit-appearance: none; */
`;

const PresentationalBits = styled.div`
  font-family:'Roboto', sans-serif;
  font-size: ${16/16}rem ;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  /* height: 43px; */
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  ${Selector}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;

  } ;
  ${Selector}:hover + & {
    color: ${COLORS.black};

  } ;
`;

const IconWrapper = styled.div`
  position:absolute;
  top:0;
  right:10px;
  bottom:0;
  height: var(--size);
  width: var(--size);
  margin:auto;
  /* z-index:1; */
  /* padding-right:24px; */
  pointer-events:none;
`

export default Select;
