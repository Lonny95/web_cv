import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
import * as styles from "../scss/index.scss"

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div className={styles.app}>Hello from {this.props.compiler}
            <div className={styles.header+" "+styles.noize}> and {this.props.framework}!
            </div>
            <div className={styles.footer}> and {this.props.framework}!
            </div>
            {/*<div className={styles.looter}> and {this.props.framework}!*/}
            {/*</div>*/}
        </div>;
    }
}