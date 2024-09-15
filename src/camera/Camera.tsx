import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera as CameraComponent } from 'react-camera-pro';

// Camera 컴포넌트의 메서드 및 속성을 정의한 타입
interface Camera {
  play: () => void;
  pause: () => void;
  takePhoto: () => string; // 사진 촬영 후 데이터 URL을 반환
  switchCamera: () => void; // 카메라 전환 메서드
}

const View = () => {
  const cameraRef = useRef<Camera | null>(null); // Camera 타입으로 설정
  const [isCaptured, setIsCaptured] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false); // 카메라 준비 상태
  const navigate = useNavigate();

  const downloadUrl = (url: string, name?: string) => {
    const ae = document.createElement('a');
    const fileName = name || Date.now();
    ae.href = url;
    ae.download = `${fileName}.png`;
    document.body.appendChild(ae);
    ae.click();
    document.body.removeChild(ae);
  };

  const playVideo = () => {
    if (cameraRef.current) {
      cameraRef.current.play();
      setIsCaptured(false);
    }
  };

  const pauseVideo = () => {
    if (cameraRef.current) {
      cameraRef.current.pause();
      setIsCaptured(true);
      setIsConfirmVisible(true);
    }
  };

  const saveImage = () => {
    if (cameraRef.current) {
      const dataUrl = cameraRef.current.takePhoto();
      downloadUrl(dataUrl);
    }
  };

  const handleConfirm = (confirmed: boolean) => {
    if (confirmed) {
      setIsLoading(true);
      setTimeout(() => {
        navigate('/stamp-complete');
      }, 3000);
    } else {
      playVideo();
    }
    setIsConfirmVisible(false);
    setIsCaptured(false);
  };

  // 카메라 스트림이 정상적으로 로드되었는지 확인
  useEffect(() => {
    const checkCamera = async () => {
      try {
        if (cameraRef.current) {
          await cameraRef.current.play();
          setIsCameraReady(true); // 카메라가 준비되었음을 설정
        }
      } catch (error) {
        console.error('카메라 로드 중 오류 발생:', error);
        setIsCameraReady(false); // 카메라가 준비되지 않음
      }
    };

    checkCamera();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <CameraComponent
          ref={cameraRef}
          errorMessages={{
            noCameraAccessible: "카메라에 접근할 수 없습니다.",
            permissionDenied: "카메라 접근이 거부되었습니다.",
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '10%',
          color: 'white',
          fontSize: '24px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '5px',
          display: isCameraReady ? 'none' : 'block', // 카메라가 준비되면 숨김
        }}
      >
        카메라 오버레이
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
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
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
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        >
          <div className="loader"></div>
        </div>
      )}
      <style>
        {`
          .videos {
            height: 100%;
            width: 100%;
            --s: 50px;
            border: 5px solid #b38184;
            -webkit-mask:
              conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 / calc(100% - var(--s))
                calc(100% - var(--s)),
              linear-gradient(#000 0 0) content-box;
          }
          .loader {
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 70px;
            height: 70px;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default View;
