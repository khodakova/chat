import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {Button} from "../../../components";
import {Link} from "react-router-dom";
import Block from "../../../components/Block";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import FormField from "../../../components/FormField";
import {validateField} from "../../../utils/helpers";

const RegistrationForm = (props) => {
  const success = false;
  const {
    values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting
  } = props;

  return (
    <Block>
      <div className='auth__title'>
        <h2>Регистрация</h2>
        <p>Для входа в чат необходимо зарегистрироваться</p>
      </div>
      {!success ?
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onSubmit={handleSubmit}
        >
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
            name="username"
            help={!touched.name ? null : errors.name}
            validateStatus={
              validateField('name', touched, errors)
            }
          >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Имя пользователя"/>
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
          <Form.Item
            name="confirm_password"
            validateStatus={
              validateField('confirm_password', touched, errors)
            }
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Повторите пароль"
            />
          </Form.Item>

          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to='/login' className='auth__register-link'>Войти в аккаунт</Link>
          </Form.Item>
        </Form>
        :
        <div className='auth__success'>
          <InfoCircleOutlined style={{color: "#0099FF", fontSize: "50px"}}/>
          <h2>Подтвердите свой аккаунт</h2>
          <h4>На Вашу почту отправлено письмо со ссылкой на подтверждение аккаунта</h4>
        </div>
      }
    </Block>


  );
};

export default RegistrationForm;
