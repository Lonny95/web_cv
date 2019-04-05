import * as React from "react";
import * as styles from "../../scss/index.scss"

let buttons = [
    {key:1, action: 'home', text: 'Home'},
    {key:2, action: 'projects', text: 'Projects'},
    {key:3, action: 'contacts', text: 'Contacts'},
];

export class Body extends React.Component<{}, {}> {
    render() {
        return <div className={styles.app}>
        </div>;
    }
}