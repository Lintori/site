import Image from "next/image";

import styles from "./Hero.module.scss";

const Hero = () => {
   return (
      <div className={styles.container}>
         <a href="https://www.facebook.com/HeyLintori" className={styles.icon}>
            <Image
               src="/svg/facebook.svg"
               width={45}
               height={45}
            />
         </a>
         <a href="https://github.com/Lintori" className={styles.icon}>
            <Image
               src="/svg/github.svg"
               width={45}
               height={45}
            />
         </a>
         <a href="https://twitter.com/HeyLintori" className={styles.icon}>
            <Image
               src="/svg/twitter.svg"
               width={45}
               height={45}
            />
         </a>
         <a href="https://www.instagram.com/heylintori/" className={styles.icon}>
            <Image
               src="/svg/instagram.svg"
               width={45}
               height={45}
            />
         </a>
         <a href="https://www.linkedin.com/company/lintori/" className={styles.icon}>
            <Image
               src="/svg/linkedin.svg"
               width={45}
               height={45}
            />
         </a>
      </div>
   )
}

export default Hero;