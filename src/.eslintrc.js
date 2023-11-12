module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended'
    ],
    rules: {
        'no-console': 'warn',
        'padding-line-between-statements': ["warn", {
            blankLine: 'always',
            prev: ['block-like'],
            next: ["*"],
        }],
        "newline-after-var": "warn",
        "newline-before-return": "warn",
        'no-debugger': 'warn',
        "semi": [2, "always"],
        "spaced-comment": 0,
        "space-before-function-paren": 1,
        "jsx-quotes": 0,
        "no-class-assign": 0,
        "brace-style": 0,
        "no-return-assign": 0,
        "no-trailing-spaces": 0,
        "curly": [0, "multi"],
        "comma-dangle": ["error", {
            "objects": "always-multiline",
        }],
        "vue/html-indent": ["error", 2, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": [],
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 3,
            },
            "multiline": 1,
        }],
        "vue/component-api-style": ["warn",
            ["script-setup", "composition"]
        ],
        "vue/component-name-in-template-casing": ["warn", "PascalCase", {
            "registeredComponentsOnly": true,
            "ignores": [],
        }],
        "vue/define-macros-order": ["error", {
            "order": ["defineProps", "defineEmits"],
        }],
        "vue/padding-line-between-blocks": ["warn", "always"],
        "vue/padding-line-between-tags": ["warn", [
            { "blankLine": "always", "prev": "*", "next": "*" }
        ]],
        "vue/prefer-true-attribute-shorthand": ["error", "always"],
        "vue/define-emits-declaration": ["warn", "type-based"],
        "vue/script-indent": ["error", 2, {"baseIndent": 1}],
        "vue/require-default-prop": "off",
        "vue/require-v-for-key": ["error"],
        "vue/singleline-html-element-content-newline": "off",
        "vue/no-reserved-component-names": 'off',
        "indent": "off",
        "@typescript-eslint/no-unused-vars": 'off',
        "vue/require-component-is": 0,
        "vue/multi-word-component-names": 'off',
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "comma",
                "requireLast": true,
            },
            "singleline": {
                "delimiter": "comma",
                "requireLast": false,
            },
        }],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
