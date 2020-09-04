import css from 'styled-jsx/css';

const PortfolioStyles = css`
.page-layout {
    display:flex;
}
.filters-container{
    width: 16%;
    background: #fff;
    min-width: 170px;
}
.pods-container {
    width: 84%;
    display: grid;
    margin: 0 20px;
}

@media only screen and (max-width: 700px) {
.pods-container {
    grid-template-columns: 100%;
}
.page-layout {
    flex-direction :column;
    text-align: center;
}
.filters-container{
    width: 90%;
    margin: 0 auto;
}
.pods-container {
    width: 90%;
    margin: 0 auto;
}
}
@media only screen and (min-width: 700px) {
.pods-container {
    grid-template-columns: 50% 50%;
}
}
@media only screen and (min-width: 1024px) {
.pods-container {
    grid-template-columns: 25% 25% 25% 25%;
}
}
`
export default PortfolioStyles;