import React, { Component } from 'react';
import { Select, Row, Col, Button } from 'antd';
import List from './List';
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}
class LeftList extends Component {
    render() {
        return (
            <div>
                <Row style={styles.bg}>
                    <Col span={2} >图标</Col>
                    <Col span={2} >掘金</Col>
                    <Col span={10} className='select_type'>
                        <Select style={styles.select} onChange={handleChange}>
                            <Option value="frontend">前端</Option>
                            <Option value="backend">后端</Option>
                            <Option value="android">Android</Option>
                        </Select>
                    </Col>
                    <Col span={10} style={{ textAlign: 'right' }}>
                        <Button type="link">热门</Button>
                        <Button type="link">最新</Button>
                    </Col>
                </Row>
                <List/>
            </div>
        )
    }
}
const styles = {
    bg: {
        padding: '5px',
        lineHeight: '30px',
        backgroundColor: '#fff'
    },
    select: {
        width: '120px',
        boder: 'none',
        backgroundColor: '#e8e8e8'
    }
}
export default LeftList;