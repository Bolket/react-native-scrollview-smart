// index.js
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  findNodeHandle,
  TextInput,
} from 'react-native';
import { ScrollViewSmart } from 'react-native-scrollview-smart';

var styles = StyleSheet.create({
  default: {
    height: 65,
    borderWidth: 1,
    borderColor: '#0f0f0f',
  },
});

class Example extends Component {

  constructor (props) {
    super(props)
    this.scrollOnFocus = this.scrollOnFocus.bind(this);
  }

  scrollOnFocus = (height, inputName, event) => () => {
    this.refs.scroll.inputFocused(
      event,
      findNodeHandle(this.refs[inputName]),
      height,
    );
  }

  render() {
    return (
      <ScrollViewSmart
        ref={'scroll'}
        extraSpace={25}
      >
        <View style={{ marginTop: 70, height: 100, backgroundColor: 'black' }}>
        </View>
        <View style={{ flex: 1, marginTop: 50 }}>
          <TextInput
            ref={'input1'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input2.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input1')}
          />
          <TextInput
            ref={'input2'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input3.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input2')}
          />
          <TextInput
            ref={'input3'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input4.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input3')}
          />
          <TextInput
            ref={'input4'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input5.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input4')}
          />
          <TextInput
            ref={'input5'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'done'}
            onFocus={this.scrollOnFocus(64, 'input5')}
            blurOnSubmit={true}
          />
        </View>
      </ScrollViewSmart>
    );
  }
}

export default Example;
