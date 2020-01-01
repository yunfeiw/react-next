import react, { Component } from 'react'
import { Row, Col, Input, Menu, Dropdown, Icon, Divider, Button } from 'antd';

/* 掘金小册 */
const bookletMenu = (
    <div style={{ backgroundColor: "#ccc", width: '450px', height: '160px' }}>
        哈哈
    </div>
);
class Nav extends Component {
    state = {
        visible: true,
        typeMenu: {
            frontend: {
                type: 'control',
                txt: '前端'
            },
            backend: {
                type: 'compass',
                txt: '后端'
            },
            android: {
                type: 'android',
                txt: 'Android'
            },
        },
        tmicon: 'control',
        tmtxt: '前端'
    }
    /* 类型 */
    handleMenuClick = ({key}) => {
        const tmicon = this.state.typeMenu[key].type;
        const tmtxt = this.state.typeMenu[key].txt;
        this.setState({ tmicon: tmicon, tmtxt: tmtxt });
    };
    typeMenu = () => (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="frontend"><Icon type="control" />前端</Menu.Item>
            <Menu.Item key="backend"><Icon type="compass" />后端</Menu.Item>
            <Menu.Item key="android"><Icon type="android" />Android</Menu.Item>
        </Menu>
    )
    /* 设置 */
    setUpMenu = () => (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">问题帮助</Menu.Item>
            <Menu.Item key="2">开源许可</Menu.Item>
            <Menu.Item key="3">意见反馈</Menu.Item>
            <Menu.Item key="4">应用主页</Menu.Item>
        </Menu>
    )
    render() {
        const { tmicon, tmtxt } = this.state;
        return (
            <Row style={styles.nav} >
                <Col span={4} style={styles.left}>
                    <img style={styles.img} src="/static/img/logo.jpg" />
                </Col>
                <Col span={8} style={{ lineHeight: '50px' }}>
                    <Input placeholder="掘金搜索，如：Java，阿里巴巴，前端面试" />
                </Col>
                <Col span={8} offset={3} style={styles.right}>
                    {/* 推广 */}
                    <Dropdown
                        overlay={bookletMenu}
                    >
                        <a style={styles.size}> <Icon type="heat-map" /> 掘金小册 </a>
                    </Dropdown>
                    {/* 下载 */}
                    <Button type="link" style={styles.size}><Icon type="alert" />下载掘金APP</Button>
                    {/* 主题切换 */}
                    <Dropdown
                        overlay={this.typeMenu}
                    >
                        <a style={styles.size}> <Icon type={tmicon} /> {tmtxt} <Icon type="caret-down" /></a>
                    </Dropdown>
                    {/* 设置 */}
                    <Dropdown
                        overlay={this.setUpMenu}
                    >
                        <a style={{ ...styles.size, margin: '0 15px' }}> <Icon type="dash" /> </a>
                    </Dropdown>
                </Col>
            </Row>
        )
    }
}
const styles = {
    left: {
        width: '70px',
        textAlign: 'center'
    },
    img: {
        width: '50px'
    },
    nav: {
        padding:'5px 15px',
        backgroundColor: '#fff',
    },
    right: {
        float: 'right',
        width: '450px',
        lineHeight: '50px',
        textAlign: 'right'
    },
    size: {
        fontSize: '16px',
        fontWeight: '500'
    }
}
export default Nav;