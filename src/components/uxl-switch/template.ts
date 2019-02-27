import { html } from "lit-element";
import { UxlSwitch } from "./uxl-switch";
export const template = (props: UxlSwitch) => html`
  <div class="wrapper ${props.enabled ? "enabled" : "disabled"}">
    <div class="option option__inactive ${props.active ? "" : "selected"}"">
      ${props.inactiveName}
    </div>
    <div class="option option__active ${props.active ? "selected" : ""}">
      ${props.activeName}
    </div>
  </div>
`;
