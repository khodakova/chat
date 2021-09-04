import { withFormik } from 'formik';
import RegistrationForm from "../components/RegistrationForm";

export default withFormik({
  mapPropsToValues: () => ({
    email: 'ttt',
    username: '',
    password: '',
    password_2: ''
  }),
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Введите e-mail';
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Неверный e-mail'
    }

    if (!values.name) {
      errors.name = 'Введите имя пользователя';
    }

    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/i.test(values.password)) {
      errors.password = 'В пароле должны содержаться как минимум 1 буква и одна цифра'
    }

    if (!values.confirm_password) {
      errors.confirm_password = 'Повторите пароль';
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = 'Пароли не совпадают'
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegistrationForm',
})(RegistrationForm);