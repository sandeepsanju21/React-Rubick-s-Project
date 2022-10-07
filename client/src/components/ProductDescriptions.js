import Menu from './Menu'
import Header from './layout/header';
import { useState,useEffect } from 'react';
import moment from 'moment'
import './PD.css';
import {Table,Button,Tag,Select} from 'antd'
import{PlusCircleFilled,FilterFilled} from "@ant-design/icons/lib/icons";
import axios from 'axios';



function ProductDescriptions() {
  const [hdata,sethdata]= useState([]); 
  const getProducts = async()=>{
    try{
const data =await axios.get("http://localhost:5000/get-todo");
let tempdata=[...data.data]
console.log([...tempdata])
tempdata.map((element)=>{
  element.Date=moment(element.data).format("MMM Do YY");
})
console.log([...tempdata])
sethdata(tempdata)
console.log(data);
    }
    catch(e){
      console.log(e);
    }
  }
console.log("hdata",hdata);
 useEffect(()=>{
  getProducts();
 },[]); 

 const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const columns=[
    {
      key:'Code',
      title:'Code',
      dataIndex:'Code'
    },
    {
      key:'Name',
      title:'Name',
      dataIndex:'Name'
    },
    {
      key:'Qty',
      title:'Qty',
      dataIndex:'Qty'
    }, 
    {
      key:'Price',
      title:'Price',
      dataIndex:'Price'
    },
    {
      key:'Date',
      title:'Date',
      dataIndex:'Date'
    },
    {
      key:'Tags',
      title:'Status',
      dataIndex:'Tags',  render:(tag)=>{
        const color= tag.includes('Inactive')?'Red':'Green'
        return <Tag color={color} key={tag}>{tag}</Tag>
      }      
    }]
  return (
  <div className="styling">
    <Header />
  <Menu />     
    <div> <h3>Products   
        <Button icon={<PlusCircleFilled />} href="../Newproduct" type='primary' className='addbtn'></Button></h3>
        
        <Select style={{float:"right",width:"200px"}} placeholder='January' icon={<FilterFilled />}   className="months">
          {months.map((month,index)=>{
            return <Select.Option key={index} value={month}></Select.Option>
          })}

        </Select><br/>
        <Table 
        className='table' 
        columns={columns} 
        dataSource={hdata}
        pagination={{
          pageSize:4,
        }}>
          
        </Table>
        </div>
  </div>
  )
}

export default ProductDescriptions;