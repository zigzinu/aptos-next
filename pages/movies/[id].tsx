import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Detail() {
  const router = useRouter();
  console.log(router.query.text);
  return (
    <div className={styles.container}>
      query text: <h1>{router.query.text}</h1>
    </div>
  );
}
