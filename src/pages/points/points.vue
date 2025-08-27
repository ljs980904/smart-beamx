<template>
  <view class="points-page">
    <!-- 积分余额头部 -->
    <view class="points-header">
      <view class="points-balance">
        <text class="balance-label">我的积分</text>
        <text class="balance-amount">{{ userPoints }}</text>
      </view>
    </view>

    <!-- 商品列表 -->
    <view class="products-container">
      <view class="products-grid">
        <view 
          v-for="product in products" 
          :key="product.id"
          class="product-card"
          @click="exchangeProduct(product)"
        >
          <image class="product-image" :src="product.image" mode="aspectFill"></image>
          <view class="product-info">
            <text class="product-name">{{ product.name }}</text>
            <text class="product-desc">{{ product.description }}</text>
            <view class="product-footer">
              <view class="price-container">
                <text class="points-price">{{ product.points }}积分</text>
              </view>
              <text class="stock-info">库存{{ product.stock }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'PointsPage',
  data() {
    return {
      userPoints: 2580,
      products: [
        {
          id: 1,
          name: 'SmartBeam车灯清洁套装',
          description: '专业车灯清洁工具',
          image: '/static/icons/product1.png',
          points: 500,
          stock: 50
        },
        {
          id: 2,
          name: '50元商城优惠券',
          description: '购买任意商品满200元可用',
          image: '/static/icons/coupon.png',
          points: 400,
          stock: 999
        }
      ]
    }
  },
  methods: {
    exchangeProduct(product) {
      if (this.userPoints < product.points) {
        uni.showToast({
          title: '积分不足',
          icon: 'none'
        })
        return
      }
      
      uni.showModal({
        title: '确认兑换',
        content: `确定要用${product.points}积分兑换${product.name}吗？`,
        success: (res) => {
          if (res.confirm) {
            this.userPoints -= product.points
            uni.showToast({
              title: '兑换成功',
              icon: 'success'
            })
          }
        }
      })
    }
  },
  onLoad() {
    console.log('积分商城页面加载')
  }
}
</script>

<style scoped>
.points-page {
  background-color: #000000;
  min-height: 100vh;
  color: #ffffff;
}

.points-header {
  padding: 20px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-bottom: 1px solid #333333;
}

.points-balance {
  display: flex;
  flex-direction: column;
}

.balance-label {
  font-size: 14px;
  color: #999999;
  margin-bottom: 4px;
}

.balance-amount {
  font-size: 32px;
  font-weight: bold;
  color: #007AFF;
}

.products-container {
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.product-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  border: 1px solid #333333;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 120px;
  background-color: #333333;
}

.product-info {
  padding: 12px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 4px;
  display: block;
}

.product-desc {
  font-size: 12px;
  color: #999999;
  margin-bottom: 8px;
  display: block;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.points-price {
  font-size: 16px;
  font-weight: bold;
  color: #007AFF;
}

.stock-info {
  font-size: 10px;
  color: #666666;
}
</style>
