<template>
	<view class="faq-page">
		<view class="page-nav">
			<img class="nav-back" @click="goBack" src="@/static/icons/my/back2x.png" alt="" srcset="" />
			<text class="page-title">常见问题</text>
		</view>

		<view class="faq-list">
			<view v-for="(faq, index) in faqs" :key="index" class="faq-item">
				<view class="faq-question" @click="toggleExpand(index)">
					<text class="question-text">{{ faq.question }}</text>
					<text class="expand-icon">
						<img v-if="expandedItems.includes(index)" class="expand-foldup-image"
							src="@/static/icons/my/fold-up.png" />
						<img v-else class="expand-foldup-image" src="@/static/icons/my/expand.png" />
					</text>
				</view>

				<view v-if="expandedItems.includes(index)" class="faq-answer">
					<text class="answer-text">{{ faq.answer }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FAQPage',
		data() {
			return {
				expandedItems: [],
				faqs: [{
						question: 'SmartBeamX智能车灯支持哪些车型？',
						answer: 'SmartBeamX智能车灯采用通用设计，支持99%的主流车型，包括轿车、SUV、新能源车等。如需确认您的车型兼容性，请联系客服提供具体车型信息。'
					},
					{
						question: '如何安装SmartBeamX智能车灯？',
						answer: '安装步骤：1. 关闭车辆电源，取出原车灯 2. 将SmartBeamX车灯插入灯座 3. 连接电源线和控制模块 4. 下载APP并配对设备 5. 测试功能是否正常。建议由专业技师安装，我们提供免费上门安装服务。'
					},
					{
						question: 'APP无法连接到车灯设备怎么办？',
						answer: '请按以下步骤排查：1. 确认手机蓝牙已开启 2. 检查车灯电源是否正常 3. 重启APP并重新搜索设备 4. 确认设备距离在10米范围内 5. 尝试重置设备配对。如问题仍未解决，请联系技术支持。'
					}
				]
			}
		},
		methods: {
			goBack() {
				const pages = getCurrentPages && getCurrentPages()
				if (pages && pages.length > 1) {
					uni.navigateBack({
						delta: 1
					})
				} else {
					uni.switchTab({
						url: '/pages/tabBar/my/my'
					})
				}
			},
			toggleExpand(index) {
				const expandedIndex = this.expandedItems.indexOf(index)
				if (expandedIndex > -1) {
					this.expandedItems.splice(expandedIndex, 1)
				} else {
					this.expandedItems.push(index)
				}
			}
		},
		onLoad() {
			console.log('常见问题页面加载')
		}
	}
</script>

<style scoped>
	.faq-page {
		position: relative;
		background-color: #000;
		min-height: 100vh;
		color: #fff;
		padding: 20px;
	}

	.faq-page::before {
		content: '';
		position: absolute;
		inset: 0;
		background: url('/static/icons/background.svg') center/cover no-repeat;
		opacity: .99;
		pointer-events: none;
		z-index: 0;
	}

	.page-nav {
		position: sticky;
		top: 0;
		text-align: center;
		padding: 0 0 22rpx;
		z-index: 2;
	}

	.page-title {
		font-size: 20px;
		color: #fff;
		margin: auto;
	}

	.nav-back {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		display: flex;
		margin-top: 8rpx;
	}


	.page-title {
		margin-bottom: 24px;
		height: 52rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 600;
		font-size: 36rpx;
		color: #FFFFFF;
		line-height: 52rpx;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.faq-list {
		margin-top: 50rpx;
	}

	.faq-item {
		background-color: #1a1a1a;
		border: 1px solid #333333;
		border-radius: 12px;
		margin-bottom: 12px;
		overflow: hidden;
	}

	.faq-question {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
	}

	.question-text {
		font-size: 16px;
		color: #ffffff;
		line-height: 1.5;
		flex: 1;
		margin-right: 16px;
	}

	.expand-icon {
		font-size: 20px;
		color: #007AFF;
		width: 24px;
		text-align: center;
	}

	.expand-foldup-image {
		width: 40rpx;
		height: 40rpx;
	}

	.faq-answer {
		padding: 0 20px 20px;
		border-top: 1px solid #333333;
	}

	.answer-text {
		font-size: 14px;
		color: #cccccc;
		line-height: 1.6;
		display: block;
	}
</style>