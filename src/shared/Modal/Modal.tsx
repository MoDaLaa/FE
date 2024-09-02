// import { ReactNode, useState } from 'react';
// import ReactModal from 'react-modal';
// import { ModalContainer } from './style/modal.styled';

// const modalCustomStyle = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// // https://github.com/reactjs/react-modal
// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// ReactModal.setAppElement('#root');

// interface ModalPropsType {
//   children: ReactNode;
// }
// export default function Modal({ children }: ModalPropsType) {
//   const [modalIsOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <ReactModal isOpen={modalIsOpen} style={modalCustomStyle}>
//         {children}
//       </ReactModal>
//     </>
//   );
// }
