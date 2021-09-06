const validateForm = ({isAuth, errors, values}) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Введите e-mail';
      } else if (
        !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Неверный e-mail'
      }
    },
    name: (value) => {
      if (!value) {
        errors.name = 'Введите имя пользователя';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/i.test(values.password)) {
        errors.password = isAuth ? null : 'В пароле должны содержаться хотя бы 1 буква и одна цифра'
      }
    },
    confirm_password: (value) => {
      if (!value) {
        errors.confirm_password = 'Повторите пароль';
      } else if (values.password !== values.confirm_password) {
        errors.confirm_password = 'Пароли не совпадают'
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};

export default validateForm;