import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../LocalStorage/LocalStorage";
import StoredJobs from "./storedJobs";

const AppliedJobs = () => {

    const [storedJobId, setStoredJobId] = useState([]);
    const jobsData = useLoaderData();

    useEffect(() => {

        const storedJobId = getStoredJobApplication();

        if (jobsData.length > 0) {
            const storedJobIds = jobsData.filter(job => storedJobId.includes(job.id))
            setStoredJobId(storedJobIds);
        }

    }, [jobsData])



    return (
        <div className="w-10/12 mx-auto">

            <div className="flex justify-end mb-10">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-10">
                {
                    storedJobId.map(job => <StoredJobs job={job} key={job.id}></StoredJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;