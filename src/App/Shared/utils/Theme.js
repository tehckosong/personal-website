import {font} from '../utils/Style'
import { color } from '../utils/Style'
export const themes = {
    dark: {
        text: color.darkText,
        background:color.darkBg,
        secondary: color.darkSecondary,
        font : font.regular,
        fontsize : font.size(22),
    },
    light: {
        text: color.lightText,
        background:color.lightBg,
        secondary : color.lightSecondary,
        font : font.regular,
        fontsize : font.size(22),
    }
  }