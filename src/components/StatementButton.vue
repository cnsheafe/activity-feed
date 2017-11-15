<template>
  <a :click="generateStatement" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
</template>

<script>
import addNewStatement from '../helpers/addNewStatement';

export default {
  name: 'statementButton',
  methods: {
    generateStatement() {
      // dispatch needs to replace the following function
      addNewStatement()
      .then(statement => statement);
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
