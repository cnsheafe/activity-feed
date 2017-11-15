export default function parseStatement(statement) {
  return {
    actor: statement.actor,
    verb: {
      id: statement.verb.id,
      display: statement.verb.display[Object.keys(statement.verb.display)[0]],
    },
    result: statement.result,
    context: statement.context,
    object: statement.object,
  };
}
