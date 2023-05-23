export default {
  finalData(state) {
    const finalInformation = {};
    state.info.name
      ? (finalInformation.first_name = state.info.name)
      : (finalInformation.first_name = localStorage.getItem("name"));

    state.info.last_name
      ? (finalInformation.last_name = state.info.last_name)
      : (finalInformation.last_name = localStorage.getItem("lastname"));

    state.info.email
      ? (finalInformation.email = state.info.email)
      : (finalInformation.email = localStorage.getItem("email"));

    !state.info.hadCovid
      ? (state.info.hadCovid = localStorage.getItem("covidStatus"))
      : null;
    if (
      state.info.hadCovid === "no" ||
      state.info.hadCovid === "have_right_now"
    ) {
      finalInformation.had_covid = state.info.hadCovid;
    } else {
      finalInformation.had_covid = state.info.hadCovid;
      state.info.hadAntibodyTest
        ? (finalInformation.had_antibody_test = state.info.hadAntibodyTest)
        : (finalInformation.had_antibody_test =
            localStorage.getItem("covidTest"));
    }
    if (finalInformation.had_antibody_test === "false") {
      state.info.period
        ? (finalInformation.covid_sickness_date = state.info.period)
        : (finalInformation.covid_sickness_date =
            localStorage.getItem("period"));
    } else {
      const dateInput = state.info.antibodies?.test_date
        ? state.info.antibodies?.test_date
        : localStorage.getItem("date");

      const parts = dateInput?.split("/");
      console.log(parts);
      finalInformation.antibodies = {};
      if (parts) {
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        const date = new Date(year, month - 1, day);
        const test_date = date.toISOString();
        finalInformation.antibodies.test_date = test_date;
      }

      const number = state.info.antibodies?.number
        ? Number(state.info.antibodies?.number)
        : Number(localStorage.getItem("antiBodies"));

      if (number) {
        finalInformation.antibodies.number = number;
      }
    }

    !state.info.had_vaccine
      ? (state.info.had_vaccine = localStorage.getItem("vaccinated"))
      : null;

    state.info.had_vaccine === "true"
      ? (finalInformation.had_vaccine = true)
      : (finalInformation.had_vaccine = false);
    if (finalInformation.had_vaccine) {
      state.info.vaccination_stage
        ? null
        : (state.info.vaccination_stage = localStorage.getItem("stage"));
      finalInformation.vaccination_stage = state.info.vaccination_stage;
    } else {
      state.info.i_am_waiting
        ? null
        : (state.info.i_am_waiting = localStorage.getItem("waiting"));
      finalInformation.i_am_waiting = state.info.i_am_waiting;
    }
    !state.info.non_formal_meetings
      ? (state.info.non_formal_meetings = localStorage.getItem("onlineMeeting"))
      : null;

    finalInformation.non_formal_meetings = state.info.non_formal_meetings;

    !state.info.number_of_days_from_office
      ? (state.info.number_of_days_from_office =
          localStorage.getItem("workFromOffice"))
      : null;

    finalInformation.number_of_days_from_office = Number(
      state.info.number_of_days_from_office
    );

    finalInformation.what_about_meetings_in_live =
      state.info.what_about_meetings_in_live;

    finalInformation.tell_us_your_opinion_about_us =
      state.info.tell_us_your_opinion_about_us;

    return finalInformation;
  },
};
