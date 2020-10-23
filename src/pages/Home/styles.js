import styled from 'styled-components';

export const Container = styled.div`
    max-width: 650px;
    width: 100%;
    padding: 20px;

    table {
        th {
            font-weight: bold;
        }

        img {
            width: 50px;
            height: 50px;
        }

        .MuiTableCell-body {
            cursor: pointer;
        }
    }
`;
