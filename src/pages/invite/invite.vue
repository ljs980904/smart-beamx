<template>
  <view class="invite-page">
    <!-- 邀请奖励说明 -->
    <view class="reward-section">
      <view class="reward-header">
        <text class="reward-title">邀请好友</text>
        <text class="reward-subtitle">分享智能车灯，共享科技生活</text>
      </view>
      <view class="reward-benefits">
        <view class="benefit-item">
          <text class="benefit-icon">🎁</text>
          <view class="benefit-content">
            <text class="benefit-title">您可获得</text>
            <text class="benefit-desc">100积分 + 优惠券</text>
          </view>
        </view>
        <view class="benefit-item">
          <text class="benefit-icon">🎉</text>
          <view class="benefit-content">
            <text class="benefit-title">好友可获得</text>
            <text class="benefit-desc">新人专享88折优惠</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 邀请码 -->
    <view class="invite-info-section">
      <view class="invite-code-card">
        <text class="card-title">我的邀请码</text>
        <view class="code-container">
          <text class="invite-code">{{ inviteCode }}</text>
          <text class="copy-btn" @click="copyCode">复制</text>
        </view>
      </view>
    </view>

    <!-- 分享平台 -->
    <view class="share-section">
      <text class="section-title">分享到</text>
      <view class="share-platforms">
        <view class="platform-item" @click="shareToWeChat">
          <view class="platform-icon wechat">
            <text class="icon-text">微</text>
          </view>
          <text class="platform-name">微信</text>
        </view>
        
        <view class="platform-item" @click="shareToQQ">
          <view class="platform-icon qq">
            <text class="icon-text">Q</text>
          </view>
          <text class="platform-name">QQ</text>
        </view>
        
        <view class="platform-item" @click="shareToWeibo">
          <view class="platform-icon weibo">
            <text class="icon-text">微</text>
          </view>
          <text class="platform-name">微博</text>
        </view>
        
        <view class="platform-item" @click="shareToSMS">
          <view class="platform-icon sms">
            <text class="icon-text">📱</text>
          </view>
          <text class="platform-name">短信</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'InvitePage',
  data() {
    return {
      inviteCode: 'SBX2024'
    }
  },
  methods: {
    copyCode() {
      uni.setClipboardData({
        data: this.inviteCode,
        success: () => {
          uni.showToast({
            title: '邀请码已复制',
            icon: 'success'
          })
        }
      })
    },
    shareToWeChat() {
      uni.showToast({
        title: '分享到微信',
        icon: 'none'
      })
    },
    shareToQQ() {
      uni.showToast({
        title: '分享到QQ',
        icon: 'none'
      })
    },
    shareToWeibo() {
      uni.showToast({
        title: '分享到微博',
        icon: 'none'
      })
    },
    shareToSMS() {
      uni.showToast({
        title: '分享到短信',
        icon: 'none'
      })
    }
  },
  onLoad() {
    console.log('邀请好友页面加载')
  }
}
</script>

<style scoped>
.invite-page {
  background-color: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding: 20px;
}

.reward-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #333333;
}

.reward-header {
  text-align: center;
  margin-bottom: 24px;
}

.reward-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
  display: block;
}

.reward-subtitle {
  font-size: 14px;
  color: #999999;
}

.reward-benefits {
  display: flex;
  gap: 16px;
}

.benefit-item {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: rgba(0, 122, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(0, 122, 255, 0.3);
}

.benefit-icon {
  font-size: 24px;
  margin-right: 12px;
}

.benefit-content {
  display: flex;
  flex-direction: column;
}

.benefit-title {
  font-size: 12px;
  color: #999999;
  margin-bottom: 4px;
}

.benefit-desc {
  font-size: 14px;
  font-weight: bold;
  color: #007AFF;
}

.invite-info-section {
  margin-bottom: 24px;
}

.invite-code-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #333333;
}

.card-title {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 12px;
  display: block;
}

.code-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #0a0a0a;
  border-radius: 8px;
  border: 1px solid #333333;
}

.invite-code {
  font-size: 20px;
  font-weight: bold;
  color: #007AFF;
  letter-spacing: 2px;
}

.copy-btn {
  color: #007AFF;
  font-size: 14px;
  padding: 6px 12px;
  background-color: rgba(0, 122, 255, 0.2);
  border-radius: 6px;
}

.share-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  display: block;
}

.share-platforms {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.platform-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #1a1a1a;
  border-radius: 12px;
  border: 1px solid #333333;
}

.platform-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.platform-icon.wechat {
  background-color: #07C160;
}

.platform-icon.qq {
  background-color: #12B7F5;
}

.platform-icon.weibo {
  background-color: #E6162D;
}

.platform-icon.sms {
  background-color: #007AFF;
}

.icon-text {
  color: #ffffff;
  font-size: 14px;
}

.platform-name {
  font-size: 12px;
  color: #cccccc;
}
</style>
