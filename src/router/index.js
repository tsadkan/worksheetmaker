import Vue from 'vue';
import Router from 'vue-router';
import Worksheets from '@/pages/WorksheetPage';
import CreateWorksheet from '@/pages/CreateWorksheetPage';
import home from '@/pages/HomePage';

Vue.use(Router);


// application routes
const routes = [
  { name: 'Home', path: '/', component: home },
  {
    name: 'CreateWorksheet', path: '/create-worksheet', component: CreateWorksheet,
    children: [
      {
        name: 'EditWorkSheet',
        path: ':questionId',
        component: CreateWorksheet,
      },
    ],
  },
  { name: 'Worksheets', path: '/work-sheets', component: Worksheets },
];

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active',
});
