import {Button, Col, Dropdown, Menu, Row, Space} from "antd";
import {Header} from "antd/es/layout/layout";



const items = [
    {key:'1', label:"用户主页"},
    {key:'2', label:"退出登录"},
    {key:'3', label:"修改密码"},
]
const AdminHomeHeader = ()=>{
    return (
        <Header className="home-header" style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <div className="demo-logo"/>
            <Menu
                mode="horizontal"
                items={items}
                style={{backgroundColor:"rgba(0, 0, 0, 0)", width:'90%'}}
            />

            <Dropdown menu={{items,}} placement="bottomLeft"><Button style={{width:"10%",height:50}}>退出登录</Button></Dropdown>

        </Header>
    )
}
export default AdminHomeHeader