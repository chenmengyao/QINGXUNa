import request from '../request';
// 关于我们
export function configGetAboutWe(data) {
  return request({
    url: '/config/getAboutWe',
    method: 'post',
    data
  });
};

//商务合作
export function configGetBusinessAffairs(data) {
  return request({
    url: '/config/getBusinessAffairs',
    method: 'post',
    data
  });
};
//赛事信息
export function matchGetList(data) {
  return request({
    url: '/match/getList',
    method: 'post',
    data
  });
};




//青训机构
export function mechanismGetSettledInList(data) {
  return request({
    url: '/mechanism/getSettledInList',
    method: 'post',
    data
  });
};
export function mechanismGet(data) {
  return request({
    url: '/mechanism/get',
    method: 'post',
    data
  });
};