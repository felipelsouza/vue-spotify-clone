import Vue from 'vue';

import Layout from './components/Layout';

import './styles/global.scss';

new Vue({
  el: '#app',
  render: h => h(Layout)
})
