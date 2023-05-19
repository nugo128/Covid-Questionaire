export default {
  saveData(state, data) {
    state.info.name = data;
  },
  saveLastname(state, lastname) {
    state.info.lastname = lastname;
  },
  saveEmail(state, email) {
    state.info.email = email;
  },
  saveDate(state, date) {
    state.info.period = date;
  },
  save_covidStatus(state, hadCovid) {
    state.info.hadCovid = hadCovid;
  },
  save_covidTest(state, hadAntibodyTest) {
    state.info.hadAntibodyTest = hadAntibodyTest;
  },
  save_antibodies(state, antibodies) {
    state.info.antibodies = antibodies;
  },
  save_vaccinated(state, vaccinated) {
    state.info.had_vaccine = vaccinated;
    console.log(state.info);
  },
  save_waiting(state, waiting) {
    state.info.i_am_waiting = waiting;
    console.log(state.info);
  },
  save_stage(state, stage) {
    state.info.vaccination_stage = stage;
    console.log(state.info);
  },
};
