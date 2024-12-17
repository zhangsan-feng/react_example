import axios from "axios";


export const HttpServerAddress = "https://wwww.baidu.com"

const instance = axios.create({
    baseURL:HttpServerAddress
})


instance.interceptors.request.use(
    config => {
        config.headers.Authorization =  localStorage.getItem("token")
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {

        if(error.response.status){
            switch(error.response.status) {

                case 401:
                    //返回登录页
                    // message.error("身份验证过期 , 请重新登录")
                    localStorage.clear()
                    localStorage.removeItem('token')
                    window.location.href = '/admin_login';
                    // hashHistory.push('/admin_login')
                    break
                case 403:
                    // message.error("权限不足")
                    //无权限，拒绝访问
                    break
                case 404:
                    //请求地址出错
                    break
                default:
                    console.log(error.response)
                    // message.error("服务异常, 请联系开发人员")
                    //其它错误，直接展示消息error.response.data.message
                    break
            }
            return Promise.reject(error.response);
        }
    }
)

export async function HttpGet(url, params){
    return new Promise((resolve, reject) => {
        instance.get(url,{params:params})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.data)
            })
    })
}

export async function HttpPost(url, params){
    return new Promise((resolve, reject) => {
        instance.post(url,{data:params})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.data)
            })
    })
}
export async function HttpPostForm(url, params){
    return new Promise((resolve, reject) => {
        instance.postForm(url,{data:params})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.data)
            })
    })
}
export async function HttpPostJson(){}
export async function HttpPut(){}
export async function HttpDelete(){}
export async function DownloadFile(){}


