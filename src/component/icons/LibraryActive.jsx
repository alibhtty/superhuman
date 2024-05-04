import * as React from "react";

function SvgLibraryActive(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M368,96H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z M400,144H112a16,16,0,0,1,0-32H400a16,16,0,0,1,0,32Z M419.13,448H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z"
        fill="currentColor"
      />
    </svg>

    /* M311.873 77.46l166.349 373.587-39.111 17.27L272.762 94.73zM64 463.746v-384h42.666v384H64zm106.667 0v-384h42.667v384h-42.666z */
  );
}

export default SvgLibraryActive;
