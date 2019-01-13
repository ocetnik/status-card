import React from 'react';
import renderer from 'react-test-renderer';

import Badge from './Badge';

it('renders with wrapper', () => {
  const tree = renderer
    .create(<Badge children={<div>badge</div>} renderImage={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without wrapper', () => {
  const tree = renderer
    .create(<Badge children={<div>badge</div>} renderImage={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
