import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function NotFound() {
    return (
        <Container className="card">
            <div className="card-body">
                <h5 className="card-title">Erro 404</h5>

                <p className="card-text">Página não encontrada</p>

                <Link to="/" className="card-link">Clique aqui para ir para a home</Link>
            </div>
        </Container>
    );
}

export default NotFound;