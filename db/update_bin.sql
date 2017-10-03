UPDATE shelfie
SET item_name = ${item_name},
    item_price = ${item_price}
WHERE shelf = ${shelf}
AND bin = ${bin};

SELECT * FROM shelfie
WHERE id = ${id};
