import {$axios} from '../lib/$axios';
//Action Type
const GET_GITHUB = 'JUEJIN/GET/GITHUB'
//ActionCreators
export const getList = list => ({
    type: GET_GITHUB,
    list
});
// dispatch
export const getJuejinGithubList = (dispatch, params) => {
    console.log(2)
    //数据
    return getaxiosGH(params).then((list) => {
        dispatch(getList(list));
    }).catch(res => {
        dispatch(getList([]));
    })

}
export const getaxiosGH = (params) => {
    return $axios.post('resources/github', params)
        .then(res => {
            const list = res.data.data;
            console.log('获取github')
            return list
        })
}
//store
export const initialStategithub = {
    list: [],
}
export default (state = initialStategithub, action) => {
    switch (action.type) {
        case GET_GITHUB:
            return {
                ...state,
                list: action.list
            }
        default:
            return state
    }
}