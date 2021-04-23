import myaxios from '../utils/mamagersRequire'

export const loginURL = function(data) {
    return myaxios({
        method: "post",
        url: '/login',
        data
    })
}