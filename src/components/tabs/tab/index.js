import styles from "./tab.module.css"

export function Tab(props) {
    return (
        <button className={styles.tabButton}>{props.tabName}</button>
    )
}