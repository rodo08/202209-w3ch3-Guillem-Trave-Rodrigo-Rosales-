export type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface ComponentStructure {
  domElement: HTMLElement;
  render(): void;
}

export interface Serie {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}
