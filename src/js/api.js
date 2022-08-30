import Framework7 from 'framework7/bundle';
import $$ from "dom7";
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
        },
        info:()=>{
            var promisse = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request({
                    url: api.base+'/info', 
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer "+token
                    }
                })
                .then(function (res) {
                    var json = res.data;
                    try {
                        json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao();
                    }
                })
                .catch(function (err) {
                    nao();
                });
            });
            return promisse;
        }
    },
    fazendas:{
        info:()=>{
            var promisse = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request({
                    url: api.base+'/fazendas/lista', 
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer "+token
                    }
                })
                .then(function (res) {
                    var json = res.data;
                    try {
                        json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao();
                    }
                })
                .catch(function (err) {
                    nao();
                });
            });
            return promisse;
        },
        novo:(json={})=>{
            var promessa = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request.setup({
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                $f7.request.postJSON(api.base+'/fazendas/novo',json)
                .then(function (res) {
                    var json = res.data;
                    try {
                        // json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao(error);
                    }
                })
                .catch(function (err) {
                    nao(err);
                });
            });
            return promessa;
        },
        atualiza:(json={},id)=>{
            var promessa = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request.setup({
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                $f7.request.postJSON(api.base+'/fazendas/'+id+'/atualiza',json)
                .then(function (res) {
                    var json = res.data;
                    try {
                        // json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao(error);
                    }
                })
                .catch(function (err) {
                    nao(err);
                });
            });
            return promessa;
        },
        delete:(json={})=>{
            var promessa = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request.setup({
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                $f7.request.postJSON(api.base+'/fazendas/apagar',json)
                .then(function (res) {
                    var json = res.data;
                    try {
                        // json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao(error);
                    }
                })
                .catch(function (err) {
                    nao(err);
                });
            });
            return promessa;
        },
        piquetes:{
            add:(fazenda)=>{
                var promessa = new Promise((sim,nao)=>{
                    var token = localStorage.getItem('token');
                    $f7.request.setup({
                        headers: {
                            'Authorization': 'Bearer '+token
                        }
                    })
                    $f7.request.postJSON(api.base+'/fazendas/'+fazenda+'/piquetes/novo',{})
                    .then(function (res) {
                        var json = res.data;
                        try {
                            // json = JSON.parse(json);
                            if(json.success){
                                sim(json);
                            }else{
                                nao();
                            }
                        } catch (error) {
                            nao(error);
                        }
                    })
                    .catch(function (err) {
                        nao(err);
                    });
                });
                return promessa;
            },
            delete:(json={},fazenda)=>{
                var promessa = new Promise((sim,nao)=>{
                    var token = localStorage.getItem('token');
                    $f7.request.setup({
                        headers: {
                            'Authorization': 'Bearer '+token
                        }
                    })
                    $f7.request.postJSON(api.base+'/fazendas/'+fazenda+'/piquetes/apagar',json)
                    .then(function (res) {
                        var json = res.data;
                        try {
                            // json = JSON.parse(json);
                            if(json.success){
                                sim(json);
                            }else{
                                nao();
                            }
                        } catch (error) {
                            nao(error);
                        }
                    })
                    .catch(function (err) {
                        nao(err);
                    });
                });
                return promessa;
            },
            atualiza:(json={},fazenda)=>{
                var promessa = new Promise((sim,nao)=>{
                    var token = localStorage.getItem('token');
                    $f7.request.setup({
                        headers: {
                            'Authorization': 'Bearer '+token
                        }
                    })
                    $f7.request.postJSON(api.base+'/fazendas/'+fazenda+'/piquetes/atualiza',json)
                    .then(function (res) {
                        var json = res.data;
                        try {
                            // json = JSON.parse(json);
                            if(json.success){
                                sim(json);
                            }else{
                                nao();
                            }
                        } catch (error) {
                            nao(error);
                        }
                    })
                    .catch(function (err) {
                        nao(err);
                    });
                });
                return promessa;
            }
        }        
    },
    pastos:{
        lista:()=>{
            var promisse = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request({
                    url: api.base+'/pastos/lista', 
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer "+token
                    }
                })
                .then(function (res) {
                    var json = res.data;
                    try {
                        json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao();
                    }
                })
                .catch(function (err) {
                    nao();
                });
            });
            return promisse;
        },
        novo:(json={})=>{
            var promessa = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request.setup({
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                $f7.request.postJSON(api.base+'/pastos/novo',json)
                .then(function (res) {
                    var json = res.data;
                    try {
                        // json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao(error);
                    }
                })
                .catch(function (err) {
                    nao(err);
                });
            });
            return promessa;
        },
        apagar:(id)=>{
            var promessa = new Promise((sim,nao)=>{
                var token = localStorage.getItem('token');
                $f7.request.setup({
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                $f7.request.postJSON(api.base+'/pastos/apagar',{
                    "id":id
                })
                .then(function (res) {
                    var json = res.data;
                    try {
                        // json = JSON.parse(json);
                        if(json.success){
                            sim(json);
                        }else{
                            nao();
                        }
                    } catch (error) {
                        nao(error);
                    }
                })
                .catch(function (err) {
                    nao(err);
                });
            });
            return promessa;
        },
        periodos:{
            lista:()=>{
                var promisse = new Promise((sim,nao)=>{
                    var token = localStorage.getItem('token');
                    $f7.request({
                        url: api.base+'/pastos/periodos/lista', 
                        method: 'GET',
                        headers: {
                            Authorization: "Bearer "+token
                        }
                    })
                    .then(function (res) {
                        var json = res.data;
                        try {
                            json = JSON.parse(json);
                            if(json.success){
                                sim(json);
                            }else{
                                nao();
                            }
                        } catch (error) {
                            nao();
                        }
                    })
                    .catch(function (err) {
                        nao();
                    });
                });
                return promisse;
            },
            novo:(json={})=>{
                var promessa = new Promise((sim,nao)=>{
                    var token = localStorage.getItem('token');
                    $f7.request.setup({
                        headers: {
                            'Authorization': 'Bearer '+token
                        }
                    })
                    $f7.request.postJSON(api.base+'/pastos/periodos/novo',json)
                    .then(function (res) {
                        var json = res.data;
                        try {
                            // json = JSON.parse(json);
                            if(json.success){
                                sim(json);
                            }else{
                                nao();
                            }
                        } catch (error) {
                            nao(error);
                        }
                    })
                    .catch(function (err) {
                        nao(err);
                    });
                });
                return promessa;
            },
            apagar:(id)=>{
                var promessa = new Promise((sim,nao)=>{
                    var token = localStorage.getItem('token');
                    $f7.request.setup({
                        headers: {
                            'Authorization': 'Bearer '+token
                        }
                    })
                    $f7.request.postJSON(api.base+'/pastos/periodos/apagar',{
                        "id":id
                    })
                    .then(function (res) {
                        var json = res.data;
                        try {
                            // json = JSON.parse(json);
                            if(json.success){
                                sim(json);
                            }else{
                                nao();
                            }
                        } catch (error) {
                            nao(error);
                        }
                    })
                    .catch(function (err) {
                        nao(err);
                    });
                });
                return promessa;
            }
        }
    },
    pageIsVisible: (id, fn) => {
        if (window.pageIsVisible == null) {
            window.pageIsVisible = false;
        }
        var visivel = false;
        setInterval(() => {
            if (isVisible($$(id)[0]) == true) {
                if (visivel == false) {
                    if (!window.pageIsVisible) {
                        window.pageIsVisible=true;
                        setTimeout(()=>{
                          window.pageIsVisible=false;
                        },1000);
                        // Atualiza página quando estiver visível
                        fn();
                    }
                    visivel = true;
                }
            } else {
                visivel = false;
            }
        }, 500);
    },
};

// Verifica se a tela está visivel
function isVisible(elem) {
    try {
        if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
        const style = getComputedStyle(elem);
        if (style.display === 'none') return false;
        if (style.visibility !== 'visible') return false;
        if (style.opacity < 0.1) return false;
        if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
            elem.getBoundingClientRect().width === 0) {
            return false;
        }
        const elemCenter   = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };
        if (elemCenter.x < 0) return false;
        if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
        if (elemCenter.y < 0) return false;
        if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
        let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
        do {
            if (pointContainer === elem) return true;
        } while (pointContainer = pointContainer.parentNode);
        return false;
    } catch (error) {
        return false;
    }
}



export default api;