import { useEffect, useState } from "react";
import '../styles/ViewList.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ViewList = () => {
    let [data,setdata] = useState([])
    
//data is side effect

    useEffect(()=>{
        axios.get('http://localhost:3000/books')
     .then((res)=>{
        console.log(res.data);
        setdata(res.data)
     })
     .catch((rej)=>{
        console.log(rej);
     })
    },[data])

    // useEffect(()=>{
    //     let fetchData =async() =>{
    //         let res = await fetch("http://localhost:2000/books")
    //         let result = await res.json() // await is used to remove synchronous
    //         setdata(result)
    //         console.log(result);
    //     }
    //     fetchData()
    // },[data])
    //[]-->initial render -> it will help to display the data only once
    //[data]-->data render -> it will help to render(reload) data for particular side effect

    let deleteData = (id)=>{
        axios.delete(`http://localhost:3000/books/${id}`)
        alert("Data got deleted")
        // fetch(`http://localhost:3000/books/${id}`,{
        //     method:"DELETE"
        // })
    }
    let navigate = useNavigate()
    let readData =(id)=>{
        navigate(`/adminhome/viewlist/${id}`)
        console.log(id);
    }

    let editBook = (id) =>{
        navigate(`/adminhome/editbooks/${id}`)
    }
    return ( 
        <div className="viewlist">
            {
                data.map((x)=>{
                    return(
                        <div className="viewitems">
                            <div className="bookimg">
                                <img src={x.thumbnailUrl} alt="" />
                            </div>
                            <div className="bookdescription">
                                <h2>{x.title}</h2>
                                <p>No of Pages: <b>{x.pageCount}</b></p>
                                <p><b>ShortDescription</b>: {x.shortDescription}</p>
                                <img onClick={()=>{deleteData(x.id)}} src="https://cdn-icons-png.flaticon.com/512/542/542724.png" alt="" />
                               
                                <button onClick={()=>{readData(x.id)}} id="readicon">ReadMore</button>
                                <button onClick={()=>{editBook(x.id)}} id="edit">EditBook</button>
                            </div>
                        </div>

                    )
            })}
        </div>
     );
}
 
export default ViewList;