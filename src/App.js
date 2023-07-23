import React,{useState} from 'react';
import Bookslist from './Components/Bookslist';
import Navbar from './Components/Navbar';
import axios from 'axios';

let App = () => {

  let [apidt, setapidt] = useState("");

    async function loadApi(searchstring) {
      let name="hello"
      // console.log(`https://www.googleapis.com/books/v1/volumes?q=${searchstring.search}`,typeof searchstring.search)
          let api1data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchstring.search}`);
          let itemsarray1=api1data.data.items;
          console.log(itemsarray1,searchstring);
          setapidt(itemsarray1);
          console.log(apidt,"hello");
        } 

  return (
    <div>
    <Navbar loadApi={loadApi}/>
   <Bookslist apidt={apidt} setapidt={setapidt}/>
   </div>
  )
}

export default App;