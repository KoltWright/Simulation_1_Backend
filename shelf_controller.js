module.exports = {
  getBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const shelf = req.params.id[0];
    const bin = Number(req.params.id[1]);

    dbInstance.get_bin({shelf, bin})
      .then((bin) => {
        res.status(200).send(bin)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  updateBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const shelf = req.params.id[0];
    const bin = Number(req.params.id[1]);
    const {item_name, item_price} = req.body;

    dbInstance.update_bin({shelf, bin, item_name, item_price})
      .then((updateBin) => {
        res.status(200).send(updateBin)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  deleteBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const shelf = req.params.id[0];
    const bin = req.params.id[1];

    dbInstance.delete_bin({shelf, bin})
      .then(() => {
        res.status(200).send()
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  createBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const shelf = req.params.id[0];
    const bin = req.params.id[1];
    const {item_name, item_price} = req.body

    dbInstance.create_bin({shelf, bin, item_name, item_price})
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },
  getShelf: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const shelf = req.params.id;
    console.log(shelf);

    dbInstance.get_shelf({shelf})
      .then((shelfBins) => {
        res.status(200).send(shelfBins);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  }
}
