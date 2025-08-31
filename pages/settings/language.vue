<template>
  <view class="lang-page">
    <view class="page-nav"><view class="nav-back" @click="goBack"><text class="back-icon">‹</text></view><text class="page-title">语言</text></view>
    <view class="lang-card">
      <view class="lang-item" :class="{active: current==='zh-CN'}" @click="setLang('zh-CN')">
        <text class="lang-name">简体中文</text>
        <text v-if="current==='zh-CN'" class="ok">✓</text>
      </view>
      <view class="lang-item" :class="{active: current==='en-US'}" @click="setLang('en-US')">
        <text class="lang-name">英文</text>
        <text v-if="current==='en-US'" class="ok">✓</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'LanguageSettings',
  data() {
    return { current: 'zh-CN' }
  },
  methods: {
    goBack() { uni.navigateBack({ delta: 1 }) },
    setLang(v) {
      this.current = v
      uni.showToast({ title: '已保存', icon: 'success' })
    }
  }
}
</script>

<style scoped>
.lang-page { position:relative; background:#000; min-height:100vh; color:#fff; padding:20px; }
.lang-page::before { content:''; position:absolute; inset:0; background:url('/static/icons/background.svg') center/cover no-repeat; opacity:.99; pointer-events:none; z-index:0; }
.page-nav { position: sticky; top:0; text-align:center; padding:16px 0; z-index:2; }
.page-title { font-size:20px; color:#fff; }
.nav-back { position:absolute; left:16pt; top:8pt; width:32pt; height:32pt; display:flex; align-items:center; justify-content:center; color:#fff; }
.back-icon { font-size:22pt; line-height:1; }
.lang-card { position:relative; z-index:1; margin:20px; padding:8px 0; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12); border-radius:16px; backdrop-filter: blur(18px); }
.lang-item { display:flex; justify-content:space-between; align-items:center; padding:22px 20px; }
.lang-item + .lang-item { border-top:1px solid rgba(255,255,255,.08); }
.lang-item.active { background:transparent; }
.lang-name { font-size:18px; color:#fff; }
.ok { font-size:18px; color:#fff; }
</style>
