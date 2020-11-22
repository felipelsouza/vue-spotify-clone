<template>
  <div class="container">
    <header>
      <nav>
        <img class="nav-icon" src="../../assets/left-arrow.svg" alt="voltar" />
        <img
          class="nav-icon"
          src="../../assets/right-arrow.svg"
          alt="avançar"
        />
      </nav>
      <div class="profile">
        <img
          class="profile-image"
          src="https://jovemnerd.com.br/wp-content/uploads/Gandalf-Fuck-Yeah.jpg"
          alt="foto de perfil"
        />
        <span class="profile-name">Felipe</span>
        <img
          class="profile-arrow-icon"
          src="../../assets/white-arrow.svg"
          alt="detalhes do perfil"
        />
      </div>
    </header>

    <div class="items-container">
      <ItemsSection title="Atalhos" />
      <ItemsSection title="Tocados Recentemente" />
    </div>
  </div>
</template>

<script>
import ItemsSection from "./ItemsSection";

export default {
  components: {
    ItemsSection
  }
};
</script>

<style scoped lang="scss">
.container {
  grid-area: HP;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: var(--secondary-dark);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--quaternary-light);
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
}

.nav-icon {
  width: 30px;
  height: 30px;
  margin-right: 16px;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 82px;
  padding: 14px 32px 0px 32px;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  height: 32px;
  border-radius: 15px;
  background: var(--aditional-dark);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: var(--quaternary-dark);
  }
}

.profile-image {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: 2px;
}

.profile-name {
  font-weight: 700;
  color: var(--primary-light);
  font-size: 12px;
}

.profile-arrow-icon {
  width: 12px;
  height: 6px;
  margin-right: 8px;
}
</style>
