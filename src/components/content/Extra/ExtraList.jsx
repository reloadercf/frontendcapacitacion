import React from 'react'
import { ExtraComponent } from './ExtraComponent';
import { Row, Col } from 'antd';

export const ExtraList = ({videos}) => (
    <div>
        <Row type="flex" justify="space-around" style={{ marginTop: "4em" }}>
            { videos &&  videos.length> 0?

                videos.map((i, key) => (
                <Col md={7} sm={24} xs={24} span={4} key={key} style={{ marginBottom: "2em" }}>
                    <ExtraComponent {...i} key={key} />
                </Col>
            )):
            
            <div>No se encontraron resultados</div>
            
            }
        </Row>

    </div>
  
);