import { Link } from "react-router-dom";

const Job = ({ job }) => {


    const { id, company_name, job_title, job_type, job_description, location, logo, remote_or_onsite, salary } = job || {};

    return (
        <div className=" shadow-sm shadow-gray-500 p-5 space-y-3 rounded">

            <div>
                <img src={logo} alt="" />
            </div>
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">{job_title}</h1>
                <h3 className="font-medium text-gray-500">{company_name}</h3>

                <div className="flex items-center gap-2">
                    <button className="btn btn-sm border-blue-400 text-blue-400 capitalize">{job_type}</button>
                    <button className="btn btn-sm border-blue-400 text-blue-400 capitalize">{remote_or_onsite}</button>
                </div>

                <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-1"><img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/location2.png?raw=true" alt="" />{location}</span>

                    <span className="flex items-center gap-1"><img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/money.png?raw=true" alt="" />{salary}</span>
                </div>
                <Link to={`/jobDetails/${id}`}><button className="btn bg-purple-600 btn-md text-white mt-2">View Details</button></Link>
            </div>

        </div>
    );
};

export default Job;