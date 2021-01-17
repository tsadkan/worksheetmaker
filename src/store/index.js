import Vue from 'vue';
import Vuex from 'vuex';

import generateQuestion from '@/utils/generateQuestion';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentQuestion: '',
  },
  mutations: {
    initializeQuestion(state, data) {
      state.currentQuestion = generateQuestion(data.type);
    },
    set_question(state, question) {
      state.currentQuestion = question;
    },
    add_question(state, question) {
      const { currentQuestion } = state;
      alert("dadas");
      console.log(question);
      currentQuestion.body.questions.push(question.question);
      console.log(currentQuestion);
      state.currentQuestion = currentQuestion;
    }
  },
  getters: {
    currentQuestion: state => state.currentQuestion,
    currentQuestionType: state => state.currentQuestion.type,
  },
  actions: {
    setQuestion({ commit }, question) {
      commit('set_question', { question });
    },
    addQuestion({ commit }, question) {
      commit('add_question', { question });
    },
  },
  modules: {
  },
});
