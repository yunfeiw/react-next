import Link from 'next/link'
import {
  Button,
} from 'antd'

export default () => (
  <div style={{ marginTop: 100, textAlign: 'center' }}>
    <Button>
      <Link href="/">
        <a>首页</a>
      </Link>
    </Button>
    <Button>
      <Link href="/juejin">
        <a>掘金界面</a>
      </Link>
    </Button>
    <Button>
      <Link href="/redux">
        <a>redux</a>
      </Link>
    </Button>
    <h3>首页</h3>
    <p>集成antd</p>
  </div>
)
