<template>
  <div class="container">
    <span v-if="isMusic" class="timer">3:72</span>

    <div :class="{ 'music-bar': isMusic, 'sound-bar': isSound }">
      <div
        :class="{
          'progress-music-bar': isMusic,
          'progress-sound-bar': isSound,
        }"
      >
        <div v-if="isMusic" class="dragger"></div>
      </div>
    </div>

    <span v-if="isMusic" class="timer">7:45</span>
  </div>
</template>

<script>
export default {
  props: {
    isMusic: Boolean,
    isSound: Boolean,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.timer {
  color: var(--secondary-light);
  font-size: 12px;
}

.music-bar {
  height: 4px;
  width: 550px;
  background: var(--tertiary-light);
  border-radius: 4px;
  margin: 0 10px;
}

.sound-bar {
  height: 4px;
  width: 100px;
  background: var(--tertiary-light);
  border-radius: 4px;
  margin-right: 18px;
}

.progress-music-bar {
  width: 50%;
  height: 100%;
  border-radius: 4px;
  background: var(--primary-light);

  &:hover {
    background: var(--spotify);
    height: 110%;
  }
}

.progress-sound-bar {
  width: 85%;
  height: 100%;
  border-radius: 4px;
  background: var(--primary-light);

  &:hover {
    background: var(--spotify);
    height: 110%;
  }
}

.dragger {
  display: block;
  position: absolute;
  z-index: 1;
  margin-top: -3px;
  margin-left: 274px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary-light);
}
</style>