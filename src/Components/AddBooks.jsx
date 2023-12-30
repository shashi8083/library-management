import { useState } from 'react';
import '../styles/AddBooks.css'
import axios from 'axios';
const AddBooks = () => {
    let [title,settitle] = useState("")
    let [pageCount,setpageCount] = useState("")
    let [shortDescription,setshortDescription] = useState("")
    let [longDescription,setlongDescription] = useState("")
    let [thumbnailUrl,setthumbnailUrl] = useState("")

    let data ={title,pageCount,shortDescription,longDescription,thumbnailUrl}
    
    let addbook = (b)=>{
        b.preventDefault();//avoid re-render(re-load)
    //we will add using axios.pst
         axios.post('http://localhost:3000/books',data)
        .then((res)=>{
            console.log(res);
            alert("Data Added Successfully")
        })
        .catch((err)=>{
            console.log(err);
        })

        // fetch('http://localhost:3000/books',{
        //     method:"POST",
        //     headers:{"content-Type":"application/json"},
        //     body:JSON.stringify(data)
        // })
        // alert("Data Added Successfully")
    }
    return ( 
        <div className="addbooks">
            <form action="">
                <label htmlFor="">
                    Title: <input value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" placeholder="Enter the Book Title"/>
                </label>
               <br />

                <label htmlFor="">
                    PageCount: <input value={pageCount} onChange={(e)=>{setpageCount(e.target.value)}} type="number" placeholder="Enter the no of pages" />
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
                    Image URL: <input value={thumbnailUrl} onChange={(e)=>{setthumbnailUrl(e.target.value)}} type="text" placeholder="Enter the Image Link" />
                </label>
                <br />

                <button onClick={addbook}>Add Books</button>
            </form>
        </div>
     );
}
 
export default AddBooks;