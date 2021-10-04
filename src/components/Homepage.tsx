import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import type { DropzoneOptions } from 'react-dropzone'
import {Row, Col, Alert, Card, Button} from 'react-bootstrap'
import Intro from './Intro'
import SettingsDialog from "./SettingsDialog"

type Props = {
  onUpload: DropzoneOptions["onDrop"],
  touchScreenMode: boolean,
  setTouchScreenMode: (touchScreenMode: boolean) => void,
  showWoundTrack: boolean,
  setShowWoundTrack: (showWoundTrack: boolean) => void,
}

function Homepage(props: Props) {

  const [showSettings, setShowSettings] = useState(false)


  return <>
    <Intro />
    <Row>
      <Col>
        <Card>
          <Card.Header as="h3">Step 1</Card.Header>
          <Card.Body style={{minHeight: '15em'}}>
            <Card.Text>
              Build your force in{' '}
              <a href='https://battlescribe.net/'>Battlescribe</a>.
            </Card.Text>
            <Card.Text>
              Supported systems:
              <ul>
                <li>Kill Team 2018</li>
                <li>Kill Team 2021</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Header as="h3">Step 2</Card.Header>
          <Card.Body style={{minHeight: '15em'}}>
            <Card.Text>
              <Button size="sm" variant="primary" onClick={() => setShowSettings(true)}>Settings</Button>
              <SettingsDialog show={showSettings} setShowSettings={setShowSettings}
                              touchScreenMode={ props.touchScreenMode} setTouchScreenMode={ props.setTouchScreenMode }
                              showWoundTrack={ props.showWoundTrack } setShowWoundTrack={ props.setShowWoundTrack }/>
            </Card.Text>
            <Card.Text>
              <Dropzone onDrop={props.onUpload} accept='.ros,.rosz'>
                {({ getRootProps, getInputProps }) => (
                  <Alert variant='primary' {...getRootProps()} style={{ textAlign: 'center' }}>
                    <input {...getInputProps()} />
                    <p>Drop your roster file here, or click to select one.</p>
                    <p><em>(*.rosz and *.ros accepted)</em></p>
                  </Alert>
                )}
              </Dropzone>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header as="h3">Step 3</Card.Header>
          <Card.Body style={{minHeight: '15em'}}>
            <Card.Text>
              Print your datasheets out, and never forget an ability again!
            </Card.Text>
            <Card.Text>
              Prepare to dominate your foes!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <footer>
      Built with <a href='https://reactjs.org/'>React</a> and <a href='https://getbootstrap.com'>Bootstrap</a>.
      Icons courtesy of <a href='https://killteam.app/'>Companion for Kill Team</a>.
      Released as <a href='https://github.com/floppy/dataslate'>Open Source</a>,
      report problems <a href='https://github.com/floppy/dataslate/issues/new'>on GitHub</a>.
      Version: <em><a {...{href: `https://github.com/floppy/dataslate/tree/${process.env.REACT_APP_GIT_SHA}`}} >{process.env.REACT_APP_GIT_SHA}</a></em>
    </footer>
  </>
}

export default Homepage;
