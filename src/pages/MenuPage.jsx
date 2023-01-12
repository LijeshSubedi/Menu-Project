import React , {useEffect,useState} from "react";
import CardCom from "../components/CardCom";
import {data} from "./DataPage"


const MenuPage = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // fetch(`https://foodmenu-api.herokuapp.com/api/menu`)
    //   .then((res) => res.json())
    //   .then((data) => {
        console.log(data);
        setMenu(data)
      // });
  }, []);
  // setMenu(data)
  console.log(data)

  return(
      
    <div className="container">
  {
    
    
    menu.map((item,index)=>{
        return(
          
            <CardCom 
           key={index} 
            imgurl={item.imgurl}
            price={item.Price}
            name={item.name}
            detail={item.detail}
            />
        )
    })
  }
  </div>
  
  );
};

export default MenuPage;
