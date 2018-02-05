import Link from 'next/link'

const linkStyle = {
  marginRight: 15
  
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/movies">
          <a style={linkStyle}>Movies</a>
        </Link>
        <Link href="/untappd">
          <a style={linkStyle}>Untappd</a>
        </Link>
    </div>
)

export default Header
