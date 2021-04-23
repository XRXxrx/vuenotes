import myaxios from '../utils/tabrequire'

export const getList = function() {
    return myaxios({
        method: 'get',
        url: '/api/goods'
    })
}