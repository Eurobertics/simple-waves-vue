# Simple-Waves Vue.js Wrapper Package

This is the wrapper package for the [simple-waves NPM Package](https://www.npmjs.com/package/simple-waves) (Github Repo here: [simple-waves](https://github.com/Eurobertics/simple-waves-vue)),
to use simple-waves convenient with [Vue.js](https://vuejs.org).

## Install

Within your Vue project just install it as usual:

```bash
# npm install simple-waves-vue simple-waves
```

## Usage

The package contains a component which allows you to use it easy within your project:

```vue
// YourComponnent.vue
<script setup>
  import SimpleWaves from "simple-waves-vue"
</script>

<template>
  <SimpleWaves />
</template>

<style scoped>
</style>
```

This defaults the simple-wave canvas as follows:

Canvas ID: `simpleWaveCanvas`  
Width: `750px`  
Height: `500px`  
Waves: default following described

## Komponent Options

```vue
<SimpleWaves canvasid="simpleWaveCanvas" width="750" height="500" waves="[]" />
```

### `canvasid`:
This is a ID which will be passed to the canvas HTML tag. This is just useful if you need
more then one wave animation on one side to avoid same HTML ID problems.

Default: `simpleWaveCanvas`

### `width`:
The width of the canvas.

Default: `750px`

### `height`:
The height: of the canvas.

Default: `500px`

### `waves`:
An configuration array for the waves to be animated. The following default array
creates two waves with sligtly different properties.

Default:
```javascript
let waves = [
    {
        y: 50, // The default height (from the top) of the wave whithin the canvas 
        length: 0.01, // Length of the wave
        amplitude: 20, // Wave height
        frequency: 0.04, // Animation speed (from right to left)
        color: 'rgba(0,51,255,0.81)', // Color in RGBA
        baseAmplitude: 20, // Base hieght, used to animate the heigth
        amplitudeFrequency: 2, // Animation speed for the higth (how fast the wave goes up and down) 
        increment: 0 // Internal not used 
    },
    {
        y: 50,
        length: 0.02,
        amplitude: 10,
        frequency: 0.05,
        color: 'rgba(0,140,255,0.5)',
        baseAmplitude: 10,
        amplitudeFrequency: 2.5,
        increment: 0
    }
]
```
The above example creates two waves, moving differen in speed and height.