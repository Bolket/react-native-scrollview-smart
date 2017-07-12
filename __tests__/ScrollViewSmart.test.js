/**
 * eslint-env jest
 */

import 'react-native';
import React from 'react';
import ScrollViewSmart from '../lib/ScrollViewSmart';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ScrollViewSmart />).toJSON();
  expect(tree).toMatchSnapshot();
});
