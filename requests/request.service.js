const db = require('../_helpers/db');

module.exports = {
  create,
  getAll,
  getById,
  getByEmployeeId,
  update,
  delete: _delete
};

async function create(params) {
  const request = await db.Request.create(params);
  return request;
}

async function getAll() {
  return await db.Request.findAll();
}

async function getById(id) {
  return await db.Request.findByPk(id);
}

async function getByEmployeeId(employeeId) {
  return await db.Request.findAll({ where: { employeeId } });
}

async function update(id, params) {
  const request = await getById(id);
  if (!request) throw 'Request not found';

  Object.assign(request, params);
  await request.save();
  return request;
}

async function _delete(id) {
  const request = await getById(id);
  if (!request) throw 'Request not found';

  await request.destroy();
}