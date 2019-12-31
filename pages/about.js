// import styles from './about.less';
import Head from 'next/head'
import Link from 'next/link'
export default () => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Link href="/">
            <a>首页</a>
        </Link>
        <Link href="/about">
            <a>关于</a>
        </Link>
        <p>Hello world!</p>
    </div>
)