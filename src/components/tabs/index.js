import styles from "./tabs.module.css"

export function TabsContainer() {
    return (
        <div className={styles.tabsContainer}>
            <button id={styles.firstButton} className={styles.button}>All</button>
            <button className={styles.button}>Active</button>
            <button className={styles.button}>Completed</button>
        </div>
    )
}