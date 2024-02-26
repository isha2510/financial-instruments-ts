
import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import App from "../App";

describe('App', () => {
  test('Renders Financial Instruments', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Financial Instruments')
  });
});