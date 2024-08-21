import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BOTTOM_SHEET_HEIGHT } from '../util/bottomsheet.options';

export const BottomSheetContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 1;
  /* 내려가있을때 시트가 얼마나 높이 위치할지*/
  top: calc(100% - 120px);
  left: 0;
  right: 0;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background: white;
  filter: drop-shadow(0px 4px 19.1px rgba(0, 0, 0, 0.25));
  /*바텀시트 애니메이션 속도*/
  transition: transform 650ms ease-out;
`;
