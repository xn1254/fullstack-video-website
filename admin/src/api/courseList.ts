/*
 * @Author: your name
 * @Date: 2020-02-29 15:29:48
 * @LastEditTime: 2020-03-01 19:49:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\aip\courseList.ts
 */
import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

// 请求列表和请求单个详情合并
export const getResourceList = (url: string, id: string = ''): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `${url}/${id}`,
        method: 'GET',
    });
};

export const getResourception = (url: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `${url}/option`,
        method: 'GET',
    });
};

// 新增和编辑请求合并
export const createResource = (url: string, methodName: string, postData: createCourseModel, id: string = ''): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `${url}/${id}`,
        method: methodName,
        data: postData,
    });
};

export const deleteResource = (url: string, id: string): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `${url}/${id}`,
        method: 'DELETE',
    });
};
