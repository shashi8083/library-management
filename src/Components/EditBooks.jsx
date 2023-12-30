//update books
import { useEffect, useState } from 'react';
import '../styles/EditBooks.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditBooks = () => {
    
    let param = useParams()


    let [title,settitle] = useState("")
    let [pageCount,setpagecount] = useState("")
    let [shortDescription,setshortDescription] = useState("")
    let [longDescription,setlongDescription] = useState("")
    let [thumbnailUrl,setthumbnailurl] = useState("")


    useEffect(()=>{
        axios.get(`http://localhost:3000/books/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            settitle(res.data.title);
            setpagecount(res.data.pageCount)
            setshortDescription(res.data.shortDescription)
            setlongDescription(res.data.longDescription)
            setthumbnailurl(res.data.thumbnailUrl)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    let data = {title,pageCount,shortDescription,longDescription,thumbnailUrl}

    let updateBooks =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:3000/books/${param.id}`,data)
        .then((res)=>{
            console.log(res);
            alert("Data Updated Successfully")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (  
        <div className="editbooks">
           <form action="">
                <label htmlFor="">
                    Title: <input value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" placeholder="Enter the Book Title"/>
                </label>
               <br />

                <label htmlFor="">
                    PageCount: <input value={pageCount} onChange={(e)=>{setpagecount(e.target.value)}} type="number" placeholder="Enter the no of pages" />
                </label>
                <br />

                <label htmlFor="">
                    Short Description: <input value={shortDescription} onChange={(e)=>{setshortDescription(e.target.value)}} type="text" placeholder="Enter the short description" />
                </label>
                <br />

                <label htmlFor="">
                    Long Description: <textarea value={longDescription} onChange={(e)=>{setlongDescription(e.target.value)}} placeholder="Enter the description" cols="30" rows="10"></textarea>
                </label>
                <br />

                <label htmlFor="">
                    Image URL: <input value={thumbnailUrl} onChange={(e)=>{setthumbnailurl(e.target.value)}} type="text" placeholder="Enter the Image Link" />
                </label>
                <br />
        
                <button onClick={updateBooks} >Update Books</button>
            </form>
        </div>
    );
}
 
export default EditBooks;