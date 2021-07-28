import { createGlobalStyle } from 'styled-components';

import RighteousWoff from './Righteous/righteous-v9-latin-regular.woff';
import RighteousWoff2 from './Righteous/righteous-v9-latin-regular.woff2';

import SpecialElite from './SpecialElite/special-elite-v11-latin-regular.woff';
import SpecialElite2 from './SpecialElite/special-elite-v11-latin-regular.woff2';

const FontStyles = createGlobalStyle `

@font-face {
    font-family: 'Righteous';
    src: url(${RighteousWoff}) format('woff'),
        url(${RighteousWoff2}) format('woff2');
}

@font-face {
    font-family: 'Special Elite';
    src: url(${SpecialElite}) format('woff'),
        url(${SpecialElite2}) format('woff2');
}


`;

export default FontStyles;