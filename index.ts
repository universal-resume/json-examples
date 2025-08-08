import { readFileSync } from 'fs'

const get = (name: string) => () => {
    return JSON.parse(readFileSync(`./examples/${name}.json`, 'utf8'))
}

export const examples = [
    {
        name: "Dwight Schrute",
        get: get('dwight-schrute')
    },
    {
        name: "Bill Palmer",
        get: get('bill-palmer')
    },
    {
        name: "Harry Potter",
        get: get('harry-potter')
    },
]

export default examples