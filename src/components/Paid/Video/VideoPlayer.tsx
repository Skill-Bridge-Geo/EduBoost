import { useRef } from "react";

interface Props {
  currentVideo: string;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return hrs > 0
    ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
    : `${pad(mins)}:${pad(secs)}`;
}

export default function VideoPlayer({
  currentVideo,
  setTimeLeft,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div>
      <video
        ref={videoRef}
        src={currentVideo}
        controls
        onLoadedMetadata={(e) => {
          const duration = Math.floor(e.currentTarget.duration);
          setTimeLeft(duration);
        }}
        onTimeUpdate={(e) => {
          const duration = Math.floor(e.currentTarget.duration);
          const current = Math.floor(e.currentTarget.currentTime);
          setTimeLeft(Math.max(duration - current, 0));
        }}
        style={{ display: "block", width: "100%", maxWidth: "800px" }}
      />
    </div>
  );
}
