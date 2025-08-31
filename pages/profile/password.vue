<template>
  <view class="password-page">
    <view class="page-nav">
      <view class="nav-back" @click="goBack"><text class="back-icon">‹</text></view>
    </view>
    <view class="content-title">设置密码</view>
    <view class="input-area">
      <input 
        class="main-input"
        v-model="password"
        placeholder="请输入密码"
        type="password"
        confirm-type="done"
      />
      <input 
        class="main-input"
        v-model="confirmPassword"
        placeholder="再次输入密码"
        type="password"
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
  name: 'PasswordPage',
  data() {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    goBack() {
      uni.navigateBack({ delta: 1 })
    },
    submit() {
      if (!this.password || !this.confirmPassword) {
        uni.showToast({ title: '请输入密码', icon: 'none' })
        return
      }
      if (this.password !== this.confirmPassword) {
        uni.showToast({ title: '两次密码不一致', icon: 'none' })
        return
      }
      uni.showToast({ title: '密码设置成功', icon: 'success' })
      setTimeout(() => {
        uni.navigateBack({ delta: 1 })
      }, 800)
    }
  }
}
</script>

<style scoped>
.password-page { position:relative; background:#000; min-height:100vh; color:#fff; padding:20px; }
.password-page::before { content:''; position:absolute; inset:0; background:url('/static/icons/background.svg') center/cover no-repeat; opacity:.99; pointer-events:none; z-index:0; }
.page-nav { position: sticky; top:0; text-align:center; padding:16px 0; z-index:2; }
.nav-back { position:absolute; left:16pt; top:8pt; width:32pt; height:32pt; display:flex; align-items:center; justify-content:center; color:#fff; }
.back-icon { font-size:22pt; line-height:1; }
.content-title { position:relative; z-index:1; text-align:left; color:#fff; font-size:28pt; font-weight:600;font-family: "PingFang SC",sans-serif; margin:60px 0 80px 24px; }
.input-area { position:relative; z-index:1; margin:0 24px 80px 24px; display:flex; flex-direction:column; gap:24px; }
.main-input { width:100%; padding:32px 24px; background:rgba(26, 26, 26, 1); border:1px solid rgba(255,255,255,.2); border-radius:20px; color:#fff; font-size:14pt; text-align:center; outline:none; min-height:72px; letter-spacing:1px; line-height:1.4; }
.main-input:focus { border-color:rgba(255,255,255,.4); background:rgba(255,255,255,.18); }
.main-input::placeholder { color:rgba(255,255,255,.5); }
.submit-area { position:relative; z-index:1; margin:0 24px; }
.submit-btn { width:100%; padding:20px; background:rgba(63, 63, 63, 1); color:#fff; border:none; border-radius:20px; font-size:14pt; font-weight:600;font-family: "PingFang SC",sans-serif; min-height:64px; }
</style>
