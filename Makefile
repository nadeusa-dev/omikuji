.PHONY: create-project
create-project:
	docker run \
		--rm \
		--volume $(PWD):/work:cached \
		--workdir /work \
		-it \
		node:14-alpine \
		yarn create nuxt-app frontend
