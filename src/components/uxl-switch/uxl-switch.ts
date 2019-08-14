import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
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

  public _onClick(e) {
    if (this.enabled) {
      this.active = !this.active;
      const onChangeEvent = new CustomEvent("uxl-switch-changed", { composed: true, detail: { active: this.active } });
      this.dispatchEvent(onChangeEvent);
    }
  }

  public render() {
    return html`
      ${template(this)}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
