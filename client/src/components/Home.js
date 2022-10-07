import React from "react";
import Menu from './Menu'
import './Home.css'
import{Button, Typography} from 'antd'
import Header from "./layout/header";
import{BookFilled } from "@ant-design/icons/lib/icons";


const{Title,Text}=Typography;

function Home() {
  
return (
    <div className="home">
      <div className="styling">
        <Header />
      <Menu />     
      <div>
        <br/>
        <br/>
        <br/>        
        <Text className="mobile1text" >
          <article>
        <br/><Title level={2}>WELCOME TO rubick.ai</Title> 
        <Text className="text1">Rubick.Ai aims to create a world where people use AI to complete non-intuitive tasks and improve efficiencies in daily life.</Text>
          <br/><br/><Button type="default" style={{color:"black"}} href="./../ProductDescriptions" icon={<BookFilled />}>About our product</Button> <Button type="default" style={{color:"black"}} href="./../oneplusnord" icon={<BookFilled />}>About us</Button>
          </article>
        </Text>
        </div>
    </div>
    </div>
    
  )
}
export default Home;