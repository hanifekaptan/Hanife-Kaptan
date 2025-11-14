export const getAssetUrl = (name: string, folder: string): string => {
  return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
};