import JobDetail from './components/JobDetail.vue';
import JobList from './components/JobList.vue';

export const routes = [
    { name: 'jobList', path: '/joblist', component: JobList },
    { name: 'jobDetail', path: '/jobdetail/:id', component: JobDetail },
    { path: '*', redirect: '/joblist' }
];