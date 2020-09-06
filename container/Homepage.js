import Portfolio from '../components/Portfolio/Portfolio';
import styles from './Homepage.style';
// import { Helment } from 'react-helmet';
const Homepage = () => (
    <div>
        {/* <Helment>
            <title>SpaceX App</title>
            <meta property="og:title" content="SpaceX App"></meta>
        </Helment> */}
        <header>
            <h1>SpaceX Launch Program</h1>
        </header>
        <section>
            <Portfolio />
        </section>
        <footer>
            <b>Developed By:</b><p>Pratyush Chakra</p>
        </footer>
        <style jsx>{styles}</style>
    </div>
);

export default Homepage