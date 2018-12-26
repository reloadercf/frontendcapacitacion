import React from 'react'
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form
            .validateFields((err, values) => {
                if (!err) {
                    //console.log('Received values of form: ', values);
                    this.props.logIn(values)
                }
            });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{background:"#fff", borderRadius:"1em", padding: "2em"}}>
                <Form action="" onSubmit={this.handleSubmit} className="login-form">
                    <h2 style={{textAlign:"center", letterSpacing:"3px", fontSize:"30px",color:"#011528"}}>Iniciar sesión <Icon type="swap-right" theme="outlined" /><Icon type="home" theme="outlined" /></h2>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Ingresa tu nombre de usuario!'
                                }
                            ]
                        })(
                            <Input
                                prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                placeholder="Usuario"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Ingresa tu contraseña'
                                }
                            ]
                        })(
                            <Input
                                prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                type="password"
                                placeholder="Contraseña"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" ghost htmlType="submit" className="login-form-button">
                            Entrar<Icon type="enter" theme="outlined" />
                        </Button>

                    </FormItem>
                </Form>

            </div>

        );
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;