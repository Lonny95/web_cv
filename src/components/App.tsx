import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
import * as styles from "../scss/index.scss"



// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div className={styles.app}>
            <div className={styles.header}>
                <div className={styles.headerButton}>
                    <div className={styles.headerButtonGlow}> </div>
                    Home
                </div>
                <div className={styles.headerButton}>
                    <div className={styles.headerButtonGlow}> </div>
                    Projects
                </div>
                <div className={styles.headerButton}>
                    <div className={styles.headerButtonGlow}> </div>
                    Contacts
                </div>
            </div>
        </div>;
    }
}