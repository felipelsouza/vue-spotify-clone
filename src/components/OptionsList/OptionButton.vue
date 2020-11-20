<template>
  <a class="option-button" :class="{ active }" v-if="text">
    <img
      :class="{'icon': icon, 'playlist-icon': playlistIcon }"
      v-if="icon"
      :src="getIconUrl(icon)"
      :alt="text"
    />
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    active: Boolean,
    icon: String,
    playlistIcon: Boolean,
  },

  methods: {
    getIconUrl(icon) {
      return require("../../assets/" + icon);
    },
  },
};
</script>

<style scoped lang="scss">
.option-button {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 215px;
  height: 40px;
  border-radius: 4px;
  background-color: transparent;
  color: var(--secondary-light);
  font-weight: 700;
  font-size: 12px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--primary-light);
  }
  &.active {
    background-color: var(--quaternary-dark);
    color: var(--primary-light);
  }
}

.icon {
  width: 20px;
  height: 20px;
  margin: 0 18px;
}

.playlist-icon {
  width: 32px;
  height: 32px;
  margin: 0 18px;
}
</style>