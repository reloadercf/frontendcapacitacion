import React from 'react'
import {Card, Icon, Popover, message} from 'antd';
const {Meta} = Card;

export const ModulosComponent = () => {

    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
    return (
        <Popover  placement="right"  content={content} title="Titulo del modulo">
        <Card
            cover={< img alt = "example" src = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[ < Icon type = "setting" />, < Icon type = "edit" />, < Icon type = "ellipsis" />
        ]}>
            <div>
                <h4>Titulo del modulo</h4>
                <span>Descripcion del modulo</span>
            </div>
        </Card>
        </Popover>


    )
}