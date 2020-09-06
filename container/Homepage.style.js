import css from 'styled-jsx/css';

const HomepageStyles = css.global`
html {
    background: #eee;
}
p, b {
    margin: 0;
}
button {
    outline: 0;
    border: 0;
    cursor: pointer;
}
footer {
    width: max-content;
    margin: 0 auto;
    display: flex;
}

`;

export default HomepageStyles;