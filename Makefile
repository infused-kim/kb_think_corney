KB_NAME = "ThinkCorney"
PCB_FILE_NAME = think_corney.kicad_pcb
KICAD_PY_PATH = /Applications/KiCad/KiCad.app/Contents/Frameworks/Python.framework/Versions/Current/bin/python3

BACKUP_PATH = backups/backup_$(shell date +"%Y-%m-%d_%H_%M_%S")
LAST_BACKUP_PATH = $(shell /bin/ls -td backups/*/ | head -n 1)

.DEFAULT_GOAL := help
.PHONY: *

build: ## Backup current pcbs, run ergogen, restore traces
	@$(MAKE) backup
	@$(MAKE) ergogen
	@$(MAKE) ergogen-deploy
	@$(MAKE) restore-traces

backup: ## Backups the current pcb folder
	@echo "Creating backup $(BACKUP_PATH)..."
	@mkdir -p $(BACKUP_PATH)
	@cp -r pcb/ $(BACKUP_PATH)

ergogen: ## Run ergogen
	@echo "Running ergogen..."
	@ergogen ./ergogen -o ./ergogen/output

ergogen-deploy: ## Copy ergogen output to pcb folder
	@cp -r ./ergogen/output/pcbs/ pcb/

restore-traces: ## Restores traces from latest backup
	@echo "Restoring traces..."
	@$(KICAD_PY_PATH) resources/ergogen-helper.py $(LAST_BACKUP_PATH)/$(PCB_FILE_NAME) pcb/$(PCB_FILE_NAME)

convert-stl: ## Convert erogen jscad files to stl
	@echo "Converting jscad files to stl..."
	@for i in output/cases/*.jscad; do npx @jscad/cli@1 "$i" -of stla; done

help: ## Show this help
	@{ \
		SCRIPT_PATH=$$(echo "resources/makefile_help.sh"); \
		sh "$$SCRIPT_PATH" "$(MAKEFILE_LIST)"; \
	}
