import React, { Component } from 'react';
import { Row, Col, Select } from 'antd';
import { connect } from 'react-redux';
import { getList, getaxiosGH } from '../store/github';
const { Option } = Select;
import List from './rightList';
class ContainrRight extends Component {
    handleChange = (e) => {
        this.props.getdata(
            {
                category: "trending",
                period: "day",
                lang: e,
                offset: 0,
                limit: 30
            }
        )
    }
    render() {
        return (
            <div>
                <style>
                    {`
                        .ant-select-selection--single{
                            border:none;
                            background-color: #f8f9fb;
                        }
                        .ant-select-open .ant-select-selection{
                            border:none;
                        }
                    `}
                </style>
                <Row style={{ padding: '5px', backgroundColor: '#fff' }}>
                    <Col span={12} style={{ width: '490px' }}>
                        <Row>
                            <Col span={6} style={{ width: '40px' }} >
                                <img style={{ width: '33px' }} src="/static/img/ghlogo.png" />
                            </Col>
                            <Col span={6} style={{ width: '150px' }}>
                                <Select defaultValue="GitHub" style={{ width: 120 }} >
                                    <Option value="GitHub">GitHub</Option>
                                </Select>
                            </Col>
                            <Col span={6} style={{ width: '150px' }}>
                                <Select defaultValue="trending" style={{ width: 120 }} >
                                    <Option value="trending">热门</Option>
                                    <Option value="upcome">新生</Option>
                                </Select>
                            </Col>
                            <Col span={6} style={{ width: '150px' }}>
                                <Select defaultValue="day" style={{ width: 120 }} >
                                    <Option value="day">今日</Option>
                                    <Option value="week">本周</Option>
                                    <Option value="month">本月</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4} style={{ float: 'right', paddingRight: '10px', textAlign: 'right' }}>
                        <Select defaultValue="javascript" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="javascript">javascript</Option>
                            <Option value="css">css</Option>
                            <Option value="typescript">typescript</Option>
                            <Option value="html">html</Option>
                            <Option value="vue">vue</Option>
                        </Select>
                    </Col>
                </Row>
                <List />
            </div>
        )
    }
}
export default connect(
    state => ({ list: state.githubReducer.list }),

    (dispatch) => {
        return {
            getdata: (params, clientAxios) => {
                getaxiosGH(params, clientAxios).then(res => {
                    dispatch(getList(res))
                })
            }
        }
    }
)(ContainrRight);