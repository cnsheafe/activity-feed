<template>
  <div>
    <img src="" alt="">
    <div class="statement-text">
      <a :href="content.actor.mbox">{{content.actor.name}}</a>
      <span>{{content.verb.display}}</span>

    </div>

  </div>
</template>

<script>
export default {
  name: 'statement',
  props: ['content'],
};
</script>
