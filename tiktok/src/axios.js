import axios from "axios";

// creating an instance of axios
const instance=axios.create({
    baseURL:"https://tiktok-backend-mernapp.herokuapp.com/",
});

export default instance;