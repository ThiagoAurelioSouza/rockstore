import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="inner-content">
                <div className="left-side">
                    <h2>Semana de ofertas imperdíveis! Qualidade e preço justo em um só lugar.</h2>
                    <p>
                        As melhores condições te esperam. Preparamos ofertas rápidas e atrativas para quem está sempre de olho em uma boa oportunidade. Navegue pelas nossas ofertas e descubra condições exclusivas, válidas por tempo limitado.
                    </p>
                    <Link to="/products"className="see-more-btn">
                        <span>Ver Agora</span>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>
                </div>
                <div className="right-side">
                    <img src="/images/header-image.png" alt="Products" />
                </div>
            </div>
        </header>
    );
}



