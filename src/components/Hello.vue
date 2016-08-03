<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-for="(index, item) in list" :src="item.src" @click="$refs.previewer.show(index)" width="100" alt="" class="previewer-img" style="display: none;" />

    <x-button type="primary" @click="$refs.previewer.show(0)">查看图片</x-button>

    <previewer :list="list" :options="options" v-ref:previewer></previewer>

    <pre>
      PhotoSwipe
      this.photoswipe && this.photoswipe.destroy() 报错
      Uncaught TypeError: Cannot read property 'destroy' of null
    </pre>
  </div>
</template>

<script>
import { Previewer, XButton } from 'vux-components'

export default {
  name: 'Hello',

  components: {
    Previewer,
    XButton,
  },

  data () {
    return {
      msg: 'Hello World!',
      list: [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400,
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900,
        },
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
        },
      },
    }
  },
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
