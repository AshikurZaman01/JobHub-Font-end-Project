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
        <div>
            <div className="grid grid-cols-1 gap-6 mb-10">
                {
                    storedJobId.map(job => <StoredJobs job={job} key={job.id}></StoredJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;