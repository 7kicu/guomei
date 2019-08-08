import axios from 'axios'

axios.defaults.baseURL = '../../../static/data/'
// 轮播图
function getCarousel () {
  return axios.get('Carousel.json')
}
// 导航
function getHomeNav () {
  return axios.get('HomeNav.json')
}
// 国美（头条，秒杀）
function getGome () {
  return axios.get('Gome.json')
}
// 优选指南
function getGuide () {
  return axios.get('Homeguide.json')
}
// 合并
function getCategory () {
  return axios.get('category.json')
}

function getHandpick () {
  return axios.get('handpick.json')
}

function getComfortable () {
  return axios.get('comfortable.json')
}

function getCharacteristic () {
  return axios.get('characteristic.json')
}

function getElaborate () {
  return axios.get('elaborate.json')
}

function getGuess () {
  return axios.get('guess.json')
}
// 购物车 王琨
function getCart () {
  return axios.get('cart.json')
}
// 张
function getLeft () {
  return axios.get('itemize/left.json')
}

function getRight () {
  return axios.get('itemize/right.json')
}

function getList () {
  return axios.get('itemize/list.json')
}
// 窦
function getSelAdvert () {
  return axios.get('selAdvert.json')
}

function getSelNav () {
  return axios.get('selNav.json')
}

function getGomePages () {
  return axios.get('gomePages.json')
}

function getPagesCarousel () {
  return axios.get('homePages/pagesCarousel.json')
}

function getPagesCatenav () {
  return axios.get('homePages/pagesCatenav.json')
}

function getPagesRob () {
  return axios.get('homePages/pagesRob.json')
}

function getPagesHot () {
  return axios.get('homePages/pagesHot.json')
}

function getPagesPref () {
  return axios.get('homePages/pagesPref.json')
}

function getAdvert () {
  return axios.get('advert.json')
}

function getPagesBrand () {
  return axios.get('homePages/pagesBrand.json')
}

function getPagesLike () {
  return axios.get('homePages/pagesLike.json')
}
export {
  getCarousel,
  getHomeNav,
  getGome,
  getGuide,
  getCategory,
  getHandpick,
  getComfortable,
  getCharacteristic,
  getElaborate,
  getGuess,
  getCart,
  getLeft,
  getRight,
  getSelAdvert,
  getSelNav,
  getGomePages,
  getList,
  getPagesCarousel,
  getPagesCatenav,
  getPagesRob,
  getPagesHot,
  getPagesPref,
  getAdvert,
  getPagesBrand,
  getPagesLike
}
