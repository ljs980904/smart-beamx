<template>
  <view class="avatar-page">
    <view class="page-nav">
      <view class="nav-back" @click="goBack"><text class="back-icon">‹</text></view>
    </view>
    <view class="avatar-area">
      <image class="avatar-display" :src="avatar" mode="aspectFill" @click="selectAvatar"></image>
    </view>
    <view class="submit-area">
      <button class="submit-btn" @click="selectAvatar">更换头像</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'AvatarPage',
  data() {
    return {
      avatar: ''
    }
  },
  methods: {
    goBack() {
      uni.navigateBack({ delta: 1 })
    },
    selectAvatar() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.avatar = res.tempFilePaths[0]
          uni.$emit('updateAvatar', { avatar: this.avatar })
          uni.showToast({ title: '头像更新成功', icon: 'success' })
          setTimeout(() => {
            uni.navigateBack({ delta: 1 })
          }, 800)
        }
      })
    }
  },
  onLoad(options) {
    if (options.current) {
      this.avatar = decodeURIComponent(options.current)
    }
  }
}
</script>

<style scoped>
.avatar-page { position:relative; background:#000; min-height:100vh; color:#fff; padding:20px; }
.avatar-page::before { content:''; position:absolute; inset:0; background:url('/static/icons/background.svg') center/cover no-repeat; opacity:.99; pointer-events:none; z-index:0; }
.page-nav { position: sticky; top:0; text-align:center; padding:16px 0; z-index:2; }
.page-title { font-size:20px; color:#fff; }
.nav-back { position:absolute; left:16pt; top:8pt; width:32pt; height:32pt; display:flex; align-items:center; justify-content:center; color:#fff; }
.back-icon { font-size:22pt; line-height:1; }
.avatar-area { position:relative; z-index:1; display:flex; justify-content:center; margin-top:80px; margin-bottom:60px; }
.avatar-display { width:120px; height:120px; border-radius:60px; border:3px solid rgba(255,255,255,.2); }
.submit-area { position:relative; z-index:1; margin:0 20px; }
.submit-btn { width:100%; padding:16px; background:rgba(255,255,255,.15); color:#fff; border:none; border-radius:16px; font-size:18px; font-weight:500; }
</style>
