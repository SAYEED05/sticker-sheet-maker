type ImportFileType = {
  src: string;
  x: number;
  y: number;
  img: HTMLImageElement | null;
}[];

export interface ImageStore {
  importedImages: ImportFileType;
  setImportedImages: (images: ImportFileType) => void;
  reset: () => void;
}
