import {Platform} from 'react-native';

const FONTS = {
  ...Platform.select({
    ios: {
      MONTSERRAT: 'Montserrat-Regular',
      MONTSERRAT_BOLD: 'Montserrat-Bold',
      MONTSERRAT_SEMI_BOLD: 'Montserrat-SemiBold',
      MONTSERRAT_MEDIUM: 'Montserrat-Medium',
    },
    android: {
      MONTSERRAT: 'MontserratRegular',
      MONTSERRAT_BOLD: 'MontserratBold',
      MONTSERRAT_SEMI_BOLD: 'MontserratSemiBold',
      MONTSERRAT_MEDIUM: 'MontserratMedium',
    },
  }),
};

export default FONTS;
