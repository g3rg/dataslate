import React, { MouseEvent } from 'react';
import { Col, Card, Carousel } from 'react-bootstrap';
import { CloseButton } from '../CloseButton';
import { Operative, Datacard, PsychicPower } from '../../types/KillTeam2021';
import { Datasheet } from './Datasheet';
import { RuleList } from './RuleList';
import { PowerList } from './PowerList';
import { PloysColumn } from './PloysColumn';
import { TacOpsList } from './TacOpsList';
import hash from 'node-object-hash'
import _ from 'lodash'
import getFactionSpecificData from './data'

type Props = {
  name: string,
  faction: string,
  operatives: Operative[],
  psychicPowers: PsychicPower[],
  onClose: (event: MouseEvent<HTMLButtonElement>) => void,
  touchScreenMode: boolean,
};

const groupByDatacard = (operatives: Operative[]): Datacard[] => {
  const groupedOperatives = _.groupBy(operatives, (o) => (hash().hash({datacard: o.datacard, weapons: o.weapons, equipment: o.equipment})))
  return _.map(groupedOperatives, (ops, hash) => ({
    ...ops[0],
    name: ops[0].datacard,
    operativeNames: ops.map((c) => (c.name)).sort(),
  }))
}

export function Roster(props: Props) {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex',
  };
  const datacards = groupByDatacard(props.operatives)
  const factionSpecificData = getFactionSpecificData(props.faction)
  console.log(`Touch: ${props.touchScreenMode}` )
  const carouselClassName = props.touchScreenMode ? "d-block" : "d-block d-xl-none"
  const nonCarouselClassName = props.touchScreenMode ? "d-none" : "d-none d-xl-block"

  return <>
    <h1 style={headingStyle}>
      <Col>
        {props.name}
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        <CloseButton onClose={props.onClose}/>
      </Col>
    </h1>
    <Carousel className={carouselClassName} interval={null} touch={true} controls={true} indicators={false}>
      {_.orderBy(datacards, ['leader', 'name'], ['desc', 'asc']).map((datacard: Datacard) => (
          <Carousel.Item>
            <Datasheet datacard={datacard}/>
          </Carousel.Item>
      ))}
      <Carousel.Item>
        <Card>
          <Card.Header style={{...headingStyle, breakBefore: 'always'}} as="h2">Rules</Card.Header>
          <Card.Body>
            <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')}/>
          </Card.Body>
        </Card>
      </Carousel.Item>
      {props.psychicPowers.length > 0 && <Carousel.Item><Card>
        <Card.Header style={{...headingStyle}} as="h2">Psychic Powers</Card.Header>
        <Card.Body>
          <PowerList powers={props.psychicPowers}/>
        </Card.Body>
      </Card></Carousel.Item>}

      {factionSpecificData &&
      <Carousel.Item>
        <div>
          <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
            <Card style={{width: "100%", marginRight: "5px"}}>
              <Card.Header style={{...headingStyle}} as="h2">Strategic Ploys</Card.Header>
              <Card.Body>
                <PloysColumn ploys={factionSpecificData.strategicPloys} />
              </Card.Body>
            </Card>
            <Card style={{width: "100%", marginLeft: "5px"}}>
              <Card.Header style={{...headingStyle}} as="h2">Tactical Ploys</Card.Header>
              <Card.Body>
                <PloysColumn ploys={factionSpecificData.tacticalPloys} />
              </Card.Body>
            </Card>
          </div>
          {
            factionSpecificData.tacOps &&
              <Card>
                <Card.Header style={{...headingStyle}} as="h2">Tac Ops</Card.Header>
                <Card.Body>
                  <TacOpsList tacOps={factionSpecificData.tacOps} />
                </Card.Body>
              </Card>
          }
        </div>
      </Carousel.Item>
      }
    </Carousel>
    <div className={ nonCarouselClassName }>
      {_.orderBy(datacards, ['leader', 'name'], ['desc', 'asc']).map((datacard: Datacard) => (
            <Datasheet datacard={datacard}/>
      ))}
        <Card>
          <Card.Header style={{...headingStyle, breakBefore: 'always'}} as="h2">Rules</Card.Header>
          <Card.Body>
            <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')}/>
          </Card.Body>
        </Card>
      {props.psychicPowers.length > 0 && <Card>
        <Card.Header style={{...headingStyle}} as="h2">Psychic Powers</Card.Header>
        <Card.Body>
          <PowerList powers={props.psychicPowers}/>
        </Card.Body>
      </Card>
      }

      {factionSpecificData &&
        <div>
          <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
            <Card style={{width: "100%", marginRight: "5px"}}>
              <Card.Header style={{...headingStyle}} as="h2">Strategic Ploys</Card.Header>
              <Card.Body>
                <PloysColumn ploys={factionSpecificData.strategicPloys} />
              </Card.Body>
            </Card>
            <Card style={{width: "100%", marginLeft: "5px"}}>
              <Card.Header style={{...headingStyle}} as="h2">Tactical Ploys</Card.Header>
              <Card.Body>
                <PloysColumn ploys={factionSpecificData.tacticalPloys} />
              </Card.Body>
            </Card>
          </div>
          {
            factionSpecificData.tacOps &&
            <Card>
              <Card.Header style={{...headingStyle}} as="h2">Tac Ops</Card.Header>
              <Card.Body>
                <TacOpsList tacOps={factionSpecificData.tacOps} />
              </Card.Body>
            </Card>
          }
        </div>
      }
    </div>
  </>
}
