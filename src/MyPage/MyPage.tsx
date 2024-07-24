export default function MyPage() {
  return (
    <div
      className="mypage-container"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px',
        backgroundImage: 'url("/public/svg/background.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '36% 63%',
      }}
    ></div>
  );
}
