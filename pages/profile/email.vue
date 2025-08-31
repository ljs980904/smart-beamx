<template>
  <view class="email-page">
    <view class="page-nav">
      <view class="nav-back" @click="goBack"><text class="back-icon">‹</text></view>
    </view>
    <view class="content-title">设置邮箱</view>
    <view class="subtitle">{{ currentEmail }}</view>
    <view class="input-area">
      <input 
        class="main-input"
        v-model="email"
        placeholder="user@gmail.com"
        type="email"
        confirm-type="done"
      />
    </view>
    <view class="submit-area">
      <button class="submit-btn" @click="submit">完成</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'EmailPage',
  data() {
    return {
      email: '',
      currentEmail: '188****5678@gmail.com'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack({ delta: 1 })
    },
    submit() {
      if (!this.email || !/\S+@\S+\.\S+/.test(this.email)) {
        uni.showToast({ title: '请输入正确的邮箱', icon: 'none' })
        return
      }
      uni.$emit('updateEmail', { email: this.email.replace(/(.{3}).+(@.+)/, '$1****$2') })
      uni.showToast({ title: '邮箱修改成功', icon: 'success' })
      setTimeout(() => {
        uni.navigateBack({ delta: 1 })
      }, 800)
    }
  },
  onLoad(options) {
    if (options.current) {
      this.currentEmail = decodeURIComponent(options.current)
    }
  }
}
</script>

<style scoped>
.email-page { position:relative; background:#000; min-height:100vh; color:#fff; padding:20px; }
.email-page::before { content:''; position:absolute; inset:0; background:url('/static/icons/background.svg') center/cover no-repeat; opacity:.99; pointer-events:none; z-index:0; }
.page-nav { position: sticky; top:0; text-align:center; padding:16px 0; z-index:2; }
.page-title { font-size:20px; color:#fff; }
.nav-back { position:absolute; left:16pt; top:8pt; width:32pt; height:32pt; display:flex; align-items:center; justify-content:center; color:#fff; }
.back-icon { font-size:22pt; line-height:1; }
.content-title { position:relative; z-index:1; text-align:left; color:#fff; font-size:28px; font-weight:600; margin:60px 0 40px 24px; }
.subtitle { position:relative; z-index:1; text-align:left; color:#ccc; font-size:16px; margin:0 0 80px 24px; }
.input-area { position:relative; z-index:1; margin:0 24px 80px 24px; }
.main-input { width:100%; padding:32px 24px; background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); border-radius:20px; color:#fff; font-size:14pt; text-align:center; outline:none; min-height:72px; height:auto; letter-spacing:1px; line-height:1.4; word-wrap:break-word; overflow:visible; }
.main-input:focus { border-color:rgba(255,255,255,.4); background:rgba(255,255,255,.18); }
.main-input::placeholder { color:rgba(255,255,255,.5); }
.submit-area { position:relative; z-index:1; margin:0 24px; }
.submit-btn { width:100%; padding:20px; background:rgba(255,255,255,.2); color:#fff; border:none; border-radius:20px; font-size:18px; font-weight:600; min-height:64px; }
</style>
