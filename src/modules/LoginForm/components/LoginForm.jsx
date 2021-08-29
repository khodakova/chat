import React, {Component} from 'react';
import {Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button} from "../../../components";
import {Link} from "react-router-dom";
import Block from "../../../components/Block";

class LoginForm extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  render() {
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
          onFinish={this.onFinish}
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
              prefix={<LockOutlined className="site-form-item-icon"/>}
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
            <Link to='/registration' className='auth__register-link'>Зарегистрироваться</Link>
          </Form.Item>
        </Form>
      </Block>
    );
  }
}

export default LoginForm;
