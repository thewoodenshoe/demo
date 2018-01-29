import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/messageboard">
          <a style={linkStyle}>Messageboard</a>
        </Link>
        <Link href="/login">
          <a style={linkStyle}>login</a>
        </Link>
        <Link href="/register">
          <a style={linkStyle}>register</a>
        </Link>
    </div>
)

export default Header
