<template>
  <div id="app">
    <statement-feed v-if="statements.length" :feed="statements"/>
  </div>
</template>

<script>
import StatementFeed from './components/StatementFeed';
import fetchFeed from './helpers/fetchFeed';

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
  created() {
    fetchFeed().then(feed => {
      this.statements = feed;
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
