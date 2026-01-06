import bcnAudio from "./bcnaudio.mp3";

function AudioPlayer() {
  return (
    <section className="audio">
      <h2>La Ramblas background sound</h2>
      <audio controls>
        <source src={bcnAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}

export default AudioPlayer;