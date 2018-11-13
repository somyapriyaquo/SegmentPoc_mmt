import React, { Component } from 'react';
import { View, Text, TextInput, Animated, StyleSheet } from 'react-native';
// import * as ColorConstants from '../../utility/constants/ColorConstants';

export class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    // this.rnTextInput = React.createRef();
  }

  state = {
    isFocused: false
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === '' ? 0 : 1
    );
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200
    }).start();
  }

  onChangeText = text => {
    if (typeof this.props.onChangeText === 'function') {
      this.props.onChangeText(text);
    }
  };

  getErrorElement() {
    if (this.props.isError) {
      return (
        <Text style={floatingLabelInputStyles.errorLabel}>
          {this.props.errorDescription}
        </Text>
      );
    }
    return;
  }

  becomeFirstResponder() {
    // this.rnTextInput.current.focus();
  }

  resignFirstResponder() {
    // this.rnTextInput.current.blur();
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur();
    }
  };

  handleFocus = () => {
    this.setState({ isFocused: true, isError: false });
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus();
    }
  };

  render() {
    const { label, ...props } = this.props;

    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0]
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14]
      }),
      color: '#929ca5'
    };

    const textInputStyle = {
      marginBottom: 5
    };

    return (
      <View style={{ paddingTop: 18, marginBottom: 10 }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>

        <TextInput
          {...props}
          style={[floatingLabelInputStyles.textInput, textInputStyle]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChangeText={this.onChangeText}
          blurOnSubmits
          // ref={this.rnTextInput}
        />
        <View style={{ height: 1, backgroundColor: 'red' }} />
        {/* {this.getErrorElement()} */}
      </View>
    );
  }
}

const floatingLabelInputStyles = StyleSheet.create({
  textInput: {
    height: 30,
    fontSize: 18,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#929ca5'
  }
});
