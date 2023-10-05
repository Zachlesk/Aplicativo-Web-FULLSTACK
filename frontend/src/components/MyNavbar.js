import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import reback from '../assets/reback.png'
import './styles/MyNavbar.css'

function MyNavbar() {
  const location = useLocation();

  const getTitleAndDescription = () => {
    switch (location.pathname) {
      case '/mariposas':
        return {
          title: 'Mariposas',
          description: 'Fichas técnicas.',
        };
      case '/jaulas':
        return {
          title: 'Jaulas',
          description: '¡Conoce las jaulas de nuestro mariposario!',
        };
      case '/alimentacion':
        return {
          title: 'Alimentación',
          description: 'Las mariposas tienen muchas maneras de alimentarse. ¡Descubre cuáles!',
        };
      case '/visitantes':
        return {
          title: 'Visitantes',
          description: 'Registro de nuestros visitantes en el mariposario.',
        };
      case '/observaciones':
        return {
          title: 'Observaciones',
          description: 'Nuestros visitantes tienen sus observaciones y reseñas sobre nuestro mariposario.',
        };
      default:
        return {
          title: '',
          description: 'Bienvenido a Mariposario Celestialfly.',
        };
    }
  };

  const { title, description } = getTitleAndDescription();

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        <img src={reback} alt="Mariposa" className="mariposa" width="60" height="40" />
      </Link>
      <div className='info'>
      <h2 className="mr-auto">
        {title}
      </h2>
      <h5 className="mr-auto">
        {description}
      </h5>
      </div>
    </nav>
  );
}

export default MyNavbar;
