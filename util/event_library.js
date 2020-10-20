import {
	event,
	probability
} from './event.js'
class util {
	handleRandom() {
		var arr1 = event,
			arr2 = probability
		var sum = 0,
			factor = 0,
			random = Math.random()
		for (var i = arr2.length - 1; i >= 0; i--) {
			sum += arr2[i]; // 统计概率总和
		};
		console.log(sum, 'sum ==================>>>')
		random *= sum; // 生成概率随机数
		console.log(random, 'random =============>>>')
		for (var i = arr2.length - 1; i >= 0; i--) {
			factor += arr2[i];
			if (random <= factor) {
				console.log('factor ===>>>  222', factor)
				console.log(arr1[i], 'arr1 =====>>>')
				return arr1[i];
			}

		};
		return null;
	}

}

module.exports = new util
