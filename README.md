# eslint-plugin-react-component

ESLint plugin checks function component and remove braces and word "return" in arrow function component

## Installation

### npm
```
npm install --save-dev eslint-plugin-react-component
```

### yarn
```
yarn add -D eslint-plugin-react-component
```

## Setup

Create file `.eslintrc` in your project and add next

```
{
  "plugins": [
    ...,
    "react-component"
  ],
  "rules": {
    ...,
    "react-component/arrow-function-braces": "error"
  }
}
```

## Example

Show error message if braces and the word "return" in a react function component can remove

```js
const Component = () => {
  return <div>text</div>;
};
```

```
Component.jsx
  1:19  error  Remove braces and word "return" in arrow function component  react-component/arrow-function-braces

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

## Fix errors

Run eslint with options **--fix**

## Lisence

MIT
