<template>
  <div class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card">
        <div class="card-content">
          <div class="statement-flexbox">
            <img :src="profilePictureUri" :alt="content.actor.name" class="circle">
            <div class="statement">
              <a :href="content.actor.mbox">{{content.actor.name}}</a>
              <span>{{content.verb.display}}</span>
              <a v-if="content.object.objectType==='Agent'" :href="content.object.mbox">{{content.object.name}}</a>
              <span v-else-if="activityName">{{activityName}}</span>
            </div>
            <div class="additional">
              <span class="activator"><i class="material-icons">more_vert</i></span>
            </div>
          </div>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text">
            <span class="center">
              Instructor: <a :href="instructor.mbox">{{instructor.name}}</a>
            </span>
            <i class="material-icons">close</i>
          </span>
          <div class="extra-info">
            <span v-if="score">Gave score: {{score.correct}}/<span>{{score.max}}</span></span>
            <span>Category: {{contextActivityName}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statement',
  props: ['content'],
  computed: {
    profilePictureUri() {
      return `static/${this.content.actor.name.toLowerCase()}.png`;
    },
    activityName() {
      if (this.content.object.objectType === 'Activity') {
        try {
          const objectName = this.content.object.definition.name;
          return objectName[Object.keys(objectName)[0]];
        } catch (err) {
          if (err.name === 'TypeError') {
            return this.content.object.id;
          }
        }
      }
    },
    contextActivityName() {
      try {
        const contextActivitiesParent = this.content.context.contextActivities
          .parent[0].definition.name;
        return contextActivitiesParent[Object.keys(contextActivitiesParent)[0]];
      } catch (err) {
        console.log(err.name);
        return 'N/A';
      }
    },
    instructor() {
      try {
        const instructor = this.content.context.instructor;
        return instructor;
      } catch (err) {
        console.log(err.name);
        return {
          mbox: 'N/A',
          name: 'N/A',
        };
      }
    },
    score() {
      try {
        const score = {
          correct: this.content.result.score.raw,
          max: this.content.result.score.max,
        };
        return score;
      } catch (err) {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 75px;
  height: auto;
  align-self: center;
}
.row {
  margin-bottom: 5px;
}
.statement-flexbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}
.statement {
  height: 100%;
  align-self: center;
  position: relative;
  font-size: 20px;
}
.card {
  height: 125px;
  margin-bottom: 5px;
}

.card-title {
  display: flex;
  justify-content: center;
  align-content: center;
  i {
    margin-top: 6px;
    float: right;
  }
  span {
    margin-left: 30px;
  }
}

.card-reveal {
  padding-bottom: 34px;
  padding-top: 14px;
}
.card-content {
  padding-left: 10px;
  padding-right: 4px;
  padding-top: 30px;
  padding-bottom: 10px;
}
.additional {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.extra-info {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  font-size: 17px;
}

i {
  cursor: pointer;
  font-size: 30px;
}
</style>
