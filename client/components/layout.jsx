import NavBar from "./navbar"
import Footer
 from "./footer"
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="w-[75%] m-auto">
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout