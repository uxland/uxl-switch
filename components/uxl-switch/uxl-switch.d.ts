import { LitElement } from "lit-element";
export declare class UxlSwitch extends LitElement {
    active: boolean;
    activeName: string;
    inactiveName: string;
    enabled: boolean;
    render(): import("lit-element").TemplateResult;
    _onClick(e: any): void;
    static readonly styles: import("lit-element").CSSResult;
}
