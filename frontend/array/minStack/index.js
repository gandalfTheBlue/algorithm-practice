function MinStack() {
	this.items = []
	this.min

	this.push = (item) => {
		this.items.push(item)
		if (!this.min) this.min = item
		this.min = Math.min(this.min, item)
	}

	this.pop = () => {
		this.items.pop()
		this.min = Math.min(...this.items)
	}

	this.top = () => {
		if (!this.items.length) return undefined
		return this.items[this.items.length - 1]
	}

	this.getMin = () => {
		return this.min
	}
}

module.exports = MinStack
