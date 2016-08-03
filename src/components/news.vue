<template>
  <div>
    <group>
      <switch :value.sync="show" title="Toggle alert"></switch>
      <switch :value.sync="show1" title="Toggle confirm"></switch>
    </group>

    <alert :show.sync="show" @on-show="onShow" @on-hide="onHide" title="微车提示" button-text="确定">
      <p>网络不给力，请稍后重试~</p>
    </alert>

    <confirm :show.sync="show1" @on-confirm="onConfirm" @on-cancel="onCancel" title="微车提示" confirm-text="确定" cancel-text="取消">
      <p>确定删除内容？</p>
    </confirm>

    <p>News</p>
  </div>
</template>

<script>
import Group from 'vux-components/group'
import Switch from 'vux-components/switch'
import Alert from 'vux-components/alert'
import Confirm from 'vux-components/confirm'

export default {
  name: 'News',

  components: {
    Group,
    Switch,
    Alert,
    Confirm
  },

  data() {
    return {
      show: false,
      show1: false
    }
  },

  methods: {
    onShow() {
      console.log('show')
    },
    onHide() {
      console.log('hide')
    },
    onConfirm() {
      console.log('confirm')
    },
    onCancel() {
      console.log('cancel')
    }
  },
}
</script>
