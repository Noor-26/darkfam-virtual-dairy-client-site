import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(function (config) {
    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Adding response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
  
    if(error.response.status === 403 || error.response.status === 401 ){
        localStorage.removeItem('accessToken')
        signOut(auth)
    }
    return Promise.reject(error);
  });

  export default axiosPrivate;