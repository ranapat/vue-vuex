/**
 * Store actions
 *
 * o loads data with axios
 * o takes all api endpoints from config
 * o triggers all needed commits
 */

import axios from 'axios'

import api from '../config'
import { types } from './mutations'

const actions = {
  loadRepositories ({ commit }) {
    commit(types.startLoadingRepositories)
    commit(types.populateRepositories, [])
    commit(types.setRepositoriesLoadError, null)

    return new Promise((resolve, reject) => {
      axios.get(api.repositories).then(
        response => {
          commit(types.populateRepositories, response.data)
          commit(types.stopLoadingRepositories)

          resolve()
        }, error => {
        commit(types.stopLoadingRepositories)
        commit(types.setRepositoriesLoadError, error)
      })
    })
  },

  loadLanguages ({ commit }, name) {
    commit(types.startLoadingLanguages)
    commit(types.populateLanguages, [])
    commit(types.setLanguagesLoadError, null)

    return new Promise((resolve, reject) => {
      axios.get(api.languages.replace(':name', name)).then(
        response => {
          commit(types.populateLanguages, response.data)
          commit(types.stopLoadingLanguages)

          resolve()
        }, error => {
        commit(types.stopLoadingLanguages)
        commit(types.setLanguagesLoadError, error)
      })
    })
  }
}

export default actions
