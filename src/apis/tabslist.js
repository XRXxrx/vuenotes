import myaxios from '../utils/tabsrequire'
export const getList = function() {
    return myaxios({
        method: 'get',
        url: '/api/goods'
    })
}