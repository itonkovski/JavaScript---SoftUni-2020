function scholarship(income, avgSucc, minSalary) {
    income = +income;
    avgSucc = +avgSucc;
    minSalary = +minSalary;
    let socialScholarship = minSalary * 0.35;
    let excellentScholarship = avgSucc * 25;
    if (
      avgSucc >= 5.5 &&
      income < minSalary &&
      socialScholarship >= excellentScholarship
    ) {
      console.log(
        `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
      );
    } else if (
      avgSucc >= 5.5 &&
      income < minSalary &&
      socialScholarship < excellentScholarship
    ) {
      console.log(
        `You get a scholarship for excellent results ${Math.floor(
          excellentScholarship
        )} BGN`
      );
    } else if (avgSucc > 4.5 && income < minSalary) {
      console.log(
        `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
      );
    } else if (avgSucc >= 5.5) {
      console.log(
        `You get a scholarship for excellent results ${Math.floor(
          excellentScholarship
        )} BGN`
      );
    } else {
      console.log(`You cannot get a scholarship!`);
    }
  }