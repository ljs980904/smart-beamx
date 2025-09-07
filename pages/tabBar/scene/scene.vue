<template>
	<custom-nav-bar/>
	<view class="scene-page" >
		
		<!-- 顶部切换 速度/音乐 + LED 标签 + 电源 -->
		<view class="top-bar">
			<view class="switches" @click="goMusic"><text class="ico">🎵</text>
				<view class="sep"></view><text class="ico">🎙</text>
			</view>
			<text class="title">速度</text>
			<text class="power">⏻</text>
		</view>
		<scroll-view class="chips" scroll-x>
			<view class="chip" v-for="(c,i) in chips" :key="i" :class="{active: curChip===i}" @click="curChip=i">{{ c }}
			</view>
		</scroll-view>

		<view class="seg">
			<view :class="['seg-btn',{on: seg===0}]" @click="seg=0">单色</view>
			<view :class="['seg-btn',{on: seg===1}]" @click="seg=1">模式</view>
		</view>

		<view class="canvas"></view>

		<view class="speed-panel">
			<text class="now">当前速度</text>
			<text class="val">0 mph</text>
			<text class="full">⤢</text>
		</view>
	</view>
</template>

<script>
	import CustomNavBar from "@/components/custom-nav-bar.vue"
	import Idx from "@/components/index.vue"
	export default {
		name: 'ScenePage',
		components: {
			"custom-nav-bar":CustomNavBar,
			"i-d-x": Idx
		},
		data() {
			return {
				chips: ['LED 1', 'LED 2', 'LED 3', 'LED 4', 'LED 5'],
				curChip: 0,
				seg: 0
			}
		},
		methods: {
			selectScene(index) {},
			goMusic() {
				uni.navigateTo({
					url: '/pages/scene/music/music'
				})
			}
		},
		onLoad() {
			console.log('场景页面加载')
		}
	}
</script>

<style scoped>
	.scene-page {
		background: #000;
		min-height: 100vh;
		color: #fff
	}

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 12px;
		backdrop-filter: saturate(160%) blur(8px)
	}

	.switches {
		display: flex;
		align-items: center;
		gap: 10px
	}

	.sep {
		width: 1px;
		height: 18px;
		background: transparent
	}

	.title {
		font-size: 18px;
		font-weight: 700
	}

	.power {
		font-size: 18px
	}

	.chips {
		white-space: nowrap;
		padding: 6px 10px
	}

	.chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 8px 14px;
		margin-right: 10px;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 10px
	}

	.chip.active {
		background: #2a2a2a
	}

	.seg {
		display: flex;
		margin: 10px 12px;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		overflow: hidden
	}

	.seg-btn {
		flex: 1;
		text-align: center;
		padding: 10px 0;
		color: #cfcfcf
	}

	.seg-btn.on {
		background: #ff5a24;
		color: #fff
	}

	.canvas {
		height: 260px;
		background: linear-gradient(90deg, red, orange, yellow, green, cyan, blue, purple)
	}

	.speed-panel {
		position: fixed;
		left: 12px;
		right: 12px;
		bottom: 82px;
		background: linear-gradient(180deg, #0b0b0b, #121212);
		border: 1px solid #1f1f1f;
		border-radius: 24px;
		padding: 12px 16px;
		display: flex;
		align-items: center;
		gap: 14px
	}

	.now {
		color: #cfcfcf
	}

	.val {
		margin-left: auto;
		margin-right: 8px
	}

	.full {
		opacity: .6
	}
</style>