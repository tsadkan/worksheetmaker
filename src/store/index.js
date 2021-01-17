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
  },
  modules: {
  },
});
