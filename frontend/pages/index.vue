<template>
  <div class="container contents">
    <div class="main-contents-wrap">
      <h1 class="title wf-kosugi">
        おみくじ
      </h1>
      <div class="content-wrap">
        <div class="content-btn">
          <button
            class="content-btn-link wf-kosugi"
            @click="showResult"
          >
            おみくじ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateRandomHash } from '@/src/omikuji'

export default {
  methods: {
    showResult () {
      const hash = generateRandomHash()
      this.$router.push(`/result?r=${hash}`)
    },
  },
}
</script>
