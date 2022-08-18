import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Exercicio 1', () => {
  test('Testando se o texto Meu portifolio aparece na tela', () => {
    const { getByText } = renderWithRouter(<App />);
    const portfText = getByText(/portifólio/i);
    expect(portfText).toBeInTheDocument();
  });

  test('Testando se os Links estão funcionando', () => {
    const { getByRole } = renderWithRouter(<App />);

    const home = getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();

    const about = getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();

    const projects = getByRole('link', { name: 'Projects' });
    expect(projects).toBeInTheDocument();

    const contact = getByRole('link', { name: 'Contact' });
    expect(contact).toBeInTheDocument();
  });

  test('Verifica o titulo dos componentes', () => {
    const { getByRole, getByText } = renderWithRouter(<App />);
    const portfText = getByText(/portifólio/i);

    const about = getByRole('link', { name: 'About' });
    userEvent.click(about);
    expect(portfText).not.toBeInTheDocument();

    const projects = getByRole('link', { name: 'Projects' });
    userEvent.click(projects);
    expect(portfText).not.toBeInTheDocument();

    const contact = getByRole('link', { name: 'Contact' });
    userEvent.click(contact);
    expect(portfText).not.toBeInTheDocument();
  });

  test('Verifica a minha foto', () => {
    const photo = 'http://localhost/Minha_foto.jpg';
    const { getByRole } = renderWithRouter(<App />);
    const myPhoto = getByRole('img', { name: /Foto de Luídi/i });
    expect(myPhoto.src).toBe(photo);
    expect(myPhoto).toBeInTheDocument();
  });
});
