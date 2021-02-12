module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coveragePathIgnorePatterns: ['index.js'],
    coverageDirectory: './coverage',
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
}
