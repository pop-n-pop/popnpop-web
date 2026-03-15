<template>
  <div class="adsense-container">
    <ins class="adsbygoogle"
         :style="adStyle"
         :data-ad-client="adClient"
         :data-ad-slot="adSlot"
         :data-ad-format="adFormat"
         :data-full-width-responsive="fullWidthResponsive"></ins>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'AdSense',
  props: {
    adClient: {
      type: String,
      default: 'ca-pub-3736938424447377' // Replace with your actual AdSense client ID
    },
    adSlot: {
      type: String,
      required: true
    },
    adFormat: {
      type: String,
      default: 'auto'
    },
    fullWidthResponsive: {
      type: String,
      default: 'true'
    },
    adStyle: {
      type: Object,
      default: () => ({ display: 'block' })
    }
  },
  setup() {
    onMounted(() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    });
  }
});
</script>

<style scoped>
.adsense-container {
  width: 100%;
  margin: 1rem 0;
  text-align: center;
}
</style>
