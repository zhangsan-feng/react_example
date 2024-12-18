
import {Space, Table, Tag, Input, Button, Row, Col} from 'antd';
const { Column, ColumnGroup } = Table;

const { Search } = Input;
const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];



const Customer = ()=>{
    return (
        <div style={{width:'100%'}}>
            <div style={{width:'100%'}}>
                <Row>
                    <Col span={6}>
                        <Search  placeholder="搜索客户信息" enterButton="搜索"  />

                    </Col>
                    <Col span={4} style={{marginLeft:10}}>
                        <Button type="primary" >导出客户信息</Button>
                    </Col>
                </Row>

            </div>
            <Table dataSource={data} pagination={{pageSize:1, total:500,  }} >
                <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags) => (
                        <>
                            {tags.map((tag) => {
                                let color = tag.length > 5 ? 'geekblue' : 'green';
                                if (tag === 'loser') {
                                    color = 'volcano';
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>

        </div>
    )
}

export default Customer