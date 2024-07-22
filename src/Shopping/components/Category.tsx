import styled from 'styled-components';

const navItems = ['Top 10', '내 주변', '숙소', '교통', '기념품'];

const Slider = styled.div`
  width: 100%;
  min-height: 30px;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow-x: scroll;
  gap: 20px;
  margin: 20px 0;
  user-select: none;
  outline: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  max-width: 90px;
  height: 30px;
  border-radius: 20px;
  background-color: rgba(217, 217, 217, 1);

  font-weight: bolder;
`;

const Items = [
  {
    name: '황리단길 포근한 숙소',
    sales: '20%',
    price: '79900',
    id: 1,
    img: 'url',
    distance: '1',
  },
  {
    name: '황리단길 포근한 숙소',
    sales: '10%',
    price: '60900',
    id: 2,
    img: 'url',
    distance: '3',
  },
];

export default function Category({ kind }: string) {
  return (
    <Slider>
      {navItems.map((item, index) => (
        <SliderItem key={index}>{item}</SliderItem>
      ))}
    </Slider>
  );
}
