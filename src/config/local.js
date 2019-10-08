import LocalizedString from 'react-localization'
import {vi} from './locals/vi'
import {en} from './locals/en'
export const locale = new LocalizedString(
    {
        vi: vi,
        en: en
    }
)