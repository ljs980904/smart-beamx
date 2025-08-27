<template>
  <view class="settings-page">
    <!-- 语言和通知设置容器 -->
    <view class="settings-group">
      <!-- 语言设置 -->
      <view class="setting-item" @click="showLanguageModal = true">
        <view class="setting-info">
          <text class="setting-icon">🌐</text>
          <text class="setting-label">语言设置</text>
        </view>
        <view class="setting-control">
          <text class="setting-value">{{ currentLanguageLabel }}</text>
          <text class="setting-arrow">></text>
        </view>
      </view>

      <!-- 消息通知 -->
      <view class="setting-item">
        <view class="setting-info">
          <text class="setting-icon">🔔</text>
          <text class="setting-label">消息通知</text>
        </view>
        <view class="setting-control">
          <switch 
            :checked="notificationEnabled" 
            @change="toggleNotification"
            color="#007AFF"
          />
        </view>
      </view>
    </view>

    <!-- 版本信息容器 -->
    <view class="settings-group">
      <!-- 版本信息 -->
      <view class="setting-item" @click="checkUpdate">
        <view class="setting-info">
          <text class="setting-icon">📱</text>
          <view class="version-info">
            <text class="setting-label">版本号</text>
            <text class="version-number">{{ appVersion }}</text>
          </view>
        </view>
        <view class="setting-control">
          <text class="setting-value">检查更新</text>
          <text class="setting-arrow">></text>
        </view>
      </view>
    </view>

    <!-- 语言选择弹窗 -->
    <view v-if="showLanguageModal" class="modal-overlay" @click="closeLanguageModal">
      <view class="modal-content" @click.stop>
        <view class="modal-header">
          <text class="modal-title">选择语言</text>
          <text class="modal-close" @click="closeLanguageModal">×</text>
        </view>
        <view class="modal-body">
          <view 
            v-for="language in languages" 
            :key="language.value"
            class="language-item"
            :class="{ active: currentLanguage === language.value }"
            @click="switchLanguage(language.value)"
          >
            <text class="language-name">{{ language.label }}</text>
            <text v-if="currentLanguage === language.value" class="selected-icon">✓</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      currentLanguage: 'zh-CN',
      languages: [
        { label: '简体中文', value: 'zh-CN' },
        { label: 'English', value: 'en-US' }
      ],
      notificationEnabled: true,
      appVersion: '1.0.0',
      showLanguageModal: false
    }
  },
  computed: {
    currentLanguageLabel() {
      const language = this.languages.find(lang => lang.value === this.currentLanguage)
      return language ? language.label : '简体中文'
    }
  },
  methods: {
    switchLanguage(language) {
      this.currentLanguage = language
      this.closeLanguageModal()
      uni.showToast({
        title: '语言设置已保存',
        icon: 'success'
      })
    },
    closeLanguageModal() {
      this.showLanguageModal = false
    },
    toggleNotification(e) {
      this.notificationEnabled = e.detail.value
      uni.showToast({
        title: this.notificationEnabled ? '已开启消息通知' : '已关闭消息通知',
        icon: 'success'
      })
    },
    checkUpdate() {
      uni.showLoading({
        title: '检查更新中...'
      })
      
      setTimeout(() => {
        uni.hideLoading()
        uni.showModal({
          title: '检查更新',
          content: '当前已是最新版本',
          showCancel: false
        })
      }, 2000)
    }
  },
  onLoad() {
    console.log('设置页面加载')
  }
}
</script>

<style scoped>
.settings-page {
  background-color: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding: 20px;
}

.settings-group {
  background-color: #1a1a1a;
  border-radius: 12px;
  border: 1px solid #333333;
  overflow: hidden;
  margin-bottom: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #333333;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-info {
  display: flex;
  align-items: center;
  flex: 1;
}

.setting-icon {
  font-size: 20px;
  margin-right: 16px;
  width: 24px;
  text-align: center;
}

.setting-label {
  font-size: 16px;
  color: #ffffff;
}

.version-info {
  display: flex;
  flex-direction: column;
}

.version-number {
  font-size: 12px;
  color: #666666;
  margin-top: 2px;
}

.setting-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.setting-value {
  font-size: 14px;
  color: #999999;
}

.setting-arrow {
  font-size: 16px;
  color: #666666;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #1a1a1a;
  border-radius: 12px;
  width: 80%;
  max-width: 400px;
  border: 1px solid #333333;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #333333;
}

.modal-title {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

.modal-close {
  font-size: 24px;
  color: #666666;
}

.modal-body {
  padding: 20px;
}

.language-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #333333;
}

.language-item:last-child {
  border-bottom: none;
}

.language-item.active {
  background-color: rgba(0, 122, 255, 0.1);
}

.language-name {
  font-size: 16px;
  color: #ffffff;
}

.selected-icon {
  font-size: 16px;
  color: #007AFF;
}
</style>
