import { render, screen } from '@testing-library/react';
// import App from './App';
import Header from './components/Header';
import Banner from './components/Banner';
import Section from './components/Section';
import Footer from './components/Footer';
import Form from './components/Form';


test('Testing Header Component', () => {
  render(<Header />);
  const Soluções = screen.getByText(/Soluções/i);
  expect(Soluções).toBeInTheDocument();

  const ParaVocê = screen.getByText(/Para Você/i);
  expect(ParaVocê).toBeInTheDocument();

  const Contato = screen.getByText(/Contato/i);
  expect(Contato).toBeInTheDocument();

  const Mais = screen.getByText(/Mais/i);
  expect(Mais).toBeInTheDocument();

  const Login = screen.getByText(/Login/i);
  expect(Login).toBeInTheDocument();
});

test('Testing Banner Component', () => {
  render(<Banner />);
  const Title = screen.getByText(/O emprego dos seus sonhos/i);;
  expect(Title).toBeInTheDocument();
});

test('Testing Section Component', () => {
  render(<Section />);
  const Title = screen.getByText(/emprego/i);;
  expect(Title).toBeInTheDocument();

  const firtSubTitle = screen.getByText(/disposição/i);;
  expect(firtSubTitle).toBeInTheDocument();

  const secondSubTitle = screen.getByText(/transparência/i);;
  expect(secondSubTitle).toBeInTheDocument();

  const thirdSubTitle = screen.getByText(/taxas/i);;
  expect(thirdSubTitle).toBeInTheDocument();

  const fourthSubTitle = screen.getByText(/assertiva/i);;
  expect(fourthSubTitle).toBeInTheDocument();
});

test('Testing Footer Component', () => {
  render(<Footer />);
  const firtSubTitle = screen.getByText(/sobre/i);;
  expect(firtSubTitle).toBeInTheDocument();

  const secondSubTitle = screen.getByText(/responsabilidades/i);;
  expect(secondSubTitle).toBeInTheDocument();

  const thirdSubTitle = screen.getByText(/contato/i);;
  expect(thirdSubTitle).toBeInTheDocument();

  const fourthSubTitle = screen.getByText(/privacidade/i);;
  expect(fourthSubTitle).toBeInTheDocument();
});

test('Testing Form Component', () => {
  render(<Form />);
  const label1 = screen.getByText(/Nome Completo/i);;
  expect(label1).toBeInTheDocument();

  const label2 = screen.getByText(/E-mail/i);;
  expect(label2).toBeInTheDocument();

  const label3 = screen.getByText(/Cargo Pretendido/i);;
  expect(label3).toBeInTheDocument();

  const label4 = screen.getByText(/Data de Nascimento/i);;
  expect(label4).toBeInTheDocument();

  const label5 = screen.getByText(/Sexo/i);;
  expect(label5).toBeInTheDocument();

  const label6 = screen.getByText(/Estado Civil/i);;
  expect(label6).toBeInTheDocument();

  const label7 = screen.getByText(/CEP/i);;
  expect(label7).toBeInTheDocument();
});