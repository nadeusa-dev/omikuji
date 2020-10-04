<template>
  <div class="container contents">
    <div class="main-contents-wrap">
      <h1 class="title wf-kosugi">
        おみくじ結果
      </h1>
      <div class="result-text">{{ resultText }}</div>
      <div class="content-btn">
        <nuxt-link to="/" class="content-btn-link wf-kosugi">
          おみくじを引き直す
        </nuxt-link>
      </div>
    </div>
  </div>

</template>

<script>
import { getResultFromHash } from '@/src/omikuji'

export default {
  computed: {
    resultText () {
      return this.getResultText()
    },
  },

  methods: {
    getResultText () {
      const r = this.$route.query.r

      try {
        return getResultFromHash(r)
      } catch (e) {
        console.error('結果の取得に失敗しました.')
        console.error(e)
        this.$router.push('/')

        return ''
      }
    },
  },
}
</script>
