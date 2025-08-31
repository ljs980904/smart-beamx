<template>
  <view class="player-page">
    <view class="bars">
      <view class="bar" v-for="i in 28" :key="i" :style="{height:(10+Math.random()*80)+'px'}"></view>
    </view>
    <view class="controls">
      <text class="ctrl">🔀</text>
      <text class="ctrl">⏮</text>
      <view class="play">⏸</view>
      <text class="ctrl">⏭</text>
      <text class="ctrl">🎵</text>
    </view>
  </view>
</template>

<script>
export default {}
</script>

<style scoped>
.player-page{background:#000;min-height:100vh;color:#fff;display:flex;flex-direction:column;justify-content:space-between}
.bars{display:flex;justify-content:center;gap:6px;margin-top:140px}
.bar{width:6px;background:linear-gradient(180deg,#ff6a2a,#ff9a3c);border-radius:3px}
.controls{display:flex;align-items:center;justify-content:space-around;margin-bottom:44px}
.play{width:72px;height:72px;border-radius:36px;background:linear-gradient(180deg,#ff6a2a,#ff9a3c);display:flex;align-items:center;justify-content:center}
.ctrl{opacity:.85}
</style>

