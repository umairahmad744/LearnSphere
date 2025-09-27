type VideoPlayerProps = {
  videoUrl: string;
};

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="aspect-video w-full bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
      <iframe
        className="w-full h-full"
        src={videoUrl}
        title="Course video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
