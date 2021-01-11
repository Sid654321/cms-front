import axiosInstance from "@/api/axiosInstance";


export function create(article) {
    return axiosInstance.post('article/create',article)
}

export function del(id) {
    return axiosInstance.post('article/delete?id='+id)
}

export function update(article) {
    return axiosInstance.post('article/update',article)
}

export function query(article) {
    return axiosInstance.post('article/query',article)
}

export function detail(id) {
    return axiosInstance.post('article/detail?id='+id)
}
export function upload(fromData) {
    return axiosInstance.post('uploadFile', fromData)
}
export function tree() {
    return axiosInstance.post('article/tree')
}
