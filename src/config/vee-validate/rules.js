import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "ეს ველი სავალდებულოა";
  }
  return true;
});

defineRule("min_characters", (value, [limit]) => {
  if (value.length < limit) {
    return `ეს ველი უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსაგან`;
  }

  return true;
});
defineRule("max_characters", (value, [limit]) => {
  if (value.length > limit) {
    return `ეს ველი უნდა შედგებოდეს მაქსიმუმ ${limit} სიმბოლოსაგან`;
  }

  return true;
});

defineRule("email", (value) => {
  const emailRegex = /@redberry.ge$/;

  if (emailRegex.test(value)) {
    return true;
  } else {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
});
defineRule("wrongEmail", (value) => {
  const emailRegex = /.+@redberry\.ge$/;

  if (emailRegex.test(value)) {
    return true;
  } else {
    return "თქვენ მიერ შეყვანილი მეილი არასწორია";
  }
});

defineRule("date", (value) => {
  const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
  if (dateRegex.test(value)) {
    return true;
  }
  return "რიცხი უნდა ჩაიწეროს დღე/თვე/წელი ფორმატით";
});
