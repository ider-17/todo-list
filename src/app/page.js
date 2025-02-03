import styles from "./page.module.css";
import Title from "../components/title/index.js";
import Input from "@/components/input";
import { TabsContainer } from "@/components/tabs";

export default function Home() {
  return (
    <div>
      <div className={styles.cardContainer}>
        <Title />
        <Input />
        <TabsContainer />
      </div>
    </div>
  );
}
