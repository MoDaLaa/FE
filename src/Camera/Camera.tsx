import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

const View = () => {
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>;
  const [isCaptured, setIsCaptured] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false); // 예/아니오 버튼 표시 여부

  const downloadUrl = (url: string, name?: string) => {
    const ae = document.createElement('a');
    const fileName = name || Date.now();
    ae.href = url;
    ae.download = fileName + '.png';
    document.body.appendChild(ae);
    ae.click();
    document.body.removeChild(ae);
  };

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

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsCaptured(true);
    setIsConfirmVisible(true); // 촬영 후 예/아니오 버튼 표시
  };

  const saveImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const context = canvas.getContext('2d');
    if (context != null) {
      context.drawImage(videoRef.current, 0, 0);
    }

    const dataUrl = canvas.toDataURL('image/png');
    downloadUrl(dataUrl);
  };

  const handleConfirm = (confirmed: boolean) => {
    if (confirmed) {
      saveImage(); // 예를 선택하면 이미지 저장
    }
    setIsConfirmVisible(false); // 확인 다이얼로그 숨기기
    setIsCaptured(false); // 다시 촬영 가능하도록 상태 초기화
  };

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
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        ref={videoRef}
        autoPlay={true}
        style={{ height: '100%', width: '100%', background: 'tan' }}
      ></video>
      <div
        style={{
          position: 'absolute',
          top: '10%',
          //   left: '50%',
          //   transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '24px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        {isConfirmVisible ? (
          <>
            좋아요!
            <br />
            사진이 마음에 드시나요?
          </>
        ) : (
          '카메라 오버레이'
        )}
      </div>
      <button disabled={!isCaptured} onClick={playVideo}>
        재생
      </button>
      {isConfirmVisible ? (
        <div
          style={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <button
            style={{
              background: '#3753F2',
              color: 'white',
              width: '80px',
              padding: '5px',
              border: 'none',
              borderRadius: '20px',
              fontSize: '16pt',
              marginRight: '20px',
            }}
            onClick={() => handleConfirm(true)}
          >
            예
          </button>
          <button
            style={{
              background: 'white',
              width: '80px',
              padding: '5px',
              border: 'none',
              borderRadius: '20px',
              fontSize: '16pt',
            }}
            onClick={() => {
              handleConfirm(false);
              playVideo();
            }}
          >
            아니오
          </button>
        </div>
      ) : (
        <button
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '5px solid #F2F2F2',
            backgroundColor: 'rgba(242,242,242,0.5)',
            top: '80%', // 중앙 위치
            left: '50%', // 중앙 위치
            transform: 'translate(-50%, -50%)', // 중앙 정렬
            width: '100px',
            height: '100px',
          }}
          disabled={isCaptured}
          onClick={pauseVideo}
        ></button>
      )}
      <button disabled={!isCaptured} onClick={saveImage}>
        다운로드
      </button>
    </div>
  );
};

export default View;
