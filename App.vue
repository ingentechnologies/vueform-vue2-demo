<template>
  <div>
    <h1>Hello world from Vue {{ version }}</h1>
    <Vueform>
      <TextElement name="text" label="message" />
      <PhoneElement
      name="phone"
      label="Phone"
      :allow-incomplete="true"
      :unmask="true"
    />
      <ButtonElement name="submit" button-label="Submit" :submits="true" />
    </Vueform>
  </div>
</template>

<script>
import { ref } from 'vue';
import Vue from 'vue';

export default {
  setup(props, context) {
    const version = ref(Vue.version);

    return { version };
  },
};
</script>
