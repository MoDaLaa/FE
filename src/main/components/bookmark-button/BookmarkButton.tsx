import Bookmark from "../../../shared/svg/Bookmark";
import * as Styled from "../../css/bookmark-button.styled";

export default function BookmarkButton() {
    return (
      <Styled.BookmarkButton>
          <Styled.BookmarkSvg>
            <Bookmark />
          </Styled.BookmarkSvg>
      </Styled.BookmarkButton>
    );    
}
