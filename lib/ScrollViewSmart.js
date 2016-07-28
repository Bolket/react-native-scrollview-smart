import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Platform,
  requireNativeComponent,
  Keyboard,
  ScrollView,
  View,
} from 'react-native';
var AndroidKeyboardAwareScrollView = requireNativeComponent('AndroidKeyboardAwareScrollView', ScrollViewSmart);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  extraSpace: PropTypes.number,
};

const defaultProps = {
  extraSpace: 0,
};

class ScrollViewSmart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keyboardSpace: 0,
    };
    this.inputFocused = this.inputFocused.bind(this);
    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.keyboardWillShowEvent = Keyboard.addListener(
        'keyboardDidShow',
        this.updateKeyboardSpace,
      );
      this.keyboardWillHideEvent = Keyboard.addListener(
        'keyboardDidHide',
        this.resetKeyboardSpace,
      );
    } else {
      this.keyboardWillShowEvent = Keyboard.addListener(
        'keyboardWillShow',
        this.updateKeyboardSpace,
      );
      this.keyboardWillHideEvent = Keyboard.addListener(
        'keyboardWillHide',
        this.resetKeyboardSpace,
      );
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowEvent.remove();
    this.keyboardWillHideEvent.remove();
  }

  inputFocused(event, reactNode, height) {
    setTimeout(() => {
      const scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        reactNode,
        height,
        true,
      );
    }, 50);
  }

  updateKeyboardSpace(frames) {
    if (frames.end) {
      this.setState({ keyboardSpace: frames.end.height + this.props.extraSpace });
    } else {
      this.setState({ keyboardSpace: frames.endCoordinates.height + this.props.extraSpace });
    }
  }

  resetKeyboardSpace() {
    this.setState({
      keyboardSpace: 0,
    });
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <ScrollView
          ref={'scrollView'}
          keyboardShouldPersistTaps
          keyboardDismissMode={'interactive'}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
          {this.props.children}
          <View style={{ height: this.state.keyboardSpace, left: 0, right: 0, bottom: 0 }} />
        </ScrollView>
      );
    } else {
      <AndroidKeyboardAwareScrollView
        ref={'scrollView'}
        keyboardShouldPersistTaps
        keyboardDismissMode={'interactive'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <View collapsable={false}>
          {this.props.children}
        </View>
        <View style={{ height: this.state.keyboardSpace, left: 0, right: 0, bottom: 0 }} />
      </AndroidKeyboardAwareScrollView>
    }
  }
}

ScrollViewSmart.propTypes = propTypes;
ScrollViewSmart.defaultProps = defaultProps;

export default ScrollViewSmart;
