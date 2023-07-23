import axios from 'axios';
import React,{useEffect,useState} from 'react';

let Bookslist=({apidt,setapidt})=>{
console.log("first")
console.log(apidt)
  console.log("bookscomp")

    if(apidt.length===0) { 
      console.log("times")
  async function loadApi() {
        let api1data = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
        let api2data = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
        let itemsarray1=api1data.data.items;
        let itemsarray2=api2data.data.items;
        setapidt([...itemsarray1,...itemsarray2])
      } 
      loadApi(); }


    return (
          <div className="books-container d-flex justify-content-center">
            <div className='bookswrap d-flex'>
          { apidt && apidt.map((element,index)=>{  {console.log(element)} return (<img key={index} className="books" src={element.volumeInfo.imageLinks.thumbnail}/>);} ) }
        </div>
        </div>
    )
    
}

export default Bookslist;