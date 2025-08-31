<template>
  <view class="music-page">
    <view class="top-bar">
      <text class="ico">🎵</text><view class="sep"></view><text class="ico">🎙</text>
      <text class="title">音乐</text>
      <text class="power">⏻</text>
    </view>
    <scroll-view class="chips" scroll-x>
      <view class="chip" v-for="(c,i) in chips" :key="i" :class="{active: curChip===i}" @click="curChip=i">{{ c }}</view>
    </scroll-view>

    <view class="seg">
      <view :class="['seg-btn',{on: seg===0}]" @click="seg=0">单色</view>
      <view :class="['seg-btn',{on: seg===1}]" @click="seg=1">模式</view>
    </view>

    <view class="canvas"></view>

    <view class="player-mini" @click="goPlayer">
      <text class="note">🎵</text>
      <text class="name">两只老虎</text>
      <text class="play">▶</text>
      <text class="list" @click.stop="goList">🪗</text>
    </view>
  </view>
</template>

<script>
export default { data:()=>({ chips:['LED 1','LED 2','LED 3','LED 4','LED 5'], curChip:0, seg:0 }), methods:{ goList(){ uni.navigateTo({ url:'/pages/scene/music/list' }) }, goPlayer(){ uni.navigateTo({ url:'/pages/scene/music/player' }) } } }
</script>

<style scoped>
.music-page{background:#000;min-height:100vh;color:#fff}
.top-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 12px;backdrop-filter:saturate(160%) blur(8px)}
.sep{width:1px;height:18px;background:transparent}
.title{font-size:18px;font-weight:700}
.chips{white-space:nowrap;padding:6px 10px}
.chip{display:inline-flex;align-items:center;justify-content:center;padding:8px 14px;margin-right:10px;background:#1a1a1a;border:1px solid #333;border-radius:10px}
.chip.active{background:#2a2a2a}
.seg{display:flex;margin:10px 12px;background:#1a1a1a;border:1px solid #333;border-radius:12px;overflow:hidden}
.seg-btn{flex:1;text-align:center;padding:10px 0;color:#cfcfcf}
.seg-btn.on{background:#ff5a24;color:#fff}
.canvas{height:260px;background:linear-gradient(90deg,red,orange,yellow,green,cyan,blue,purple)}
.player-mini{position:fixed;left:12px;right:12px;bottom:82px;background:linear-gradient(180deg,#0b0b0b,#121212);border:1px solid #1f1f1f;border-radius:24px;padding:12px 16px;display:flex;align-items:center;gap:12px}
.note{background:#1c1c1c;border:1px solid #333;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center}
.name{flex:1}
.play{margin-right:12px}
.list{opacity:.8}
</style>

