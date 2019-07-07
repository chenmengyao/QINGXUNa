import request from '../../api/actions'

const state = {

}

const getters = {}

const mutations = {

}

const actions = {
  // 获取线上列表
  fetchOnlineList ({ commit }, data) {
    return request ({
      url: '/course/getTrainShowList',
      methods: 'POST',
      params: data
    })
  },

  // 获取线下列表
  fetchUnderList ({ commit }, data) {
    return request ({
      url: '/course/getTrainInfoList',
      methods: 'POST',
      params: data
    })
  },

  // 获取教案详情
  fetchTrainingDetail ({ commit }, data) {
    return request ({
      url: '/course/get',
      methods: 'POST',
      params: data
    })
  },

  // 获取球员列表
  fetchPlayerList ({ commit }, data) {
    return request ({
      url: '/coach/findList',
      methods: 'POST',
      params: data
    })
  },

  // 获取球队列表
  fetchTeamList ({ commit }, data) {
    return request ({
      url: '/team/getList',
      methods: 'POST',
      params: data
    })
  },

  // 获取课程列表
  fetchCourseList ({ commit }, data) {
    return request ({
      url: '/course/getTeachingList',
      methods: 'POST',
      params: data
    })
  },

  getTeaching ({ commit }, data) {
    return request ({
      url: '/course/getTeaching',
      methods: 'POST',
      params: data
    })
  },

  huoqupingfen ({ commit }, data) {
    return request ({
      url: '/ability/getList',
      methods: 'POST',
      params: data
    })
  },

  // 删除球员
  deletePlayer ({ commit }, data) {
    return request ({
      url: '/mechanism/delListQY',
      methods: 'POST',
      params: data
    })
  },

  // 删除球队
  deleteTeam ({ commit }, data) {
    return request ({
      url: '/team/delete',
      methods: 'POST',
      params: data
    })
  },

    // 上传装备文件
    upLoadApply ({ commit }, data) {
      return request ({
        url: '/coach/addApply',
        methods: 'POST',
        params: data
      })
    },

    // 已购课程图片
    fetchCoursePic ({ commit }, data) {
      return request ({
        url: '/player/getMyCourse',
        methods: 'POST',
        params: data
      })
    },

    // 添加球队
    addTeam ({ commit }, data) {
      return request ({
        url: '/team/add',
        methods: 'POST',
        params: data
      })
    },

    // 获取球队分组下拉框
    fetchSelectList ({ commit }, data) {
      return request ({
        url: '/sysDictType/getTypeList',
        methods: 'POST',
        params: data
      })
    },

    // 获取审核列表
    fetchExamineList ({ commit }, data) {
      return request ({
        url: '/mechanism/typeListQY',
        methods: 'POST',
        params: data
      })
    },

    // 教练审核通过
    onExaminepass ({ commit }, data) {
      return request ({
        url: '/mechanism/updateTypeJL',
        methods: 'POST',
        params: data
      })
    },

    // 教练删除审核记录
    onExamineDelete ({ commit }, data) {
      return request ({
        url: '/mechanism/delListJL',
        methods: 'POST',
        params: data
      })
    },

    // 分组移除球员
    removePlayerfromGroup ({ commit }, data) {
      return request ({
        url: '/sysDictType/removePlayer',
        methods: 'POST',
        params: data
      })
    },

    // 新建分组
    addGroup ({ commit }, data) {
      return request ({
        url: '/sysDictType/addFZ',
        methods: 'POST',
        params: data
      })
    },

    // 获取球员detail
    getPlayerDetail ({ commit }, data) {
      return request ({
        url: '/player/getInfo',
        methods: 'POST',
        params: data
      })
    },

    // 编辑球员资料
    editPlayerInfo ({ commit }, data) {
      return request ({
        url: '/player/editInfo',
        methods: 'POST',
        params: data
      })
    },

    // 我的资料
    fetchMydate ({ commit }, data) {
      return request ({
        url: '/coach/getMyInfo',
        methods: 'POST',
        params: data
      })
    },

    // 新增课程
    addKeCheng ({ commit }, data) {
      return request ({
        url: '/course/addTeaching',
        methods: 'POST',
        params: data
      })
    },

    // 获取课程
    getKeCheng ({ commit }, data) {
      return request ({
        url: '/course/get',
        methods: 'POST',
        params: data
      })
    },

    // 移除课程
    removeKeCheng ({ commit }, data) {
      return request ({
        url: '/course/delTeaching',
        methods: 'POST',
        params: data
      })
    },

    // 考勤列表
    getKaoQinList ({ commit }, data) {
      return request ({
        url: '/checkWork/getList',
        methods: 'POST',
        params: data
      })
    },

    // 缺勤考勤操作
    doKaoQin ({ commit }, data) {
      return request ({
        url: '/checkWork/add',
        methods: 'POST',
        params: data
      })
    },

    // 获取排课
    getPaike ({ commit }, data) {
      return request ({
        url: '/coach/findCoachTimeList',
        methods: 'POST',
        params: data
      })
    },

    // 新增排课
    addPaike ({ commit }, data) {
      return request ({
        url: '/coach/addCoachTime',
        methods: 'POST',
        params: data
      })
    },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}