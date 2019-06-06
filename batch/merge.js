const stringifySync = require('csv-stringify/lib/sync')

function readCsvSync(filename, options) {
  const fs = require('fs')
  const parse = require('csv-parse/lib/sync')
  const content = fs.readFileSync(filename).toString()
  return parse(content, options)
}

async function main() {
  const options = { columns: true, delimiter: '\t' }
  const recordsA = readCsvSync('./batch/dataset.tsv', options)
  const recordsB = readCsvSync('./batch/export.tsv', options)
  await 0
  const merged = recordsA.concat(recordsB)
  merged.sort((a, b) => a.name < b.name)
  const uniqed = []
  for (const item of merged) {
    const exists = uniqed.find(x => x.name === item.name)
    if (exists) continue
    uniqed.push(item)
  }
  console.log(uniqed)
  const csvString = stringifySync(uniqed, {
    header: true,
    columns: {
      url: 'url',
      name: 'name',
      taxo: 'taxo',
      desc: 'desc'
    },
    delimiter: '\t',
    quoted_string: false
  })
  require('fs').writeFileSync('./batch/dataset.tsv', csvString)
}

;(async () => {
  await main()
})().catch(e => {
  // Deal with the fact the chain failed
})
