function filter(array, text) {
	const getNodes = (result, object) => {
		if (object.text === text) {
			result.push(object)
			return result
		}
		if (Array.isArray(object.nodes)) {
			const nodes = object.nodes.reduce(getNodes, [])
			if (nodes.length) result.push({ ...object, nodes })
		}
		return result
	}

	return array.reduce(getNodes, [])
}

var tree = [
	{
		text: 'Parent 1',
		nodes: [
			{
				text: 'Child 1',
				type: 'Child',
				nodes: [
					{ text: 'Grandchild 1', type: 'Grandchild' },
					{ text: 'Grandchild 2', type: 'Grandchild' },
				],
			},
			{ text: 'Child 2', type: 'Child' },
		],
	},
	{ text: 'Parent 2', type: 'Parent' },
	{ text: 'Parent 3', type: 'Parent' },
]

console.log(filter(tree, 'Parent 1'))
console.log(filter(tree, 'Child 1'))
console.log(filter(tree, 'Grandchild 2'))
