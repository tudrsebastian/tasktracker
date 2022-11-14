import { render, screen } from '@testing-library/react';
import Register from '../pages/routes/Register';
import '@testing-library/jest-dom';

describe('Register', () => {
  it('register should be rendered', () => {
    render(<Register />);

    const myElement = screen.getByText('Register Page');

    expect(myElement).toBeInTheDocument();
  });
});
