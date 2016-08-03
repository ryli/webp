<template>
  <div>
    <x-header>This is the page title.</x-header>
    <br>
    <x-header :left-options="{showBack: false}">do not show Back</x-header>
    <br>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    <br>
    <x-header>with right link<a slot="right">Feedback</a></x-header>
    <br>
    <x-header>long long long long long long long text<a slot="right">Feedback</a></x-header>
    <br>
    <x-header>with left slot<a slot="left">Close</a></x-header>
    <br>
    <x-header style="background-color:#000;">custom background color</x-header>
    <br>
    <x-header :left-options="{showBack: true, preventGoBack: true}" @click="clickBack">custom back event</x-header>
    <br>
    <x-header :right-options="{showMore: true}" @on-click-more="clickMore">custom more event</x-header>

    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>

    <p class="home-content">Home</p>
  </div>
</template>

<script>
import XHeader from 'vux-components/x-header'
import { Actionsheet } from 'vux-components/'

export default {
  name: 'Home',

  components: {
    XHeader,
    Actionsheet,
  },

  data() {
    return {
      menus: {
        menu1: 'Take Photo',
        show1: 'Choose from photos',
      },
      showMenus: false,
    }
  },

  methods: {
    clickBack() {
      console.log(1)
    },
    clickMore() {
      console.log(2)
    },
  },
}
</script>

<style>
.home-content {
  background-color: #59a;
  height: 1000px;
}
</style>
