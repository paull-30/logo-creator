export const isValidHex = (hex: string) => {
  const hexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;
  return hexRegex.test(hex);
};

export const rgbaToHex = (rgba: {
  r: number;
  g: number;
  b: number;
  a: number;
}) => {
  const { r, g, b, a } = rgba;
  const hex = `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}${Math.round(a * 255)
    .toString(16)
    .padStart(2, '0')}`;
  return hex;
};

export const hexToRgba = (hex: string) => {
  const hexWithoutHash = hex.replace('#', '');
  const r = parseInt(hexWithoutHash.substring(0, 2), 16);
  const g = parseInt(hexWithoutHash.substring(2, 4), 16);
  const b = parseInt(hexWithoutHash.substring(4, 6), 16);
  const a =
    hexWithoutHash.length === 8
      ? parseInt(hexWithoutHash.substring(6, 8), 16) / 255
      : 1;
  return { r, g, b, a };
};
