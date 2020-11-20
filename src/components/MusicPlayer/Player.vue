<template>
  <div class="container">
    <div class="player-controller">
      <img
        :src="setRandomIcon(isRandom)"
        :class="{ 'random-icon-on': isRandom, 'random-icon-off': !isRandom }"
        alt="aleatório"
        v-on:click="setRandom()"
      />
      <img class="preview-icon" src="../../assets/preview.svg" alt="anterior" />

      <img
        :src="setPlayOrPauseIcon(isPaused)"
        :class="{ 'play-icon': isPaused, 'pause-icon': !isPaused }"
        alt="play/pause"
        v-on:click="setPlayOrPause()"
      />

      <img class="next-icon" src="../../assets/next.svg" alt="próxima" />
      <img
        :src="setRepeatIcon(isRepeat)"
        :class="{ 'repeat-icon-on': isRepeat, 'repeat-icon-off': !isRepeat }"
        alt="repetir"
        v-on:click="setRepeat()"
      />
    </div>

    <ProgressBar isMusic />
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";

export default {
  components: {
    ProgressBar,
  },

  data() {
    return {
      isRandom: false,
      isRepeat: false,
      isPaused: false,
    };
  },

  methods: {
    setRandom() {
      this.isRandom = !this.isRandom;
    },

    setRandomIcon(isRandom) {
      return isRandom
        ? require("../../assets/random-green.svg")
        : require("../../assets/random-white.svg");
    },

    setRepeat() {
      this.isRepeat = !this.isRepeat;
    },

    setRepeatIcon(isRepeat) {
      return isRepeat
        ? require("../../assets/repeat-green.svg")
        : require("../../assets/repeat-white.svg");
    },

    setPlayOrPause() {
      this.isPaused = !this.isPaused;
    },

    setPlayOrPauseIcon(isPaused) {
      return isPaused
        ? require("../../assets/play.svg")
        : require("../../assets/pause.svg");
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.player-controller {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  margin-top: 12px;
  margin-bottom: 14px;
}

.random-icon-on,
.random-icon-off,
.preview-icon,
.next-icon,
.repeat-icon-on,
.repeat-icon-off {
  width: 14px;
  height: 20px;
}

.play-icon,
.pause-icon {
  width: 40px;
  height: 40px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>