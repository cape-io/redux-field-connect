# redux-field-connect 1.0.2

These are some `react-redux` wrappers/containers for the `redux-field` module. Because `redux-field` is not always used with React these are split into a dedicated module.

## Wrappers

### `connectInput(Component)`

Use this when you want to attach action handlers (`onBlur, onChange, onFocus, onInput, onSubmit`) and `value` to an input field. @see [getFormEvents](https://github.com/cape-io/redux-field/blob/master/src/actions.js#L73-L77)

**Over Simplified Example:**

Make sure you send the wrapped input a `prefix` property.

```javascript
import { connectInput } from 'redux-field-connect'

function InputEl(props) {
  return <input {...props} />
}
const Input = connectInput(InputEl)

function CoordsInput() {
  return <Input id="coords" prefix="coords" type="text" size="50" />
}

```

**Example:** [code](https://www.github.com/cape-io/geo) - [website](https://geo.cape.io).

### `connectField({})(Component)`
