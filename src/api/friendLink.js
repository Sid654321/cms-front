import axiosInstance from "@/api/axiosInstance";


export function create(friendLink) {
    return axiosInstance.post('friendLink/create',friendLink)
}

export function del(id) {
    return axiosInstance.post('friendLink/delete?id='+id)
}

export function update(friendLink) {
    return axiosInstance.post('friendLink/update',friendLink)
}

export function query(friendLink) {
    return axiosInstance.post('friendLink/query',friendLink)
}

export function detail(id) {
    return axiosInstance.post('friendLink/detail?id='+id)
}
export function upload(fromData) {
    return axiosInstance.post('uploadFile', fromData)
}
export function tree() {
    return axiosInstance.post('friendLink/tree')
}
