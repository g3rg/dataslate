import React, { MouseEvent, useEffect, useState } from 'react'
import { Col, Card, Carousel } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { Operative, Datacard, PsychicPower } from '../../types/KillTeam2021'
import { Datasheet } from './Datasheet'
import { RuleList } from './RuleList'
import { PowerList } from './PowerList'
import hash from 'node-object-hash'
import _ from 'lodash'
import { FactionSpecificData } from './FactionSpecificData'
import { RosterSelection } from './RosterSelection'

interface Props {
  name: string
  faction: string
  operatives: Operative[]
  psychicPowers: PsychicPower[]
  fireteams: string[]
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
  touchscreenMode: boolean
  isRoster?: boolean
  showWoundTrack: boolean
  printRosterList: boolean
}

const groupByDatacard = (operatives: Operative[], selectedOperatives: string[]): Datacard[] => {
  const filteredOperatives = operatives.filter((op) => { return selectedOperatives.includes(op.id) })
  const groupedOperatives = _.groupBy(filteredOperatives, (o) => (hash().hash({ datacard: o.datacard, weapons: o.weapons, equipment: o.equipment })))
  return _.map(groupedOperatives, (ops, hash) => ({
    ...ops[0],
    name: ops[0].datacard,
    operativeNames: ops.map((op) => (op.name)).sort()
  }))
}

export function Roster (props: Props) {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex'
  }

  const [selectedOperatives, setSelectedOperatives] = useState(props.operatives.map((operative, index) => { return operative.id }))
  const [datacards, setDataCards] = useState<Datacard[] | []>([])

  const updateSelectedOperatives = (operativeIds: string[]): void => {
    setSelectedOperatives(operativeIds)
    setDataCards(groupByDatacard(props.operatives, selectedOperatives))
  }

  useEffect(() => {
    setDataCards(groupByDatacard(props.operatives, selectedOperatives))
  }, [props.operatives, selectedOperatives])

  const rosterClassName = props.printRosterList ? '' : 'noprint'

  const carouselClassName = props.touchscreenMode ? 'd-block' : 'd-none'
  const nonCarouselClassName = props.touchscreenMode ? 'd-none' : 'd-block'

  return (
    <>
      <h1 style={headingStyle}>
        <Col>
          {props.name}
        </Col>
        <Col style={{ flexGrow: 0, textAlign: 'right' }}>
          <CloseButton onClose={props.onClose} />
        </Col>
      </h1>
      <Carousel className={carouselClassName} interval={null} touch controls indicators={false}>
        {(props.isRoster ?? false) && (
          <Carousel.Item>
            <Card className={rosterClassName}>
              <Card.Header style={{ ...headingStyle, breakBefore: 'always' }} as='h2'>Roster</Card.Header>
              <Card.Body>
                <RosterSelection operatives={props.operatives} selectedOperatives={selectedOperatives} setSelectedOperatives={updateSelectedOperatives} />
              </Card.Body>
            </Card>
          </Carousel.Item>
        )}
        {_.orderBy(datacards, ['leader', 'name'], ['desc', 'asc']).map((datacard: Datacard, index) => (
          <Carousel.Item key={index}>
            <Datasheet datacard={datacard} showWoundTrack={props.showWoundTrack} />
          </Carousel.Item>
        ))}
        <Carousel.Item>
          <Card>
            <Card.Header style={{ ...headingStyle, breakBefore: 'always' }} as='h2'>Rules</Card.Header>
            <Card.Body>
              <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')} />
            </Card.Body>
          </Card>
        </Carousel.Item>
        {props.psychicPowers.length > 0 &&
          <Carousel.Item>
            <Card>
              <Card.Header style={{ ...headingStyle }} as='h2'>Psychic Powers</Card.Header>
              <Card.Body>
                <PowerList powers={props.psychicPowers} />
              </Card.Body>
            </Card>
          </Carousel.Item>}
        <Carousel.Item>
          <FactionSpecificData faction={props.faction} fireteams={props.fireteams} />
        </Carousel.Item>
      </Carousel>
      <div className={nonCarouselClassName}>
        {(props.isRoster ?? false) && (
          <Card className={rosterClassName}>
            <Card.Header style={{ ...headingStyle, breakBefore: 'always' }} as='h2'>Roster</Card.Header>
            <Card.Body>
              <RosterSelection operatives={props.operatives} selectedOperatives={selectedOperatives} setSelectedOperatives={updateSelectedOperatives} />
            </Card.Body>
          </Card>
        )}
        {_.orderBy(datacards, ['leader', 'name'], ['desc', 'asc']).map((datacard: Datacard, index) => (
          <Datasheet key={index} datacard={datacard} showWoundTrack={props.showWoundTrack} />
        ))}
        <Card>
          <Card.Header style={{ ...headingStyle, breakBefore: 'always' }} as='h2'>Rules</Card.Header>
          <Card.Body>
            <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')} />
          </Card.Body>
        </Card>
        {props.psychicPowers.length > 0 &&
          <Card>
            <Card.Header style={{ ...headingStyle }} as='h2'>Psychic Powers</Card.Header>
            <Card.Body>
              <PowerList powers={props.psychicPowers} />
            </Card.Body>
          </Card>}
        <FactionSpecificData faction={props.faction} fireteams={props.fireteams} />
      </div>
    </>
  )
}
