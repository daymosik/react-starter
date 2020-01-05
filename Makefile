SHELL=/bin/bash
export PATH := node_modules/.bin:$(PATH)

build: node_modules/INSTALLED $(shell find src -type f)
	yarn run lint
	yarn run test
	yarn run clean
	yarn run build

build-dev:
	yarn run clean
	yarn run build-dev

watch:
	yarn run clean
	yarn run watch

fix:
	yarn run fix

test:
	yarn run test --coverage

node_modules/INSTALLED: package.json
	yarn install
	touch $@

.PHONY: build build-dev watch clean test
