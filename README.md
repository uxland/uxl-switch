# \<uxl-switch\>

##### What is?

It is a web component that allows you to create a toggle switch input.

##### How Install

```
npm i --save @uxland/uxl-switch
```

##### How to use?

import the component and use it in the html with the `uxl-switch` tag

```
import "@uxland/uxl-switch";

<body>
    <uxl-switch></uxl-switch>
</body>
```

### Attributes availables

| Attribute      | Description                                                                        | Default               |
| -------------- | ---------------------------------------------------------------------------------- | --------------------- |
| `active`       | Status of the switch                                                               | `false` (boolean)     |
| `activeName`   | Value of active text label                                                         | `"Active"` (string)   |
| `inactiveName` | Value of inactive text label                                                       | `"Inactive"` (string) |
| `enabled`      | If true, the uxl-switch is enable to change, otherwhise the uxl-switch is disabled | `true` (boolean)      |

### Styling

The following custom properties and mixins are available for styling:

| Custom property                                   | Description                                          | Default   |
| ------------------------------------------------- | ---------------------------------------------------- | --------- |
| `--uxl-switch-width`                              | Width of the uxl-switch                              | `200px`   |
| `--uxl-switch-border-color`                       | Border color of component wrapper                    | `#e0e0e0` |
| `--uxl-switch-option-background-color`            | Background color of the options                      | `#ffffff` |
| `--uxl-switch-option-padding`                     | Padding of the options                               | `8px`     |
| `--uxl-switch-text-color`                         | Default text color when option is not selected       | `#616161` |
| `--uxl-switch-font-size`                          | Font size of text options                            | `16px`    |
| `--uxl-switch-active-selected-background-color`   | Background color of active option when is selected   | `#81c784` |
| `--uxl-switch-inactive-selected-background-color` | Background color of inactive option when is selected | `#ef5350` |
| `--uxl-switch-selected-text-color`                | Text when any option is selected                     | `#ffffff` |
| `--uxl-switch-active-border`                      | Border of active option                              | `0` |
| `--uxl-switch-active-border-selected`             | Border of active option when is selected             | `0` |
| `--uxl-switch-inactive-border`                    | Border of inactive option                            | `0` |
| `--uxl-switch-inactive-border-selected`           | Border of active option when is selected             | `0` |


### Events

| Events               | Description   |
| -------------------- | ------------- |
| `uxl-switch-changed` | Value changed |
