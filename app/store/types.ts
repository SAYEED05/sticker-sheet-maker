type ImportFileType = string[] | null;

export interface ImageStore {
  importedImages: ImportFileType;
  setImportedImages: (images: ImportFileType) => void;
  reset: () => void;
}
