
import {createGlobalStyle} from 'styled-components'

export const IconFontStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 2620921 */
  src: url('//at.alicdn.com/t/font_2620921_ua2zrem2dvr.woff2?t=1624104710395') format('woff2'),
       url('//at.alicdn.com/t/font_2620921_ua2zrem2dvr.woff?t=1624104710395') format('woff'),
       url('//at.alicdn.com/t/font_2620921_ua2zrem2dvr.ttf?t=1624104710395') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before {
  content: "\e6e4";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-mianxingyumaobi:before {
  content: "\e676";
}


`