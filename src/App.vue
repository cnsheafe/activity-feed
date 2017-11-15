<template>
  <div id="app">
    <statement-feed v-if="statements.length" :feed="statements"/>
    <a @click="generateStatement" class="btn-floating btn-large waves-effect waves-light red">
      <i 
      class="material-icons">add</i>
    </a>
  </div>
</template>

<script>
import StatementFeed from './components/StatementFeed';
import fetchFeed from './helpers/fetchFeed';
import addNewStatement from './helpers/addNewStatement';

export default {
  name: 'app',
  components: {
    StatementFeed,
  },
  data() {
    return {
      statements: [],
    };
  },
  methods: {
    generateStatement(event) {
      event.preventDefault();
      let newStatement;
      addNewStatement().then(statement => {
        newStatement = statement;
        this.statements = [newStatement, ...this.statements];
      });
    },
  },
  created() {
    fetchFeed().then(feed => {
      this.statements = feed;
    });
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
