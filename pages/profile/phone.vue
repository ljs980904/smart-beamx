<template>
  <view class="phone-page">
    <view class="page-nav">
      <view class="nav-back" @click="goBack"><text class="back-icon">‹</text></view>
    </view>
    <view class="content-title">请输入新的手机号</view>
    <view class="input-area">
      <input 
        class="phone-input"
        v-model="phoneNumber"
        placeholder="188 8888 8888"
        type="tel"
        maxlength="13"
        @input="formatPhone"
        confirm-type="done"
      />
    </view>
    <view class="submit-area">
      <button class="submit-btn" @click="submit">下一步</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'PhonePage',
  data() {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    goBack() {
      uni.navigateBack({ delta: 1 })
    },
    formatPhone(e) {
      let value = e.detail.value.replace(/\D/g, '')
      if (value.length > 11) value = value.slice(0, 11)
      // 格式化为 188 8888 8888
      if (value.length > 3 && value.length <= 7) {
        value = value.slice(0, 3) + ' ' + value.slice(3)
      } else if (value.length > 7) {
        value = value.slice(0, 3) + ' ' + value.slice(3, 7) + ' ' + value.slice(7)
      }
      this.phoneNumber = value
    },
    submit() {
      const cleanPhone = this.phoneNumber.replace(/\s/g, '')
      if (!cleanPhone || cleanPhone.length !== 11) {
        uni.showToast({ title: '请输入正确的手机号', icon: 'none' })
        return
      }
      uni.$emit('updatePhone', { phone: cleanPhone.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3') })
      uni.showToast({ title: '手机号修改成功', icon: 'success' })
      setTimeout(() => {
        uni.navigateBack({ delta: 1 })
      }, 800)
    }
  },
  onLoad(options) {
    if (options.current) {
      this.currentPhone = decodeURIComponent(options.current)
    }
  }
}
</script>

<style scoped>
.phone-page { position:relative; background:#000; min-height:100vh; color:#fff; padding:20px; }
.phone-page::before { content:''; position:absolute; inset:0; background:url('/static/icons/background.svg') center/cover no-repeat; opacity:.99; pointer-events:none; z-index:0; }
.page-nav { position: sticky; top:0; text-align:center; padding:16px 0; z-index:2; }
.nav-back { position:absolute; left:16pt; top:8pt; width:32pt; height:32pt; display:flex; align-items:center; justify-content:center; color:#fff; }
.back-icon { font-size:22pt; line-height:1; }
.content-title { position:relative; z-index:1; text-align:left; color:#fff; font-size:28pt; font-weight:600; margin:60px 0 80px 24px; }
.input-area { position:relative; z-index:1; margin:0 24px 80px 24px; }
.phone-input { width:100%; padding:32px 24px; background:rgba(26, 26, 26, 1); border:1px solid rgba(255,255,255,.2); border-radius:20px; color:#fff; font-size:22px; text-align:center; outline:none; min-height:72px; height:auto; letter-spacing:2px; line-height:1.4; word-wrap:break-word; overflow:visible; }
.phone-input:focus { border-color:rgba(255,255,255,.4); background:rgba(255,255,255,.18); }
.phone-input::placeholder { color:rgba(255,255,255,.5); }
.submit-area { position:relative; z-index:1; margin:0 24px; }
.submit-btn { width:100%; padding:20px; background:rgba(63, 63, 63, 1); color:#fff; border:none; border-radius:20px; font-size:18px; font-weight:600; min-height:64px; }
</style>
