<template>
  <section>
    <div class="columns">
      <div class="column is-full">
        <b-field label="Left text">
            <b-input value="" v-model="leftWord" maxlength="30"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <b-field label="Right text">
            <b-input value="" v-model="rightWord" maxlength="30"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-button type="is-primary" @click="addQuestion">Save</b-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      leftWord: '',
      rightWord: ''
    }
  },
  methods: {
    addQuestion() {
      this.$store.dispatch('addQuestion', { leftWord: this.leftWord, rightWord: this.rightWord });
    }
  }
}
</script>
