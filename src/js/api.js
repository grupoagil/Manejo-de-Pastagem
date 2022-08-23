import Framework7 from 'framework7/bundle';
let $f7 = Framework7;

var api = {
    base:"http://localhost:8000/api",
    auth:{
        login:($json={})=>{
           // Login User 
           var promessa = new Promise((resolve,reject)=>{
                $f7.request.postJSON(api.base+'/login',$json)
                .then(function (res) {
                    resolve(res.data);
                })
                .catch(function (err) {
                    reject(err);
                });
            });
            return promessa;
        },
        register:($json={})=>{
            // Register User
            var promessa = new Promise((resolve,reject)=>{
                $f7.request.postJSON(api.base+'/register',$json)
                .then(function (res) {
                    resolve(res.data);
                })
                .catch(function (err) {
                    reject(err);
                });
            });
            return promessa;
        }
    }
};

export default api;