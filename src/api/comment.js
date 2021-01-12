import axiosInstance from "@/api/axiosInstance";


export function create(comment) {
    return axiosInstance.post('comment/create',comment)
}

export function del(id) {
    return axiosInstance.post('comment/delete?id='+id)
}

export function update(comment) {
    return axiosInstance.post('comment/update',comment)
}

export function query(comment) {
    return axiosInstance.post('comment/query',comment)
}

export function detail(id) {
    return axiosInstance.post('comment/detail?id='+id)
}
export function upload(fromData) {
    return axiosInstance.post('uploadFile', fromData)
}
export function tree() {
    return axiosInstance.post('comment/tree')
}
