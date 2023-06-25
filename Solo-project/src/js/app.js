import { anchorFunction } from './modules/anchor.js'
import { catalogFunction } from './modules/catalog.js'
import { popupFunction } from './modules/popup.js'
import { spoilersFunction } from './modules/spoilers.js'
import { swiperSliders } from './modules/swiper.js'
import * as testWebp from './modules/testWebp.js'

testWebp.isWebp()
swiperSliders()
spoilersFunction()
catalogFunction()
popupFunction()
anchorFunction()
