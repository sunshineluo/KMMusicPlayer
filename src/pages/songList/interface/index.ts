export interface Playlist {
  playlists: {
    coverImgUrl: string;
    name: string;
    creator: {
      avatarUrl: string;
      nickname: string;
    };
    description: string;
    tags: string[];
    tracks: Track[];
  };
}
export interface Track {
  id: string;
  title: string;
  singer: string;
  album: string;
  cover: string;
  source: string;
  time: number;
  mv: string;
  Lyric?: {
    lrc?: string;
    tlyric?: string;
  };
}
