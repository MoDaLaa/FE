import styled from 'styled-components';
import ImgFile from '/public/svg/Shopping/Img1.svg';

const navItems = {
  category: ['Top 10', '내 주변', '숙소', '교통', '기념품'],
  recommend: [
    {
      name: '황리단길 포근한 숙소',
      sales: '20%',
      price: '79,900',
      id: 1,
      img: ImgFile,
      distance: '1',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '10%',
      price: '60,900',
      id: 2,
      img: 'url',
      distance: '3',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '20%',
      price: '79,900',
      id: 3,
      img: 'url',
      distance: '1',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '10%',
      price: '60,900',
      id: 4,
      img: 'url',
      distance: '3',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '20%',
      price: '79,900',
      id: 5,
      img: 'url',
      distance: '1',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '10%',
      price: '60,900',
      id: 6,
      img: 'url',
      distance: '3',
    },
  ],
  top10: [
    {
      name: '황리단길 포근한 숙소',
      sales: '20%',
      price: '79,900',
      id: 1,
      img: ImgFile,
      distance: '1',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '10%',
      price: '60,900',
      id: 2,
      img: 'url',
      distance: '3',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '20%',
      price: '79,900',
      id: 3,
      img: 'url',
      distance: '1',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '10%',
      price: '60,900',
      id: 4,
      img: 'url',
      distance: '3',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '20%',
      price: '79,900',
      id: 5,
      img: 'url',
      distance: '1',
    },
    {
      name: '황리단길 포근한 숙소',
      sales: '10%',
      price: '60,900',
      id: 6,
      img: 'url',
      distance: '3',
    },
  ],
};

const Slider = styled.div<{ kind: CategoryKind }>`
  width: 100%;
  min-height: 30px;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow-x: scroll;
  gap: ${({ kind }) => (kind == 'category' ? '20px' : '40px')};
  margin: 20px 0;
  user-select: none;
  outline: none;
  font-size: 14px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled.div<{ isCategory: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ isCategory }) => (isCategory ? '90px' : '200px')};
  max-width: ${({ isCategory }) => (isCategory ? '90px' : '200px')};
  height: ${({ isCategory }) => (isCategory ? '30px' : '250px')};
  width: ${({ isCategory }) => (isCategory ? 'auto' : '200px')};
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 14px 26px -16px rgba(0, 0, 0, 0.75);
  font-weight: bolder;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 비율 유지하며 채우기
  border-radius: 20px; // SliderItem과 동일한 모서리 반경 적용
`;

const Overlay = styled.div`
  position: absolute;
  top: 80%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  font-size: 12px;
`;

type CategoryKind = 'category' | 'recommend' | 'top10';

interface CategoryProps {
  kind: CategoryKind;
}

export default function Category({ kind }: CategoryProps) {
  return (
    <Slider kind={kind}>
      {navItems[kind].map((item, index) => (
        <SliderItem key={index} isCategory={kind === 'category'}>
          {kind === 'category' ? (
            item
          ) : (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image src={item.img} alt={item.name} />
              <Overlay>
                <div>{item.name}</div>
                <div>{item.price}원/1박</div>
                <div>{item.sales} 할인</div>
              </Overlay>
            </div>
          )}
        </SliderItem>
      ))}
    </Slider>
  );
}
