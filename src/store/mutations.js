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
    console.log(state);
  },
  save_covidTest(state, hadAntibodyTest) {
    state.info.hadAntibodyTest = hadAntibodyTest;
    console.log(state);
  },
};
