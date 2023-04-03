const positions = {
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right',
};
const gridAreaFromPositionForDesktop = {
  'top-left': 'tl',
  'top-right': 'tr',
  'bottom-left': 'bl',
  'bottom-right': 'br',
};
const gridAreaFromPositionForMobile = {
  'top-left': 'tr',
  'top-right': 'tr',
  'bottom-left': 'br',
  'bottom-right': 'br',
};
export default positions;
export { gridAreaFromPositionForDesktop, gridAreaFromPositionForMobile };
