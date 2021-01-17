<template>
  <div class="block">
      <b-radio v-for="type in supportedQuestionTypes" :key="type.name" v-model="selectedType"
          name="name"
          :native-value="type.type">
          {{ type.name }}
      </b-radio>
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
      ]
    };
  },
  created() {
    this.selectedType = this.type;
  }
}
</script>]
