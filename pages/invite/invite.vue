<template>
  <view class="invite-page">
    <!-- 分享标题 -->
    <view class="share-title">分享</view>
    
    <!-- 分享平台网格 -->
    <view class="share-grid">
      <view class="platform-item" @click="shareToTwitter">
        <view class="platform-icon twitter">
          <image src="/static/icons/Twitter.svg" mode="aspectFit"></image>
        </view>
        <text class="platform-name">Twitter</text>
      </view>
      
      <view class="platform-item" @click="shareToFacebook">
        <view class="platform-icon facebook">
          <image src="/static/icons/Facebook.svg" mode="aspectFit"></image>
        </view>
        <text class="platform-name">Facebook</text>
      </view>
      
      <view class="platform-item" @click="shareToGooglePlus">
        <view class="platform-icon google">
          <image src="/static/icons/Google+.svg" mode="aspectFit"></image>
        </view>
        <text class="platform-name">Google+</text>
      </view>
      
      <view class="platform-item" @click="shareToLine">
        <view class="platform-icon line">
          <image src="/static/icons/LIne.svg" mode="aspectFit"></image>
        </view>
        <text class="platform-name">Line</text>
      </view>
      
      <view class="platform-item" @click="shareToWhatsApp">
        <view class="platform-icon whatsapp">
          <image src="/static/icons/Whatapp.svg" mode="aspectFit"></image>
        </view>
        <text class="platform-name">Whatapp</text>
      </view>
      
      <view class="platform-item" @click="shareToSMS">
        <view class="platform-icon sms">
          <image src="/static/icons/SMS.svg" mode="aspectFit"></image>
        </view>
        <text class="platform-name">SMS</text>
      </view>
    </view>
    
    <!-- 取消按钮 -->
    <view class="cancel-area">
      <button class="cancel-btn" @click="goBack">取消</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'InvitePage',
  data() {
    return {}
  },
  methods: {
    goBack() {
      uni.switchTab({ url: '/pages/tabBar/my/my' })
    },
    shareToTwitter() {
      uni.showToast({ title: '分享到Twitter', icon: 'none' })
    },
    shareToFacebook() {
      uni.showToast({ title: '分享到Facebook', icon: 'none' })
    },
    shareToGooglePlus() {
      uni.showToast({ title: '分享到Google+', icon: 'none' })
    },
    shareToLine() {
      uni.showToast({ title: '分享到Line', icon: 'none' })
    },
    shareToWhatsApp() {
      uni.showToast({ title: '分享到WhatsApp', icon: 'none' })
    },
    shareToSMS() {
      uni.showToast({ title: '分享到SMS', icon: 'none' })
    }
  },
  onLoad() {
    console.log('邀请好友页面加载')
  }
}
</script>

<style scoped>
.invite-page { 
  position: relative; 
  background-color:#000; 
  color:#fff; 
  min-height:100vh; 
  padding:0; 
  display: flex;
  flex-direction: column;
}

.invite-page::before { 
  content:''; 
  position:absolute; 
  inset:0; 
  background:url('/static/icons/background.svg') center/cover no-repeat; 
  opacity:.99; 
  pointer-events:none; 
  z-index:0; 
}

.share-title { 
  position: relative; 
  z-index: 1; 
  text-align: center; 
  color: #fff; 
  font-size: 24px; 
  font-weight: 600; 
  margin: 0;
  padding: 20px 0;
  background: rgba(0,0,0,0.6);
  margin-top: 60vh;
}

.share-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0 16px;
  margin: 0;
  flex: 1;
  align-items: center;
}

.platform-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  background: transparent;
  border: none;
  border-radius: 0;
  backdrop-filter: none;
  transition: all 0.3s ease;
}

.platform-item:active {
  background: rgba(255,255,255,0.1);
}

.platform-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.platform-icon.twitter {
  background-color: transparent;
}

.platform-icon.facebook {
  background-color: transparent;
}

.platform-icon.google {
  background-color: transparent;
}

.platform-icon.line {
  background-color: transparent;
}

.platform-icon.whatsapp {
  background-color: transparent;
}

.platform-icon.sms {
  background-color: transparent;
}

.platform-icon image {
  width: 20px;
  height: 20px;
}

.platform-name {
  font-size: 12px;
  color: #fff;
  text-align: center;
}

.cancel-area {
  position: relative;
  z-index: 1;
  padding: 16px;
  background: rgba(0,0,0,0.6);
  margin-top: auto;
}

.cancel-btn {
  width: 100%;
  padding: 16px;
  background: rgba(255,255,255,0.15);
  color: #fff;
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 500;
}
</style>