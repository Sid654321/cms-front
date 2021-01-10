import axiosInstance from "@/api/axiosInstance";


export function create(channel) {
    return axiosInstance.post('channel/create',channel)
}

export function del(id) {
    return axiosInstance.post('channel/delete?id='+id)
}

export function update(channel) {
    return axiosInstance.post('channel/update',channel)
}

export function query(channel) {
    return axiosInstance.post('channel/query',channel)
}

export function detail(id) {
    return axiosInstance.post('channel/detail?id='+id)
}
export function upload(fromData) {
    return axiosInstance.post('uploadFile', fromData)
}
export function tree() {
    return axiosInstance.post('channel/tree')
}
