import React from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form
            .validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.props.logIn(values)
                }
            });
    }

    render() {

        let {email, password, logIn, handleText, user}=this.props
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{background:"#FFFF", borderRadius:"3em", padding: "3em"}}>
                <Form action="" onSubmit={this.handleSubmit} className="login-form">
                    <h2 style={{textAlign:"center", letterSpacing:"3px", fontSize:"30px"}}>Iniciar Sesión</h2>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(
                            <Input
                                prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(
                            <Input
                                prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                type="password"
                                placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>

                    </FormItem>
                </Form>

            </div>

        );
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;