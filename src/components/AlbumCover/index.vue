<template>
  <div class="container">
    <a class="download-container" href="#">
      <img
        class="download-icon"
        src="../../assets/download.svg"
        alt="download"
      />
      Instalar Aplicativo
    </a>
    <img :src="cover" class="cover" alt="Capa do Álbum" />
  </div>
</template>

<script>
export default {
  props: {
    cover: String,
  },
};
</script>

<style scoped lang="scss">
.container {
  grid-area: AC;
  background: var(--primary-dark);
  display: flex;
  flex-direction: column;
  padding: 2px;
}

.download-container {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  margin-top: 38px;
  margin-bottom: 14px;
  font-weight: 700;
  color: var(--secondary-light);
  font-size: 12px;
  background-color: transparent;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--primary-light);
  }
}

.download-icon {
  width: 20px;
  height: 20px;
  margin-left: 18px;
  margin-right: 6px;
}

.cover {
  width: 228px;
  height: 228px;
}
</style>