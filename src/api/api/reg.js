import request from '../request';
// 创建管理员
export function userAddJG(data) {
  return request({
    url: '/user/addJG',
    method: 'post',
    data
  });
};
export function userAddJL(data) {
  return request({
    url: '/user/addJL',
    method: 'post',
    data
  });
};
export function userAddQY(data) {
  return request({
    url: '/user/addQL',
    method: 'post',
    data
  });
};