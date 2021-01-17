<template>
  <div class="worksheet">
      <div class="columns">
        <div class="column is-half">
          <ol>
            <li v-for="question in currentQuestion.body.questions" :key="question.leftWord">
              {{ question.leftword}}
            </li>
          </ol>
        </div>
        <div class="column is-half">
          <ol>
            <li v-for="question in currentQuestion.body.questions" :key="question.rightWord">
              {{ question.rightWord}}
            </li>
          </ol>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentQuestion: this.$store.getters.currentQuestion,
    }
  }
}
</script>
