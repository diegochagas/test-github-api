import styled from 'styled-components';

export const Container = styled.div`
    max-width: 650px;
    width: 100%;
    padding: 20px;

    .card {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 768px;
        padding: 20px;

        img {
            max-width: 18rem;
        }

        .repositories {
            max-height: 500px;
            overflow-y: auto;
        }
    }
`;
