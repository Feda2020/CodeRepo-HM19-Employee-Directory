import axios from "axios";
const url = "https://randomuser.me/api/?results=50";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ApiSearch: function () {
        return axios.get(url)
    }
}