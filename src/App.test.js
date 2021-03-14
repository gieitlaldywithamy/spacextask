import { render } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  expect(document.title).toEqual('SpaceX Launches');
});
