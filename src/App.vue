<template>
  <div class="wrapper">

    <div class="container">
      <router-view transition="fade" transition-mode="out-in" ></router-view>
    </div>

    <div class="footer-tabbar">
      <tabbar>
        <tabbar-item selected link="/hello">
          <img slot="icon" :src="icons">
          <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item show-dot link="/login">
          <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
          <span slot="label">News</span>
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

  data() {
    return {
      authenticating: false,
      icons: 'https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png',
    }
  },

  store,

  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem,
  },

}
</script>

<style>
@import '~vux/dist/vux.css';

/* vue transition */
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

.weui_tabbar_icon img {
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
}
.weui_tabbar_item.weui_bar_item_on .weui_tabbar_icon img {
  filter: initial;
  -webkit-filter: initial;
}

</style>
