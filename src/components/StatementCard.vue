<template>
  <div>
    <img src="" alt="">
    <div class="statement-text">
      <a :href="content.actor.mbox">{{content.actor.name}}</a>
      <span>{{content.verb.display}}</span>
      <a v-if="content.object.objectType==='Agent'" :href="content.object.mbox">{{content.object.name}}</a>
      <span v-else-if="content.object.objectType==='Activity'">{{activityName}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'statement',
  props: ['content'],
  computed: {
    activityName() {
      if (this.content.object.objectType === 'Activity') {
        const objectName = this.content.object.definition.name;
        return objectName[Object.keys(objectName)[0]];
      }
    },
  },
};
</script>
