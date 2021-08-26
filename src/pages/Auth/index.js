import React from 'react';
import {Form, Input, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Block, Button} from "../../components";
import './Auth.scss'

const Auth = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <section className='auth'>
      <div className='auth__content'>
        <Block>
          <div className='auth__title'>
            <h2>Войти в аккаунт</h2>
            <p>Пожалуйста, войдите в свой аккаунт</p>
          </div>
          <div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите имя пользователя!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" />
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
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Запомнить</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Забыли пароль?
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Войти в аккаунт
                </Button>
              </Form.Item>
              <Form.Item>
                <a href='#' className='auth__register-link'>Зарегистрироваться</a>
              </Form.Item>
            </Form>
          </div>
        </Block>
      </div>
    </section>
  )
}


export default Auth;
