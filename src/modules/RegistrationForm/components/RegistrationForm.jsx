import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {Button} from "../../../components";
import {Link} from "react-router-dom";
import Block from "../../../components/Block";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import FormField from "../../../components/FormField";

const RegistrationForm = (props) => {
  const success = false;
  const {
    values, touched, errors, handleChange, handleBlur, handleSubmit, isValid
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
            help={!touched.email ? '' :
              errors.email}
            validateStatus={
              !touched.email ? '' :
                errors.email && touched.email ? 'error' : 'success'
            }
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите e-mail!',
              },
            ]}
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
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите имя пользователя!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Имя пользователя"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
            ]}
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
            rules={[
              {
                required: true,
                message: 'Пожалуйста, повторите пароль!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Повторите пароль"
            />
          </Form.Item>

          <Form.Item>
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
