import * as React from "react";
import * as styles from "../scss/index.scss"


export interface ButtProps { compiler: string; framework: string; }
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class HeaderButton extends React.Component<ButtProps, {}> {
    render() {
        return <div className={styles.app}>Hello from
        </div>;
    }
}