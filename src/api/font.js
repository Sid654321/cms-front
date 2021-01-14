import axiosInstance from "./axiosInstance";

/**
 * 按照pos 位置信息查询 栏目列表
 * @param pos
 * @returns {Promise<AxiosResponse<any>>}
 */
export function queryByPos(pos) {
  return axiosInstance.get('f/channel/queryByPos?pos='+pos)
}

/**
 * 获得栏目 by Id
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get(id) {
  return axiosInstance.get('f/channel/get?id='+id)
}

/**
 * 获取所有栏目下的最新文章列表
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getNew() {
  return axiosInstance.get('f/article/getList')
}
/**
 * 获取文章列表 ByChannelId
 * @param channelId
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getArticlesByChannelId(channelId) {
  return axiosInstance.get('f/article/getList?channelId='+channelId)
}

/**
 * 获取前几条数据
 * @param channelId
 * @param top 前几条参数
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getTop(channelId,top) {
  return axiosInstance.get('f/article/getList?channelId='+channelId+"&limit="+top);
}

/**
 * 获取置顶数据列表
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getUp() {
  return axiosInstance.get('f/article/getUp');
}

/**
 * 获取指定文章ById
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getArticle(id) {
  return axiosInstance.get('f/article/get?id='+id);
}