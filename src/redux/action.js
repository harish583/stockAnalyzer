import store from "./store";

const updateStore =(type,payload)=>{
    store.dispatch({type, payload});
}
const getData =(callback)=>{
    // if(localStorage.time){
    //     callback(JSON.parse(localStorage.data));
    //     return;
    // }
    fetch("https://growwlabwebapi.azurewebsites.net/api/stocks/GetNifty100Data/5d")
    .then((data)=> data.json())
    .then(data => {updateStore("add",data); localStorage.data = JSON.stringify(data); localStorage.time= Date.now(); callback(data)})
}
export default getData;