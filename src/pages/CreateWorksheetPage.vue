<template>
  <section>
    {{ $store.getters.currentQuestionType }}
    <div class="column is-one-third">
      <SideBar/>
    </div>
    <div class="class column">
      <Worksheet/>
    </div>
  </section>
</template>
<script>
import SideBar from '@/components/SideBar';
import Worksheet from '@/components/Worksheet';

export default {
  components: {
    SideBar,
    Worksheet,
  },
  data() {
    return {
      loading: false,
      error: false,
    };
  },
  created() {
    if (this.$route.params.questionId) {
      const { questionId } = this.$route.params;
      // TODO fetch question by id from api and commit result to state
      try {
        this.loading = true;
        const question = (this.$api.get(`questions/${questionId}`)).data;
        this.$store.dispatch('setCurrentQuestion', question);
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.error = true;
      }
    } else if (this.$route.query.type) {
      // initialize question state for new question
      const { type } = this.$route.query;
      console.log(this.$route.query);
      this.$store.commit('initializeQuestion', { type });
    }
  },
};
</script>
