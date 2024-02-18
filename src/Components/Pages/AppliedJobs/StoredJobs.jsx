
const StoredJobs = ({ job }) => {
    console.log(job)

    const { company_name, job_title, job_type, location, salary } = job || {}
    return (
        <div className="mx-auto">

            <div className="w-[400px] border rounded shadow-md shadow-gray-400 p-5 space-y-2">
                <h2 className="text-2xl font-bold">{job_title}</h2>
                <h4 className="text-xl text-gray-600">{company_name}</h4>

                <div className="flex justify-between">
                    <h4 className="border border-blue-400 rounded text-blue-400 px-2">{job_type}</h4>
                    <h4 className="border border-blue-400 rounded text-blue-400 px-2">{location}</h4>
                    <h4 className="border border-blue-400 rounded text-blue-400 px-2">{salary}</h4>
                </div>
            </div>
        </div>
    );
};

export default StoredJobs;