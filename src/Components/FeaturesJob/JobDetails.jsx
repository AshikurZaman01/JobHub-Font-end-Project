import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const findData = data.find((data) => data.id == parseInt(id));

    const { company_name, job_title, job_type, job_description, job_responsibility, educational_requirements, experiences, contact_information, location, logo, remote_or_onsite, salary } = findData || {};

    const notify = () => {
        toast("Applied Job Successfully");
    };

    return (
        <div className="w-full sm:w-10/12 mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                <section className="sm:col-span-2">
                    <div className="flex flex-col">
                        <h1 className="font-bold">Job Description:</h1>
                        <p className="text-gray-500">{job_description}</p>
                    </div>

                    <div className="flex flex-col mt-8">
                        <h1 className="font-bold">Job Responsibility:</h1>
                        <p className="text-gray-500">{job_responsibility}</p>
                    </div>

                    <div className="mt-8">
                        <h1 className="font-bold">Education Requirements:</h1>
                        <p className="text-gray-500">{educational_requirements}</p>
                    </div>

                    <div className="mb-10 mt-8">
                        <h1 className="font-bold">Experiences:</h1>
                        <p className="text-gray-500">{experiences}</p>
                    </div>
                </section>

                <section className="flex flex-col justify-between">
                    <div className="bg-blue-200 p-7 rounded">
                        <h1 className="font-bold">Job Details</h1>
                        <div className="divider"></div>

                        <div className="space-y-2">
                            <span className="flex items-center space-x-1"><img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/money.png?raw=true" alt="" /><h1 className="font-semibold">Salary:</h1><span className="text-gray-500">{salary} (Per Month)</span></span>

                            <span className="flex items-center space-x-1"><img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/calendar.png?raw=true" alt="" /><h1 className="font-semibold">Job Title:</h1><span className="text-gray-500">{job_title}</span></span>

                            <h1 className="font-bold pt-5">Contact Information</h1>
                        </div>

                        <div className="divider"></div>

                        <div className="space-y-3">
                            <span className="flex items-center space-x-1"><img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/phone.png?raw=true" alt="" /><h1 className="font-semibold">Phone:</h1><span className="text-gray-500">{contact_information["phone"]}</span></span>

                            <span className="flex items-center space-x-1"><img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/email.png?raw=true" alt="" /><h1 className="font-semibold">Email:</h1><span className="text-gray-500">{contact_information["email"]}</span></span>

                            <span className="flex  items-center space-x-1"><img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/location2.png?raw=true" alt="" /><h1 className="font-semibold">Address:</h1><span className="text-gray-500">{contact_information["address"]}</span></span>
                        </div>
                    </div>

                    <div>
                        <button onClick={notify} className="btn bg-purple-500 w-full text-white mt-6 mb-20">Apply Now</button>
                        <ToastContainer />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default JobDetails;
