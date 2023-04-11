module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'import'
  ],
  rules: {
    'react/prop-types': 'off',
    // React 17
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': 'error',
    "react/jsx-tag-spacing": "error",
    "no-unused-vars": "off"
  }
}
