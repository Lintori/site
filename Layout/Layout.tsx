import Head from "next/head";
import Nav from "../components/Nav/Nav";

const Layout = ({ title, children }) => {
   return(
      <>
         <Head>
            <title>{`Lintori – ${title}`}</title>
         </Head>
         <>
            <Nav />
            {children}
         </>
      </>
   )
}

export default Layout;