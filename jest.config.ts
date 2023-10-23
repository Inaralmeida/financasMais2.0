module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
}
