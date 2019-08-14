import { html } from "lit-element";
import { UxlSwitch } from "./uxl-switch";

export const template = (props: UxlSwitch) => html`
  <div class="wrapper ${props.enabled ? "enabled" : "disabled"}" @click="${props._onClick}" part="wrapper">
    <div class="option option__inactive ${props.active ? "" : "selected"}" part="option-inactive">
      ${props.inactiveName}
    </div>
    <div class="option option__active ${props.active ? "selected" : ""}" part="option-active">
      ${props.activeName}
    </div>
  </div>
`;
