const db = require('../index');
module.exports = {
  get,
  create,
};

function get(id) {
  if (id)
    return db('games')
      .select('title', 'genre', 'releaseYear')
      .where({ id })
      .first()
  else return db('games');
}

async function create(game) {
  const [ id ] = await db('games').insert(game);
  return get(id);
}
