import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = dynamic(import('../../components/Header'))

export default () => (
  <div>
    <Header />
    <p>This is our homepage</p>
    <div>
      <a href='/admin'>Admin</a>
    </div>
  </div>
)
