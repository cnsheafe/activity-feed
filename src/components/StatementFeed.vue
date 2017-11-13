<template>
  <ul>
    <li v-for="(statement, index) in feed" :key="index">
      <statement :content="statement"/>
    </li>
      
  </ul>
</template>

<script>
import StatementCard from './StatementCard';

export default {
  name: 'feed',
  components: {
    Statement: StatementCard,
  },
  props: ['feed']
};
</script>

<style lang="sass" scoped>

</style>
