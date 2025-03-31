

import './admin_home.css'
import {useEffect} from 'react'
import {Layout} from 'antd';
import AdminHomeTabs from "./admin_home_tabs.tsx";
import AdminHomeHeader from "./admin_home_header.tsx";
import AdminHomeMenu from "./admin_home_menu.tsx";
const {  Content, Sider } = Layout;

const AdminHome = () =>{


    return(
        <div style={{height:"100%"}} className="home-sider">
            <Layout style={{height:"100%", backgroundColor: "#d9c3ac",}}>
                <AdminHomeHeader/>
                <Layout>
                    <Sider style={{marginTop:10,marginLeft:10,marginBottom:20, borderRadius: 25, width:200}} >
                        <AdminHomeMenu/>
                    </Sider>
                    <Layout style={{padding: '25px',}}>
                        {/*<Breadcrumb style={{ height:'100%' margin: '16px 0' }}>*/}

                        {/*</Breadcrumb>*/}
                        <Content className="home-content"  style={{height:"100%", backgroundColor: "#d9c3ac",}}>
                            {/*<Outlet/>*/}
                            <AdminHomeTabs />

                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}


export default AdminHome