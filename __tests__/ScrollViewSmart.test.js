/**
 * eslint-disable
 */

import { View, TextInput } from 'react-native';
import React from 'react';
import { expect as expectChai, should } from 'chai';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ScrollViewSmart from '../lib/ScrollViewSmart';

describe('ScrollViewSmart', () => {
  let component;
  let bottomView;
  let textInput;

  it('renders correctly', () => {
    const tree = renderer.create(<ScrollViewSmart />).toJSON();
    expect(tree).toMatchSnapshot();
  });

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

  it('it should render 2 View component', () => {
    expectChai(bottomView).to.have.length(2);
  });

  it('it should render 1 TextInput component', () => {
    expectChai(textInput).to.have.length(1);
  });

  it('should have props for title and address', () => {
    expectChai(component.props().extraSpace).to.equal(0);
    expectChai(component.props().nodeHeight).to.equal(64);
    expectChai(component.props().tabFooter).to.equal(0);
  });
});
