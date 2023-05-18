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
};
