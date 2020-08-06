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
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		"vue/html-self-closing": ["error", {
			"html": {
				"void": "always",
				"normal": "never",
				"component": "any"
			}
		}],
		"vue/attributes-order": ["error", {
			"order": [
				"DEFINITION",
				"LIST_RENDERING",
				"CONDITIONALS",
				"RENDER_MODIFIERS",
				"GLOBAL",
				"UNIQUE",
				"TWO_WAY_BINDING",
				"OTHER_DIRECTIVES",
				"OTHER_ATTR",
				"EVENTS",
				"CONTENT"
			],
			"alphabetical": false
		}],
		'semi': [2, "never"],
		'max-len': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
	globals: {
		"$": true,
		"_": true,
		"window.jQuery": true,
		"Promise": true
	}
};
