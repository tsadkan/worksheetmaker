<template>
  <div id="home">
    <div class="columns is-centered">
      <div class="column">
        <h1>Choose Question Type</h1>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-one-fourth" v-for="questionType in supportedQuestionTypes" :key="questionType.name">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ questionType.name }}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options" @click.prevent="$router.push({ name: 'CreateWorksheet', query: { type: questionType.type } })">
              <span class="icon">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>
            </a>
          </header>
        </div>
      </div>
    </div>
  </div>
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
      supportedQuestionTypes: [
        { name: 'Multiple Choice', type: 'MULTIPLE_CHOICE'},
        { name: 'Matching', type: 'MATCHING'},
      ]
    };
  },
};
</script>
<style lang="scss">
#home {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
}
</style>
