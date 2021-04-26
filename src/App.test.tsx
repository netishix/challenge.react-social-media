import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the app\'s header', () => {
    const app = render(<App />);
    const header = app.container.querySelector('#header');
    expect(header).toBeInTheDocument();
  });

  it('should render the app\'s footer', () => {
    const app = render(<App />);
    const footer = app.container.querySelector('#footer');
    expect(footer).toBeInTheDocument();
  });
});
