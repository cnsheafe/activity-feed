import parseStatement from './parseStatement';

require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

export default function fetchFeed() {
  return fetch('https://playposit-activity-feed.herokuapp.com/feed', {
    method: 'GET',
    cache: 'default',
  })
    .then(res => {
      if (res.status !== 200) {
        throw res;
      }
      return res.json();
    })
    .then(json => {
      try {
        const statements = json.statements.map(statement =>
          parseStatement(statement),
        );
        return statements;
      } catch (err) {
        throw err;
      }
    })
    .catch(err => {
      console.error(err);
    });
}
