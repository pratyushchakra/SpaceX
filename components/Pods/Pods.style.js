import css from 'styled-jsx/css';

const PodStyles = css`
.pod {
    text-align: center;
    background: #fff;
    padding: 15px;
    margin: 0 15px 15px 0;
    font-size:14px;
}
img {
    width: 100%;
}
.text-holder {
    text-align: left;
    display: flex;
    margin-bottom: 6px;
}
.bold-text {
    font-weight: bold;
    margin-right: 5px;
}
.image-container {
    background: #eee;
    margin: 0 auto;
}
.mission-name {
    text-align: left;
    font-weight: bold;
    color: #485499;
    margin: 10px 0;
    font-size: 15px;
}
@media only screen and (max-width: 700px) {
.pod {
    margin: 0 0 15px 0;
}
}
`
export default PodStyles;