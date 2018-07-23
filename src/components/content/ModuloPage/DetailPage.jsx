import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {HeaderDetail} from './HeaderDetail';
import { Contenido } from './Contenido';


class DetailPage extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <HeaderDetail/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" >
                    <Col lg={20} md={20} xs={24}>
                        <Contenido/>
                    </Col>
                
                </Row>
            </div>
        );
    }
}

export default DetailPage;