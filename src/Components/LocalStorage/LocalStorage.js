const getStoredJobApplication = () => {

    const storedJob = localStorage.getItem('job-application');
    if (storedJob) {
        return JSON.parse(storedJob);
    }
    return [];
}

const saveJobApplication = (id) => {
    const storedJobs = getStoredJobApplication();

    const exists = storedJobs.find(job => job.id === parseInt(id));
    if (!exists) {
        storedJobs.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobs));
    } else {
        console.log("Job already exists in the list");
    }
}

export { saveJobApplication, getStoredJobApplication };