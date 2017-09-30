UPDATE shelfie
SET item_name = ${item_name},
    item_price = ${item_price}
WHERE id = ${id};

SELECT * FROM shelfie
WHERE id = ${id};
