import request from '../../api/actions'

const state = {
  userStatus: null
}

const getters = {}

const mutations = {
  setLoginStatus (state, data) {
    state.userStatus = data || null
  },

  clearLoginStatus (state, data) {
    state.userStatus = null
    sessionStorage.removeItem('statusId')
    sessionStorage.removeItem('headPic')
    sessionStorage.removeItem('nikename')
    sessionStorage.removeItem('id')
  }
}

const actions = {
  logOut ( { commit }, data) {
    return request ({
      url: '/user/logout',
      methods: 'GET'
    })
  },

  passwordReset ( { commit }, data) {
    return request ({
      url: '/user/password',
      methods: 'POST',
      params: data
    })
  },

  // 机构入驻
  addJG ({ commit }, data) {
    return request ({
      url: '/user/addJG',
      methods: 'POST',
      params: data
    })
  },

  // 球员注册
  addQY ({ commit }, data) {
    return request ({
      url: '/user/addQY',
      methods: 'POST',
      params: data
    })
  },

  // 教练注册
  addJL ({ commit }, data) {
    return request ({
      url: '/user/addJL',
      methods: 'POST',
      params: data
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}