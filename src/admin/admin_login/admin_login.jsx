import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './admin_login.css'

const AdminLogin = ()=>{
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="login-container">

            <div className="login-box">
                <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={onFinish}>
                    <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!',},]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!',},]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                               placeholder="Password"/>
                    </Form.Item>

                    <Form.Item>
                        <Button style={{width: 200, float: "right"}} type="primary" htmlType="submit"
                                className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AdminLogin

// https://www.jq22.com/code1991
// https://www.jq22.com/code2286
// https://www.jq22.com/code4476
// https://www.jq22.com/code3652
// https://www.jq22.com/code1860
// https://www.jq22.com/code4007
// https://www.jq22.com/code2292
// https://www.jq22.com/code1607
// https://www.jq22.com/code3471