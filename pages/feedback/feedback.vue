<template>
      <view class="feedback-page">
      <!-- 反馈表单 -->
      <view class="form-container">
        <!-- 订单号 -->
        <view class="form-section">
          <text class="section-title order-title">订单号</text>
          <view class="input-wrapper">
            <input 
              class="form-input" 
              type="text" 
              v-model="feedbackForm.orderNumber" 
              placeholder="请输入"
            />
          </view>
        </view>

        <!-- 问题标题 -->
        <view class="form-section">
          <text class="section-title">标题</text>
          <view class="input-wrapper">
            <input 
              class="form-input" 
              type="text" 
              v-model="feedbackForm.title" 
              placeholder="请输入"
              maxlength="50"
            />
          </view>
        </view>

        <!-- 问题描述 -->
        <view class="form-section">
          <text class="section-title">问题描述</text>
          <view class="textarea-wrapper">
            <textarea 
              class="form-textarea" 
              v-model="feedbackForm.description" 
              placeholder="我们非常抱歉给您带来不便，请在此输入您的问题描述。"
              maxlength="500"
            ></textarea>
          </view>
        </view>

        <!-- 图片上传 -->
        <view class="form-section">
          <text class="section-title">问题描述</text>
          <view class="upload-section">
            <view class="image-grid">
              <view 
                v-for="(image, index) in feedbackForm.images" 
                :key="index"
                class="image-item"
              >
                <image class="uploaded-image" :src="image" mode="aspectFill"></image>
                <view class="image-delete" @click="removeImage(index)">
                  <text class="delete-icon">×</text>
                </view>
              </view>
              <view 
                v-if="feedbackForm.images.length < 3"
                class="upload-placeholder" 
                @click="uploadImage"
              >
                <view class="upload-icon">📷</view>
                <text class="upload-text">上传图片</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 提交按钮 -->
        <view class="submit-container">
          <button 
            class="submit-btn"
            :class="{ disabled: !canSubmit }"
            :disabled="!canSubmit"
            @click="submitFeedback"
          >
            提交反馈
          </button>
        </view>
      </view>

    <!-- 成功提示弹窗 -->
    <view v-if="showSuccessModal" class="modal-overlay" @click="closeSuccessModal">
      <view class="modal-content success-modal" @click.stop>
        <view class="success-icon">✅</view>
        <text class="success-title">反馈提交成功</text>
        <text class="success-message">
          感谢您的反馈，我们会在24小时内处理您的问题并及时回复。
        </text>
        <button class="btn btn-primary" @click="closeSuccessModal">
          确定
        </button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'FeedbackPage',
  data() {
    return {
      feedbackForm: {
        orderNumber: '',
        title: '',
        description: '',
        images: []
      },
      showSuccessModal: false
    }
  },
  computed: {
    canSubmit() {
      return this.feedbackForm.title.trim() && this.feedbackForm.description.trim()
    }
  },
  methods: {
    // 上传图片
    uploadImage() {
      uni.chooseImage({
        count: 3 - this.feedbackForm.images.length,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.feedbackForm.images.push(...res.tempFilePaths)
          uni.showToast({
            title: '图片添加成功',
            icon: 'success'
          })
        },
        fail: (err) => {
          console.log('选择图片失败:', err)
          uni.showToast({
            title: '图片选择失败',
            icon: 'none'
          })
        }
      })
    },

    // 删除图片
    removeImage(index) {
      uni.showModal({
        title: '确认删除',
        content: '确定要删除这张图片吗？',
        success: (res) => {
          if (res.confirm) {
            this.feedbackForm.images.splice(index, 1)
            uni.showToast({
              title: '图片已删除',
              icon: 'success'
            })
          }
        }
      })
    },

    // 提交反馈
    submitFeedback() {
      if (!this.canSubmit) {
        uni.showToast({
          title: '请填写必填信息',
          icon: 'none'
        })
        return
      }

      uni.showLoading({
        title: '提交中...'
      })

      // 模拟提交过程
      setTimeout(() => {
        uni.hideLoading()
        this.showSuccessModal = true
        
        // 重置表单
        this.resetForm()
      }, 2000)
    },

    // 重置表单
    resetForm() {
      this.feedbackForm = {
        orderNumber: '',
        title: '',
        description: '',
        images: []
      }
    },

    // 关闭成功弹窗
    closeSuccessModal() {
      this.showSuccessModal = false
      // 返回上一页
      setTimeout(() => {
        uni.navigateBack()
      }, 300)
    }
  },
  onLoad() {
    console.log('反馈页面加载')
  }
}
</script>

<style scoped>
.feedback-page {
  background: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding: 0;
}

/* 表单容器 */
.form-container {
  padding: 32px 24px;
  padding-bottom: 140px;
}

/* 表单区块 */
.form-section {
  margin-bottom: 28px;
}

.section-title {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 24px;
  display: block;
  font-weight: 400;
  opacity: 0.9;
}

.order-title {
  margin-bottom: 28px;
}

/* 输入框包装器 */
.input-wrapper,
.textarea-wrapper {
  width: 100%;
}

/* 输入框样式 */
.form-input {
  width: 100%;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  color: #ffffff;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  min-height: 56px;
}

.form-input:focus {
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
}

/* 文本域样式 */
.form-textarea {
  width: 100%;
  min-height: 180px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  color: #ffffff;
  font-size: 16px;
  font-family: inherit;
  resize: none;
  box-sizing: border-box;
  outline: none;
  line-height: 1.8;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
}

.form-textarea:focus {
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  line-height: 1.6;
}

/* 图片上传区域 */
.upload-section {
  margin-top: 24px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 20px;
  max-width: 320px;
}

.image-item {
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 12px;
  overflow: hidden;
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.image-delete {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background-color: #ff3b30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(255, 59, 48, 0.3);
  border: 2px solid #000000;
}

.delete-icon {
  font-size: 12px;
  color: #ffffff;
  line-height: 1;
  font-weight: bold;
}

.upload-placeholder {
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
}

.upload-placeholder:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.upload-icon {
  font-size: 24px;
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.6);
}

.upload-text {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 1.2;
}

/* 提交按钮 */
.submit-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000;
  padding: 24px 24px 40px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.submit-btn {
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  color: #000000;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  min-height: 56px;
}

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 25px rgba(255, 255, 255, 0.15);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn.disabled {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.3);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* 成功弹窗 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.modal-content {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  width: 90%;
  max-width: 320px;
}

.success-modal {
  padding: 40px 30px;
  text-align: center;
}

.success-icon {
  font-size: 56px;
  margin-bottom: 20px;
  display: block;
}

.success-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
  display: block;
}

.success-message {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 30px;
  display: block;
}

.btn {
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  color: #000000;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}
</style>
