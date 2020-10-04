<template>
  <div>
    <h1>result</h1>
    <div>{{ resultText }}</div>
    <nuxt-link to="/">
      トップへ
    </nuxt-link>
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
