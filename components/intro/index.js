import { h, Component } from "preact";
import logo from "../header/logo.png";
import close from "./close.png";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import github from "./github.svg";


export default class Intro extends Component { 
  render() {
    const {show} = this.props;
    if (!show) return <div/>;
    return(
      <div className="intro__screen">
        <div className="intro__screen-close">
          <img src={close} onClick={this.props.closeCallback}/>
        </div>
        <div className="intro__screen-container">
          <div className="intro__screen-logo">
            <img alt="logo" src={logo}/>
            <h2 className="custom-title">Alo's Anonymous Chat</h2>
            <p>Kampf den Palästen!</p>
          </div>

          <div className="intro__screen-social">
            <a href="https://www.facebook.com/DerAlo" target="_blank" rel="noopener" aria-label="Share on facebook">
              <img alt="twitter" src={facebook} />
            </a>     
          </div>
        </div>

        <div className="intro__screen-footer">
          <p>Built with <span>♥</span> by Alo</p>
        </div>
      </div>
    );
  }
};
