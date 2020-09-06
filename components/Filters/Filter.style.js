import css from 'styled-jsx/css';

const FilterStyles = css`
.filters {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
}
.filter-name-text {
    text-align: center;
}
.date-btns {
    display: grid;
    grid-template-columns: 50% 50%;
}
.border-bottom {
    border-bottom: 2px solid #e2dfe0;
    margin: 2px 40px 4px 40px;
}
button {
    color: #000;
    background: #c5e09b;
    border-radius: 2px;
    width: 65px;
    height: 25px;
}
.button-wrapper {
    margin: 0 auto;
    margin-top: 7px;
    margin-bottom: 7px;
}
.selected {
    background: #7cba01;
}
`
export default FilterStyles;