<template>
  <section>
    <b-collapse
        class="card"
        animation="slide">
        <template #trigger="props">
            <div
                class="card-header"
                role="button"
            >
                <p class="card-header-title">
                    Choose question type
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'caret-square-down' : 'caret-square-up'">
                    </b-icon>
                </a>
            </div>
        </template>
        <div class="card-content">
            <div class="content">
                <QuestionChooser :type="currentQuestionType"/>
            </div>
        </div>
      </b-collapse>
    </section>
</template>
<script>
import QuestionChooser from '@/components/QuestionChooser';

export default {
  components: {
    QuestionChooser,
  },
  data() {
    return {
      currentQuestionType: this.$store.getters.currentQuestionType,
    }
  }
}
</script>
