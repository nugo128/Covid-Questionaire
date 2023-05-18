export default {
  saveData(state, data) {
    state.info.name = data;
    console.log(state);
  },
  saveLastname(state, lastname) {
    state.info.lastname = lastname;
    console.log(state);
  },
  saveEmail(state, email) {
    state.info.email = email;
    console.log(state);
  },
  saveDate(state, date) {
    state.info.period = date;
    console.log(state);
  },
};
