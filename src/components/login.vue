<template>
  <div class="login-container">

    <group class="auto">
      <x-input placeholder="登录账号"></x-input>
      <x-input placeholder="密码"></x-input>
       <x-input :min="4" :max="4" placeholder="验证码" class="weui_vcode">
        <img slot="right" src="http://weui.github.io/weui/images/vcode.jpg">
      </x-input>
    </group>

    <div class="p15">
      <x-button type="primary" @click="login" class="mt15 mb10">登录</x-button>
      <p class="f12 c9 tac">如登录遇到问题，请联系微车服务人员。</p>
    </div>

    <loading :show="showLoading" :text="loadingText"></loading>
  </div>
</template>

<script>
import Group from 'vux-components/group'
import XInput from 'vux-components/x-input'
import XButton from 'vux-components/x-button'
import Cell from 'vux-components/cell'
import Loading from 'vux-components/loading'

export default {
  name: 'Login',

  components: {
    Group,
    XInput,
    XButton,
    Cell,
    Loading
  },

  data () {
    return {
      user_name: '',
      password: '',
      showLoading: false,
      loadingText: '加载中'
    }
  },

  methods: {
    login () {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
        this.$router.go('/home')
      }, 2000)
    }
  }
}
</script>

<style>
.login-container {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
}
</style>
