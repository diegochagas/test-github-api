import { createGlobalStyle } from 'styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .App {
        text-align: center;
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    a {
        color: inherit;
        
        &:hover, &:focus {
            text-decoration: none;
            color: inherit;
        }
    }
`;