/**
 * Store mutations
 */

const types = {
  startLoadingRepositories: 'START_LOADING_REPOSITORIES',
  stopLoadingRepositories: 'STOP_LOADING_REPOSITORIES',
  startLoadingLanguages: 'START_LOADING_LANGUAGES',
  stopLoadingLanguages: 'STOP_LOADING_LANGUAGES',
  populateRepositories: 'POPULATE_REPOSITORIES',
  populateLanguages: 'POPULATE_LANGUAGES',
  setRepositoriesLoadError: 'SET_REPOSITORIES_LOAD_ERROR',
  setLanguagesLoadError: 'SET_LANGUAGES_LOAD_ERROR'
}

const mutations = {
  [types.startLoadingRepositories] (state) {
    state.repositoriesLoading = true
  },
  [types.stopLoadingRepositories] (state) {
    state.repositoriesLoading = false
  },
  [types.startLoadingLanguages] (state) {
    state.languagesLoading = true
  },
  [types.stopLoadingLanguages] (state) {
    state.languagesLoading = false
  },
  [types.populateRepositories] (state, payload) {
    state.repositories = payload
  },
  [types.populateLanguages] (state, payload) {
    state.languages = payload
  },
  [types.setRepositoriesLoadError] (state, payload) {
    state.repositoriesLoadError = payload
  },
  [types.setLanguagesLoadError] (state, payload) {
    state.languagesLoadError = payload
  }
}

export default mutations
export { types }
