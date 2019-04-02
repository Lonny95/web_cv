import * as React from "react";
import * as styles from "../scss/index.scss"

let nameAgeMapping = new Map();

nameAgeMapping.set("Home", "home");
nameAgeMapping.set("Projects", "projects");
nameAgeMapping.set("Contacts", "contacts");

let headerButtsList={
    "Home":'home',
    "Projects":'projects',
    "Contacts":'contacts',
};

export class Hello extends React.Component {
    // render_buttons(buts:Map<s,d>){
    //
    // }

    render() {
        return <div className={styles.header}>
            <div className={styles.header}> and !
            </div>
        </div>;
    }
}