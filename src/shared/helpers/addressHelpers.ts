export const truncateText = (str, n) =>
  str.length > n ? `${str.substr(0, n - 1)}...` : str

export const cutAddress = (str) => {
  if (str.length > 15) {
    return `${str.substr(0, 6)}...${str.substr(str.length - 4, str.length)}`
  }
  return str
}

export const compareTwoAddress = ({ address1, address2 }: { address1: string, address2: string }): boolean => {
  if (!address1 || !address2) return false;

  return address1.toLowerCase() === address2.toLowerCase();
}
