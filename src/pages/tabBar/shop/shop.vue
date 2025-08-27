<template>
  <view class="shop-page">
    <text class="page-title">智能商城</text>
    
    <view class="product-grid">
      <view 
        v-for="product in products" 
        :key="product.id"
        class="product-card"
        @click="viewProduct(product)"
      >
        <image class="product-image" :src="product.image" mode="aspectFill"></image>
        <view class="product-info">
          <text class="product-name">{{ product.name }}</text>
          <text class="product-price">¥{{ product.price }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ShopPage',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'SmartBeam Pro',
          price: 2999,
          image: '/static/icons/product1.png'
        },
        {
          id: 2,
          name: '配件套装',
          price: 199,
          image: '/static/icons/product2.png'
        },
        {
          id: 3,
          name: '保养包',
          price: 99,
          image: '/static/icons/product3.png'
        },
        {
          id: 4,
          name: '智能控制器',
          price: 599,
          image: '/static/icons/product4.png'
        }
      ]
    }
  },
  methods: {
    viewProduct(product) {
      uni.showToast({
        title: `查看${product.name}`,
        icon: 'none'
      })
    }
  },
  onLoad() {
    console.log('商城页面加载')
  }
}
</script>

<style scoped>
.shop-page {
  background-color: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 24px;
  display: block;
}

.product-grid {
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
  padding: 16px;
}

.product-name {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 8px;
  display: block;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #007AFF;
}
</style>
