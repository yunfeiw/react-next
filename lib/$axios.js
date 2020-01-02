import axios from 'axios';
/* ---server端请求方法--- */
const serverAxios = axios.create({
    baseURL: 'https://extension-ms.juejin.im/'
})
/* ---client端请求方法--- */
const clientAxios = axios.create({
    baseURL: '/api/'
})
const $axios = typeof window != 'undefined' ? clientAxios : serverAxios;
export { $axios }