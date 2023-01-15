import store from "../../store/index";
export default function auth ({ next}){
    console.log("Director role check");
    if(!store.getters.isAuth._role!="Director"){
        alert("Permission not allowed....!!");
        return next('/login')
    }
   
    return next()
   }