import request from '../request';
// 我的资料
export function coachGet(data) {
  return request({
    url: '/coach/get',
    method: 'post',
    data
  });
};

// 查询教练资料
export function getMyInfo(data) {
  return request({
  url: '/coach/getMyInfo',
  method: 'post',
  type:"application/x-www-form-urlencoded;charset=UTF-8",
  data
  });
};

export function getTbility(data) {
  return request({
  url: '/ability/getList',
  method: 'post',
  data
  });
};

export function addResume(data) {
  return request({
  url: '/resume/add',
  method: 'post',
  data
  });
};

export function getResume(data) {
  return request({
  url: '/resume/getList',
  method: 'post',
  data
  });
};