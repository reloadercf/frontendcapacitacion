import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { ModulosComponent } from './ModulosComponent';

class ModulosList extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="space-around" style={{marginTop:"4em"}}>
                    <Col md={7} sm={24} xs={24}  span={4}>
                        <ModulosComponent/>
                    </Col>
                    <Col md={7} sm={24} xs={24} span={4}>
                        <ModulosComponent/> 
                    </Col>
                    <Col md={7} sm={24} xs={24} span={4}>
                        <ModulosComponent/>
                    </Col>
                 
                </Row>

            </div>
        );
    }
}

export default ModulosList;