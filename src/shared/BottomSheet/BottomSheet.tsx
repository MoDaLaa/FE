import { ReactNode } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import * as Styled from './css/bottomSheet.styled';
import * as StyledContent from './css/sheet.content.styled.ts';
import useBottomSheet from './hooks/useBottomSheet';

interface BottomSheetProps {
  contentChildNode: ReactNode;
}
export default function BottomSheet({ contentChildNode }: BottomSheetProps) {
  const { sheet, content } = useBottomSheet();

  return (
    <Styled.BottomSheetContainer ref={sheet}>
      <Header />
      <StyledContent.BottomSheetContent ref={content}>
        <Content>{contentChildNode}</Content>
      </StyledContent.BottomSheetContent>
    </Styled.BottomSheetContainer>
  );
}
