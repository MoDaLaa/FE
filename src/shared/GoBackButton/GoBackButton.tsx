import { useNavigate } from "react-router-dom";
import * as Styled from "./goback.button.styled";

export default function GoBackButton() {
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
          <Styled.GoBackButton
            width={20}
            height={20}
            viewBox="7.29 7.103 1.869 1.869"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleGoBack}
          >
            <path
              d="m7.944 8.692 0.132 -0.132L7.648 8.131H9.159v-0.187H7.648l0.429 -0.429L7.944 7.383l-0.654 0.654z"
              fill="#323232"
            />
          </Styled.GoBackButton>
    );
}
