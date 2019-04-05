import * as React from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {app, headerTriangle} from "../scss/index.scss";
// import * as logo from '../img/github.svg';

let buttons = [
    {id:1, action: 'home', text: 'Home'},
    {id:2, action: 'projects', text: 'Projects'},
    {id:3, action: 'contacts', text: 'Contacts'},
];

export class App extends React.Component {
    render() {
        return <div className={app}>
            <Header buttons={buttons}/>
            <div className={headerTriangle}/>
            <Footer>
                {/*<img alt="github" src={"/src/img/github.svg"}/>*/}
            </Footer>
        </div>;
    }
}