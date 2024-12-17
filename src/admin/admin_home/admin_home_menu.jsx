import {Menu} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from 'react'


const items = [
    {
        key:'1',
        icon:<UserOutlined/>,
        label:"客户管理",
        children:[
            {
                key:'11',
                icon:'',
                path:"/customers",
                label:<Link to="/customers">客户总览</Link> ,
                cn:"客户总览"
            },
            {
                key:'12',
                icon:'',
                path:"/test1",
                label:<Link to="/test1">test1</Link> ,
                cn:"test1"
            },
            {
                key:'13',
                icon:'',
                path:"/test2",
                label:<Link to="/test2">test2</Link> ,
                cn:"test2"
            },
        ]
    },

]


const AdminHomeMenu = ()=>{
    const location = useLocation()

    const [currentSelect, setCurrentSelect] = useState(location.pathname)

    useEffect(()=>{
        setCurrentSelect(location.pathname)
    },[location])

    const findKeyByPath = (path, items) => {
        for (const item of items) {
            // 如果当前项的path与给定的path匹配，返回该项的key
            if (item.path === path) {
                return item.key;
            }
            // 如果当前项有子项，递归查找子项
            if (item.children) {
                const childKey = findKeyByPath(path, item.children);
                if (childKey) {
                    return childKey;
                }
            }
        }
        // 如果没有找到匹配的项，返回null
        return null;
    };
    return (
        <Menu  selectedKeys={findKeyByPath(currentSelect, items)} mode="inline"
               style={{height: '98%', borderRight: 0, backgroundColor: "#e3ccc4",borderRadius: 15, marginTop:15}}
               items={items}/>
    )
}

export default AdminHomeMenu