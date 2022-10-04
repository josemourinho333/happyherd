import NavBar from "./navbar"
import Footer
 from "./footer"
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="w-[75%] m-auto">{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout