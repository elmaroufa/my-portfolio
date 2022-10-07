import React, { Component } from "react";
import Typical from "react-typical";
import Skills from "./Skills";
import pythonIcon from "@iconify/icons-logos/python"
import reactIcon from "@iconify/icons-logos/react";
import flaskIcon from "@iconify/icons-logos/flask";
import djangoIcon from "@iconify/icons-logos/django";
import vueIcon from "@iconify/icons-logos/vue";
import { Icon } from "@iconify/react";
//import Switch from "react-switch";
class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);
    
    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <div className="mx-auto">
                <p><h2>WELCOME-BIENVENUE</h2></p>
                <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "400%" , margin: "1%" }}
                  />
                   <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%" , margin: "1%" }}
                  />
                  <Icon
                    icon={djangoIcon}
                    style={{ fontSize: "400%" , margin: "1%" }}
                  />
                  <Icon
                    icon={flaskIcon}
                    style={{ fontSize: "400%" , margin: "1%" }}
                  />
                   <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%" , margin: "1%" }}
                  />
                  
                
              </div>
              {/*<Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />*/}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
