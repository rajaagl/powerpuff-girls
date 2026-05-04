interface Serie {
  id: number;
  name: string;
  image: { medium: string } | null;
  summary: string;
}

interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: { medium: string } | null;
  summary: string;
}
export type { Serie, Episode };