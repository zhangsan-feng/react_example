import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from 'react'
import  {VideoCameraAddOutlined,
    SettingOutlined,
    DownloadOutlined,
    CloudDownloadOutlined,
    ClockCircleOutlined
} from '@ant-design/icons'

const items = [
    {
        key: '1',
        icon: <DownloadOutlined />,
        label: <Link to="/download">作品下载</Link> ,
    },
    {
        key: '2',
        icon: <CloudDownloadOutlined />,
        label: <Link to="/batch_download">批量下载</Link> ,
    },
    {
        key: '3',
        icon: <SettingOutlined />,
        label: <Link to="/download_settings">下载配置</Link> ,
    },
    {
        key: '4',
        icon: <ClockCircleOutlined />,
        label: <Link to="/download_record">下载记录</Link> ,
    },
    {
        key: '5',
        icon: <VideoCameraAddOutlined />,
        label: <Link to="/download_preview">下载预览</Link> ,
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