<template>
  <div>
    <x-header :right-options="{showMore: true}" class="page-header info-header">About</x-header>

    <div class="page-content">
      <group>
        <switch title="Default popup" :value.sync="show"></switch>
        <switch title="Full popup" :value.sync="show1"></switch>
      </group>

      <popup :show.sync="show">
        <div class="popup0">
          <group>
            <switch title="Another Switcher" :value.sync="show"></switch>
          </group>
        </div>
      </popup>

      <popup :show.sync="show1" height="100%">
        <div class="popup1">
          <group>
            <switch title="Another Switcher" :value.sync="show1"></switch>
          </group>
        </div>
      </popup>

      <x-button type="primary" @click="logout" class="mt15 mb10">退出</x-button>

    </div>
  </div>
</template>

<script>
import XHeader from 'vux-components/x-header'
import Group from 'vux-components/group'
import XButton from 'vux-components/x-button'
import Popup from 'vux-components/popup'
import Switch from 'vux-components/switch'

export default {
  name: 'About',

  components: {
    Group,
    Switch,
    Popup,
    XButton,
    XHeader
  },

  data () {
    return {
      show: false,
      show1: false
    }
  },

  methods: {
    logout () {
      this.$router.go('/login')
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>
