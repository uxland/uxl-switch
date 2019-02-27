import { html, LitElement, property, customElement, query, css, unsafeCSS } from "lit-element";
import * as styles from "./styles.scss";
import { template } from "./template";
import { listen } from "@uxland/uxl-utilities";

@customElement("uxl-switch")
export class UxlSwitch extends LitElement {
  render() {
    return html`
      ${template(this)}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  @property()
  active: boolean = false;

  @property()
  activeName: string = "Active";

  @property()
  inactiveName: string = "Inactive";

  @property()
  enabled: boolean = true;

  @listen("click", ".wrapper")
  _onClick(e) {
    console.log("on click!!!");
    if (this.enabled) {
      this.active = !this.active;
      console.log("this.active", this.active);
    }
  }
}
