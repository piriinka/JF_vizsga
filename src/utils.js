import axios from 'axios'
export const getData=async (url,callback,id=null)=>{
    const response =await axios.get(url)
    if(!id)
        callback(response.data)
    else{
        const products=response.data
        let singleProduct=products.filter(obj=>obj.id==id)
        callback(singleProduct[0])
    }
}