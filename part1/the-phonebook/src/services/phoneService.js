import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    return axios.get(baseUrl)

}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const delete_el = (x) =>{
  return axios.delete(baseUrl +'/'+ x)
}




export default {getAll, create, delete_el}