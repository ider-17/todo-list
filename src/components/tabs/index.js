import { Tab } from "./tab";
import styles from "./tabs.module.css"

export function TabsContainer() {
    return (
        <div className={styles.tabsContainer}>
            <Tab tabName="All" />
            <Tab tabName="Active" />
            <Tab tabName="Completed" />
        </div>
    )
}