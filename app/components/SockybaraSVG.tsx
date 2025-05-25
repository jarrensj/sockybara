import React from 'react';

interface SockybaraSVGProps {
  frontLeftSockColor: string;
  frontRightSockColor: string;
  backLeftSockColor: string;
  backRightSockColor: string;
  rightEarColor: string;
  leftEarColor: string;
  rightEyeColor: string;
  leftEyeColor: string;
  noseColor: string;
  className?: string;
  width?: number;
  height?: number;
}

const SockybaraSVG: React.FC<SockybaraSVGProps> = ({
  frontLeftSockColor = "white",
  frontRightSockColor = "white",
  backLeftSockColor = "white",
  backRightSockColor = "white",
  rightEarColor = "white",
  leftEarColor = "white",
  rightEyeColor = "black",
  leftEyeColor = "black",
  noseColor = "white",
  className = "",
  width = 300,
  height = 300
}) => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      width={width} 
      height={height} 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect width="400" height="400" fill="#ffffff" /> 
      <g id="sockybara">
        <g id="color">
          <rect x="260" y="265" width="20" height="35" fill={frontLeftSockColor} />
          <rect x="260" y="285" width="33" height="15" fill={frontLeftSockColor} />
          <rect x="210" y="265" width="20" height="35" fill={frontRightSockColor} />
          <rect x="210" y="285" width="33" height="15" fill={frontRightSockColor} />
          <rect x="140" y="265" width="20" height="35" fill={backLeftSockColor} />
          <rect x="140" y="285" width="33" height="15" fill={backLeftSockColor} />
          <rect x="90" y="265" width="20" height="35" fill={backRightSockColor} />
          <rect x="90" y="285" width="33" height="15" fill={backRightSockColor} />
          <rect x="208" y="112" width="17" height="12" fill={rightEarColor} />
          <rect x="256" y="112" width="17" height="12" fill={leftEarColor} />
          <rect x="234" y="144" width="10" height="16" fill={rightEyeColor}/>
          <rect x="280" y="144" width="10" height="16" fill={leftEyeColor} />
          <rect x="257" y="167" width="80" height="65" fill={noseColor}/>
        </g>
        <g id="outlines" fill="none" stroke="#000000" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
          <path d="M 194 174 L 194 125" />
          <path d="M 194 124 L 310 124" />
          <path d="M 310 165 L 310 125" />
          <path d="M 194 175 L 100 175 Q 90 175 90 185 L 90 245" />
          <path d="M 110 245 L 209 245" />
          <path d="M 230 245 L 260 245" />
          <path d="M 90 239 L 90 265" />
          <path d="M 110 247 L 110 265" />
          <path d="M 140 247 L 140 265" />
          <path d="M 160 245 L 160 265" />
          <path d="M 210 245 L 210 265" />
          <path d="M 230 245 L 230 265" />
          <path d="M 260 245 L 260 265" />
          <path d="M 280 235 L 280 265" />
          <path d="M 110 265 L 90 265 L 90 300 L 123 300 L 123 285 L 110 285 Z" />
          <path d="M 160 265 L 140 265 L 140 300 L 173 300 L 173 285 L 160 285 Z" />
          <path d="M 230 265 L 210 265 L 210 300 L 243 300 L 243 285 L 230 285 Z" />
          <path d="M 280 265 L 260 265 L 260 300 L 293 300 L 293 285 L 280 285 Z" />
          <rect x="257" y="167" width="80" height="65" />
          <rect x="208" y="112" width="17" height="12" />
          <rect x="256" y="112" width="17" height="12" />
        </g>
        <g id="nose-details" fill="#000000">
          <circle cx="295" cy="190" r="4" />
          <circle cx="313" cy="190" r="4" />
          <rect x="303" y="206" width="4" height="28" />
        </g>
      </g>
    </svg>
  );
};

export default SockybaraSVG; 