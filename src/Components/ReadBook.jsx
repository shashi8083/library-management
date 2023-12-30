import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/ReadBook.css'
const ReadBook = () => {
    //param is use to take http address of database
    let param = useParams()
    let [data,setdata]= useState("")
    useEffect(()=>{
        axios.get(`http://localhost:3000/books/${param.id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    
    return (
        <div className="ReadBook">
           <div className="image">
           
            <img src={data.thumbnailUrl} alt="" />
           </div>
           <div className="description">
            <h2>{data.title}</h2>
            <b>pageCount:</b><span>{data.pageCount}</span>
            {/* <b>published on:</b><span>{data.publishedDate.date}</span> */}
            <br />
            <br />
            <b>shortDescription:</b><span>{data.shortDescription}</span>
            <br />
            <b>longDescription:</b><span>{data.longDescription}</span>
           </div>
        </div>
      );
}
 
export default ReadBook;