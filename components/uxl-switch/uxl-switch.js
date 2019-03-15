import * as tslib_1 from "tslib";
import { listen } from "@uxland/uxl-utilities";
import { css, customElement, html, LitElement, property, unsafeCSS } from "lit-element";
import * as styles from "./styles.scss";
import { template } from "./template";
let UxlSwitch = class UxlSwitch extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
        this.activeName = "Active";
        this.inactiveName = "Inactive";
        this.enabled = true;
    }
    render() {
        return html `
      ${template(this)}
    `;
    }
    _onClick(e) {
        if (this.enabled) {
            this.active = !this.active;
        }
    }
    static get styles() {
        return css `
      ${unsafeCSS(styles)}
    `;
    }
};
tslib_1.__decorate([
    property(),
    tslib_1.__metadata("design:type", Boolean)
], UxlSwitch.prototype, "active", void 0);
tslib_1.__decorate([
    property(),
    tslib_1.__metadata("design:type", String)
], UxlSwitch.prototype, "activeName", void 0);
tslib_1.__decorate([
    property(),
    tslib_1.__metadata("design:type", String)
], UxlSwitch.prototype, "inactiveName", void 0);
tslib_1.__decorate([
    property(),
    tslib_1.__metadata("design:type", Boolean)
], UxlSwitch.prototype, "enabled", void 0);
tslib_1.__decorate([
    listen("click", ".wrapper"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UxlSwitch.prototype, "_onClick", null);
UxlSwitch = tslib_1.__decorate([
    customElement("uxl-switch")
], UxlSwitch);
export { UxlSwitch };
//# sourceMappingURL=uxl-switch.js.map