<script setup>
import { onMounted, computed, nextTick } from "vue";
import { simpleWaves } from 'simple-waves';

const props = defineProps({
  canvasid: {
    type: String,
    default: "simpleWaveCanvas",
    required: false
  },
  width: {
    type: String,
    default: "750",
    required: false
  },
  height: {
    type: String,
    default: "500",
    required: false
  },
  waves: {
    type: Array,
    required: false,
    default: () => []
  }
});

const hasWaveConfig = computed(() => prop.waves.length > 0);

onMounted(async () => {
  await nextTick()
  if(hasWaveConfig) {
    simpleWaves(props.canvasid, props.width, props.height, props.waves);
  } else {
    simpleWaves(props.canvasid, props.width, props.height);
  }
});
</script>

<template>
<canvas
    :id="props.canvasid"
    :style="{ width: props.width + 'px', height: props.height + 'px' }">
</canvas>
</template>

<style scoped>
</style>