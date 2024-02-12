import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-4xl font-bold mb-20 ">Opps Page Not Found</h1>

            <div>
                <button onClick={() => navigate(-1)} className="btn btn-error capitalize text-white">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;