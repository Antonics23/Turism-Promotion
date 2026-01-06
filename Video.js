import bcnVideo from "./bcnv.mp4";

function Video() {
  return (
    <section className="hero">
      <video autoPlay loop muted controls>
        <source src={bcnVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Welcome to Barcelona</h2>
    </section>
  );
}

export default Video;