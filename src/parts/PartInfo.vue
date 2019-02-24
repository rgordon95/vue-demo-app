<template lang="html">
  <div class="">
    <h1>{{ part.title }}</h1>
    <div class="">
      {{ part.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartInfo'.
  data() {
    return {
      part: {
        title: 'Part Title',
        description: 'Part Description',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
