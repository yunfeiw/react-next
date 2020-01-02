import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getList, getaxiosGL } from '../store/gold';

import { Select, Row, Col, Button } from 'antd';
import List from './leftList';
const { Option } = Select;


class ContainrLeft extends Component {
    handleChange = (e) => {
        this.props.getdata({
            category: e,
            order: "heat",
            offset: 0,
            limit: 30
        })
    }
    render() {
        return (
            <div>
                <style>
                    {`
                        .demo-infinite-container{padding:0;}
                        .ant-list-item{margin:15px 0;padding:5px 10px;background-color:#fff;}
                    ` }
                </style>
                <Row style={styles.bg}>
                    <Col span={2} >图标</Col>
                    <Col span={2} >掘金</Col>
                    <Col span={10} className='select_type'>
                        <Select style={styles.select} defaultValue={'frontend'} onChange={this.handleChange}>
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
                <List />
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
export default connect(
    state => ({ list: state.githubReducer.list }),

    (dispatch) => {
        return {
            getdata: (params, clientAxios) => {
                getaxiosGL(params, clientAxios).then(res => {
                    dispatch(getList(res))
                })
            }
        }
    }
)(ContainrLeft);