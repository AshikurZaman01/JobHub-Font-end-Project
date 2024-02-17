import FeaturesJob from "../../FeaturesJob/FeaturesJob";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto">
                <Category></Category>
                <FeaturesJob></FeaturesJob>

            </div>
        </div>
    );
};

export default Home;