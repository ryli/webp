<template>
  <div>
    <!-- <x-header :right-options="{showMore: true}" class="page-header info-header">Home</x-header> -->
    <x-header :right-options="{showMore: true}" :left-options="{showBack: true}" class="page-header primary-header">Home</x-header>

    <div class="page-content">

      Value: {{ count }}
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
      <button @click="incrementIfOdd"> + if odd </button>
      <button @click="incrementAsync"> + async </button>
      <div>
        <div>Recent History: {{ recentHistory }}</div>
      </div>

      <group>
        <switch title="Normal Usage" :value.sync="show1"></switch>
        <switch title="Show cancel menu" :value.sync="show2"></switch>
        <switch title="menu as tips" :value.sync="show3"></switch>
      </group>
      <actionsheet :show.sync="show1" :menus="menus1" @on-click-menu="click"></actionsheet>
      <actionsheet :show.sync="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
      <actionsheet :show.sync="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
      <toast :show.sync="showSuccess">Deleted~</toast>

  </div>
</template>

<script>
import Actionsheet from 'vux-components/actionsheet'
import Switch from 'vux-components/switch'
import Toast from 'vux-components/toast'
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import XHeader from 'vux-components/x-header'
import { increment, decrement, incrementIfOdd, incrementAsync } from '../vuex/actions'
import { recentHistory } from '../vuex/getters'

export default {
  name: 'Home',

  components: {
    XHeader,
    Actionsheet,
    Cell,
    Switch,
    Toast,
    Group
  },

  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        show1: 'Choose from photos'
      },
      showMenus: false,
      show1: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      },
      show2: false,
      menus2: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      show3: false,
      showSuccess: false,
      menus3: {
        'title.noop': 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
        delete: '<span style="color:red">Delete</span>'
      }
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
    },
    click (key) {
      console.log(key)
    },
    onDelete () {
      this.showSuccess = true
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
