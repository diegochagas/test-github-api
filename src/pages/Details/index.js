import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core';

import { Container } from './styles';
import { fetchOrganizationRequest } from '../../store/modules/organization/actions';

function Details() {
    const dispatch = useDispatch();
    const location = useLocation();
    const login = location.pathname.replace('/details/', '');
    const organization = useSelector(state => state.organization);

    useEffect(() => {
        async function getOrganization() {
            await dispatch(fetchOrganizationRequest(login));
        }

        getOrganization();
    }, [login, dispatch]);
    
    return (
        <Container>
            {!organization.isLoading && organization.items && (
                <div className="card">
                    <img
                        src={organization.items.avatar_url}
                        className="card-img-top"
                        alt={`${organization.items.login} avatar`}
                    />
                    
                    <div className="card-body">
                        <h5 className="card-title">{organization.items.name}</h5>

                        <p className="card-text">{organization.items.description}</p>

                        <p className="card-text">
                            <small className="text-muted">{organization.items.location}</small>
                        </p>
                    </div>

                    <h5 className="card-title">Repositórios</h5>

                    {organization.items.repos.length > 0 && (
                        <ul className="list-group list-group-flush repositories">
                            {organization.items.repos.map(repo => (
                                <li className="list-group-item" key={repo.id}>
                                    <h6>{repo.name}</h6>

                                    <p>{repo.description}</p>
                                </li>
                            ))}
                        </ul>
                    )}

                    {organization.items.repos.length === 0 && (
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Sem repositórios</li>
                        </ul>
                    )}

                    <div className="card-body">
                        <Link to="/" className="btn btn-primary">Voltar</Link>
                    </div>
                </div>
            )}

            {organization.isLoading && <LinearProgress />}
        </Container>
    );
}

export default Details;