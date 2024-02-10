import { CSSProperties } from 'react';

export default function AudioOffIcon({
  Width,
  Style,
  ClassName,
}: {
  Width: number;
  Style?: CSSProperties;
  ClassName?: string;
}) {
  // https://heroicons.com/ | https://www.svgrepo.com
  // style={Style}
  // width={Width}
  // height={Width}
  // className={ClassName}
  return (
    <svg
      style={Style}
      width={Width}
      height={Width}
      className={ClassName}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <circle style={{ fill: '#003375' }} cx="256" cy="256" r="256"></circle>
      <path
        style={{ fill: '#052161' }}
        d="M510.098,288.978l-93.86-93.86c-22.619-25.579-77.582-57.499-135.082-1.269l-27.482-26.424h-68.28 v34.669l-22.197-23.253l-43.97-7.187l-21.351,31.498l51.369,54.117l6.342,49.89l-37.417-38.263l-31.498,43.336l198.5,198.5 c116.902-13.318,209.916-105.064,224.924-221.542v-0.212H510.098z"
      ></path>
      <g>
        <path
          style={{ fill: '#b30000' }}
          d="M348.168,161.083L348.168,161.083v0.211c-45.661,0-85.192,36.783-85.192,85.192 c0,35.938,22.62,68.07,56.443,80.119c9.302,3.171,18.815,4.862,28.75,4.862c45.661,0,85.192-36.783,85.192-85.192 C433.361,198.289,394.253,161.083,348.168,161.083z M411.798,204.42c6.764,10.57,11.204,23.042,12.049,36.36h-15.22 c-0.634-11.627-3.805-22.408-8.456-32.344h-0.211C403.977,207.167,407.993,205.9,411.798,204.42z M405.668,196.175 c-3.594,1.269-7.187,2.325-10.782,3.171c-7.611-11.627-17.969-21.14-30.018-27.904 C380.934,175.247,395.309,183.914,405.668,196.175z M372.267,251.138h27.482c-0.634,9.301-2.96,18.179-6.553,26.424 c-7.399-1.902-15.009-3.171-22.831-4.228C371.422,266.148,372.056,258.749,372.267,251.138z M369.73,214.566 c7.399-0.846,14.586-2.114,21.562-3.805c4.651,9.09,7.611,19.237,8.456,30.018h-27.482 C372.056,231.69,371.21,223.022,369.73,214.566z M385.796,201.46c-5.919,1.269-11.838,2.114-17.969,2.748 c-2.114-9.09-4.651-17.757-8.033-25.79C370.154,183.914,379.032,191.947,385.796,201.46z M359.583,215.201 c1.269,8.244,2.114,16.7,2.325,25.368h-26.424c0.211-8.667,1.057-17.124,2.325-25.156c3.171,0.211,6.342,0.211,9.513,0.211 c4.016,0,8.033-0.212,12.049-0.423v0.001L359.583,215.201L359.583,215.201z M311.386,212.453L311.386,212.453L311.386,212.453 c5.497,1.057,10.993,1.902,16.7,2.537c-1.269,8.244-2.114,16.911-2.537,26.002h-21.773c0.634-10.147,3.382-19.66,7.611-28.327 L311.386,212.453L311.386,212.453z M325.549,251.35L325.549,251.35c0.211,7.399,0.846,14.798,1.902,21.986 c-6.131,0.634-12.049,1.48-17.757,2.748c-3.171-7.611-5.285-16.066-5.919-24.733L325.549,251.35L325.549,251.35z M328.931,283.481 c1.691,8.878,4.228,17.335,7.187,25.156c-8.667-6.131-16.277-14.164-21.773-23.254 C319.207,284.538,324.069,283.904,328.931,283.481z M329.988,204.842c-4.44-0.423-8.878-1.057-13.106-1.691 c5.285-7.61,11.838-14.375,19.448-19.66C333.793,190.255,331.679,197.443,329.988,204.842z M339.714,205.053L339.714,205.053 c0.016,0,0.031,0.001,0.047,0.001c2.114-10.068,5.262-19.509,8.831-28.116c3.593,8.667,6.764,18.18,8.878,28.115 c-3.383,0.211-6.765,0.211-10.147,0.211c-2.521,0-5.042-0.208-7.563-0.21c-0.015,0.071-0.032,0.14-0.047,0.211v-0.212 C339.714,205.053,339.713,205.053,339.714,205.053L339.714,205.053z M336.119,170.597c1.057,0.211,2.325,0.423,3.382,0.634 c-13.106,7.186-24.099,17.545-31.921,30.018c-6.131-1.269-12.049-2.96-17.546-4.862 C301.662,182.857,317.727,173.345,336.119,170.597z M283.904,204.631c5.919,2.325,12.26,4.228,18.815,5.919 c-4.228,9.302-6.976,19.448-7.611,30.23h-23.253C272.7,227.462,277.139,215.2,283.904,204.631z M271.855,251.138h23.253 c0.634,9.302,2.748,18.391,6.131,26.635l-0.212,0.211c-6.764,1.691-13.106,3.805-19.237,6.131 C276.083,274.392,272.489,263.188,271.855,251.138z M335.908,321.532c-19.66-3.17-36.995-13.74-48.621-28.961 c5.708-2.114,11.838-3.805,18.18-5.285c7.822,14.164,19.66,25.79,33.823,33.612C338.233,321.109,336.964,321.321,335.908,321.532z M348.38,314.557c-4.202-9.875-7.358-20.588-9.68-32.134c-0.014,0.001-0.03,0.001-0.044,0.003l0,0h-0.001h0.001v-0.212 c0.014,0.07,0.03,0.139,0.044,0.209c2.735-0.208,5.677-0.208,8.411-0.208c3.594,0,7.399,0.211,10.993,0.211 C355.779,293.84,352.608,304.621,348.38,314.557z M347.112,271.855c-3.383,0-6.765,0-10.147,0.211 c-0.845-6.765-1.48-13.952-1.691-21.139l0,0v-0.001v0.001h26.213c-0.211,7.398-0.634,14.375-1.691,21.351 C355.568,272.066,351.339,271.855,347.112,271.855z M368.885,283.693c6.764,0.634,13.318,1.902,19.448,3.171 c-6.975,10.993-16.911,20.294-28.326,26.424C363.812,303.986,366.771,294.051,368.885,283.693z M365.081,320.475 c13.317-7.399,24.521-18.391,32.132-31.497c3.805,1.057,7.611,2.325,11.204,3.593C397.847,306.311,382.626,316.459,365.081,320.475 z M401.863,279.888c3.805-8.878,6.342-18.602,6.976-28.75h15.22c-0.846,12.048-4.44,23.253-10.147,32.977 C409.896,282.636,405.88,281.156,401.863,279.888z"
        ></path>
        <path
          style={{ fill: '#b30000' }}
          d="M352.397,209.914c21.173,0,38.476,17.303,38.476,38.476s-17.303,38.476-38.476,38.476 s-38.476-17.303-38.476-38.476S331.223,209.914,352.397,209.914z"
        ></path>
      </g>
      <g>
        <path
          style={{ fill: '#F7F7F8' }}
          d="M439.068,370.366l-41.01-71.24c-1.268-1.903-3.805-2.537-5.708-1.48l-1.691,1.057l-6.342-10.782 v0.001h-0.213c9.513-7.61,16.277-18.391,18.391-31.286c4.651-27.481-13.952-53.694-41.645-58.345 c-27.481-4.651-53.694,13.952-58.345,41.645c-4.651,27.481,13.952,53.694,41.645,58.345c9.302,1.48,18.815,0.422,27.059-2.96 l6.342,10.782l-1.691,1.057c-1.903,1.268-2.537,3.805-1.48,5.708l41.011,71.24c1.268,1.903,3.805,2.537,5.708,1.48l16.489-9.513 C439.491,374.806,440.125,372.268,439.068,370.366z M353.25,284.25c-20.227,0-36.625-16.398-36.625-36.625S333.023,211,353.25,211 s36.625,16.398,36.625,36.625S373.477,284.25,353.25,284.25z"
        ></path>
        <path
          style={{ fill: '#F7F7F8' }}
          d="M329.142,241.837L329.142,241.837c-0.211,1.48-1.48,2.325-2.748,2.114 c-1.057-0.211-1.902-1.269-1.902-2.325l0,0c0-0.423,0.211-0.846,0.211-1.48c2.537-15.431,17.335-26.002,32.766-23.464 c0.423,0,0.846,0.211,1.269,0.211h0.211c1.48,0.211,2.325,1.48,2.114,2.96c-0.211,1.269-1.48,2.325-2.96,2.114l0,0l0,0 c-0.423-0.211-1.057-0.211-1.48-0.211c-12.684-2.114-24.944,6.553-27.059,19.237c0,0.211,0,0.423-0.211,0.846h-0.212 L329.142,241.837L329.142,241.837z"
        ></path>
      </g>
      <path
        style={{ fill: '#ff0000' }}
        d="M392.562,297.433l-15.009,8.667l-1.691,1.057c-1.902,1.057-2.537,3.594-1.48,5.708l41.011,71.24 c1.057,1.902,3.594,2.537,5.708,1.48l16.489-9.513c1.902-1.057,2.537-3.594,1.48-5.708l-41.01-71.24 c-1.057-1.902-3.382-2.537-5.285-1.691H392.562z"
      ></path>
      <path
        style={{ fill: '#b30000' }}
        d="M390.447,298.702l1.691-1.057c1.902-1.057,4.44-0.423,5.708,1.48l41.011,71.24 c1.057,1.902,0.423,4.44-1.48,5.708l-8.244,4.862l-44.604-78.85L390.447,298.702z"
      ></path>
      <path
        style={{ fill: '#b30000' }}
        d="M168.905,214.778v-6.342c0-12.684-1.269-21.773-3.805-27.059c-2.537-5.285-7.399-9.724-15.009-13.318 c-7.611-3.382-16.7-5.285-27.693-5.285c-9.935,0-18.18,1.48-25.368,4.862c-6.976,3.171-12.049,7.611-15.22,13.318 s-4.651,14.586-4.651,26.848c0,8.456,1.057,15.432,3.382,20.928c2.114,5.496,5.073,9.724,8.244,12.895 c3.382,3.171,10.147,8.033,20.506,15.009c10.358,6.764,16.7,11.627,19.448,14.586c2.537,2.96,3.805,9.09,3.805,18.391 c0,4.228-0.634,7.399-2.114,9.724c-1.269,2.114-3.382,3.171-6.131,3.171c-2.748,0-4.651-0.846-5.708-2.537 s-1.691-5.496-1.691-11.627v-19.447H78.216v10.569c0,12.049,1.269,21.351,3.594,27.693c2.537,6.553,7.611,11.838,15.431,16.066 s17.335,6.342,28.539,6.342c10.147,0,19.026-1.902,26.635-5.496c7.611-3.594,12.684-8.244,15.431-13.529 c2.748-5.496,4.016-13.74,4.016-25.156c0-15.644-2.325-27.059-7.187-34.035c-4.862-6.976-16.489-16.066-34.88-27.059 c-6.342-3.805-10.358-7.187-11.838-9.724c-1.48-2.748-2.114-6.764-2.114-12.049c0-4.228,0.634-7.187,1.902-9.302 s3.171-3.171,5.708-3.171c2.325,0,4.016,0.846,4.862,2.325c1.057,1.48,1.48,5.073,1.48,10.57v11.838h38.686h0.424L168.905,214.778 L168.905,214.778z M185.605,166.157v160.026h72.297v-31.921H227.25v-35.304h26.002v-30.441H227.25v-30.652h27.693v-31.921h-69.338 V166.157z"
      ></path>
    </svg>
  );
}