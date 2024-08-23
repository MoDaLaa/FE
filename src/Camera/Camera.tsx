import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

// const TestView = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     // 2. 제약 조건 - Video 활성, Audio 활성
//     const constraints = { video: { deviceId: 'default' }, audio: false };
//     const device = navigator.mediaDevices.enumerateDevices();

//     console.log(device);

//     // 3. 장치 권한 요청 & Stream 반환
//     navigator.mediaDevices
//       .getUserMedia(constraints)
//       .then((stream) => {
//         if (videoRef && videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       })
//       .catch((error) => {
//         console.error('error 발생', error);
//       });
//   }, []);

//   return (
//     <div>
//       {/* <!-- 1. Video Element 선언 및 Ref 걸기 --> */}
//       <video autoPlay={true} ref={videoRef}></video>
//     </div>
//   );
// };

// export default TestView;

const View = () => {
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>;
  // 화면 촬영 여부
  const [isCaptured, setIsCaptured] = useState(false);

  const downloadUrl = (url: string, name?: string) => {
    // 1. a 태그 생성
    const ae = document.createElement('a');
    // 2. 다운로드 이름이 없으면 timestamp로 대체
    const fileName = name || Date.now();

    // 3. 다운로드 url 넣기
    ae.href = url;
    // 4. 다운로드할 이름 넣기
    ae.download = fileName + '.png';

    // 5. DOM에 넣어서 Click 이벤트 발생시키고, DOM에서 제거
    document.body.appendChild(ae);
    ae.click();
    document.body.removeChild(ae);
  };

  // 1. 재생하기 버튼
  const playVideo = () => {
    videoRef.current
      .play()
      .then(() => {
        setIsCaptured(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 2. 촬영하기 버튼
  const pauseVideo = () => {
    videoRef.current.pause();
    setIsCaptured(true);
  };

  // 3. 사진 다운로드 버튼
  const saveImage = () => {
    // 1. canvas Element 생성
    const canvas = document.createElement('canvas');
    // canvas.width = 390;
    canvas.width = videoRef.current.videoWidth;
    // canvas.height = 844;
    canvas.height = videoRef.current.videoHeight;

    // 2. canvas에 video 이미지 그리기
    const context = canvas.getContext('2d');
    if (context != null) {
      context.drawImage(videoRef.current, 0, 0);
    }

    // 3. canvas 를 Data URL로 변경
    const dataUrl = canvas.toDataURL('image/png');

    // 4. Image 다운로드
    downloadUrl(dataUrl);
  };

  // 카메라 장치 가져오기
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef && videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('error 발생', error);
      });
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay={true} style={{ height: '100%' }}></video>
      {/* <ButtonGroup> */}
      <button disabled={!isCaptured} onClick={playVideo}>
        재생
      </button>
      <button disabled={isCaptured} onClick={pauseVideo}>
        촬영
      </button>
      <button disabled={!isCaptured} onClick={saveImage}>
        다운로드
      </button>
      {/* </ButtonGroup> */}
    </div>
  );
};

export default View;
