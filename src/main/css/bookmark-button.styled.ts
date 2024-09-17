import styled from "styled-components";

export const BookmarkButton = styled.div`
    width: 47px;
    height: 47px;
    border-radius: 50%;
    background-color: #FBED6C;
    right: 20px;
    bottom: -35vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
    z-index: 10;
    
`;
export const BookmarkSvg = styled.svg.attrs({
    viewBox: '0 0 25 30.952',
    width: 25, 
    height: 30.952 
})`
    margin-top: 4px;
    width: 20px;
    height: 24px;
    /* CSS에서 width와 height를 설정하지 않음 */
    path {
        fill: #323232;
    }
`;