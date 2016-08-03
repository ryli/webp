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

    <div class="home-content">

      Value: {{ count }}
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
      <button @click="incrementIfOdd"> + if odd </button>
      <button @click="incrementAsync"> + async </button>
      <div>
        <div>Recent History: {{ recentHistory }}</div>
      </div>
  </div>
</template>

<script>
import { Actionsheet, XHeader, Cell, Group } from 'vux-components/'
import { increment, decrement, incrementIfOdd, incrementAsync } from '../vuex/actions'
import { recentHistory } from '../vuex/getters'

export default {
  name: 'Home',

  components: {
    XHeader,
    Actionsheet,
    Cell,
    Group
  },

  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        show1: 'Choose from photos'
      },
      showMenus: false
    }
  },

  vuex: {
    getters: {
      count: state => state.count,
      recentHistory
    },
    actions: {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync
    }
  },

  methods: {
    clickBack () {
      console.log(1)
    },
    clickMore () {
      console.log(2)
    }
  }
}
</script>

<style>
.home-content {
  background-color: #ebebeb;
  height: 1000px;
}
</style>
