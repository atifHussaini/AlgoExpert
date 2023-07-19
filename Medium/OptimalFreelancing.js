function optimalFreelancing(jobs) {
    const sortedJobs = jobs.sort((a,b) => a.deadline - b.deadline || b.payment - a.payment);
    console.log(sortedJobs)
    let days = 1;
    let total = 0;
  
    for (let i = 0; i < sortedJobs.length; i++) {
      const currentJob = sortedJobs[i];
      const jobDeadline = currentJob["deadline"];
      const jobPayment = currentJob["payment"];
  
      if (days <= jobDeadline) {
        total += jobPayment;
        days++;
      }
  
      if (days > 7) {
        return total;
      }
    }
    return total;
}

console.log(optimalFreelancing([
    {
      "deadline": 1,
      "payment": 1
    },
    {
      "deadline": 2,
      "payment": 1
    },
    {
      "deadline": 3,
      "payment": 1
    },
    {
      "deadline": 4,
      "payment": 1
    },
    {
      "deadline": 5,
      "payment": 1
    },
    {
      "deadline": 6,
      "payment": 1
    },
    {
      "deadline": 7,
      "payment": 1
    },
    {
      "deadline": 8,
      "payment": 1
    },
    {
      "deadline": 9,
      "payment": 1
    },
    {
      "deadline": 10,
      "payment": 1
    }
  ]))