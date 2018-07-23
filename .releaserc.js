module.exports = {
  branch: 'master',
  tagFormat: '${version}',
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  generateNotes: {
    config: '@alorel-personal/conventional-changelog-alorel'
  }
};
