import * as Styled from '../css/social.button.styled';

interface ButtonProps {
  socialName: string;
  backgroundColor: string;
  message: string;
}
export default function SocialLoginButton({ socialName, backgroundColor, message }: ButtonProps) {
  return (
    <>
      <div>
        <Styled.Button $backgroundcolor={backgroundColor}>
          <Styled.LogoImg
            src={`/svg/Login/${socialName}.logo.svg`}
            alt={`${socialName}-logo`}
            className="logo"
          />
          <div
            style={{
              display: 'flex',
              flex: '1',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Styled.LoginText $fontcolor={socialName}>{message}</Styled.LoginText>
          </div>
        </Styled.Button>
      </div>
    </>
  );
}
