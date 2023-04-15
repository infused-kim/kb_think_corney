KB_NAME = "ThinkCorney"
.DEFAULT_GOAL := help
.PHONY: ergogen

ergogen: ## Run ergogen
	@echo "Running ergogen..."
	ergogen ./ergogen -o ./ergogen/output

convert-stl: ## Convert erogen jscad files to stl
	@echo "Converting jscad files to stl..."
	for i in output/cases/*.jscad; do npx @jscad/cli@1 "$i" -of stla; done

help: ## Show this help
	@{ \
		SCRIPT_PATH=$$(echo "resources/makefile_help.sh"); \
		sh "$$SCRIPT_PATH" "$(MAKEFILE_LIST)"; \
	}
