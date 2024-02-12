
const Job = ({ job }) => {

    const { company_name, job_title, job_type, job_description, location, logo, remote_or_onsite, salary } = job || {};

    return (
        <div className=" shadow-sm shadow-gray-500 w-2/5 p-5 space-y-3">

            <div>
                <img src={logo} alt="" />
            </div>
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">{job_title}</h1>
                <h3 className="font-medium text-gray-500">{company_name}</h3>
                <button className="btn btn-sm border-blue-400 text-blue-400 capitalize">{job_type}</button>
                
            </div>

        </div>
    );
};

export default Job;