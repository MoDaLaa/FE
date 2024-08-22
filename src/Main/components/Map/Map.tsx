import { useState } from 'react';
import * as Styled from '../../css/map.styled';

export default function Map() {
    const [isActive, setIsActive] = useState(false);
    const [activePathIndex, setActivePathIndex] = useState(-1);

    const handleClick = (index: number) => {
        setIsActive(!isActive);
        const svg = document.querySelector('.map-svg');
        const paths = document.querySelectorAll('.map-svg path');

        if (isActive) {
        svg?.classList.add('active');
        paths.forEach((path, i) => {
            if (i === index) {
            path.classList.add('active-path');
            } else {
            path.classList.add('active');
            }
        });
        setActivePathIndex(index);
        } else {
        svg?.classList.remove('active');
        paths.forEach((path) => {
            path.classList.remove('active');
            path.classList.remove('active-path');
        });
        setActivePathIndex(-1);
        }
    };
    return (
        // svg 이미지를 컴포넌트 변환 사이트에서 코드로 변환 후 사용하였음
        // 오브젝트 혹은 컴포넌트로 변환 하기 위해서는 웹팩과 같은 번들러 추가가 필요
        <Styled.MapSVG
        id="gyeongju-si"
        data-name="gyeongju-si"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        isActive={isActive}
        >
            <defs>
            <style>
                {
                ".cls-1 {fill: #231f20;opacity: .2;}.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8 {stroke-width: 0px;}.cls-2 {fill: #86c562;}.cls-3 {fill: #99cc6e;}.cls-4 {fill: #3b6827;}.cls-5 {fill: #679f43;}.cls-6 {fill: #6eae46;}.cls-7 {fill: #4d3429;}.cls-8 {fill: #b5826d;}"
                }
            </style>
            </defs>
            <polygon
            className="cls-7"
            points="1001.07 1056.15 1019.02 1059.24 1019.02 1028.73 1066.68 997.52 1127 702.93 1049.81 622.34 1007.63 606.52 965.35 566.45 958 564.91 996.67 611.12 1044.12 629.72 1101.69 702.93 1038.42 986.13 994.56 1013.34 1001.07 1056.15"
            />
            <polygon
            className="cls-8"
            points="916.54 556.89 958 564.91 1003.05 610.86 1043.49 624.24 1111.53 702.93 1051.92 992.88 1003.84 1026.24 1001.07 1056.15 966.37 1049.78 946.75 982.29 980.5 975.55 1042.36 703.59 1007.49 640.36 918.68 642.61 916.54 556.89"
            />
            <polygon
            className="cls-4"
            points="966.37 1049.78 979.37 1013.34 1022.12 991.19 1087.35 699.32 1037.37 624.66 983.41 614.46 944.03 562.2 916.54 556.89 962.92 635.63 1021.13 634.78 1051.08 695.52 980.5 975.55 941.69 1001.88 937.37 1045.63 966.37 1049.78"
            />
            <polygon
            className="cls-7"
            points="690.39 135.2 715.62 142.56 709.43 171.8 817.41 428.81 810.66 489.55 866.33 530.04 853.96 571.09 892.2 584.03 882.08 600.9 823.29 580.65 823.29 537.91 774.67 488.98 782.71 430.5 670.42 158.3 690.39 135.2"
            />
            <polygon
            className="cls-8"
            points="645.96 122.26 690.39 135.2 683 165.05 789.85 423.7 782.71 487.86 840.8 535.22 829.22 575.59 884 590.34 884 611.12 782.71 601.46 776.35 542.97 705.49 497.98 720.11 424.62 618.88 150.43 645.96 122.26"
            />
            <polygon
            className="cls-7"
            points="743.17 1066.36 762.15 1066.36 849.68 1013.34 836.26 1014.38 743.17 1066.36"
            />
            <polygon
            className="cls-8"
            points="849.68 1006.53 743.17 1066.36 670.47 1066.36 803.92 986.13 849.68 1006.53"
            />
            <polygon
            className="cls-4"
            points="679.53 1066.31 705.63 1066.35 828.34 1003.11 792.66 994.57 679.53 1066.31"
            />
            <polyline
            className="cls-7"
            points="476.25 905.47 484.62 887.01 433.3 905.71 277.52 981.63 261.77 1023.25 291.58 1077.19 316.88 1077.19 291.58 1026.62 321.73 975.2 476.25 905.47"
            />
            <polyline
            className="cls-8"
            points="462.71 898.41 423.91 866.58 248.1 957.88 227.46 1021 258.48 1077.08 304.79 1077.19 277.52 1026.91 305.64 971.89 462.71 898.41"
            />
            <polygon
            className="cls-4"
            points="135.74 954.58 208.34 1012 208.34 945.64 135.74 954.58"
            />
            <Styled.MapSVGPath
            className="cls-6"
            isActive={isActive}
            activePathIndex={activePathIndex}
            onClick={() => handleClick(0)}
            d="M542.01,762.55l35.06,35.99,58.3-88.86,35.05-21.37-56.42-98.98-48.37-26.99-7.87-78.73-34.87-23.62-41.62,16.87-99.82-53.16c.92,3.69-15.64,4.69-37.07,4.47l-17.2,55.44,44.99,83.23-6.75,87.73,58.49,83.8,48.36,12.79,69.74,11.39Z"
            />
            <polyline
            className="cls-4"
            points="279.93 1077.19 256.15 1026.62 283.83 971.89 450.9 892.25 423.91 866.58 239.27 975.45 227.46 1030.56 258.48 1077.08"
            />
            <Styled.MapSVGPath
            className="cls-2"
            isActive={isActive}
            activePathIndex={activePathIndex}
            onClick={() => handleClick(1)}
            d="M797.33,848.12l-7.31-79.95,7.31-29.81-14.62-35.43-48.36-37.12h-31.49l-19.12,37.12-13.31-14.62-35.05,21.37-58.3,88.86,23.43,56.24,21.37,24.74-27.84,70.02v75.52c0,3.33,1.93,6.36,4.94,7.78l71.5,33.51c2.87,1.35,6.2,1.33,9.06-.04l127.08-61.1,7.59-132.44-16.87-24.65Z"
            />
            <polygon
            className="cls-1"
            points="238.73 1029.26 291.58 1026.62 316.88 1077.19 260.5 1077.08 238.73 1029.26"
            />
            <polygon
            className="cls-1"
            points="321.73 975.2 250.24 967.57 430.49 877.31 476.25 905.47 321.73 975.2"
            />
            <Styled.MapSVGPath
            className="cls-5"
            isActive={isActive}
            activePathIndex={activePathIndex}
            onClick={() => handleClick(2)}
            d="M600.49,854.78l-23.43-56.24-35.06-35.99-69.74-11.39-48.36-12.79-53.99,63.55-55.11-41.62-34.87-4.5v50.61l5.3,151.47,30.42-15.93,111.62-54.62c4.61-2.25,10.01-2.18,14.55.19l106.49,55.56c1.78.93,3.72,1.53,5.71,1.76l40,4.71,27.84-70.02-21.37-24.74Z"
            />
            <Styled.MapSVGPath
            className="cls-2"
            isActive={isActive}
            activePathIndex={activePathIndex}
            onClick={() => handleClick(3)}
            d="M279.93,755.8l34.87,4.5,55.11,41.62,53.99-63.55-58.49-83.8,6.24-81.11c.33-4.33-.59-8.65-2.65-12.47l-41.83-77.39,17.2-55.44c-25.48-.26-57.82-2.24-75.82-3.48-8.66-.59-17.11,2.82-22.94,9.25l-50.37,55.56c-5.59,6.16-8.68,14.18-8.68,22.5v55.96c0,6.29-1.5,12.49-4.36,18.09l-46.5,90.78c-1.52,2.97-2.77,6.07-3.73,9.26l-21.34,71.12-37.16,75.74c-1.62,3.3-1.59,7.18.07,10.46l51.82,102.05c2.16,4.25,5.86,7.52,10.35,9.13l58.58,21.03c2.99,1.07,5.07,3.8,5.32,6.97l5.76,73.08c.18,2.32,1.74,4.3,3.94,5.04l49.14,16.38c1.73.58,3.31-1.2,2.54-2.85l-18.91-40.53c-1.7-3.64-1.82-7.82-.34-11.55l18.65-47.09c1.35-3.4,3.87-6.2,7.11-7.9l17.71-9.28-5.3-151.47v-50.61Z"
            />
            <polygon
            className="cls-4"
            points="666.83 128.34 656.28 158.58 767.64 424.62 757.51 492.64 814.2 539.88 798.5 579.64 824.72 590.35 877.2 595.82 807.28 611.12 754.98 577.84 781.31 550.53 705.21 488.42 720.11 424.62 618.88 150.43 645.96 122.26 666.83 128.34"
            />
            <polygon
            className="cls-1"
            points="709.43 171.8 629.85 151.83 646.58 122.43 715.62 142.56 709.43 171.8"
            />
            <polygon
            className="cls-1"
            points="817.41 428.81 810.66 489.55 718.43 496.86 740.81 423.7 817.41 428.81"
            />
            <Styled.MapSVGPath
            className="cls-5"
            isActive={isActive}
            activePathIndex={activePathIndex}
            onClick={() => handleClick(4)}
            d="M522.89,459.98l34.87,23.62,8.16-85.48,37.96,11.25,21.37,18,37.12-5.62,38.24,19.12h37.91l2.3-17.16-105.46-264.19c-.53-1.33-.51-2.83.06-4.15l12.81-29.66c.7-1.63-.49-3.44-2.26-3.44h-65.33c-2.11,0-3.98,1.38-4.61,3.4l-15.68,50.66c-.92,2.97-3.18,5.33-6.11,6.36l-110.12,38.96c-2.57.91-5.43-.16-6.77-2.54l-5.73-10.19-2.39-13.96c-.47-2.76-3.57-4.19-5.98-2.76l-19.68,11.65c-1.83,1.08-3.11,2.9-3.51,4.99l-8.14,42.11c-.52,2.69-1.86,5.16-3.84,7.06l-11.82,11.33c-1.78,1.71-4.43,2.16-6.68,1.13l-32.17-14.71c-1.54-.7-3.27.53-3.09,2.21,1.43,13.5,6.89,60.41,17.61,98.56,10.37,36.91,28.39,62.63,29.53,67.19l99.82,53.16,41.62-16.87Z"
            />
            <polygon
            className="cls-1"
            points="866.33 530.04 853.96 571.09 771.85 583.75 793.12 544.88 866.33 530.04"
            />
            <Styled.MapSVGPath
            className="cls-3"
            isActive={isActive}
            activePathIndex={activePathIndex}
            onClick={() => handleClick(5)}
            d="M702.85,665.82h31.49l48.36,37.12,39.37-25.87-19.12-44.99,20.33-36.25h-1.5l-35.14-12.91c-2.28-.84-3.63-3.2-3.2-5.59l9.67-32.44c.48-2.63-1.07-5.2-3.61-6.02l-54.34-38.36c-2.6-.83-4.22-3.4-3.86-6.1l7.19-53.54h-37.91l-38.24-19.12-37.12,5.62-21.37-18-37.96-11.25-8.16,85.48,7.87,78.73,48.37,26.99,56.42,98.98,13.31,14.62,19.12-37.12Z"
            />
            <polygon
            className="cls-1"
            points="1007.63 606.52 960.37 618.79 916.54 556.89 965.35 566.45 1007.63 606.52"
            />
            <polygon
            className="cls-1"
            points="1049.81 622.34 1011.99 622.34 1060.04 695.32 1127 702.93 1049.81 622.34"
            />
            <polygon
            className="cls-1"
            points="1066.68 997.52 989.5 980.51 945.07 1010.32 1019.02 1028.73 1066.68 997.52"
            />
            <Styled.MapSVGPath
            className="cls-6"
            isActive={isActive}
            activePathIndex={activePathIndex}
            onClick={() => handleClick(6)}
            d="M1019.39,622.34h-52.49c-2.64,0-5.1-1.34-6.54-3.55l-37.72-58.18c-1.36-2.1-3.61-3.47-6.11-3.72l-20.71-2.03c-2.29-.23-4.39,1.3-4.89,3.56l-6.95,31.93c-.7,3.2-3.53,5.48-6.8,5.48h-53.91l-20.33,36.25,19.12,44.99-39.37,25.87,14.62,35.43-7.31,29.81,7.31,79.95,16.87,24.65-7.59,132.44,130.76,40.42c4.67,1.44,9.64-1.14,11.14-5.79l9.05-28.04c1.21-3.76,3.81-6.93,7.26-8.86l25.98-14.54c3.58-2,6.13-5.44,7-9.44l62.24-283.64c.55-2.52.18-5.16-1.05-7.43l-33.66-62.01c-1.18-2.17-3.46-3.53-5.93-3.53Z"
            />
        </Styled.MapSVG>
    );
}
