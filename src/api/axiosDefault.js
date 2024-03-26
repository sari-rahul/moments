import axios from "axios";
axios.defaults.baseURL = 'https://djangorest-framework-api-b7115ada88d2.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true
