import React from 'react'
import './header.css'
import{ UserOutlined } from "@ant-design/icons/lib/icons";
import{Button} from 'antd'

 function header() {
  return (
    <header>
   
    Rubick.ai
      
      <Button type='primary' icon={<UserOutlined />} 
      className='btnheader'
      >Admin</Button>
    </header>
  )
}
export default header;