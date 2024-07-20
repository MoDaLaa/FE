import Carousel from './components/Carousel';
import * as Styled from './css/collection.styled';

export default function CollectionBook() {
  return (
    <>
      <div
        className="collection-container"
        style={{
          width: '100%',
          height: '100%',
          paddingTop: '70px',
        }}
      >
        <Styled.Title>컬렉션 북</Styled.Title>
        <Styled.Description>
          즐거운 여행을 한<br />
          당신의 기록
        </Styled.Description>
        <Carousel />
      </div>
    </>
  );
}
