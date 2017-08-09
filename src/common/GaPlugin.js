import axios from 'axios'
export default  class {

    constructor() {

    }

    // INTERFACE = " http://www.guoanfamily.com/order/";
    //测试环境
   
    INTERFACE = " http://192.168.1.104:8090/order/";
  
    IMAGE_PATH = "http://Img.guoanfamily.com/";
    // UPLOAD_IMAGE = `http://172.16.4.12:8082/agenthouseWeb/CommonController/uploadFile`;

    install(Vue, options) {
        this.installExtendsFunction();

        this.installPrototype(Vue);

        this.installFilter(Vue);
    }

    /*------------------安装扩展方法------------------*/
    installExtendsFunction() {
        /**
         * 扩展时间对象，增加Format方法
         */
        (function() {
            /*对Date的扩展，将 Date 转化为指定格式的String
             月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
             年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
             例子：
             (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
             (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
             支持时间格式化*/
            Date.prototype.Format = function(fmt) { //author: meizz
                let o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (let k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        }())
    }

    /*------------------添加vue过滤器------------------*/
    installFilter(Vue) {
        /**
         * 格式化日期的过滤器
         * (yyyy-MM-dd)
         */
        Vue.filter('date-filter', function(time) {
            return new Date(time).Format("yyyy-MM-dd");
        });

        /**
         * 格式化日期+时间的过滤器
         * (yyyy-MM-dd hh:mm)
         */
        Vue.filter('date-time-filter', function(time) {
            return new Date(time).Format("yyyy-MM-dd hh:mm");
        });
    }

    /*------------------添加vue实例方法------------------*/
    installPrototype(Vue) {

        
        /**
         * get请求
         * @param url
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.get = url => {
            let token = localStorage.getItem(token);
            

            return fetch(this.INTERFACE + url, {
                method: 'get',
                headers: { "Content-Type": "application/json", "token": token },
            }).then(function(response) {
                return response.json();
            }).then(function(res) {
                console.info(url + "：", JSON.parse(JSON.stringify(res)));
                return res;
            }).catch(function(e) {
                console.error(e);
            })
        };

        /**
         * post请求
         * @param url
         * @param data
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.post = (url, data = {}) => {
            let token = localStorage.getItem('token');

            return fetch(this.INTERFACE + url, {
                method: 'post',
                headers: { "Content-Type": "application/json","token":"token"},
                body: JSON.stringify(data),
            }).then(function(response) {
                return response.json();
            }).then(function(res) {
                console.info(url + "：", data, JSON.parse(JSON.stringify(res)));
                return res;
            }).catch(function(e) {
                console.error(e);
            })
        };

      
  
    }
}