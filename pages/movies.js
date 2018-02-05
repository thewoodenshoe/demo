import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const Index = (props) => (
  <Layout>
    <h1> Search for shows</h1>
    <form action="/movies-title-result" method="post">
       <input id="frmShow" name="frmShow" type="text" placeholder="Find show.." />
       <input type="submit" value="Submit" />
    </form>
  </Layout>
)

export default Index