import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import CmsLicense from './modules/cms/license';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CmsLicense
  },
  strict: process.env.NODE_ENV !== 'production'
});
