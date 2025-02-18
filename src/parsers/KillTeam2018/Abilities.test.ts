import { calculatePhases, parseAdditionalAttacks, invulnerableSave } from './Abilities'
import _ from 'lodash'
import parse from 'csv-parse/lib/sync'
import fs from 'fs'

const compareFn = (a, b): number => a.localeCompare(b)

const abilities = parse(fs.readFileSync('abilities.csv'), {
  columns: true,
  skip_empty_lines: true
})
_.forEach(abilities, (a) => {
  describe(`for the ability "${a.ability as string}"`, () => {
    it('works out correct phases', () => {
      const phases = calculatePhases(a.ability)
      const expectedPhases = []
      _.forIn({
        scouting: a.scouting === 'Y',
        deployment: a.deployment === 'Y',
        initiative: a.initiative === 'Y',
        movement: a.movement === 'Y',
        psychic: a.psychic === 'Y',
        shooting: a.shooting === 'Y',
        fight: a.fight === 'Y',
        morale: a.morale === 'Y'
      }, (value, key) => {
        if (value) { expectedPhases.push(key) }
      })
      expect(phases.sort(compareFn)).toEqual(expectedPhases.sort(compareFn))
    })

    it('works out correct additional attacks', () => {
      expect(parseAdditionalAttacks(a.ability)).toEqual(a.A !== '' ? parseInt(a.A) : 0)
    })

    it('works out correct invulnerable save', () => {
      expect(invulnerableSave([{ description: a.ability }])).toEqual(a.Inv !== '' ? parseInt(a.Inv) : undefined)
    })
  })
})

const rules = parse(fs.readFileSync('rules.csv'), {
  columns: true,
  skip_empty_lines: true
})
_.forEach(rules, (a) => {
  describe(`for the rules "${a.ability as string}"`, () => {
    it('works out correct phases', () => {
      const phases = calculatePhases(a.ability)
      const expectedPhases = []
      _.forIn({
        scouting: a.scouting === 'Y',
        deployment: a.deployment === 'Y',
        initiative: a.initiative === 'Y',
        movement: a.movement === 'Y',
        psychic: a.psychic === 'Y',
        shooting: a.shooting === 'Y',
        fight: a.fight === 'Y',
        morale: a.morale === 'Y'
      }, (value, key) => {
        if (value) { expectedPhases.push(key) }
      })
      expect(phases.sort(compareFn)).toEqual(expectedPhases.sort(compareFn))
    })
  })
})
