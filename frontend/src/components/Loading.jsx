import loadingGif from "../assets/loadingGif.gif";

const Loading = () => {
  return (
    <img
      src={loadingGif}
      alt="Loading..."
      className="w-60 h-60 object-cover mb-5"
    />
  );
};

export default Loading;
