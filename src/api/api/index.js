import request from '../request';

// 登录
export const userLogin = params => { return request.post(`/user/login`, params).then(res => res); };

// 退出登录
export const accountLogout = (params) => { return request.post(`/user/logout`, params).then(res => res); };

/// 公共调用接口 ///
// 上传图片/视频
export const getChunk = (params,type) => { return request.post(`/file/upload/${type}`, params).then(res => res.data); };

// 分类接口
// 新增保存
export function addClassInfo(data) {
  return request({
    url: '/config/common/addCategory',
    method: 'post',
    data
  });
};

// 删除分类
export function deleteClassInfo(id) {
  return request({
    url: '/config/common/deleteCategory',
    method: 'get',
		params: {
      id: 12345
    }
  });
};

//首页-广告图
export function bannerGetAll(data) {
  return request({
    url: '/banner/getAll',
    method: 'post',
    data
  });
};
//首页-新闻
export function informationGetList(data) {
  return request({
    url: '/information/getList',
    method: 'post',
    data
  });
};

//首页-新闻
export function informationGetOne(data) {
  return request({
    url: '/information/getOne',
    method: 'post',
    data
  });
};