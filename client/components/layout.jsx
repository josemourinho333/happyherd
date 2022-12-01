import NavBar from "./navbar"
import Footer
 from "./footer"
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout