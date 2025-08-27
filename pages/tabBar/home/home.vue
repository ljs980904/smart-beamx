<template>
  <view class="home-page">
    <!-- 头部状态栏 -->
    <view class="status-bar">
      <text class="welcome-text">欢迎使用 SmartBeamX</text>
      <text class="status-indicator">● 设备已连接</text>
    </view>

    <!-- 车灯控制卡片 -->
    <view class="light-control-card">
      <text class="card-title">智能车灯控制</text>
      <view class="control-buttons">
        <button class="control-btn primary">开启车灯</button>
        <button class="control-btn secondary">智能模式</button>
      </view>
    </view>

    <!-- 快捷功能 -->
    <view class="quick-functions">
      <text class="section-title">快捷功能</text>
      <view class="function-grid">
        <view class="function-item">
          <text class="function-icon">⚙️</text>
          <text class="function-name">模式切换</text>
        </view>
        <view class="function-item">
          <text class="function-icon">🌈</text>
          <text class="function-name">场景设置</text>
        </view>
        <view class="function-item">
          <text class="function-icon">🛍️</text>
          <text class="function-name">商城购物</text>
        </view>
        <view class="function-item">
          <text class="function-icon">👤</text>
          <text class="function-name">个人中心</text>
        </view>
      </view>
    </view>

    <!-- 设备状态 -->
    <view class="device-status">
      <text class="section-title">设备状态</text>
      <view class="status-info">
        <text class="status-text">车灯工作正常</text>
        <text class="status-detail">最后同步：刚刚</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {}
  },
  onLoad() {
    console.log('首页加载')
  }
}
</script>

<style scoped>
.home-page {
  background-color: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding: 20px;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 12px;
  margin-bottom: 20px;
  border: 1px solid #333333;
}

.welcome-text {
  font-size: 16px;
  color: #ffffff;
}

.status-indicator {
  font-size: 14px;
  color: #00cc66;
}

.light-control-card {
  background-color: #1a1a1a;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #333333;
  text-align: center;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  display: block;
}

.control-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.control-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  border: none;
}

.control-btn.primary {
  background-color: #007AFF;
  color: #ffffff;
}

.control-btn.secondary {
  background-color: #333333;
  color: #ffffff;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  display: block;
}

.quick-functions {
  margin-bottom: 24px;
}

.function-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.function-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 12px;
  border: 1px solid #333333;
}

.function-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.function-name {
  font-size: 14px;
  color: #cccccc;
}

.device-status {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #333333;
}

.status-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.status-text {
  font-size: 16px;
  color: #00cc66;
}

.status-detail {
  font-size: 14px;
  color: #666666;
}
</style>
