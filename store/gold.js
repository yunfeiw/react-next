import {$axios} from '../lib/$axios';
//Action Type
const GET_GOLD = 'JUEJIN/GET/GOLD'
//ActionCreators
export const getList = list => ({
    type: GET_GOLD,
    list
});
// dispatch
export const getJuejinList = (dispatch, params) => {
    //数据
    return getaxiosGL(params)
        .then(list => {
            dispatch(getList(list));
        }).catch(res => {
            dispatch(getList([]));
        })
}
export const getaxiosGL = (params) => {
    return $axios.post('resources/gold', params)
        .then(res => {
            const list = res.data.data;
            console.log('获取github')
            return list
        })
}
//store
export const initialStategold = {
    list: [],
}
export default (state = initialStategold, action) => {
    switch (action.type) {
        case GET_GOLD:
            return {
                ...state,
                list: action.list
            }
        default:
            return state
    }
}