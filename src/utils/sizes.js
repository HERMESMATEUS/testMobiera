import { Dimensions, PixelRatio } from 'react-native';

const DPWidth = 360;
const DPHeight = 706;

export const FontSize = (size) => size * PixelRatio.getFontScale()

export const Height = (dp) => (dp * ((Dimensions.get('window').height) / DPHeight))

export const Width = (dp) => (dp * (Dimensions.get('screen').width / DPWidth))