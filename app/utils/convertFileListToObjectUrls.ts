export const convertFileListToObjectUrls = (images: FileList) => {
  return Array.from(images).map((image) => URL.createObjectURL(image));
};
