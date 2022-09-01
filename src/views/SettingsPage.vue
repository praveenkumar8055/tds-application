<template>
  <div class="container-center">
    <div class="card-settings">
      <theme-button />
      <p>High rates of Boredom</p>
      <p>Working Professional High rates of Depression</p>
      <p>High rates of Obesity</p>
      <p>Social Skills Building</p>
    </div>
  </div>
</template>

<script>
import ThemeButton from "@/components/ThemeButton.vue";
export default {
  components: { ThemeButton },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

.card-settings p {
  color: var(--text-primary-color);
}

.container-center {
  background-color: var(--background-color-primary);
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-settings {
  padding: 2rem 4rem;
  height: 270px;
  width: 350px;
  text-align: center;
  border: 1px solid var(--accent-color) !important;
  border-radius: 4px;
  background-color: var(--background-color-secondary) !important;
}
</style>
