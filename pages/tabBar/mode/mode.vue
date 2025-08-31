<template>
  <view class="mode-page">
    <view class="top-card">
      <view class="mode-head">
        <text class="mode-icon">~</text>
        <text class="mode-title">模式名称1</text>
        <text class="mode-arrow">›</text>
      </view>
      <view class="mode-color" style="background:linear-gradient(90deg,#ff6aa6,#60d3ff)"></view>
    </view>
    <button class="add-btn" @click="goCreate">＋ 添加</button>

    <text class="subtitle">预设</text>
    <view class="grid">
      <view class="mode-card" v-for="m in presets" :key="m.id" @click="open(m)">
        <view class="mode-head"><text class="mode-icon">~</text><text class="mode-title">{{ m.name }}</text><text class="mode-arrow">›</text></view>
        <view class="mode-color" :style="{background:m.bg}"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ModePage',
  data(){
    return { presets:[
      { id:1,name:'模式名称1', bg:'linear-gradient(90deg,#ff6aa6,#60d3ff)' },
      { id:2,name:'模式名称1', bg:'linear-gradient(90deg,#ff9a3c,#f0de62)' },
      { id:3,name:'模式名称1', bg:'linear-gradient(90deg,#40e0a1,#36a3a3)' },
      { id:4,name:'模式名称1', bg:'linear-gradient(90deg,#7c5cff,#ff3b6b)' }
    ] }
  },
  methods:{
    goCreate(){ uni.navigateTo({ url:'/pages/mode/setting' }) },
    open(m){ uni.navigateTo({ url:'/pages/mode/setting' }) }
  }
}
</script>

<style scoped>
.mode-page{background:#000;min-height:100vh;color:#fff;padding:16px}
.top-card{background:#171717;border:1px solid #2f2f2f;border-radius:16px;padding:16px;margin-bottom:14px}
.mode-head{display:flex;align-items:center}
.mode-icon{font-size:16px;margin-right:8px;opacity:.8}
.mode-title{font-size:16px;font-weight:600;flex:1}
.mode-arrow{opacity:.5}
.mode-color{height:46px;border-radius:10px;margin-top:12px}
.add-btn{width:100%;background:#ff5a24;color:#fff;border:none;border-radius:999px;padding:12px 0;margin:8px 0 18px}
.subtitle{display:block;color:#bdbdbd;margin:6px 0 10px 4px}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.mode-card{background:#171717;border:1px solid #2f2f2f;border-radius:16px;padding:14px}
.mode-card:active{transform:scale(.98)}
</style>
