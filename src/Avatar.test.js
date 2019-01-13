import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './Avatar';

it('renders with image', () => {
  const tree = renderer
    .create(<Avatar children={<div>badge</div>} imageUrl={'image-url'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without image', () => {
  const tree = renderer.create(<Avatar children={<div>badge</div>} />).toJSON();
  expect(tree).toMatchSnapshot();
});
