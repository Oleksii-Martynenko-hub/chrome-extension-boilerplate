import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('appTest', () => {
  test('render text', () => {
    // given
    const text = 'content view';

    // when
    render(<div>content view</div>);

    // then
    screen.getByText(text);
  });
});
