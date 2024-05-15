// Theft and Burglary
const theftForm = document.getElementById("theft-and-burglary");
if (theftForm) {
  theftForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let theftType = event.target["theft-type"].value,
      dateAndTime = event.target["theft-date-time"].value,
      theftLocation = event.target["theft-location"].value,
      theftDesc = event.target["theft-description"].value,
      stolenItems = event.target["stolen-items"].value,
      theftSuspect = event.target["theft-suspect"].value,
      theftWitness = event.target["theft-witnesses"].value,
      theftEvidence = event.target["theft-evidence"].files;

    if (
      !theftType ||
      !dateAndTime ||
      !theftLocation ||
      !theftDesc ||
      !stolenItems ||
      !theftSuspect ||
      !theftWitness ||
      !theftEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(theftType);
      console.log(dateAndTime);
      console.log(theftLocation);
      console.log(theftDesc);
      console.log(stolenItems);
      console.log(theftSuspect);
      console.log(theftWitness);
      console.log(theftEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Vandalism
const vandalismForm = document.getElementById("vandalism");
if (vandalismForm) {
  vandalismForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let vandalismType = event.target["vandalism-type"].value,
      dateAndTime = event.target["vandalism-date-time"].value,
      vandalismLocation = event.target["vandalism-location"].value,
      vandalismDesc = event.target["vandalism-description"].value,
      damageDesc = event.target["vandalism-damage"].value,
      vandalismSuspect = event.target["vandalism-suspect"].value,
      vandalismWitness = event.target["vandalism-witnesses"].value,
      vandalismEvidence = event.target["vandalism-evidence"].files;

    if (
      !vandalismType ||
      !dateAndTime ||
      !vandalismLocation ||
      !vandalismDesc ||
      !damageDesc ||
      !vandalismSuspect ||
      !vandalismWitness ||
      !vandalismEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(vandalismType);
      console.log(dateAndTime);
      console.log(vandalismLocation);
      console.log(vandalismDesc);
      console.log(damageDesc);
      console.log(vandalismSuspect);
      console.log(vandalismWitness);
      console.log(vandalismEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Missing Persons
const missingPersonsForm = document.getElementById("missing-persons");
if (missingPersonsForm) {
  missingPersonsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let missingName = event.target["missing-name"].value,
      dob = event.target["dob"].value,
      dateAndTimeLastSeen = event.target["missing-date-time"].value,
      lastSeenLocation = event.target["missing-location"].value,
      physicalDesc = event.target["physical-description"].value,
      circumstances = event.target["circumstances"].value,
      contactInfo = event.target["contact-information"].value,
      missingEvidence = event.target["missing-evidence"].files;

    if (
      !missingName ||
      !dob ||
      !dateAndTimeLastSeen ||
      !lastSeenLocation ||
      !physicalDesc ||
      !circumstances ||
      !contactInfo ||
      !missingEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(missingName);
      console.log(dob);
      console.log(dateAndTimeLastSeen);
      console.log(lastSeenLocation);
      console.log(physicalDesc);
      console.log(circumstances);
      console.log(contactInfo);
      console.log(missingEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Assault and Battery
const assaultForm = document.getElementById("assault-and-battery");
if (assaultForm) {
  assaultForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let assaultType = event.target["assault-type"].value,
      dateAndTime = event.target["assault-date-time"].value,
      assaultLocation = event.target["assault-location"].value,
      assaultDesc = event.target["assault-description"].value,
      injuries = event.target["assault-injuries"].value,
      assaultSuspect = event.target["assault-suspect"].value,
      assaultWitness = event.target["assault-witnesses"].value,
      assaultEvidence = event.target["assault-evidence"].files;

    if (
      !assaultType ||
      !dateAndTime ||
      !assaultLocation ||
      !assaultDesc ||
      !injuries ||
      !assaultSuspect ||
      !assaultWitness ||
      !assaultEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(assaultType);
      console.log(dateAndTime);
      console.log(assaultLocation);
      console.log(assaultDesc);
      console.log(injuries);
      console.log(assaultSuspect);
      console.log(assaultWitness);
      console.log(assaultEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Cybercrime
const cybercrimeForm = document.getElementById("cybercrime");
if (cybercrimeForm) {
  cybercrimeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let cyberType = event.target["cyber-type"].value,
      dateAndTime = event.target["cyber-date-time"].value,
      platform = event.target["platform"].value,
      cyberDesc = event.target["cyber-description"].value,
      financialDetails = event.target["cyber-financial-details"].value,
      cyberSuspect = event.target["cyber-suspect"].value,
      cyberEvidence = event.target["cyber-evidence"].files;

    if (
      !cyberType ||
      !dateAndTime ||
      !platform ||
      !cyberDesc ||
      !financialDetails ||
      !cyberSuspect ||
      !cyberEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(cyberType);
      console.log(dateAndTime);
      console.log(platform);
      console.log(cyberDesc);
      console.log(financialDetails);
      console.log(cyberSuspect);
      console.log(cyberEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Domestic Violence
const domesticViolenceForm = document.getElementById("domestic-violence");
if (domesticViolenceForm) {
  domesticViolenceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let dvType = event.target["dv-type"].value,
      dateAndTime = event.target["dv-date-time"].value,
      dvLocation = event.target["dv-location"].value,
      dvDesc = event.target["dv-description"].value,
      injuries = event.target["dv-injuries"].value,
      dvSuspect = event.target["dv-suspect"].value,
      dvWitnesses = event.target["dv-witnesses"].value,
      dvEvidence = event.target["dv-evidence"].files;

    if (
      !dvType ||
      !dateAndTime ||
      !dvLocation ||
      !dvDesc ||
      !injuries ||
      !dvSuspect ||
      !dvWitnesses ||
      !dvEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(dvType);
      console.log(dateAndTime);
      console.log(dvLocation);
      console.log(dvDesc);
      console.log(injuries);
      console.log(dvSuspect);
      console.log(dvWitnesses);
      console.log(dvEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Drug Related Crimes
const drugRelatedCrimesForm = document.getElementById("drug-related-crimes");
if (drugRelatedCrimesForm) {
  drugRelatedCrimesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let drugType = event.target["drug-type"].value,
      dateAndTime = event.target["drug-date-time"].value,
      drugLocation = event.target["drug-location"].value,
      drugDesc = event.target["drug-description"].value,
      substanceDetails = event.target["drug-substance-details"].value,
      drugSuspect = event.target["drug-suspect"].value,
      drugWitnesses = event.target["drug-witnesses"].value,
      drugEvidence = event.target["drug-evidence"].files;

    if (
      !drugType ||
      !dateAndTime ||
      !drugLocation ||
      !drugDesc ||
      !substanceDetails ||
      !drugSuspect ||
      !drugWitnesses ||
      !drugEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(drugType);
      console.log(dateAndTime);
      console.log(drugLocation);
      console.log(drugDesc);
      console.log(substanceDetails);
      console.log(drugSuspect);
      console.log(drugWitnesses);
      console.log(drugEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Hate Crime
const hateCrimeForm = document.getElementById("hate-crimes");
if (hateCrimeForm) {
  hateCrimeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let hateType = event.target["hate-type"].value,
      dateAndTime = event.target["hate-date-time"].value,
      hateLocation = event.target["hate-location"].value,
      hateDesc = event.target["hate-description"].value,
      targetedGroup = event.target["targeted-group"].value,
      hateSuspect = event.target["hate-suspect"].value,
      hateWitnesses = event.target["hate-witnesses"].value,
      hateEvidence = event.target["hate-evidence"].files;

    if (
      !hateType ||
      !dateAndTime ||
      !hateLocation ||
      !hateDesc ||
      !targetedGroup ||
      !hateSuspect ||
      !hateWitnesses ||
      !hateEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(hateType);
      console.log(dateAndTime);
      console.log(hateLocation);
      console.log(hateDesc);
      console.log(targetedGroup);
      console.log(hateSuspect);
      console.log(hateWitnesses);
      console.log(hateEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Fraud and Scams
const fraudAndScamsForm = document.getElementById("fraud-and-scams");
if (fraudAndScamsForm) {
  fraudAndScamsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let fraudType = event.target["fraud-type"].value,
      dateAndTime = event.target["fraud-date-time"].value,
      fraudLocation = event.target["fraud-location"].value,
      fraudDesc = event.target["fraud-description"].value,
      financialDetails = event.target["financial-details"].value,
      fraudSuspect = event.target["fraud-suspect"].value,
      fraudEvidence = event.target["fraud-evidence"].files;

    if (
      !fraudType ||
      !dateAndTime ||
      !fraudLocation ||
      !fraudDesc ||
      !financialDetails ||
      !fraudSuspect ||
      !fraudEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(fraudType);
      console.log(dateAndTime);
      console.log(fraudLocation);
      console.log(fraudDesc);
      console.log(financialDetails);
      console.log(fraudSuspect);
      console.log(fraudEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}

// Human Trafficking
const humanTraffickingForm = document.getElementById("human-trafficking");
if (humanTraffickingForm) {
  humanTraffickingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let traffickingType = event.target["trafficking-type"].value,
      dateAndTime = event.target["trafficking-date-time"].value,
      traffickingLocation = event.target["trafficking-location"].value,
      traffickingDesc = event.target["trafficking-description"].value,
      victimDetails = event.target["victim-details"].value,
      traffickingSuspect = event.target["trafficking-suspect"].value,
      traffickingWitnesses = event.target["trafficking-witnesses"].value,
      traffickingEvidence = event.target["trafficking-evidence"].files;

    if (
      !traffickingType ||
      !dateAndTime ||
      !traffickingLocation ||
      !traffickingDesc ||
      !victimDetails ||
      !traffickingSuspect ||
      !traffickingWitnesses ||
      !traffickingEvidence
    ) {
      alert("One of the inputs is missing");
    } else {
      console.log(traffickingType);
      console.log(dateAndTime);
      console.log(traffickingLocation);
      console.log(traffickingDesc);
      console.log(victimDetails);
      console.log(traffickingSuspect);
      console.log(traffickingWitnesses);
      console.log(traffickingEvidence);
    }

    console.log("Form Submitted Successfully");
  });
}
