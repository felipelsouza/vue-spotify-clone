<template>
    <div class="container">
        <img class="option-icon" src="../../assets/microphone.svg" alt="letras">
        <img class="option-icon" src="../../assets/playlist.svg" alt="fila de reprodução">
        <img class="option-icon" src="../../assets/computer.svg" alt="dispositivos">
        <img class="option-icon" src="../../assets/sound.svg" alt="volume">

        <ProgressBar isSound />
    </div>
</template>

<script>
import ProgressBar from "./ProgressBar";

export default {
    components: {
        ProgressBar
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.option-icon {
     width: 16px;
     height: 20px;
     margin-right: 14px;
}
</style>