CONTAINER_NAME := nuxt

.PHONY: up
up:
	docker-compose up

.PHONY: down
down:
	docker-compose down

.PHONY: down-v
down-v:
	docker-compose down -v

.PHONY: sh
sh:
	docker-compose run --rm ${CONTAINER_NAME} sh

.PHONY: yarn
yarn:
	docker-compose exec ${CONTAINER_NAME} sh -c "yarn && yarn dev"

.PHONY: generate
generate:
	docker-compose run --rm ${CONTAINER_NAME} sh -c "yarn && yarn generate"

.PHONY: lint
lint:
	docker-compose exec ${CONTAINER_NAME} sh -c "yarn && yarn lint"

.PHONY: lint-fix
lint-fix:
	docker-compose exec ${CONTAINER_NAME} sh -c "yarn && yarn lint:fix"

.PHONY: generate-ghpages
generate-ghpages:
	make generate
	[ -d "./docs" ] && rm -r ./docs || echo 'docs does not exist'
	mv frontend/dist docs

.PHONY: create-project
create-project:
	docker run \
		--rm \
		--volume $(PWD):/work:cached \
		--workdir /work \
		-it \
		node:14-alpine \
		yarn create nuxt-app frontend
