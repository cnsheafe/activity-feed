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
        throw res;
      }
      return res.json();
    })
    .then(id => {
      return fetch(`${baseUrl}/feed?id=${id}`, {
        method: 'GET',
      });
    })
    .then(res => {
      if (res.status !== 200) {
        throw res;
      }
      return res.json();
    })
    .then(statement => statement)
    .catch(err => {
      console.error(err);
    });
}
