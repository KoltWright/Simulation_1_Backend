SELECT * FROM shelfie
WHERE shelf = ${shelf} AND
bin = ${bin}
ORDER BY bin;
