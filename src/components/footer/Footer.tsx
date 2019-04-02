import * as React from "react";
import * as styles from "../scss/index.scss"

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component {
    render() {
        return <div className={styles.footer}>
        </div>;
    }
}