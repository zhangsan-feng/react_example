import {
    ClockCircleOutlined,
    CloudDownloadOutlined,
    DownloadOutlined,
    SettingOutlined,
    VideoCameraAddOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";


const MenuItems = [
    {
        key: '1',
        icon: <DownloadOutlined />,
        label: <Link to="/test1">test1</Link> ,
        path:"/test1",
        cn:"test1"
    },
    {
        key: '2',
        icon: <CloudDownloadOutlined />,
        label: <Link to="/test2">test2</Link> ,
        path:"/test2",
        cn:"test2"
    },

]

export {MenuItems}