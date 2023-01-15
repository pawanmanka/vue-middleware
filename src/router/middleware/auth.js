import store from "../../store/index";
export default function auth ({ next}){
    if(!store.getters.isAuth){
        alert("Please Login First..");
        return next('/login')
    }
   
    return next()
   }