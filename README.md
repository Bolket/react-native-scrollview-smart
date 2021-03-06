# React Native Scrollview Smart [![CircleCI](https://circleci.com/gh/Bolket/react-native-scrollview-smart.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/Bolket/react-native-scrollview-smart) [![react-native-scrollview-smart](https://img.shields.io/npm/dm/react-native-scrollview-smart.svg)](https://www.npmjs.org/package/react-native-scrollview-smart) [![npm version](https://img.shields.io/npm/v/react-native-scrollview-smart.svg?style=flat)](https://www.npmjs.com/package/react-native-scrollview-smart) [![Known Vulnerabilities](https://snyk.io/test/github/bolket/react-native-scrollview-smart/badge.svg)](https://snyk.io/test/github/bolket/react-native-scrollview-smart)
A smart iOS and Android scrollview for React Native

## INSTALLATION

```shell
npm i react-native-scrollview-smart --save
```
### Android

in your `AndroidManifest.xml add:

```xml
<activity
  android:windowSoftInputMode="adjustPan" ... >
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

  scrollOnFocus = inputName => () => {
    this.scroll.inputFocused(
      findNodeHandle(this[inputName]),
    );
  }

  render() {
    return (
      <ScrollViewSmart
        ref={e => (this.scroll = e)}
      >
        <TextInput
          ref={e => (this.input = e)}
          onFocus={this.scrollOnFocus('input')}
        />
        // ...
      </ScrollViewSmart>
    );
  }
}

```

Donate
------

* Etherium (ETH): 0x57b5ab33a339fc7fab86127981e4095b84d5ddfa
