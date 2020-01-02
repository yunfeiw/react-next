import { connect } from 'react-redux';
import { List, Spin, Icon } from 'antd';
import moment from 'moment';
moment.locale('zh-cn');
import InfiniteScroll from 'react-infinite-scroller';

class LeftList extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
    };

    handleInfiniteOnLoad = () => { };

    render() {
        const { list } = this.props
        return (
            <div className="demo-infinite-container">
                <style>
                    {`
                        .biao{
                            width: 35px;
                            height:51px;
                            color: #fff;
                            text-align: center;
                            font-size: 12px;
                            font-weight: 900;
                            line-height: 20px;
                            transition: all 0.5s;
                            background-color: #007fff;
                        }
                        .ant-list-item:hover .biao{
                            color: #007fff;
                            transition: all 0.5s;
                            background-color: #eef0f3;
                        }
                        .ant-list-item-meta-title{
                            width: 285px;
                            line-height: 1.8;
                            color: #333;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .ant-list-item-meta-description{
                            color: #c2c5cd;
                        }
                    `}
                </style>
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                    <List
                        dataSource={list}
                        renderItem={item => (
                            <a href={item.url} target="__bank">
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        avatar={<div className='biao'><Icon type="caret-up" /><br />{item.collectionCount}</div>}
                                        title={item.title}
                                        description={<div>
                                            <span style={{ marginRight: '10px' }}>
                                                {moment(item.date.iso, "YYYY-MM-DD HH:mm:ss").fromNow()}
                                            </span>
                                            {item.user.username}
                                        </div>}
                                    />
                                </List.Item>
                            </a>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <div className="demo-loading-container">
                                <Spin />
                            </div>
                        )}
                    </List>
                </InfiniteScroll>
            </div>
        );
    }
}

export default connect(
    state => ({ list: state.goldReducer.list })
)(LeftList);