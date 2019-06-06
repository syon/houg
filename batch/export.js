const stringifySync = require('csv-stringify/lib/sync')
const Dao = require('../database/dao.node')

async function main() {
  const records = await Dao.selectAllSites()

  const csvString = stringifySync(records, {
    header: true,
    columns: {
      url: 'url',
      name: 'name',
      caption: 'caption',
      desc: 'desc'
    },
    delimiter: '\t',
    quoted_string: false
  })

  require('fs').writeFileSync('./batch/export.tsv', csvString)
}

;(async () => {
  await main()
})().catch(e => {
  // Deal with the fact the chain failed
})
