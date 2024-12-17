import { useState, useEffect, useRef, } from 'react';
import { Tabs } from 'antd';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';





const AdminHomeTabs = () => {
    const [activeKey, setActiveKey] = useState('');
    const [items, setItems] = useState([]);
    const newTabIndex = useRef(0);
    const location = useLocation();
    const navigate = useNavigate();
    const tabCache = useRef({});
    const outlet = useOutlet()
    useEffect(() => {
        const path = location.pathname;
        if (path === "/"){
            return
        }
        if (!items.find(item => item.key === path)) {
            addTab(path, path);
        }
        setActiveKey(path);
    }, [location, items]);

    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
        navigate(newActiveKey);
    };

    const addTab = (path, label) => {
        const newActiveKey = path;
        const newPanes = [...items];
        newPanes.push({ label, key: newActiveKey });
        setItems(newPanes);
        setActiveKey(newActiveKey);
        if (!tabCache.current[newActiveKey]) {
            tabCache.current[newActiveKey] = outlet;
        }
    };

    const remove = (targetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
        // Do not delete the content from tabCache
    };

    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            addTab(`newTab${newTabIndex.current++}`, 'New Tab');
        } else {
            remove(targetKey);
        }
    };

    return (
        <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            hideAdd={true}
            items={items.map(item => ({
                ...item,
                className: 'custom-tab-class',
                // Use tabCache to render the content of each tab
                children: tabCache.current[item.key] || <div>{item.label}</div>
            }))}
        />
    );
};

export default AdminHomeTabs;
