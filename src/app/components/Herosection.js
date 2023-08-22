import styles from "@/app/page.module.css"
import Image from "next/image"


export default function Herosection(props) {
  return (
    <div className={styles.maindiv}>

<div className={styles.d1}>

<div className={styles.sd1}>
  <div className={styles.centerContent}>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
</div>

<div className={styles.sd2}>

<Image src={props.url} height={550} width={550} alt="blob_image"  />
</div>


</div>




    </div>
  )
}
