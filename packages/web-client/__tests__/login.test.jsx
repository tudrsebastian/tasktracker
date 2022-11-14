import { render, screen } from '@testing-library/react';
import Login from '../pages/routes/Login';
import '@testing-library/jest-dom';

describe('Login', () => {
  it(' should be rendered', () => {
    render(<Login />);

    const myElement = screen.getByText('Login Page!');

    expect(myElement).toBeInTheDocument();
  });
});
