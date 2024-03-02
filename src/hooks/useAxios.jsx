import { useState } from "react";
import axios from 'axios';
import {v1 as uuid} from "uuid";

const useAxios = (baseURL) => {
    //return an array with 2 elements: 1) an array of data from previous AJAX requests; 2) a function to add a new object of data to the array (state)
    const [state, setState] = useState([])
    
    const getResponse = async (args=[]) => {
        const urlArgs = args.join("/");
        console.log('making request to',baseURL,urlArgs)
        
        const res = await axios.get(`${baseURL}${urlArgs}`)
        console.log('made request', res)
        setState(state => [...state,{...res,id:uuid()}])
        // return res
    }
    return [state, getResponse]
}

export default useAxios
