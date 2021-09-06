import {withFormik} from 'formik';
import RegistrationForm from "../components/RegistrationForm";
import validateForm from '../../../utils/validation';

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    username: '',
    password: '',
    confirm_password: ''
  }),

  validate: values => {
    let errors = {};
    // пробегаем по всем элементам формы для валидации значений
    validateForm({ isAuth: false, values, errors });
    return errors;
  },

  handleSubmit: (values, {setSubmitting, props}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegistrationForm',
})(RegistrationForm);