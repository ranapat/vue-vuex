/**
 * Repositories component
 *
 * o Shows repositories
 * o Controlled form inside
 * o Does not receive parameters - uses the store
 * o Handles it's own errors
 * o Reduces the data it has to show
 */

<template>
  <div class="pre-scrollable repositories-wrapper">

    <div class="row">
      <div class="col-md-12" v-if="repositoriesLoading">Repositories loading...</div>
      <div class="col-md-12" v-if="repositoriesLoadError">Repositories loading error : {{ repositoriesLoadError && repositoriesLoadError.response ? repositoriesLoadError.response.data.message : '' }}</div>
    </div>

    <b-table striped hover :items="reduced">

      <template slot="id" slot-scope="data">
        <b-btn size="sm" @click.stop="languages(data)">
          {{data.value}}
        </b-btn>
      </template>

      <template slot="homepage" slot-scope="data">
        <a :href="data.value" target="_blank">
          {{data.value}}
        </a>
      </template>

    </b-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    /**
     * Methods to load languages
     * used to indirectly control the languages
     */
    languages (data) {
      this.loadLanguages(data.item.name)
    },
    /**
     * Maps the needed actions
     */
    ...mapActions([
      'loadRepositories', 'loadLanguages'
    ])
  },
  computed: {
    /**
     * Transforms the data it shall
     * in the format it needs
     */
    reduced () {
      return this.repositories.map((item) => {
        return {
          id: item.id,
          name: item.name,
          private: item.private,
          open_issues: item.open_issues,
          watchers: item.watchers,
          homepage: item.homepage
        }
      })
    },
    /**
     * Maps the needed getters
     */
    ...mapGetters([
      'repositories', 'repositoriesLoading', 'repositoriesLoadError'
    ])
  },
  mounted: function () {
    this.loadRepositories();
  }
}
</script>

<style lang="scss">
.repositories-wrapper {

}
</style>
