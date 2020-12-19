const slonik = require('slonik');

exports.getConnection = () =>
  slonik.createPool('postgresql://scott:scott@localhost:5432/scottdb');

exports.sql = slonik.sql;
