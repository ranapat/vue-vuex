/**
 * Home view
 *
 * o Defines how home page looks like
 * o Shows initially only repositories, not languages
 * o On repository select shows languages component also
 * o Other than that does not work with any data
 */

<template>
<div class="page">
  <div class="row">
    <div v-bind:class="{ 'col-md-8': showLanguages, 'col-md-12': !showLanguages }">
      <repositories></repositories>
    </div>
    <div class="col-md-4" v-if="showLanguages">
      <languages></languages>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Repositories from '../components/Repositories'
import Languages from '../components/Languages'

export default {
  /**
   * Defines the used components
   */
  components: {
    Repositories,
    Languages
  },
  computed: {
    /**
     * Short-cut to show or not the languages component
     */
    showLanguages () {
      return this.languagesLoading || this.languagesLoadError || this.languages.length !== 0
    },
    /**
     * Maps the needed getters
     */
    ...mapGetters([
      'languages', 'languagesLoading', 'languagesLoadError'
    ])
  }
}
</script>
