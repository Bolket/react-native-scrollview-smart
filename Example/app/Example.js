import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  findNodeHandle,
  TextInput,
} from 'react-native';
import { ScrollViewSmart } from 'react-native-scrollview-smart';

const styles = StyleSheet.create({
  default: {
    height: 65,
    borderWidth: 1,
    borderColor: '#0f0f0f',
  },
});

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
        <View style={{ height: 200, backgroundColor: 'black' }} >
          <Text
            style={{
              marginTop: 60,
              color: 'white',
              textAlign: 'center',
              fontSize: 40,
            }}
          >
            TEST
          </Text>
        </View>
        <View style={{ flex: 1, marginTop: 50 }}>
          <TextInput
            ref={'input1'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input2.focus(); }}
            onFocus={this.scrollOnFocus('input1')}
          />
          <TextInput
            ref={'input2'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input3.focus(); }}
            onFocus={this.scrollOnFocus('input2')}
          />
          <TextInput
            ref={'input3'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input4.focus(); }}
            onFocus={this.scrollOnFocus('input3')}
          />
          <TextInput
            ref={'input4'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.refs.input5.focus(); }}
            onFocus={this.scrollOnFocus('input4')}
          />
          <TextInput
            ref={'input5'}
            placeholder={'INPUT'}
            style={styles.default}
            keyboardType={'default'}
            returnKeyType={'done'}
            onFocus={this.scrollOnFocus('input5')}
            blurOnSubmit
          />
        </View>
      </ScrollViewSmart>
    );
  }
}

export default Example;
