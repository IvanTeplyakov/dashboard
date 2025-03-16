import styles from "./index.module.css";
import {Sidebar} from "~/components";

export default function Home() {
  return (
    <div className={styles.page}>
        <Sidebar/>
    </div>
  );
}
