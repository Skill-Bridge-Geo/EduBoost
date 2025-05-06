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
  title: string;
  duration: string;
  status: "completed" | "playing" | "locked";
  url: string;
};

export type Chapter = {
  title: string;
  videosCount: number;
  duration: string;
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
