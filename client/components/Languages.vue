/**
 * Languages component
 *
 * o Shows languages when selected
 * o Controlled form outside
 * o Does not receive parameters - uses the store
 * o Handles it's own errors
 * o Reduces the data it has to show
 */

<template>
  <div class="pre-scrollable languages-wrapper">

    <div class="row">
      <div class="col-md-12" v-if="languagesLoading">Languages loading...</div>
      <div class="col-md-12" v-if="languagesLoadError">Languages loading error : {{ languagesLoadError && languagesLoadError.response ? languagesLoadError.response.data.message : '' }}</div>
      <div class="col-md-12" v-if="!languagesLoading && !languagesLoadError && reduced.length === 0">No languages specified</div>
    </div>

    <b-table striped hover :items="reduced">
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    /**
     * Transforms the data it shall
     * in the format it needs
     */
    reduced () {
      let result = []
      Object.keys(this.languages).forEach((key) => {
        result.push({
          name: key,
          lines_of_code: this.languages[key]
        })
      })
      return result
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

<style lang="scss">
.languages-wrapper {

}
</style>
