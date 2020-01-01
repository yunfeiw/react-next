import Nav from '../../components/nav';
import { Row, Col } from 'antd';
import LeftList from '../../components/leftList';
import RightList from '../../components/rightList';
import Head from 'next/head'
const Jujin = (props) => {
    return (
        <div style={styles.bg}>
            <Head>
                <title>掘金导航</title>
                <style>
                    {`
                      .demo-infinite-container {
                        border: 1px solid #e8e8e8;
                        border-radius: 4px;
                        overflow: auto;
                        padding: 8px 24px;
                        height: 100%;
                      }
                      .demo-loading-container {
                        position: absolute;
                        bottom: 40px;
                        width: 100%;
                        text-align: center;
                      }
                    `}
                </style>
            </Head>
            <Nav />
            <Row style={{ display: 'flex', width: '100%' }}>
                <Col span={6} style={styles.left}>
                    <LeftList />
                </Col>
                <Col span={18} style={styles.right}>
                    <RightList />
                </Col>
            </Row>
        </div>
    )
}

const styles = {
    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eceff1'
    },
    left: { width: '500px', padding: '20px' },
    right: { flex: '0 0 1', padding: '20px' }
}

export default Jujin