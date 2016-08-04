<template>
  <div>
    <x-header :right-options="{showMore: true}" :left-options="{showBack: true}" class="page-header primary-header">Hello</x-header>

    <div class="page-content">
      <h1>{{ msg }}</h1>
      <img v-for="(index, item) in list" :src="item.src" @click="$refs.previewer.show(index)" width="100" alt="" class="previewer-img" style="display: none;" />

      <x-button type="primary" @click="$refs.previewer.show(0)">查看图片0</x-button>
      <x-button type="warn" @click="$refs.previewer.show(1)">查看图片1</x-button>

      <previewer :list="list" :options="options" v-ref:previewer></previewer>

      <!-- PhotoSwipe
      this.photoswipe && this.photoswipe.destroy() 报错
      Uncaught TypeError: Cannot read property 'destroy' of null -->
    </div>

  </div>
</template>

<script>
import XHeader from 'vux-components/x-header'
import XButton from 'vux-components/x-button'
import Previewer from 'vux-components/previewer'

export default {
  name: 'Hello',

  components: {
    XHeader,
    Previewer,
    XButton
  },

  data () {
    return {
      msg: 'Hello World!',
      list: [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }
      ],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          const thumbnail = document.querySelectorAll('.previewer-img')[index]
          // get window scroll Y
          const pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          const rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
