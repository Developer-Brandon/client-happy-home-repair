module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'@vue/airbnb'
	],
	plugins: [
		'html',
		'vue'
	],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 9,
		sourceType: 'module'
	},
	rules: {
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'always',
				'normal': 'never',
				'component': 'any'
			}
		}],
		'vue/attributes-order': ['error', {
			'order': [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'GLOBAL',
				'UNIQUE',
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT'
			],
			'alphabetical': false
		}],
		'semi': [2, 'never'],
		'max-len': 'off',
		'no-underscore-dangle': 'off',
		'no-lonely-if': 'off',
		'class-methods-use-this': 'off',
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
		'vue/valid-v-model': 'off',
		'vue/no-v-html': 'off',
		'no-else-return': 'off',
		'no-alert': 'off',
		'consistent-return': 'off',
		'no-shadow': ['error', {'allow': ['state']}],
		'no-console': process.env.VUE_APP_PHASE === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.VUE_APP_PHASE === 'production' ? 'warn' : 'off',
	},
	globals: {
		'$': true,
		'_': true,
		'window.jQuery': true,
		'Promise': true,
		'google': true,
	}
};
