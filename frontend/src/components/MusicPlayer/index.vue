<template>
  <div class="container">
    <div class="music-info-container">
      <div class="music-info">
        <a class="music-name" href="#">{{ musicName }}</a>
        <a class="artist-name" href="#">{{ artist }}</a>
      </div>

      <img
        :src="setHeartIcon(isActive)"
        class="heart-icon"
        alt="favoritar"
        v-on:click="setActive()"
      />
    </div>

    <Player />

    <MusicOptions />
  </div>
</template>

<script>
import Player from "./Player";
import MusicOptions from "./MusicOptions";

export default {
  components: {
    Player,
    MusicOptions
  },

  props: {
    musicName: String,
    artist: String,
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    setActive() {
      this.isActive = !this.isActive;
    },

    setHeartIcon(isActive) {
      return isActive
        ? require("../../assets/heart-fill.svg")
        : require("../../assets/heart-transparent.svg");
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  grid-area: MP;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  background: var(--quaternary-dark);
}

.music-info-container {
    display: flex;
    flex-direction: row;
}

.music-info {
  display: flex;
  flex-direction: column;
}

.music-name {
  font-weight: 600;
  color: var(--primary-light);
  font-size: 14px;
  margin-bottom: 4px;
  transition: 0.2s;

  &:hover {
    text-decoration: underline;
  }
}

.artist-name {
  font-weight: 600;
  color: var(--secondary-light);
  font-size: 12px;
  transition: 0.2s;

  &:hover {
    text-decoration: underline;
    color: var(--primary-light);
  }
}

.heart-icon {
  width: 18px;
  height: 18px;
  margin-left: 30px;
}
</style>