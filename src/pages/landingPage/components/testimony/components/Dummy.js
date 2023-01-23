const Dummy = () => {
  return <></>;
};

export const RatingIcon = () => {
  return (
    <svg
      width="80"
      height="16"
      viewBox="0 0 80 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
        fill="#F9CC00"
      />
      <path
        d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
        fill="#F9CC00"
      />
      <path
        d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
        fill="#F9CC00"
      />
      <path
        d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
        fill="#F9CC00"
      />
      <path
        d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
        fill="#F9CC00"
      />
    </svg>
  );
};

export const PrevButton = ({ onClick }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="testimony-slider__prev"
    >
      <circle cx="16" cy="16" r="15.5" fill="white" stroke="#C4C4C4" />
      <path
        d="M18.5 21L13.5 16L18.5 11"
        stroke="#222222"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const NextButton = ({ onClick }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="testimony-slider__next"
    >
      <circle cx="16" cy="16" r="16" fill="#5CB85F" />
      <rect width="20" height="20" transform="translate(6 6)" fill="#5CB85F" />
      <path
        d="M13.5 21L18.5 16L13.5 11"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Dummy;
