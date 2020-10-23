import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from './styles';
import { fetchOrganizationsRequest } from '../../store/modules/organizations/actions';
import history from '../../services/history';

function Home() {
    const dispatch = useDispatch();
    const organizations = useSelector(state => state.organizations);    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const columns = [
        { id: 'avatar_url', label: '' },
        { id: 'login', label: 'Login' },
        { id: 'description', label: 'Descrição' },
    ];
    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
        },
    });
    const classes = useStyles();

    useEffect(() => {
        async function getOrganizations() {
            await dispatch(fetchOrganizationsRequest());   
        }

        getOrganizations();
    }, [dispatch]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);

        setPage(0);
    };

    const checkMaxCharacterPerRow = text => {
        if (text === null) return '';

        return text.length > 40 ? `${text.substring(0, 40)}...` : text;
    }

    const goToDetails = login => {
        history.push(`/#/details/${login}`);

        window.location.reload();
    }

    return (
        <Container>
            <div className="card card-search">
                <div className="card-header">
                    Lista de organizações
                </div>

                <div className="card-body">
                    {!organizations.isLoading && organizations.items && (
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {organizations.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.id}
                                                    onClick={() => goToDetails(row.login)}
                                                >
                                                {columns.map((column) => {
                                                    const value = row[column.id];

                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.id === 'avatar_url' ? 
                                                                <img src={value} alt={`${row.login} logo`} />
                                                            : checkMaxCharacterPerRow(value)}
                                                        </TableCell>
                                                    );
                                                })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={organizations.items.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                    )}

                    {organizations.isLoading && <LinearProgress />}
                </div>
            </div>
        </Container>
    );
}

export default Home;