import React , {useEffect,useState} from "react";
import CardCom from "../components/CardCom";


const MenuPage = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`https://foodmenu-api.herokuapp.com/api/menu`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenu(data)
      });
  }, []);

  return(
      
    <div className="container">
  {
    
    
    menu.map((item,index)=>{
        return(
          
            <CardCom 
           key={index} 
            imgurl={item.foto}
            price={item.harga}
            name={item.nama}
            detail={item.detail}
            />
        )
    })
  }
  </div>
  
  );
};

export default MenuPage;
