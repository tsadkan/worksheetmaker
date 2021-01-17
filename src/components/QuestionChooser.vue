<template>
  <div class="columns">
      <div class="columns is-full">
        <b-radio v-for="type in supportedQuestionTypes" :key="type.name" v-model="selectedType"
          name="name"
          :native-value="type.type">
          {{ type.name }}
        </b-radio>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedType: null,
      supportedQuestionTypes: [
        { name: 'Multiple Choice', type: 'MULTIPLE_CHOICE'},
        { name: 'Matching', type: 'MATCHING'},
      ]
    };
  },
  created() {
    this.selectedType = this.type;
  }
}
</script>]
