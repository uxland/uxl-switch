import { html } from "lit-element";
export const template = (props) => html `
  <div class="wrapper ${props.enabled ? "enabled" : "disabled"}">
    <div class="option option__inactive ${props.active ? "" : "selected"}"">
      ${props.inactiveName}
    </div>
    <div class="option option__active ${props.active ? "selected" : ""}">
      ${props.activeName}
    </div>
  </div>
`;
//# sourceMappingURL=template.js.map