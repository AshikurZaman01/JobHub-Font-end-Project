import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../LocalStorage/LocalStorage";

const AppliedJobs = () => {


    const data = useLoaderData();
    useEffect(() => {

        const storedJobId = getStoredJobApplication();
        console.log(storedJobId);       
                        

    }, [data])



    return (
        <div>
            {
                /* <h1>Applied Jobs</h1> */
            }
        </div>
    );
};

export default AppliedJobs;