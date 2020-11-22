<template>
  <div class="card">
    <img
      :class="{ 'album-cover': isAlbum, 'artist-cover': isArtist }"
      :src="cover"
      :alt="{ cover: isAlbum, artist: isArtist }"
    />
    <div class="card-info">
      <a class="card-title" href="#">{{ isAlbum ? album : artist }}</a>
      <a class="card-subtitle" href="#">{{ isAlbum ? artist : "Artista" }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAlbum: Boolean,
    isArtist: Boolean,
    album: String,
    artist: String,
    cover: String
  }
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 186px;
  height: 264px;
  border-radius: 4px;
  background: var(--tertiary-dark);
  padding: 16px 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: var(--quaternary-dark);
  }
}

.album-cover,
.artist-cover {
  width: 164px;
  height: 164px;
  border-radius: 1px;
  box-shadow: 0px 8px 8px 2px var(--secondary-dark);
}

.artist-cover {
  border-radius: 50%;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 20px);
  margin-top: 20px;
}

.card-title,
.card-subtitle {
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-title {
  font-weight: 700;
  font-size: 14px;
  color: var(--primary-light);
  max-width: 18ch;
  white-space: nowrap;
  margin-bottom: 6px;
}

.card-subtitle {
  font-weight: 700;
  font-size: 12px;
  color: var(--aditional-light);
}
</style>
