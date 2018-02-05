import Header from './Header'

const layoutStyle = {
  margin: 10,
  padding: 0,
  border: '1px solid #DDD'
}

const linkStyle2 = {
  marginRight: 55
}

const hrStyle = {
  margin: 0,
  padding: 0,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <hr style={hrStyle} />
    {props.children}
  </div>
)

export default Layout