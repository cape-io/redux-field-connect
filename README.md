# redux-field-connect

These are some `react-redux` wrappers/containers for the `redux-field` module. Because `redux-field` is not always used with React these are split into a dedicated module.

## Wrappers

### `connectInput(Component)`

Use this when you want to attach action handlers (`onBlur, onChange, onFocus, onInput, onSubmit`) and result `value` to an input field. @see [connectInput](https://github.com/cape-io/redux-field-connect/blob/master/src/connectInput.js) [getFormEvents](https://github.com/cape-io/redux-field/blob/master/src/actions.js#L73-L77)

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

**Working Example:** [code](https://www.github.com/cape-io/geo) - [website](https://geo.cape.io).

<!-- ### `connectField({})(Component)`

When your needs are more complicated and you want a component injected with _all_ the action handlers and _all_ of the field state. Actions are grouped into `fieldEvent`, `formEvent`, `formHandler`. The state in added as the `form` property.

Added props:

- **fieldEvent**: `clear, clearError, close, error, invalid, meta, open, save, saved, savedProgress, valid`
- **formEvent**: `onBlur, onChange, onFocus, onInput, onSubmit`
- **formHandler**: `handleBlur, handleChange, handleFocus, handleInput, handleSubmit`
- **form**: `blur, dragCount, error, errorMessage, focus, hasError, id, initialValue, invalid, invalidValue, isClosed, isDirty, isEditing, isOpen, isPristine, isSaved, isSaving, isTouched, isValid, meta, savedProgress, savedValue, status, suggestion, valid, validValue, value`

@see [connectField](https://github.com/cape-io/redux-field-connect/blob/master/src/connectField.js) -->
