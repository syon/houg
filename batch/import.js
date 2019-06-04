const Dao = require('../database/dao.node')

function readCsvSync(filename, options) {
  const fs = require('fs')
  const parse = require('csv-parse/lib/sync')
  const content = fs.readFileSync(filename).toString()
  return parse(content, options)
}

async function main() {
  const options = { columns: true, delimiter: '\t' }
  const records = readCsvSync('./batch/dataset.tsv', options)

  for (const r of records) {
    await Dao.addSite(r)
  }
}

;(async () => {
  await main()
})().catch(e => {
  // Deal with the fact the chain failed
})
