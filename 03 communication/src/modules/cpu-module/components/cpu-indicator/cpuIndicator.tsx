import * as React from 'react';

interface Props {
  percentage : number;
}

export const CPUIndicator = (props) => {
  return (
    <h2>CPU Percentage: {props.percentage}</h2>
  );
}