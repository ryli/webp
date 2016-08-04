<template>
  <div class="wrapper">

    <div class="container">
      <router-view></router-view>
      <!-- <router-view transition="fade" transition-mode="out-in"></router-view> -->
    </div>

    <div class="footer-tabbar" v-show="showFooterTabbar">
      <tabbar>
        <tabbar-item :selected="$route.path.indexOf('/home') === 0" link="/home">
          <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
          <span slot="label">Home</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path.indexOf('/news') === 0" show-dot link="/news">
          <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
          <span slot="label">News</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path.indexOf('/hello') === 0" link="/hello">
          <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
          <span slot="label">Hello</span>
        </tabbar-item>
        <tabbar-item :selected="$route.path.indexOf('/about') === 0" link="/about">
          <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
          <span slot="label">About</span>
        </tabbar-item>
      </tabbar>
    </div>

  </div>
</template>

<script>
import store from './vuex/store'
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import { Tabbar, TabbarItem } from 'vux-components/tabbar'

export default {
  name: 'app',

  data () {
    return {
      authenticating: false,
      icons: ''
    }
  },

  store,

  computed: {
    showFooterTabbar () {
      const routeList = ['/login']
      const path = this.$route.path
      return routeList.some((item) => {
        return path.indexOf(item) !== 0
      })
    }
  },

  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem
  }

}
</script>

<style lang="less">
@base-green: #36c977;
@base-blue: #37aeee;
@base-gray: #f5f5f5;
@base-info-gray: #555;

.primary-header.primary-header,
.container .weui_btn_primary {
  background-color: @base-green;
}
.vux-header.primary-header .vux-header-left a,
.vux-header.primary-header .vux-header-left button,
.vux-header.primary-header .vux-header-right a,
.vux-header.primary-header .vux-header-right button {
  color: #fff;
}
.vux-header.primary-header .vux-header-left .vux-header-back:before {
  border: 1px solid #fff;
  border-width: 1px 0 0 1px;
}

.info-header.info-header {
  background-color: #fff;
}
.vux-header.info-header .vux-header-title,
.vux-header.info-header h1 {
  color:@base-info-gray;
}
.vux-header.info-header .vux-header-left a,
.vux-header.info-header .vux-header-left button,
.vux-header.info-header .vux-header-right a,
.vux-header.info-header .vux-header-right button {
  color: @base-info-gray;
}
.vux-header.info-header .vux-header-left .vux-header-back:before {
  border: 1px solid @base-info-gray;
  border-width: 1px 0 0 1px;
}

.page-content {
  background-color: @base-gray;
}
</style>

<style>
@import '~vux/dist/vux.css';
@import '//buding-img.b0.upaiyun.com/static/css/lib.css';

/* vue transition */
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

/* vux */
.vux-popup-mask {
  -webkit-tap-highlight-color: transparent;
}

/* vux: tabbar */
.footer-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.weui_tabbar_icon img {
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
}
.weui_tabbar_item.weui_bar_item_on .weui_tabbar_icon img {
  filter: initial;
  -webkit-filter: initial;
}

/* vux: x-header */
.vux-header.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.vux-header.page-header + .page-content {
  margin-top: 56px;
}
.vux-header.page-header .vux-header-title,
.vux-header.page-header h1 {
  height: 50px;
  line-height: 50px;
}
.vux-header.page-header .vux-header-left,
.vux-header.page-header .vux-header-right {
  top: 19px;
}


/* vux: icon */
.weui_icon.icon_md:before {
    font-size: 60px;
}

</style>
