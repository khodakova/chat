import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {Button} from "../../../components";
import {Link} from "react-router-dom";
import Block from "../../../components/Block";
import {validateField} from "../../../utils/helpers";
import {FastField} from "formik";
import FormField from "../../../components/FormField";

const validate = (key, touched, errors) => {
  if (touched[key]) {
    if (errors[key]) {
      return 'error'
    } else {
      return 'success'
    }
  } else {
    return null
  }
};

const LoginForm = (props) =>  {
  const {
    values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting
  } = props;
  return (
    <Block>
      <div className='auth__title'>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onSubmit={handleSubmit}
        >
          <FormField
            name="email"
            // icon="mail"
            placeholder="Введите E-Mail"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />

          <FormField
            name="password"
            // icon="mail"
            placeholder="Введите пароль"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />
          <Form.Item
            name="email"
            help={!touched.email ? null : errors.email}
            validateStatus={
              validateField('email', touched, errors)
            }
            hasFeedback
            values={values}
            touched={touched}
            errors={errors}
          >
            <Input
              id='email'
              prefix={<MailOutlined className="site-form-item-icon"/>}
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Form.Item>
          <Form.Item
            name="password"
            help={!touched.password ? null : errors.password}
            validateStatus={
              validateField('password', touched, errors)
            }
          >
            <Input
              id='password'
              name='password'
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to='/registration' className='auth__register-link'>Зарегистрироваться</Link>
          </Form.Item>
        </Form>
    </Block>
  );
}

export default LoginForm;
