import axios from "axios";
//import { useState } from "react";

const editDestaqueData = (url,body) => {
    let data = "";
    let urlLink = url

        axios
            .put(urlLink,body)
            .then((response) => {
console.log("res",response)
                data=response.data;
            })
            .catch((error) => {
                console.log("erro", error.response.data)
            });
  
    return data;

}

export default editDestaqueData