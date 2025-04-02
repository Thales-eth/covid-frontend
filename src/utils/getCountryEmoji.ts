export const getCountryEmoji = (countryCode: string) => {
  if (!countryCode || countryCode.length !== 2) return "Unknown";

  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
};
