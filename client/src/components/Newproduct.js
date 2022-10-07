import React from 'react'
import Menu from './Menu'
import{Form, Input, Row, Button, Switch} from 'antd'
import Header from './layout/header';
import '../components/Newproduct.css'

import axios  from 'axios';
import { toast } from 'react-toastify';


function Contactus() {

 
  const onFinish=(e)=>{
     let state={
      Code:e.ProductCode,
      Name:e.Name,
      Qty:e.Quantity,
      Price:e.Price,
      Date:Date(),
      Tags:e.status?"Active":"Inactive"
     }
    axios.post("/save-todo",state)
    .then(()=>toast.success(
      'Added Successfully',
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      }
    )
    .catch(err=>console.log(err))
    )
  }
  return (
    <div className="styling">
      <Header/>
    <Menu />    
    <div><h2><b>New Products</b></h2></div>
        <div>
          <Form className='forms' onFinish={onFinish} layout='vertical'>
            <Row>
            <Form.Item name="ProductCode" label="Product Code" rules={[ 
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!"

              }
            ]} >
             <Input style={{width:"400px"}} placeholder='Product Code' />
             </Form.Item>
            
             <Form.Item name="status" label="Status" style={{marginLeft:"20px"}}
              rules={[
                {
                  required:true
                }

              ]}>

              <Switch style={{width:'70px'}} checkedChildren="Active" unCheckedChildren="Inactive"  />
              </Form.Item>
            </Row>
            

            <Form.Item name="Name"  label="Name" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp (/^[A-Za-z]+$/),
                message: "Wrong format!"

              }
            ]}>
              <Input  style={{width:"400px",marginLeft:"-63%",marginRight:"0%"}} placeholder='Name'/>
            </Form.Item>
            <Form.Item name="Quantity" label="Quantity" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!"

              },{
                max:100,
                message:"qty shoild be less thab 100"
              }
            ]}>
              <Input style={{width:"400px",marginLeft:"-63%"}} placeholder='Quantity'/>
            </Form.Item>
            <Form.Item  name="Price" label="Price"rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!"

              }
            ]}>
              <Input style={{width:"400px",marginLeft:"-63%"}} placeholder='Price'/>
            </Form.Item>
            <Form.Item>
            <Button type='primary' htmlType='reset' shape='round' style={{color:"darkgray", backgroundColor:"grey",marginLeft:"-63%"}}>Cancel</Button>
              <Button type='primary' htmlType='submit' shape='round' style={{marginLeft:"20px"}}>Submit</Button>
              
            </Form.Item>

            
          </Form>
        </div>
       
      
    </div>
  );
} 

export default Contactus