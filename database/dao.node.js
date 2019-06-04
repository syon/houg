const { db } = require('../database/admin.node')

module.exports = class Dao {
  static async addSite(form) {
    console.log({ form })
    await db
      .collection(`site`)
      .add(form)
      .catch(e => {
        console.error(e)
        console.warn(form)
      })
  }
}
