import state from '@/store/state'

describe('store.state', () => {

  it('check initial values', () => {
    expect(state.repositories).toEqual([])
    expect(state.repositoriesLoading).toEqual(false)
    expect(state.repositoriesLoadError).toEqual(null)
    expect(state.languages).toEqual([])
    expect(state.languagesLoading).toEqual(false)
    expect(state.languagesLoadError).toEqual(null)
  })

})
