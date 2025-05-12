// types.d.ts
export type Video = {
  duration: string;
  currentTime: string;
  url: string;
};

export type Review = {
  name: string;
  time: string;
  avatar: string;
  comment: string;
};

export type ChapterVideo = {
  id: number;
  title: string;
  duration: number;
  status: "completed" | "playing" | "locked";
  videoUrl: string;
};

export type Chapter = {
  title: string;
  videosCount: number;
  totalDuration: string;
  videos: ChapterVideo[];
};

export type Course = {
  coverSubtitle: string;
  title: string;
  author: string;
  studioType: string;
  views: number;
  likes: number;
  video: Video;
  description: string;
};

export type CourseData = {
  course: Course;
  reviews: Review[];
  chapters: Chapter[];
};
