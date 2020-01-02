import Nav from '../../components/nav/nav';
import { withRedux } from '../../lib/redux';
import { getJuejinList } from '../../store/gold';
import { getJuejinGithubList } from '../../store/github';
import { Row, Col } from 'antd';
import ContainrLeft from '../../components/containrLeft';
import ContainrRight from '../../components/containrRight';
import Head from 'next/head'
const Juejin = (props) => {
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
                    <ContainrLeft />
                </Col>
                <Col span={18} style={styles.right}>
                    <ContainrRight />
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
    left: { width: '400px', padding: '20px' },
    right: { flex: 1, padding: '20px' }
}
Juejin.getInitialProps = async ({ reduxStore }) => {
    const { dispatch } = reduxStore
    console.log(1)
    await getJuejinList(dispatch, {
        category: "frontend",
        order: "heat",
        offset: 0,
        limit: 30
    })
    await getJuejinGithubList(dispatch, {
        category: "trending",
        period: "day",
        lang: "javascript",
        offset: 0,
        limit: 30
    })
    return {}
}
export default withRedux(Juejin)

/*
  // 组件
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const statusCode = res.statusCode > 200 ? res.statusCode : false
    const json = await res.json()

    return { statusCode, stars: json.stargazers_count }
  }
  this.props
*/