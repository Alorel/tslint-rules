## [5.0.2](https://github.com/Alorel/tslint-rules/compare/5.0.1...5.0.2) (2019-07-15)


### Bug Fixes

* add tags/existence to completed-docs ([42be9e5](https://github.com/Alorel/tslint-rules/commit/42be9e5))

## [5.0.1](https://github.com/Alorel/tslint-rules/compare/5.0.0...5.0.1) (2019-07-15)


### Bug Fixes

* Remove strict-comparisons rule ([9d43702](https://github.com/Alorel/tslint-rules/commit/9d43702))

# [5.0.0](https://github.com/Alorel/tslint-rules/compare/4.1.1...5.0.0) (2019-07-15)


### Dependency updates

* **package:** update tslint to version 5.18.0 ([e67c405](https://github.com/Alorel/tslint-rules/commit/e67c405))
* **package:** update tslint-sonarts to version 1.9.0 ([6af5840](https://github.com/Alorel/tslint-rules/commit/6af5840))


### Features

* Add SonarTS 1.9.0 rules ([26d669c](https://github.com/Alorel/tslint-rules/commit/26d669c))
* Update standard tslint rules with additions between tslint 5.11.0 and 5.18.0 ([4af6bbb](https://github.com/Alorel/tslint-rules/commit/4af6bbb))


### Maintenance

* **deps:** bump fstream from 1.0.11 to 1.0.12 ([430f4c3](https://github.com/Alorel/tslint-rules/commit/430f4c3))
* **deps:** bump handlebars from 4.0.12 to 4.1.2 ([d762a2d](https://github.com/Alorel/tslint-rules/commit/d762a2d))
* **deps:** bump js-yaml from 3.12.0 to 3.13.1 ([fc87721](https://github.com/Alorel/tslint-rules/commit/fc87721))
* **deps:** bump lodash from 4.17.11 to 4.17.14 ([2fbc2c9](https://github.com/Alorel/tslint-rules/commit/2fbc2c9))


### BREAKING CHANGES

* Tslint rules have changed
* New rules from SonarTS added

## [4.1.1](https://github.com/Alorel/tslint-rules/compare/4.1.0...4.1.1) (2018-11-10)


### Bug Fixes

* Add 60000 to allowed magic numbers ([c87dea5](https://github.com/Alorel/tslint-rules/commit/c87dea5))

# [4.1.0](https://github.com/Alorel/tslint-rules/compare/4.0.0...4.1.0) (2018-10-26)


### Features

* Add the following allowed magic numbers: 999, 59, 23, 3600, 3600000, 86400, 86400000, 28, 30, 31 ([2ff406b](https://github.com/Alorel/tslint-rules/commit/2ff406b))

# [4.0.0](https://github.com/Alorel/tslint-rules/compare/3.0.0...4.0.0) (2018-10-09)


### Features

* Add tslint-sonarts ruleset. ([ac564a4](https://github.com/Alorel/tslint-rules/commit/ac564a4))


### BREAKING CHANGES

* A plethora of new rules have been introduced in sonarts.json and are likely to break existing applications.

# [3.0.0](https://github.com/Alorel/tslint-rules/compare/2.0.0...3.0.0) (2018-09-26)


### Features

* **config:** Add prefer-readonly rule ([c85eb68](https://github.com/Alorel/tslint-rules/commit/c85eb68))


### BREAKING CHANGES

* **config:** prefer-readonly now set to true

# [2.0.0](https://github.com/Alorel/tslint-rules/compare/1.2.2...2.0.0) (2018-09-04)


### Bug Fixes

* Allow spaces before function parens @ async arrow & anonymous ([3c8fdb9](https://github.com/Alorel/tslint-rules/commit/3c8fdb9))


### BREAKING CHANGES

* may require a tslint --fix

## [1.2.2](https://github.com/Alorel/tslint-rules/compare/1.2.1...1.2.2) (2018-08-17)


### Bug Fixes

* **package:** Add yarn.lock to npmignore ([b3a428e](https://github.com/Alorel/tslint-rules/commit/b3a428e))


### Maintenance

* **package:** Move release config to separate file ([f46e1da](https://github.com/Alorel/tslint-rules/commit/f46e1da))
* **package:** update [@alorel-personal](https://github.com/alorel-personal)/conventional-changelog-alorel to version 2.0.0 ([4e76d9a](https://github.com/Alorel/tslint-rules/commit/4e76d9a))
* **package:** update [@alorel-personal](https://github.com/alorel-personal)/conventional-changelog-alorel to version 2.0.1 ([1b0192a](https://github.com/Alorel/tslint-rules/commit/1b0192a))

## [1.2.1](https://github.com/Alorel/tslint-rules/compare/1.2.0...1.2.1) (2018-08-09)


### Bug Fixes

* Add missing 100 to no-magic-numbers ([56e8f7a](https://github.com/Alorel/tslint-rules/commit/56e8f7a))

# [1.2.0](https://github.com/Alorel/tslint-rules/compare/1.1.0...1.2.0) (2018-08-09)


### Features

* add more magic numbers to the whitelist ([a8a0c61](https://github.com/Alorel/tslint-rules/commit/a8a0c61))


### Maintenance

* **package:** Lock down conventional-changelog-alorel version ([0cb50b9](https://github.com/Alorel/tslint-rules/commit/0cb50b9))
* **package:** Refresh package-lock.json ([edb97fa](https://github.com/Alorel/tslint-rules/commit/edb97fa))
* **package:** update [@semantic-release](https://github.com/semantic-release)/npm to version 5.0.1 ([1f4a35d](https://github.com/Alorel/tslint-rules/commit/1f4a35d)), closes [#1](https://github.com/Alorel/tslint-rules/issues/1)

# [1.1.0](https://github.com/Alorel/tslint-rules/compare/1.0.0...1.1.0) (2018-07-24)


### Features

* Remove switch-default rule ([29f7461](https://github.com/Alorel/tslint-rules/commit/29f7461))


### Refactoring

* Move release config to package.json ([8eca517](https://github.com/Alorel/tslint-rules/commit/8eca517))

# 1.0.0 (2018-07-23)


### Build System

* reset skip_cleanup to true ([9b3cd20](https://github.com/Alorel/tslint-rules/commit/9b3cd20))
* Uncomment deployment script ([e8ca4fe](https://github.com/Alorel/tslint-rules/commit/e8ca4fe))


### Features

* Add tslint.json ([153ce4e](https://github.com/Alorel/tslint-rules/commit/153ce4e))


### Maintenance

* init ([9168cbb](https://github.com/Alorel/tslint-rules/commit/9168cbb))
