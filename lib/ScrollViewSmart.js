import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  Keyboard,
  ScrollView,
  View,
} from 'react-native';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  extraSpace: PropTypes.number,
  nodeHeight: PropTypes.number,
  tabFooter: PropTypes.number,
};

const defaultProps = {
  extraSpace: 0,
  nodeHeight: 64,
  tabFooter: 0,
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

  inputFocused(reactNode) {
    if (Platform.OS === 'ios') {
      setTimeout(() => {
        const scrollResponder = this.refs.scrollView.getScrollResponder();
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          reactNode,
          this.props.nodeHeight,
          true,
        );
      }, 50);
    }
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
    return (
      <ScrollView
        ref={'scrollView'}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode={'interactive'}
        showsVerticalScrollIndicator={false}
        {...this.props}
      >
        {this.props.children}
        <View style={{ height: this.state.keyboardSpace + this.props.tabFooter }} />
      </ScrollView>
    );
  }
}

ScrollViewSmart.propTypes = propTypes;
ScrollViewSmart.defaultProps = defaultProps;

export default ScrollViewSmart;
