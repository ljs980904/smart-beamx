<template>
  <view class="profile-page">
    <!-- 个人信息主页面 -->
    <view v-if="currentPage === 'main'" class="profile-card">
      <!-- 头像区域 -->
      <view class="profile-item" @click="changeAvatar">
        <text class="profile-label">头像</text>
        <view class="profile-content">
          <image class="user-avatar" :src="userInfo.avatar" mode="aspectFill"></image>
          <text class="profile-arrow">></text>
        </view>
      </view>

      <!-- 昵称 -->
      <view class="profile-item" @click="editNickname">
        <text class="profile-label">昵称</text>
        <view class="profile-content">
          <text class="profile-value">{{ userInfo.nickname }}</text>
          <text class="profile-arrow">></text>
        </view>
      </view>

      <!-- 手机号 -->
      <view class="profile-item" @click="editPhone">
        <text class="profile-label">手机</text>
        <view class="profile-content">
          <text class="profile-value">{{ userInfo.phone }}</text>
          <text class="profile-arrow">></text>
        </view>
      </view>

      <!-- 邮箱 -->
      <view class="profile-item" @click="editEmail">
        <text class="profile-label">邮箱</text>
        <view class="profile-content">
          <text class="profile-value">{{ userInfo.email }}</text>
          <text class="profile-arrow">></text>
        </view>
      </view>

      <!-- 密码 -->
      <view class="profile-item" @click="setPassword">
        <text class="profile-label">密码</text>
        <view class="profile-content">
          <text class="profile-arrow">></text>
        </view>
      </view>
    </view>

    <!-- 手机号编辑页面 -->
    <view v-if="currentPage === 'phoneEdit'" class="edit-page">
      <view class="edit-header">
        <text class="edit-title">请输入新的手机号</text>
      </view>
      <view class="edit-content">
        <input 
          class="edit-input"
          v-model="editForm.phone"
          placeholder="188 8888 8888"
          type="number"
          maxlength="11"
        />
        <button class="edit-btn" @click="nextStepPhone">下一步</button>
      </view>
    </view>

    <!-- 手机验证码页面 -->
    <view v-if="currentPage === 'phoneVerify'" class="edit-page">
      <view class="edit-header">
        <text class="edit-title">请输入新的手机号</text>
        <text class="edit-subtitle">{{ editForm.phone }}</text>
      </view>
      <view class="edit-content">
        <view class="code-input-container">
          <input 
            v-for="(digit, index) in verifyCode" 
            :key="index"
            class="code-input"
            :value="digit"
            @input="inputCode($event, index)"
            type="number"
            maxlength="1"
          />
        </view>
        <button class="edit-btn" @click="submitPhoneChange">提交</button>
      </view>
    </view>

    <!-- 更换头像页面 -->
    <view v-if="currentPage === 'avatarEdit'" class="edit-page">
      <view class="edit-content avatar-edit">
        <view class="avatar-preview">
          <image class="preview-avatar" :src="editForm.avatar" mode="aspectFill"></image>
        </view>
        <button class="edit-btn" @click="selectAvatar">更换头像</button>
      </view>
    </view>

    <!-- 验证身份页面 -->
    <view v-if="currentPage === 'verifyChoice'" class="edit-page">
      <view class="edit-header">
        <text class="edit-title">验证身份</text>
      </view>
      <view class="edit-content">
        <button class="verify-option" @click="verifyByPhone">手机号码验证</button>
        <button class="verify-option" @click="verifyByEmail">邮箱验证</button>
      </view>
    </view>

    <!-- 邮箱设置页面 -->
    <view v-if="currentPage === 'emailEdit'" class="edit-page">
      <view class="edit-header">
        <text class="edit-title">设置邮箱</text>
        <text class="edit-subtitle">{{ editForm.email }}</text>
      </view>
      <view class="edit-content">
        <input 
          class="edit-input"
          v-model="editForm.newEmail"
          placeholder="user@gmail.com"
          type="email"
        />
        <button class="edit-btn" @click="completeEmailChange">完成</button>
      </view>
    </view>

    <!-- 邮箱验证码页面 -->
    <view v-if="currentPage === 'emailVerify'" class="edit-page">
      <view class="edit-header">
        <text class="edit-title">设置邮箱</text>
        <text class="edit-subtitle">{{ editForm.newEmail }}</text>
      </view>
      <view class="edit-content">
        <view class="code-input-container">
          <input 
            v-for="(digit, index) in emailVerifyCode" 
            :key="index"
            class="code-input"
            :value="digit"
            @input="inputEmailCode($event, index)"
            type="number"
            maxlength="1"
          />
        </view>
        <button class="edit-btn" @click="submitEmailChange">提交</button>
      </view>
    </view>

    <!-- 设置密码页面 -->
    <view v-if="currentPage === 'passwordEdit'" class="edit-page">
      <view class="edit-header">
        <text class="edit-title">设置密码</text>
      </view>
      <view class="edit-content">
        <input 
          class="edit-input password-input"
          v-model="editForm.password"
          placeholder="请输入密码"
          type="password"
        />
        <input 
          class="edit-input password-input"
          v-model="editForm.confirmPassword"
          placeholder="再次输入密码"
          type="password"
        />
        <button class="edit-btn" @click="submitPasswordChange">完成</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      currentPage: 'main', // main, phoneEdit, phoneVerify, avatarEdit, verifyChoice, emailEdit, emailVerify, passwordEdit
      userInfo: {
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        nickname: '小米洋',
        phone: '188****8888',
        email: '188****5678@gmail.com'
      },
      editForm: {
        avatar: '',
        nickname: '',
        phone: '',
        newEmail: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      verifyCode: ['', '', '', '', '', ''],
      emailVerifyCode: ['', '', '', '', '', '']
    }
  },
  methods: {
    // 编辑昵称
    editNickname() {
      uni.showModal({
        title: '修改昵称',
        editable: true,
        content: this.userInfo.nickname,
        success: (res) => {
          if (res.confirm && res.content) {
            this.userInfo.nickname = res.content
            uni.showToast({
              title: '昵称修改成功',
              icon: 'success'
            })
          }
        }
      })
    },

    // 编辑手机号
    editPhone() {
      this.currentPage = 'phoneEdit'
      this.editForm.phone = ''
    },

    // 手机号下一步
    nextStepPhone() {
      if (!this.editForm.phone || this.editForm.phone.length !== 11) {
        uni.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        })
        return
      }
      this.currentPage = 'phoneVerify'
      this.verifyCode = ['1', '8', '7', '7', '7', '9']
    },

    // 输入验证码
    inputCode(e, index) {
      this.verifyCode[index] = e.detail.value
      // 自动跳转到下一个输入框
      if (e.detail.value && index < 5) {
        // 这里可以添加自动聚焦下一个输入框的逻辑
      }
    },

    // 提交手机号变更
    submitPhoneChange() {
      const code = this.verifyCode.join('')
      if (code.length !== 6) {
        uni.showToast({
          title: '请输入完整验证码',
          icon: 'none'
        })
        return
      }
      
      this.userInfo.phone = this.editForm.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
      this.currentPage = 'main'
      uni.showToast({
        title: '手机号修改成功',
        icon: 'success'
      })
    },

    // 更换头像
    changeAvatar() {
      this.editForm.avatar = this.userInfo.avatar
      this.currentPage = 'avatarEdit'
    },

    // 选择头像
    selectAvatar() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.editForm.avatar = res.tempFilePaths[0]
          this.userInfo.avatar = res.tempFilePaths[0]
          this.currentPage = 'main'
          uni.showToast({
            title: '头像更新成功',
            icon: 'success'
          })
        }
      })
    },

    // 编辑邮箱
    editEmail() {
      this.currentPage = 'verifyChoice'
    },

    // 手机号验证
    verifyByPhone() {
      this.currentPage = 'emailEdit'
      this.editForm.email = this.userInfo.email
    },

    // 邮箱验证
    verifyByEmail() {
      this.currentPage = 'emailEdit'
      this.editForm.email = this.userInfo.email
    },

    // 完成邮箱设置
    completeEmailChange() {
      if (!this.editForm.newEmail) {
        uni.showToast({
          title: '请输入邮箱地址',
          icon: 'none'
        })
        return
      }
      this.currentPage = 'emailVerify'
      this.emailVerifyCode = ['1', '8', '7', '7', '7', '9']
    },

    // 输入邮箱验证码
    inputEmailCode(e, index) {
      this.emailVerifyCode[index] = e.detail.value
    },

    // 提交邮箱变更
    submitEmailChange() {
      const code = this.emailVerifyCode.join('')
      if (code.length !== 6) {
        uni.showToast({
          title: '请输入完整验证码',
          icon: 'none'
        })
        return
      }
      
      this.userInfo.email = this.editForm.newEmail.replace(/(.{3}).+(@.+)/, '$1****$2')
      this.currentPage = 'main'
      uni.showToast({
        title: '邮箱修改成功',
        icon: 'success'
      })
    },

    // 设置密码
    setPassword() {
      this.currentPage = 'passwordEdit'
      this.editForm.password = ''
      this.editForm.confirmPassword = ''
    },

    // 提交密码变更
    submitPasswordChange() {
      if (!this.editForm.password || !this.editForm.confirmPassword) {
        uni.showToast({
          title: '请输入密码',
          icon: 'none'
        })
        return
      }
      
      if (this.editForm.password !== this.editForm.confirmPassword) {
        uni.showToast({
          title: '两次密码不一致',
          icon: 'none'
        })
        return
      }
      
      this.currentPage = 'main'
      uni.showToast({
        title: '密码设置成功',
        icon: 'success'
      })
    }
  },
  onLoad() {
    console.log('个人信息页面加载')
  }
}
</script>

<style scoped>
.profile-page {
  background: #000000;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(120, 120, 120, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(120, 120, 120, 0.1) 0%, transparent 50%);
  background-size: 800px 800px, 600px 600px;
  background-position: -200px -200px, 300px 300px;
  min-height: 100vh;
  color: #ffffff;
  padding: 0;
}

/* 个人信息卡片 */
.profile-card {
  margin: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.profile-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
}

.profile-item:last-child {
  border-bottom: none;
}

.profile-item:active {
  background: rgba(255, 255, 255, 0.05);
}

.profile-label {
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-value {
  font-size: 16px;
  color: #cccccc;
}

.profile-arrow {
  font-size: 16px;
  color: #666666;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* 编辑页面 */
.edit-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
}

.edit-header {
  margin-bottom: 60px;
}

.edit-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
  display: block;
}

.edit-subtitle {
  font-size: 16px;
  color: #999999;
  display: block;
}

.edit-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.edit-input {
  width: 100%;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  outline: none;
  transition: all 0.3s ease;
}

.edit-input:focus {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.edit-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.password-input {
  text-align: left;
  margin-bottom: 24px;
  padding: 24px;
  font-size: 18px;
  min-height: 60px;
}

.edit-btn {
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.edit-btn:active {
  background: rgba(255, 255, 255, 0.15);
}

/* 验证码输入 */
.code-input-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin-bottom: 40px;
}

.code-input {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  outline: none;
  transition: all 0.3s ease;
}

.code-input:focus {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

/* 头像编辑 */
.avatar-edit {
  align-items: center;
  justify-content: center;
  text-align: center;
}

.avatar-preview {
  margin-bottom: 40px;
}

.preview-avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

/* 验证选择 */
.verify-option {
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.verify-option:active {
  background: rgba(255, 255, 255, 0.1);
}

/* 响应式设计 */
@media (max-width: 750px) {
  .profile-card {
    margin: 16px;
  }
  
  .profile-item {
    padding: 16px;
  }
  
  .edit-page {
    padding: 32px 16px;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
}
</style>