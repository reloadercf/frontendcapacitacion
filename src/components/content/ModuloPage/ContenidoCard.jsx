import React from 'react'
import {Button, Modal} from 'antd';
import VideoPage from '../VideoPage/VideoPage';

export const ContenidoCard = ({id, title, video, modal2Visible, handleClose, handleOpen}) => {

    return (
        <div className="div-subtema">
            <div className="info-subtema">
                <h3>{id}: {title}</h3>
            </div>
            <div>
                <Button
                    style={{
                    marginRight: "10px"
                }}
                    type="primary"
                    icon="search">Examen</Button>
                <Button type="primary" icon="search" onClick={handleOpen}>Video</Button>

                <Modal
                    title="Vertically centered modal dialog"
                    width={700}
                    wrapClassName="vertical-center-modal"
                    visible={modal2Visible}
                    onOk={handleClose}
                    onCancel={handleClose}>           
                    <VideoPage video={video} modal2Visible={modal2Visible} />

                </Modal>
            </div>

        </div>
    )
}