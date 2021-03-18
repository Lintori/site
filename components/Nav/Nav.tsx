import Image from "next/image";

import styles from "./Nav.module.scss";

const Nav = () => {
   return (
      <nav className={styles.nav}>
         <div className={styles.left}>
            <Image
               src="/svg/logo.svg"
               width={50}
               height={50}
            />
         </div>
         <div className={styles.right}>
         </div>
      </nav>
   )
}

export default Nav;