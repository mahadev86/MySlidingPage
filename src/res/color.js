export const hexToRGB = (hex = '#000000', alpha) => {
  if (hex.includes('#')) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  } else {
    const hexSplit = hex.split(',');
    if (hexSplit.length === 4 || hexSplit.length === 3) {
      let color = '';

      color += hexSplit[0];
      color += ',';
      color += hexSplit[1];
      color += ',';
      color += hexSplit[2];
      color += ',';
      color += alpha;
      color += ')';

      return color;
    }
  }
};

const color = {
  // theme primary color
  primaryHex: '#2C8BE9',
  primary: '#2196F3',
  primaryHeader: '#1E84EA',
  secondary: '#000000',
  tertiary: '#8E81A1',
  fontPrimary: '#FFFFFF',
  fontSecondary: '#C26B6A',
  fontTertiary: '#000000',
  gray1: '#999999',
  dimGray: '#FAFAFA',
  dimGray1: '#EEEEEE',

  fontColor1: '#7C7C7C',
  fontColor2: '#838383',
  fontColor3: '#7E7E7E',
  lightPink: '#E0B5B4',
  greenColor: '#3B9166',

  gray2: '#4B4B4B',
  gray3: '#A5A5A5',
  gray4: '#707070',
  gray5: '#F3F3F3',
  gray6: '#B9B9B9',
  gray7: '#979797',
  gray8: '#EFEFEF',
  gray9: '#E8E6EC',

  // generic colors
  white: '#FFFFFF',
  black: '#000000',

  //Useless
  fontColor4: '#6DA06F',
  fontColor5: '#0DA460',
  fontColor6: '#3A3A3A',
  fontColor7: '#32B278',
  // theme secondary color

  // additional theme colors
  blue: '#2196F3',
  redLight: '#FFF0E4',
  red: '#FF0000',
  whiteTrasparent: hexToRGB('#FFFFFF', 0.2),
  transparent: 'transparent',
  yellow: '#FFD900',
  black2: '#333333',
  black3: '#383838',
  black4: '#242424',

  // informative/action colors
  danger: '#E62E2D',
  success: '#28a745',
  warning: '#ffc107',
  info: '#17a2b8',

  colorStartRating: '#FFBB43',
  // gray colors for font and background

  gray10: '#212121',
  gray11: '#F7F7F7',
  gray12: '#010101',
  gray13: '#C5C5C5',
};


export default color;
