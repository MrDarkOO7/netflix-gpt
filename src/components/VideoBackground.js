import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video pointer-events-none"
        src={
          `https://www.youtube.com/embed/${trailerVideo?.key}` +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=" +
          trailerVideo?.key +
          "&showinfo=0&iv_load_policy=3&disablekb=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;