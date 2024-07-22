import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

interface ITest {
  width: number;
}

const ProgressBar = styled.div`
  width: 90%;
  height: 10px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props: ITest) => props.width}%;
  height: 30px;
  padding: 0;
  text-align: center;
  background-color: rgba(118, 118, 118, 1);
  color: #111;
`;

const ProgressText = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;

export default function ProgressState() {
  const maxItem = 5;
  let availableItem = 0;

  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <ProgressBar>
        <Progress width={100 - (availableItem * 100) / maxItem} />
      </ProgressBar>
      <ProgressText>
        {maxItem - availableItem}/{maxItem}
      </ProgressText>
    </div>
  );
}
