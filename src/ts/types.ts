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
