<template>
  <view class="sens-page">
    <view class="panel">
      <text class="title">灵敏度</text>
      <view class="slider-row">
        <text class="ico">~</text>
        <slider :value="val" @change="e=>val=e.detail.value" min="0" max="100" active-color="#fff" backgroundColor="#333" />
        <text class="ico">~</text>
      </view>
    </view>
  </view>
</template>

<script>
export default { data:()=>({ val:40 }) }
</script>

<style scoped>
.sens-page{background:#000;min-height:100vh;color:#fff;display:flex;align-items:flex-end}
.panel{background:#121212;border:1px solid #2a2a2a;border-radius:18px;margin:0 16px 24px;padding:16px 14px;width:100%}
.title{display:block;text-align:center;margin-bottom:10px}
.slider-row{display:flex;align-items:center;gap:10px}
.ico{opacity:.7}
</style>

