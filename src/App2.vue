<template>
  <div id="app"></div>
</template>

<script>
// getter를 사용하는 방법 #3
import { createNamespacedHelpers } from 'vuex';
import { FETCH_LICENSES } from '@/store/modules/cms/license/type/actions';
const { mapGetters, mapActions } = createNamespacedHelpers('CmsLicense');

export default {
  name: 'app',
  components: {},
  computed: {
    ...mapGetters(['licenses'])
  },
  methods: {
    ...mapActions([FETCH_LICENSES])
  },
  mounted() {
    console.log('App2', this.licenses);
  }
};
</script>

<style>
</style>
