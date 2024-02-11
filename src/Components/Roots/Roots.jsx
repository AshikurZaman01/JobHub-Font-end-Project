import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Roots = () => {
    return (
        <div>
            <div >
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;