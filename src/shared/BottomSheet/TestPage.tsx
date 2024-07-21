import styled from 'styled-components';
import BottomSheet from './BottomSheet';
import StampRecord from '../../CollectionBook/StampRecord/StampRecord';

const Layer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
`;

export default function TestPage() {
  return (
    <Layer>
      <BottomSheet contentChildNode={<StampRecord />} />
    </Layer>
  );
}
