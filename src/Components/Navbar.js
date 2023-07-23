import React,{useState} from "react";
import account from "../images/IMG20210528181544.png"
import logo from "../images/Standard Collection 11.png"
import bell from "../images/ic_round-notifications-none.png"
import diamond from "../images/fluent_premium-person-20-regular.png"
import love from "../images/bx_bx-book-heart.png"

let Navbar = ({loadApi})=> {

  let [search,setSearch] = useState("");
  console.log("navbar")

  function searchfunction(event) {
    event.preventDefault();
   if(search.length!==0) {
      loadApi(search);
   }
  }

  return (
     <nav className="navbar bg-dark border-bottom border-bottom-dark d-flex" data-bs-theme="dark">
          <div style={{color:"white",}}>
            <img src={logo} alt="logo"></img>
              KeazonNBOOKS
          </div>
          <div>
    <form onSubmit={searchfunction} className="d-flex">
      <input className="form-control me-2" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." type="search" aria-label="Search"  onChange={(event)=>{setSearch({search:event.target.value})}}/>
      <button className="btn btn-dark"  style={{borderColor:"grey",}}  type="submit">Search</button>
    </form>
  </div>
          <div className="d-flex column-gap-4">
          <img src={love} alt="logo"></img>
          <img src={bell} alt="bell"></img>
          <img src={diamond} alt="diamond"></img>
          <img src={account} alt="account"></img>
          </div>
      </nav>
  )
}

export default Navbar