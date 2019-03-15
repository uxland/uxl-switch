import { listen } from "@uxland/uxl-utilities";
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import * as styles from "./styles.scss";
import { template } from "./template";

@customElement("uxl-switch")
export class UxlSwitch extends LitElement {
  @property()
  public active: boolean = false;

  @property()
  public activeName: string = "Active";

  @property()
  public inactiveName: string = "Inactive";

  @property()
  public enabled: boolean = true;
  public render() {
    return html`
      ${template(this)}
    `;
  }

  @listen("click", ".wrapper")
  public _onClick(e) {
    if (this.enabled) {
      this.active = !this.active;
    }
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
