<template>
	<view></view>
</template>

<script>
export default {
	onLaunch: function() {
		console.log('SmartBeamX App Launch')
	},
	onShow: function() {
		console.log('SmartBeamX App Show')
	},
	onHide: function() {
		console.log('SmartBeamX App Hide')
	}
}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #000000;
		color: #ffffff;
		margin: 0;
		padding: 0;
		box-shadow: none;
		border: none;
		outline: none;
	}
	
	/* 移除可能的阴影和边框 */
	body, html {
		background-color: #000000;
		margin: 0;
		padding: 0;
		box-shadow: none;
		border: none;
		outline: none;
		overflow-x: hidden;
	}
	
	/* uniapp容器样式 */
	uni-page-body {
		background-color: #000000 !important;
		margin: 0 !important;
		padding: 0 !important;
		box-shadow: none !important;
		border: none !important;
	}
	
	/* 移除系统默认阴影 */
	#app {
		background-color: #000000;
		box-shadow: none;
		border: none;
		margin: 0;
		padding: 0;
	}
	
	/* 全局字体和样式 */
	* {
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}
	
	.container {
		background-color: #000000;
		color: #ffffff;
		min-height: 100vh;
	}
	
	/* 通用按钮样式 */
	.btn {
		padding: 12px 24px;
		border-radius: 8px;
		border: none;
		font-size: 16px;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.btn-primary {
		background-color: #007AFF;
		color: #ffffff;
	}
	
	.btn-primary:hover {
		background-color: #0056CC;
	}
	
	.btn-secondary {
		background-color: #333333;
		color: #ffffff;
	}
	
	.btn-secondary:hover {
		background-color: #555555;
	}
	
	/* 输入框样式 */
	.input {
		width: 100%;
		padding: 12px 16px;
		border-radius: 8px;
		border: 1px solid #333333;
		background-color: #1a1a1a;
		color: #ffffff;
		font-size: 16px;
	}
	
	.input:focus {
		border-color: #007AFF;
		outline: none;
	}
	
	/* 卡片样式 */
	.card {
		background-color: #1a1a1a;
		border-radius: 12px;
		padding: 16px;
		margin-bottom: 16px;
		border: 1px solid #333333;
	}
	
	/* 列表项样式 */
	.list-item {
		background-color: #1a1a1a;
		border-radius: 8px;
		padding: 16px;
		margin-bottom: 8px;
		border: 1px solid #333333;
		transition: all 0.3s ease;
	}
	
	.list-item:hover {
		background-color: #2a2a2a;
	}
	
	/* 分割线 */
	.divider {
		height: 1px;
		background-color: #333333;
		margin: 16px 0;
	}
</style>