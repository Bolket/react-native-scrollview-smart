// index.js
import React, {
  Component,
} from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import { ScrollViewSmart } from 'react-native-scrollview-smart';

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
        <View style={{ flex: 1, margin: 20, marginTop: 100 }}>
          <TextInput
            ref={'input1'}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input2.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input1')}
          />
          <TextInput
            ref={'input2'}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input3.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input2')}
          />
          <TextInput
            ref={'input3'}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input4.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input3')}
          />
          <TextInput
            ref={'input4'}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input5.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input4')}
          />
          <TextInput
            ref={'input5'}
            keyboardType={'default'}
            returnKeyType={'done'}
            onSubmitEditing={() => { this.refs.input2.focus(); }}
            onFocus={this.scrollOnFocus(64, 'input5')}
            blurOnSubmit={true}
          />
        </View>
      </ScrollViewSmart>
    );
  }
}

export default Example;
