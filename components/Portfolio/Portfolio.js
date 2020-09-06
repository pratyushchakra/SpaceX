import Filters from '../Filters/Filters';
import styles from './Portfolio.style';
import Pods from '../Pods/Pods'
const Portfolio = () => {
    return (
        <div className="page-layout">
            <div className="filters-container">
                <Filters />
            </div>
            <div className="pods-container">
                <Pods />
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Portfolio