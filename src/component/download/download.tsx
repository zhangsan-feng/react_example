
import { Input, Button } from 'antd';
const { TextArea } = Input;
const Download = ()=>{
    return (
        <div style={{marginLeft:"20%"}}>
            <TextArea rows={4} style={{width:"80%"}} />
            <Button type="primary" style={{width:400, marginTop:10, marginLeft:"25%"}}>下载</Button>
        </div>
    )
}

export default Download