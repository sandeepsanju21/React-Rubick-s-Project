import {Menu} from "antd";
/* import{HomeFilled,FileFilled,QuestionCircleFilled,PhoneFilled,CustomerServiceFilled} from "@ant-design/icons/lib/icons"; */
import "antd/dist/antd.css"
import React from 'react'
import './Menu.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


function Menubar() {

  return (  
    <div>
<Menu mode="vertical" className="menu">
       <Menu.Item key="home"><a href="./../"> Home</a></Menu.Item>
        <SubMenu title={<span> Product</span>}>
          <MenuItemGroup >
            <Menu.Item key="phone1"><a href="./../ProductDescriptions"></a>Product Descriptions</Menu.Item>
            <Menu.Item key="phone2">Catalogue Service</Menu.Item>
            <Menu.Item key="phone3">Blogs</Menu.Item>
            <Menu.Item key="charger">SEO Articles</Menu.Item>
            <Menu.Item key="website">Website Content</Menu.Item>
            <Menu.Item key="cpw">Copywriting</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="contactus"><a href="./../Contactus"> Settings</a></Menu.Item>
        <Menu.Item key="faq"><a href="./../faq"> FAQ</a></Menu.Item>
        <Menu.Item key="about us"><a href="./../About"> About Us</a></Menu.Item>
      </Menu>
          
          </div>
  );
}



export default Menubar;
