import axios from "axios";
import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturesJob = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('jobs.json')
            .then(res => setJobs(res.data))
    }, [])

    console.log(jobs);

    return (
        <div className="mt-20">

            <section className="mb-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-semibold">Featured Jobs</h2>
                    <p className="text-xl font-normal text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, aperiam.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20 rounded">
                    {
                        jobs.map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
            </section>

        </div>
    );
};

export default FeaturesJob;