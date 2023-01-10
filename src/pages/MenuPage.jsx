import { Box } from "@mui/material";
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
    <Box m={2} pt={3} >
    <div>
  {
    
    menu.map((item)=>{
        return(
          
            <CardCom 
            imgurl={item.foto}
            price={item.harga}
            name={item.nama}
            detail={item.detail}
            />
        )
    })
  }
  </div>
  </Box>
  );
};

export default MenuPage;
