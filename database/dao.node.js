const { db } = require('../database/admin.node')

module.exports = class Dao {
  static async selectAllSites() {
    const path = `site`
    const querySnapshot = await db.collection(path).get()
    const dataSet = querySnapshot.docs.map(doc => {
      // Metadata
      const obj = doc.data()
      obj.id = doc.id
      return obj
    })
    return dataSet
  }

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
