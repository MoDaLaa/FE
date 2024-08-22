import * as Styled from "../css/date.area.info.styled";

export default function DateandAreaInfo() {

    const today = new Date();

    const formattedDate = `${today.getFullYear()}.${(today.getMonth()+1) < 9 ? "0" + (today.getMonth()+1) : (today.getMonth()+1)}.${today.getDate()}`;

    return (
        <Styled.InfoContainer>
            <Styled.DateInfo>{formattedDate}</Styled.DateInfo>
            <Styled.AreaInfo>경주</Styled.AreaInfo>
        </Styled.InfoContainer>     
    );
}