import * as yup from "yup";

const validateMessage = {
  emailValidate: "Please enter your email",
  nameValidate: "Please enter your name",
  subjectValidate: "Please enter your subject",
  messageValidate: "Please enter your message",
};

export const formSchema = yup.object({
  user_email: yup
    .string()
    .required(validateMessage.emailValidate)
    .email("Please enter a valid email address"),
  user_name: yup
    .string()
    .required(validateMessage.nameValidate),
  subject: yup
    .string()
    .required(validateMessage.subjectValidate),
  message: yup
    .string()
    .required(validateMessage.messageValidate),
});
