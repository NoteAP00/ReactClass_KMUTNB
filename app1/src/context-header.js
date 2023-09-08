import React from "react";
import { userContext } from "./context";

export default class Header extends React.Component {
    static contextType = userContext
  render() {
    const user = this.context;

    const headerStyle = {
      backgroundColor: "#cee",
      textAlign: "center",
      padding: 5,
    };
    return (
    <div style={headerStyle}>
        <a href="#top">Home</a>&nbsp;-&nbsp;
        <a href="#top">Product</a>&nbsp;-&nbsp;
        <a href="#top">Contact Us</a>&nbsp;-&nbsp;&nbsp;
        [{user}&nbsp;:&nbsp;<a href="#top">Signout</a>]
        </div>
        
        )
  }
}
