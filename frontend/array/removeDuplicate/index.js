const removeDuplicate = (arr) => {
	if (!Array.isArray(arr) || !arr.length) return arr
	const map = {}
	const mapArray = (arr1) => {
		arr1.forEach((item) => {
			if (Array.isArray(item)) {
				mapArray(item)
			} else {
				map[item] = item
			}
		})
	}
	mapArray(arr)
	return Object.values(map).sort((a, b) => {
		if (a > b) return 1
		if (a < b) return -1
		return 0
	})
}

module.exports = removeDuplicate
