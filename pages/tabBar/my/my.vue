<template>
  <view class="my-page">


    <!-- 用户登录区域 -->
    <view class="user-section">
      <!-- 未登录状态 -->
      <view v-if="!isLoggedIn" class="login-area" @click="goToLogin">
        <image class="user-avatar" src="/static/icons/default-avatar.png" mode="aspectFill"></image>
        <text class="login-text">点击登录/注册</text>
        <text class="login-arrow">></text>
      </view>
      
      <!-- 已登录状态 -->
      <view v-else class="user-info-area" @click="goToProfile">
        <image class="user-avatar" :src="userInfo.avatar" mode="aspectFill"></image>
        <view class="user-details">
          <text class="user-name">{{ userInfo.nickname }}</text>
          <text class="user-phone">{{ userInfo.phone }}</text>
        </view>
        <text class="profile-arrow">></text>
      </view>
    </view>

    <!-- 功能菜单卡片 -->
    <view class="menu-card">
      <view class="menu-item" @click="goToFeedback">
        <view class="menu-icon-container feedback">
          <text class="menu-icon">?</text>
        </view>
        <text class="menu-title">问题反馈</text>
        <text class="menu-arrow">></text>
      </view>

      <view class="menu-item" @click="goToPoints">
        <view class="menu-icon-container points">
          <text class="menu-icon">积</text>
        </view>
        <text class="menu-title">积分商城</text>
        <text class="menu-arrow">></text>
      </view>

      <view class="menu-item" @click="goToInvite">
        <view class="menu-icon-container invite">
          <text class="menu-icon">👥</text>
        </view>
        <text class="menu-title">邀请好友</text>
        <text class="menu-arrow">></text>
      </view>

      <view class="menu-item" @click="goToFAQ">
        <view class="menu-icon-container faq">
          <text class="menu-icon">?</text>
        </view>
        <text class="menu-title">常见问题</text>
        <text class="menu-arrow">></text>
      </view>

      <view class="menu-item" @click="goToAbout">
        <view class="menu-icon-container about">
          <text class="menu-icon">i</text>
        </view>
        <text class="menu-title">关于我们</text>
        <text class="menu-arrow">></text>
      </view>
      
      <!-- 临时测试登录按钮 -->
      <view class="menu-item" @click="testLogin">
        <view class="menu-icon-container test">
          <text class="menu-icon">🔄</text>
        </view>
        <text class="menu-title">{{ isLoggedIn ? '退出登录' : '测试登录' }}</text>
        <text class="menu-arrow">></text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyPage',
  data() {
    return {
      isLoggedIn: false, // 登录状态，可以通过点击测试登录切换
      userInfo: {
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        nickname: '智能车灯用户',
        phone: '188****8888',
        email: 'user@smartbeamx.com',
        points: 1580,
        level: 'VIP会员'
      },
      appVersion: '1.0.0'
    }
  },
  methods: {
    goToLogin() {
      uni.navigateTo({
        url: '/pages/login/login'
      })
    },
    goToProfile() {
      uni.navigateTo({
        url: '/pages/profile/profile'
      })
    },
    goToSettings() {
      uni.navigateTo({
        url: '/pages/settings/settings'
      })
    },
    goToFeedback() {
      uni.navigateTo({
        url: '/pages/feedback/feedback'
      })
    },
    goToPoints() {
      uni.navigateTo({
        url: '/pages/points/points'
      })
    },
    goToInvite() {
      uni.navigateTo({
        url: '/pages/invite/invite'
      })
    },
    goToFAQ() {
      uni.navigateTo({
        url: '/pages/faq/faq'
      })
    },
    goToAbout() {
      uni.navigateTo({
        url: '/pages/about/about'
      })
    },
    
    // 测试登录功能 - 用于演示登录后的状态
    testLogin() {
      this.isLoggedIn = !this.isLoggedIn
      if (this.isLoggedIn) {
        uni.showToast({
          title: '登录成功',
          icon: 'success'
        })
      } else {
        uni.showToast({
          title: '已退出登录',
          icon: 'none'
        })
      }
    }
  },
  onLoad() {
    console.log('我的页面加载')
    
    // 监听登录成功事件
    uni.$on('loginSuccess', (data) => {
      this.isLoggedIn = data.isLoggedIn
    })
  },
  onShow() {
    // 页面显示时检查是否从登录页面返回
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    
    // 检查是否有登录成功的参数（实际项目中可能通过全局状态管理）
    if (currentPage.options && currentPage.options.loginSuccess) {
      this.isLoggedIn = true
      uni.showToast({
        title: '登录成功',
        icon: 'success'
      })
    }
  },
  onNavigationBarButtonTap(e) {
    // 导航栏按钮点击事件
    if (e.index === 0) {
      // 点击设置按钮
      this.goToSettings()
    }
  },
  onUnload() {
    // 移除事件监听
    uni.$off('loginSuccess')
  }
}
</script>

<style scoped>
.my-page {
  background: #000000;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(120, 120, 120, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(120, 120, 120, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(120, 120, 120, 0.05) 0%, transparent 50%);
  background-size: 800px 800px, 600px 600px, 400px 400px;
  background-position: -200px -200px, 300px 300px, 100px 100px;
  min-height: 100vh;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

/* 添加波浪纹理 */
.my-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.01) 2px,
      rgba(255, 255, 255, 0.01) 4px
    );
  pointer-events: none;
  z-index: 1;
}



/* 用户登录区域 */
.user-section {
  padding: 40px 20px 20px 20px;
  position: relative;
  z-index: 2;
}

.login-area {
  display: flex;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.login-area::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
  pointer-events: none;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 16px;
  background-color: #333333;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.login-text {
  flex: 1;
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
}

.login-arrow {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
}

/* 已登录用户信息区域 */
.user-info-area {
  display: flex;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.user-info-area::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  pointer-events: none;
}

.user-info-area:active {
  transform: translateY(1px);
}

.user-details {
  flex: 1;
  margin-left: 16px;
  position: relative;
  z-index: 1;
}

.user-name {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 4px;
  display: block;
}

.user-phone {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  display: block;
}

.profile-arrow {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 1;
}

/* 功能菜单卡片 */
.menu-card {
  margin: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.menu-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  pointer-events: none;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  transition: background-color 0.3s ease;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:active {
  background-color: rgba(255, 255, 255, 0.05);
}

.menu-icon-container {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.menu-icon-container.feedback {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
}

.menu-icon-container.points {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.menu-icon-container.invite {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.menu-icon-container.faq {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.menu-icon-container.about {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.menu-icon-container.test {
  background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
}

.menu-icon {
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
}

.menu-title {
  flex: 1;
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
}

.menu-arrow {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
}

/* 响应式适配 */
@media (max-width: 750px) {
  .user-section {
    padding: 32px 16px 16px 16px;
  }
  
  .menu-card {
    margin: 16px;
  }
  
  .menu-item {
    padding: 16px;
  }
  
  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  
  .login-text {
    font-size: 16px;
  }
}
</style>