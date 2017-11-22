import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import api from '@/config'
import actions from '@/store/actions'

const mock = new MockAdapter(axios)

const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).toEqual(type)
      if (payload) {
        expect(mutation.payload).toEqual(payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  action({ commit, state }, payload)

  if (expectedMutations.length === 0) {
    expect(count).toEqual(0)
    done()
  }
}

describe('actions', () => {
  it('load repositories with success', done => {
    mock.onGet(api.repositories).replyOnce(200, {
      data: [
        { id: 1, name: 'repo' }
      ]
    });

    testAction(actions.loadRepositories, null, {}, [
      { type: 'START_LOADING_REPOSITORIES', payload: undefined },
      { type: 'POPULATE_REPOSITORIES', payload: [] },
      { type: 'SET_REPOSITORIES_LOAD_ERROR', payload: null },
      { type: 'POPULATE_REPOSITORIES', payload: { data: [{ id: 1, name: 'repo' }] } },
      { type: 'STOP_LOADING_REPOSITORIES', payload: undefined }
    ], done)
  })

  it('load repositories with error', done => {
    mock.onGet(api.repositories).replyOnce(404, {})

    testAction(actions.loadRepositories, null, {}, [
      { type: 'START_LOADING_REPOSITORIES', payload: undefined },
      { type: 'POPULATE_REPOSITORIES', payload: [] },
      { type: 'SET_REPOSITORIES_LOAD_ERROR', payload: null },
      { type: 'STOP_LOADING_REPOSITORIES', payload: undefined },
      { type: 'SET_REPOSITORIES_LOAD_ERROR', payload: new Error('Request failed with status code 404') }
    ], done)
  })

  it('load languages with success', done => {
    const name = 'name';
    mock.onGet(api.languages.replace(':name', name)).replyOnce(200, {
      data: {
        c: 1, d: 2
      }
    });

    testAction(actions.loadLanguages, name, {}, [
      { type: 'START_LOADING_LANGUAGES', payload: undefined },
      { type: 'POPULATE_LANGUAGES', payload: [] },
      { type: 'SET_LANGUAGES_LOAD_ERROR', payload: null },
      { type: 'POPULATE_LANGUAGES', payload: { data: { c: 1, d: 2 } } },
      { type: 'STOP_LOADING_LANGUAGES', payload: undefined }
    ], done)
  })

  it('load languages with error', done => {
    const name = 'name';
    mock.onGet(api.languages.replace(':name', name)).replyOnce(404, {})

    testAction(actions.loadLanguages, null, {}, [
      { type: 'START_LOADING_LANGUAGES', payload: undefined },
      { type: 'POPULATE_LANGUAGES', payload: [] },
      { type: 'SET_LANGUAGES_LOAD_ERROR', payload: null },
      { type: 'STOP_LOADING_LANGUAGES', payload: undefined },
      { type: 'SET_LANGUAGES_LOAD_ERROR', payload: new Error('Request failed with status code 404') }
    ], done)
  })

})
