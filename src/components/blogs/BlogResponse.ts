// BlogResponse.ts

export type BlogResponse = {
  success: boolean;
  data: Blog[];
};

export type Blog = {
  id: string;
  createdTime: string; // ISO date string
  fields: {
    Name: string;
    Description: string;
    Content: string;
    Image: BlogImage[];
  };
};

export type BlogImage = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
