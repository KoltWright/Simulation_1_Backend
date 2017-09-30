module.exports = {
  getBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const id = req.params.id;

    dbInstance.get_bin({id})
      .then((bin) => {
        res.status(200).send(bin)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  updateBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const id = req.params.id;
    const {item_name, item_price} = req.body;

    dbInstance.update_bin({id, item_name, item_price})
      .then((updateBin) => {
        res.status(200).send(updateBin)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  deleteBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const id = req.params.id;

    dbInstance.delete_bin({id})
      .then(() => {
        res.status(200).send()
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
}
