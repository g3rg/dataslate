import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import { Roster as RosterView2018 } from './components/KillTeam2018/Roster'
import { Roster as RosterView2021 } from './components/KillTeam2021/Roster'
import { loadFiles } from './FileLoader'
import { Roster as Roster2018 } from './types/KillTeam2018'
import { Roster as Roster2021 } from './types/KillTeam2021'
import { DataDevPage } from './components/KillTeam2021/DataDevPage'
import { Settings } from './types/Settings'

export function App (): JSX.Element {
  const [roster, setRoster] = useState<Roster2018|Roster2021|null>(null)

  const [settings, setSettings] = useState({ showWoundTrack: true })

  useEffect(() => {
    setSettings(loadSettingsFromLocalStorage())
  }, [])

  const setAndSaveSettings = (settings: Settings): void => {
    setSettings(settings)
    saveSettingsToLocalStorage(settings)
  }

  const saveSettingsToLocalStorage = (settings: Settings): void => {
    localStorage.setItem('settings', JSON.stringify(settings))
  }

  const loadSettingsFromLocalStorage = (): Settings => {
    try {
      return JSON.parse(localStorage.getItem('settings') ?? '{ showWoundTrack: true, touchscreenMode: false, dropboxSelector: false }')
    } catch (e) {
      return { showWoundTrack: false }
    }
  }

  const handleUpload = async (acceptedFiles: File[]): Promise<void> => {
    const r = await loadFiles(acceptedFiles)
    setRoster(r)
  }

  const handleClose = (): void => {
    setRoster(null)
  }

  const handleSelectionChanged = (uuid: string, selectedCount: number): void => {
    if ((roster != null) && isRosterKT18(roster)) {
      setRoster(Object.assign({
        models: roster.models.map((model) => (
          model.uuid !== uuid
            ? model
            : Object.assign(
              model,
              { selected: selectedCount }
            )
        ))
      }, roster))
    }
  }

  const isRosterKT18 = (roster: any): roster is Roster2018 => (roster.system === 'KillTeam2018')
  const isRosterKT21 = (roster: any): roster is Roster2021 => (roster.system === 'KillTeam2021')

  return (
    <Router>
      <Switch>
        <Route path='/kill_team_21/dev'>
          <Container fluid='lg'>
            <DataDevPage />
          </Container>
        </Route>
        <Route path='/'>
          <Container fluid='lg'>
            {roster === null ? <Homepage onUpload={handleUpload} settings={settings} setSettings={setAndSaveSettings} /> : <></>}
            {(roster != null) && isRosterKT18(roster) ? <RosterView2018 name={roster.name} models={roster.models} onClose={handleClose} forceRules={roster.forceRules} onSelectionChanged={handleSelectionChanged} /> : <></>}
            {(roster != null) && isRosterKT21(roster) ? <RosterView2021 name={roster.name} operatives={roster.operatives} psychicPowers={roster.psychicPowers} faction={roster.faction} fireteams={roster.fireteams} onClose={handleClose} showWoundTrack={settings.showWoundTrack} /> : <></>}
          </Container>
        </Route>
      </Switch>
    </Router>
  )
}
