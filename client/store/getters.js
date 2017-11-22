/**
 * Store getters
 */

const getters = {
  repositories (state) {
    return state.repositories
  },
  repositoriesLoadError (state) {
    return state.repositoriesLoadError
  },
  repositoriesLoading (state) {
    return state.repositoriesLoading
  },

  languages (state) {
    return state.languages
  },
  languagesLoadError (state) {
    return state.languagesLoadError
  },
  languagesLoading (state) {
    return state.languagesLoading
  }

}

export default getters
