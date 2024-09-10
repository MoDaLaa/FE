import * as Styled from './css/page.styled';
import Back from '/svg/Shopping/Back.svg';

export default function Reservation() {
  return (
    <>
      <div
        className="shopping-container"
        style={{
          width: '100%',
          height: '100vh',
          minWidth: '390px',

          color: 'black',
        }}
      >
        <Styled.Top>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              margin: '0 10px',
              padding: '0',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <li>
              <img src={Back} />
            </li>
          </ul>
        </Styled.Top>
      </div>
    </>
  );
}
