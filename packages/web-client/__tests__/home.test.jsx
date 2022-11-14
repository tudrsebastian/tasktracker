import { render, screen } from '@testing-library/react';
import Home from '../pages/routes/Home';
import '@testing-library/jest-dom';
describe('Home', () => {
  it('should home be renderd', () => {
    render(<Home />);

    const myElement = screen.getByText('Homepage!');
    expect(myElement).toBeInTheDocument();
  });
});
