import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../LocalStorage/LocalStorage";

const AppliedJobs = () => {


    const data = useLoaderData();
    useEffect(() => {

        const storedJobId = getStoredJobApplication();
        if (storedJobId.length > 0) {
            const appliedJobs = data.filter(job => job.includes(storedJobId))
        }

    }, [])



    return (
        <div>
            {
                /* <h1>Applied Jobs</h1> */
            }
        </div>
    );
};

export default AppliedJobs;