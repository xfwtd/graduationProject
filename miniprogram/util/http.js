import {config} from '../config.js'
class HTTP{
    request(params) {
        if(!params.method){
            params.method='GET'
        }
        wx.request({
            url: config.api_base_url+params.url,
            data: params.data,
            method: params.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            header:{
                'content-type':'application/json'
            },
            success: (res)=>{
                // success
                let code = res.statusCode.toString();
                if(code.startsWith('2')){
                    params.success(res.data)
                }else{

                }
            },
            fail: (err)=>{
                // fail
            },
            complete: function() {
                // complete
            }
        })
    }
}

export {
    HTTP
}