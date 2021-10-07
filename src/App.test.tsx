import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import VisualStudioCode from './views/VisualStudioCode/VisualStudioCode';
import Terminal from './views/Terminal/Terminal';
import Settings from './views/Settings/Settings';


test('Renders Icons', () => {
  render(<App />);
  const VisualStudioCode = screen.getByText('VisualStudioCode');
  const TerminalIcon = screen.getByText('Terminal');
  const SettingsIcon = screen.getByText('Settings');
  expect(VisualStudioCode).toBeInTheDocument();
  expect(TerminalIcon).toBeInTheDocument();
  expect(SettingsIcon).toBeInTheDocument();
});

test('Renders VisualStudioCode widnow', () => {
  render(<VisualStudioCode />)
  const EXPLORERdiv = screen.getByText('EXPLORER')
  expect(EXPLORERdiv).toBeInTheDocument();
})

test('Renders Terminal widnow', () => {
  render(<Terminal />)
  const TerminalNavbarTitle = screen.getByText('Terminal')
  expect(TerminalNavbarTitle).toBeInTheDocument();
})

test('Renders Settings widnow', () => {
  render(<Settings />)
  const SettingsNavbarTitle = screen.getByText('Settings')
  expect(SettingsNavbarTitle).toBeInTheDocument();
})



