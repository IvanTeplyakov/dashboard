import styles from "./index.module.css";
import {Sidebar} from "~/components";
import '~/styles/variables.css'
import '~/styles/fonts.css'
import '~/styles/global.css'

export default function Home() {
  return (
    <div className={styles.page}>
        <Sidebar/>
    </div>
  );
}
