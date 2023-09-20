import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  it('displays its value when rendered', () => {
    const { getByDisplayValue } = render(
      <Input value={'test'} onChange={() => {}} />
    );
    expect(getByDisplayValue('test')).toBeTruthy();
  });
});
