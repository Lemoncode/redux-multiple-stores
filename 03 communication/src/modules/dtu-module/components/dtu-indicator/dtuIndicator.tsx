import * as React from 'react';

interface Props {
  databaseId: number;
  percentage: number;
}

export const DTUIndicator = (props) => {
  return (
    <>
      <h2>DTU Percentage: {props.percentage}</h2>
      <h3>By the way current DB is: {props.databaseId}</h3>
    </>
  );
}