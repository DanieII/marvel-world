export type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: {
      name: string;
    }[];
  };
  series: {
    items: {
      name: string;
    }[];
  };
  stories: {
    items: {
      name: string;
    }[];
  };
  events: {
    items: {
      name: string;
    }[];
  };
};
