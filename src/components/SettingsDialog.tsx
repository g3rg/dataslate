import React, { useState } from 'react'
import {Form, Modal, Col, Row} from "react-bootstrap"

type Props = {
    setShowSettings: (showSettings: boolean) => void,
    show: boolean,
    touchScreenMode: boolean,
    setTouchScreenMode: (touchScreenMode: boolean) => void,
    showWoundTrack: boolean,
    setShowWoundTrack: (showWoundTrack: boolean) => void,
}

function SettingsDialog(props: Props) {

    const handleModeChange = (event : any) => {
        const target = event.target
        const touchScreenMode : boolean = target.checked
        props.setTouchScreenMode(touchScreenMode)
    }

    const handleWoundTrackChange = (event : any) => {
        const target = event.target
        const showWoundTrack : boolean = target.checked
        props.setShowWoundTrack(showWoundTrack)
    }

    return <Modal
        show={props.show}
        onHide={() => props.setShowSettings(false)}
        dialogClassname="modal-90w">
        <Modal.Header closeButton>
            <Modal.Title id="settings-dialog-title">
                Dataslate Settings
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Col>
                <Row>KT 2021 Settings</Row>
                <Row>
                    <Form>
                        <Form.Check
                            type={'checkbox'}
                            id={'touchScreenMode'}
                            label={'Touch Screen Mode'}
                            onChange={handleModeChange}
                            checked={props.touchScreenMode}
                        />
                        <Form.Check
                            type={'checkbox'}
                            id={'showWoundTrack'}
                            label={'Show Wound Track'}
                            onChange={handleWoundTrackChange}
                            checked={props.showWoundTrack}
                        />
                    </Form>
                </Row>
            </Col>
        </Modal.Body>
    </Modal>
}

export default SettingsDialog;
