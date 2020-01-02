import react, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, List, Card, Icon } from 'antd';
class RightList extends Component {
    state = {};
    render() {
        const { list } = this.props;
        return (
            <Row>
                <style>
                    {`
                        .ant-card-head-title{
                            font-weight: 900;
                            line-height: 1.2;
                            color: #0366d6;
                            margin-right: 20px;
                        }
                        .ant-card-head-title span:hover{
                            text-decoration: underline;
                        }
                        .card_des{
                            font-size: 14px;
                            line-height: 20px;
                            height: 60px;
                            margin-right: 20px;
                            color: #333;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }
                    `}
                </style>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 1,
                        lg: 1,
                        xl: 2,
                        xxl: 2,
                    }}
                    dataSource={list}
                    renderItem={item => (
                        <List.Item>
                            <a href={item.detailPageUrl} target="__bank">
                                <Card
                                    bordered={false}
                                    title={
                                        <span>{item.username} \ {item.reponame}</span>
                                    }>
                                    <div className="card_des">
                                        {item.description}
                                    </div>
                                    <Row>
                                        <Col span={6} style={styles.col}>
                                            <Icon style={{ marginRight: '10px' }} type="star" theme="filled" />
                                            {item.starCount}
                                        </Col>
                                        <Col span={6} style={styles.col}>
                                            <Icon style={{ marginRight: '10px' }} type="fork" />
                                            {item.forkCount}
                                        </Col>
                                        <Col span={6} style={styles.col}>
                                            <Icon style={{ marginRight: '10px', color: '#f1e05a' }} type="code-sandbox" />
                                            {item.lang}
                                        </Col>
                                    </Row>
                                </Card>
                            </a>
                        </List.Item>
                    )}
                />
            </Row>
        )
    }
}
const styles = {
    col: {
        fontSize: '14px',
        fontWeight: 700,
        color: '#666',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}
export default connect(
    state => ({ list: state.githubReducer.list })
)(RightList);