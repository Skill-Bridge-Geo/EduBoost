interface Props {
  currentVideo: string;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const pad = (n: number) => n.toString();

  return hrs > 0
    ? `${pad(hrs)}h ${pad(mins)}m`
    : mins > 1
    ? `${pad(mins)}m`
    : `${pad(secs)}s`;
}

export default function VideoPlayer({
  currentVideo,
  setTimeLeft,
}: Props) {
  return (
    <div>
      <video
        className='video'
        src={currentVideo}
        controls
        autoPlay
        onLoadedMetadata={(e) => {
          const duration = Math.floor(e.currentTarget.duration);
          setTimeLeft(duration);
        }}
        onTimeUpdate={(e) => {
          const duration = Math.floor(e.currentTarget.duration);
          const current = Math.floor(e.currentTarget.currentTime);
          setTimeLeft(Math.max(duration - current, 0));
        }}
      />
    </div>
  );
}
