/**
 * eslint-disable
 */

import { View, TextInput } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import ScrollViewSmart from '../lib/ScrollViewSmart';

describe('ScrollViewSmart', () => {
  let component;
  let bottomView;
  let textInput;

  beforeEach(() => {
    component = shallow(
      <ScrollViewSmart>
        <View style={{ flex: 1, marginTop: 50 }}>
          <TextInput />
        </View>
      </ScrollViewSmart>
    );
    bottomView = component.find('View');
    textInput = component.find('TextInput');
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('it should render 1 component', () => {
    expect(component).toHaveLength(1);
  });

  it('it should render 2 View component', () => {
    expect(bottomView).toHaveLength(2);
  });

  it('it should render 1 TextInput component', () => {
    expect(textInput).toHaveLength(1);
  });

  it('should have props for title and address', () => {
    expect(component.props().extraSpace).toEqual(0);
    expect(component.props().nodeHeight).toEqual(64);
    expect(component.props().tabFooter).toEqual(0);
  });
});
