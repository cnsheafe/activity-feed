import parseStatement from './parseStatement';

require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

export default function addNewStatement() {
  const baseUrl = 'https://playposit-activity-feed.herokuapp.com';
  return fetch(baseUrl, {
    method: 'GET',
    cache: 'default',
  })
    .then(res => {
      if (res.status !== 200) {
        throw {
          res,
          msg: 'Error in sending statement',
        };
      }
      return res.json();
    })
    .then(statementIds => statementIds[0])
    .then(id =>
      fetch(`${baseUrl}/feed?id=${id}`, {
        method: 'GET',
      }),
    )
    .then(res => res.json())
    .then(statement => parseStatement(statement))
    .catch(err => {
      console.error(err);
    });
}
