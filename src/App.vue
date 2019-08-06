<template>
  <div id="app">
    {{ licenses }}
    <button @click="handleClickFetch">Fetch 1</button>
    <button @click="handleClickFetch2">Fetch 2</button>

    <app2></app2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FETCH_LICENSES } from '../src/store/modules/cms/license/type/actions';
import App2 from './App2';

export default {
  name: 'app',
  components: {
    App2
  },
  computed: {
    // getter를 사용하는 방법 #1
    ...mapGetters('CmsLicense', ['licenses']),
    ...mapGetters('CmsLicense', { myList: 'licenses' })
  },
  methods: {
    // actions를 사용하는 방법 #1
    ...mapActions('CmsLicense', {
      fetchLicenses: FETCH_LICENSES
    }),
    handleClickFetch() {
      this.fetchLicenses({ text: 'fetch - 1' });
    },
    handleClickFetch2() {
      this.$store.dispatch(`CmsLicense/${FETCH_LICENSES}`, {
        text: 'fetch - 2'
      });
    }
  },
  created() {},
  mounted() {
    // getter를 사용하는 방법 #2
    console.log(
      "this.$store.getters['CmsLicense/licenses']",
      this.$store.getters['CmsLicense/licenses']
    );
    console.log('this.licenses', this.licenses);
    console.log('this.myList', this.myList);
  }
  // ...mapActions(LICENSE.STORE.NAMESPACE, {
  //   fetchListData: LICENSE.STORE.ACTION.LIST
  // })
};
</script>

<style>
</style>
