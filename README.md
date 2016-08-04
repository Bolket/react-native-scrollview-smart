# React Native Scrollview Smart [![react-native-scrollview-smart](https://img.shields.io/npm/dt/react-native-scrollview-smart.svg?style=flat)](https://www.npmjs.org/package/react-native-scrollview-smart) [![npm version](https://img.shields.io/npm/v/react-native-scrollview-smart.svg?style=flat)](https://www.npmjs.com/package/react-native-scrollview-smart)
A smart iOS and Android scrollview for React Native

INSTALLATION

```shell
npm i react-native-scrollview-smart --save
```

## Demo
<p align="center">
  <img src ="https://raw.githubusercontent.com/sarovin/react-native-scrollview-smart/master/Demo.gif" />
</p>

## Usage
See the Example app

```javascript
class Example extends Component {

  constructor(props) {
    super(props);
    this.scrollOnFocus = this.scrollOnFocus.bind(this);
  }

  scrollOnFocus = (inputName) => () => {
    this.refs.scroll.inputFocused(
      findNodeHandle(this.refs[inputName]),
    );
  }

  render() {
    return (
      <ScrollViewSmart
        ref={'scroll'}
      >
        <TextInput
          ref={'input'}
          onFocus={this.scrollOnFocus('input')}
        />
        // ...
      </ScrollViewSmart>
    );
  }
}

```
