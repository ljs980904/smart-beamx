<template>
  <view class="update-page">
    <view class="page-nav"><view class="nav-back" @click="goBack"><text class="back-icon">‹</text></view><text class="page-title">语言</text></view>
    <view class="update-card">
      <view class="row">
        <view class="icon"></view>
        <view class="info">
          <text class="ver">V{{ version }}</text>
          <text class="size">{{ sizeMB }}MB</text>
        </view>
      </view>
      <view class="desc-title">本更新增强软件稳定性：</view>
    </view>
    <view class="btn-wrap">
      <button class="btn" @click="install">安装更新</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'UpdatePage',
  data() {
    return { version: '1.0.2', sizeMB: '32.25' }
  },
  methods: {
    goBack() { uni.navigateBack({ delta: 1 }) },
    install() { uni.showToast({ title: '开始安装…', icon: 'success' }) }
  }
}
</script>

<style scoped>
.update-page { position:relative; background:#000; min-height:100vh; color:#fff; padding:20px; }
.update-page::before { content:''; position:absolute; inset:0; background:url('/static/icons/background.svg') center/cover no-repeat; opacity:.99; pointer-events:none; z-index:0; }
.page-nav { position: sticky; top:0; text-align:center; padding:16px 0; z-index:2; }
.page-title { font-size:20px; color:#fff; opacity:0; } /* 居中留位，不显示文案 */
.nav-back { position:absolute; left:16pt; top:8pt; width:32pt; height:32pt; display:flex; align-items:center; justify-content:center; color:#fff; }
.back-icon { font-size:22pt; line-height:1; }
.update-card { margin:20px; padding:20px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12); border-radius:16px; backdrop-filter: blur(18px); position:relative; z-index:1; }
.row { display:flex; align-items:center; gap:16px; margin-bottom:20px; }
.icon { width:64px; height:64px; border-radius:12px; background:#777; }
.info { display:flex; flex-direction:column; gap:8px; }
.ver { font-size:20px; font-weight:600; color:#fff; }
.size { font-size:16px; color:#ccc; }
.desc-title { margin-top:12px; font-size:16px; color:#ccc; }
.btn-wrap { position:relative; z-index:1; margin:24px 20px; }
.btn { width:100%; padding:16px; background:rgba(255,255,255,.18); color:#fff; border:none; border-radius:16px; font-size:18px; }
</style>
