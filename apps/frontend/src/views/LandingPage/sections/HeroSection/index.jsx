import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from '../../LandingPage.module.scss';
import NavBarTop from '../../../../components/NavBarTop';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();
  const splittedRoute = router.route.split('/');
  const mainRoute = splittedRoute[1];
  return (
    <Container
      fluid
      style={{ padding: 0 }}
    >
      <NavBarTop mainRoute={mainRoute} />
      <div className={styles.home}>
        <div className={styles.homeText}>
          <h4 className={styles.textH4}>Seja bem-vindo a Fox Delivery</h4>
          <h1 className={styles.textH1}>Sua plataforma de entregadores</h1>
          <p>
            Ajudamos lojas e restaurantes a terem entregas de forma rapida e
            eficiente com um amplo raio de entrega.
          </p>
          <a
            href="#"
            className={styles.homeBtn}
          >
            Fazer cadastro
          </a>
        </div>
        <div className={styles.homeImg}>
          <img
            src="/img/bannerFox.png"
            alt="bannerFox"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;