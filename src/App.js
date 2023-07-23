import React,{useState} from 'react';
import Bookslist from './Components/Bookslist';
import Navbar from './Components/Navbar';
import axios from 'axios';

let App = () => {

  let [apidt, setapidt] = useState("");

    async function loadApi(searchstring) {
      try {
      let name="hello"
      // console.log(`https://www.googleapis.com/books/v1/volumes?q=${searchstring.search}`,typeof searchstring.search)
          let api1data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchstring.search}`);
          let itemsarray1=api1data.data.items;
          let newarray = itemsarray1.filter((element,index)=>{return element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.thumbnail })
          setapidt(newarray);
      }
      catch {
        alert("Not found.Please try different book name!")
        console.error("Some error occurred")
      }
        } 

  return (
    <div>
    <Navbar loadApi={loadApi}/>
   <Bookslist apidt={apidt} setapidt={setapidt}/>
   </div>
  )
}

export default App;