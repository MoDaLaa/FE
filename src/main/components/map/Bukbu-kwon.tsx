import * as Styled from "../../css/bukbu-kwon.styled";
import { motion } from "framer-motion";
import * as main from "../../css/main.styled";
import TopAppBar from "../TopAppBar";
import DateandAreaInfo from "../DateAreaInfo";

export default function BukbuKwon() {
    return(
        <main.MainContainer>
            <TopAppBar region="북부권" />
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <DateandAreaInfo region="북부권" />
                <Styled.BukbuKwonSVG
                    id="북부권"
                    data-name="북부권"
                    width={390}
                    height={844}
                    viewBox="0 300 390 544"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_2071_173)">
                    <path
                        d="M251.476 501.133H287.621L277.185 486.635L251.476 501.133Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M103.065 325.859H119.055L121.496 336.053L127.005 344.395L113.345 358.425L103.065 332.149V325.859Z"
                        fill="#4E3529"
                    />
                    <path
                        d="M36.3066 373.369L59.53 370.091L74.1986 375.042L67.7265 389.161L36.3066 373.369Z"
                        fill="#4E3529"
                    />
                    <path
                        d="M266.95 274L285.202 276.721L276.088 302.818L357 499.505L353.663 510.747L336.128 511.193L250.177 300.231L266.95 274Z"
                        fill="#4E3529"
                    />
                    <path
                        d="M201.02 543L223.594 540.658L230.447 486.256L207.134 479.363L201.02 543Z"
                        fill="#4E3529"
                    />
                    <path
                        d="M143.869 537.981H176.812L186.979 533.52L174.975 525.424L143.869 537.981Z"
                        fill="#4E3529"
                    />
                    <path
                        d="M52.1845 371.139L70.5931 378.477L62.7549 390.366L36.3066 373.369L52.1845 371.139Z"
                        fill="#B6836D"
                    />
                    <path
                        d="M44.4136 372.276L66.7859 382.113L62.7549 390.366L36.3066 373.369L44.4136 372.276Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M114.599 325.837L117.241 336.7L123.131 345.912L108.776 355.949L103.065 325.859L114.599 325.837Z"
                        fill="#B6836D"
                    />
                    <path
                        d="M109.045 325.859L112.113 337.703L117.98 347.317L115.517 352.113L98.1162 332.417L103.065 325.859H109.045Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M280.387 276.007L270.287 302.328L350.371 498.97L347.034 510.925L336.128 511.193L244.914 296.751L266.951 274L280.387 276.007Z"
                        fill="#B6836D"
                    />
                    <path
                        d="M274.789 275.182L264.957 301.19L343.944 498.657L340.943 511.059L336.128 511.193L250.177 296.35L267.376 274.045L274.789 275.182Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M174.975 525.424L201.043 543L207.134 479.363L235.508 487.728L251.476 501.133L279.223 496.94L307.799 511.171H336.128L337.852 498.39L259.023 301.725C258.62 300.722 258.642 299.629 259.068 298.647L268.652 276.565C269.168 275.361 268.294 274 266.973 274H218.13C216.54 274 215.151 275.026 214.681 276.52L202.969 314.238C202.274 316.447 200.595 318.209 198.4 318.967L116.099 347.964C114.173 348.633 112.046 347.852 111.038 346.068L106.761 338.484L104.969 328.09C104.611 326.038 102.304 324.967 100.512 326.038L85.7991 334.715C84.433 335.518 83.47 336.878 83.1789 338.417L77.0875 369.756C76.7068 371.763 75.699 373.592 74.221 375.02L65.375 383.451C64.0313 384.723 62.0606 385.057 60.381 384.299L36.329 373.347C35.1868 372.812 33.8879 373.749 34.0223 374.998C35.0973 385.057 39.1731 419.965 47.1904 448.359C54.939 475.839 68.3983 494.999 69.2493 498.39L143.869 537.959L174.975 525.401V525.424Z"
                        fill="#67A043"
                    />
                    <path
                        d="M201.02 543L215.734 541.483L222.564 483.936L207.134 479.363L201.02 543Z"
                        fill="#B6836D"
                    />
                    <path
                        d="M201.02 543L209.127 542.175L215.734 481.906L207.134 479.363L201.02 543Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M166.376 537.981L182.142 530.331L174.975 525.424L143.869 537.981H166.376Z"
                        fill="#B6836D"
                    />
                    <path
                        d="M143.869 537.981H156.612L178.917 528.123L174.975 525.424L143.869 537.981Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M202.969 314.238L215.756 389.161L211.815 423.467L207.157 479.363L235.531 487.728L251.498 501.133L279.245 496.94L307.821 511.171H336.151L337.875 498.39L259.023 301.725C259.023 301.725 258.082 300.922 259.068 298.647L268.653 276.565C268.653 276.565 269.459 274.602 267.376 274.045H217.749C217.749 274.045 215.756 273.955 214.681 276.52L202.969 314.238Z"
                        fill="#6EAF46"
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0_2071_173">
                        <rect
                        width={323}
                        height={269}
                        fill="white"
                        transform="translate(34 274)"
                        />
                    </clipPath>
                    </defs>
                </Styled.BukbuKwonSVG>
                <main.ExplainContainer>구경하고 싶은 지역을 클릭해 주세요</main.ExplainContainer>
            </motion.div>
        </main.MainContainer>      
    );    
}
