import myaxios from '@/utils/manageRequire'

export const loginURL = function(data) {
    return myaxios({
        method: 'post',
        url: '/login',
        data
    })
}