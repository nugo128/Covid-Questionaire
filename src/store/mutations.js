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
};
