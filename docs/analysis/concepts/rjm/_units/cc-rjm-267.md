---
unit: cc-rjm-267
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-267

## Files assigned
- [x] sources/rjm/scripts/error_classification.py
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/_anthropic_api.py
- [x] sources/rjm/scripts/eval/_copilot_cli_acp.py
- [x] sources/rjm/scripts/eval/_copilot_process_tree.py
- [x] sources/rjm/scripts/eval/_run_rollup_core.py
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/eval/eval-e2e-delivery.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/eval/eval-reviewer-asymmetry.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/eval_skill_router.py
- [x] sources/rjm/scripts/eval/variance-control.py
- [x] sources/rjm/scripts/validation/check_model_pins.py
- [x] sources/rjm/scripts/validation/hook_contracts.py
- [x] docs/analysis/inventory/rjm/scripts-error-classification-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--anthropic-api-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-e2e-delivery-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-reviewer-asymmetry-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-variance-control-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-model-pins-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-router-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-rollup-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-cli-acp-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-hook-contracts-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-process-tree-py.md

## Outputs produced
- docs/analysis/concepts/rjm/infinite-loop.md (944 bytes)
- docs/analysis/concepts/rjm/context-overflow.md (933 bytes)
- docs/analysis/concepts/rjm/exit-code-map.md (949 bytes)
- docs/analysis/concepts/rjm/transient-patterns.md (984 bytes)
- docs/analysis/concepts/rjm/recoveryhint.md (920 bytes)
- docs/analysis/concepts/rjm/classifiederror.md (935 bytes)
- docs/analysis/concepts/rjm/errorlogentry.md (917 bytes)
- docs/analysis/concepts/rjm/default-model.md (2262 bytes)
- docs/analysis/concepts/rjm/load-api-key.md (884 bytes)
- docs/analysis/concepts/rjm/anthropic-api-key.md (1306 bytes)
- docs/analysis/concepts/rjm/load-api-key-for-selected-provider.md (1548 bytes)
- docs/analysis/concepts/rjm/eval-provider.md (901 bytes)
- docs/analysis/concepts/rjm/call-api.md (1367 bytes)
- docs/analysis/concepts/rjm/list-available-models.md (959 bytes)
- docs/analysis/concepts/rjm/verify-model-available.md (1183 bytes)
- docs/analysis/concepts/rjm/eval-skip-model-preflight.md (952 bytes)
- docs/analysis/concepts/rjm/load-custom-prompts.md (1048 bytes)
- docs/analysis/concepts/rjm/eval-agents-py.md (1033 bytes)
- docs/analysis/concepts/rjm/eval-knowledge-integration-py.md (1235 bytes)
- docs/analysis/concepts/rjm/eval-common.md (1174 bytes)
- docs/analysis/concepts/rjm/providers.md (848 bytes)
- docs/analysis/concepts/rjm/agent-client-protocol.md (958 bytes)
- docs/analysis/concepts/rjm/validate-timeout.md (1049 bytes)
- docs/analysis/concepts/rjm/acpprocesserror.md (875 bytes)
- docs/analysis/concepts/rjm/acperrorcategory.md (870 bytes)
- docs/analysis/concepts/rjm/acpprovidererror.md (877 bytes)
- docs/analysis/concepts/rjm/processstreams.md (873 bytes)
- docs/analysis/concepts/rjm/processtree.md (973 bytes)
- docs/analysis/concepts/rjm/charactercounter.md (881 bytes)
- docs/analysis/concepts/rjm/run-acp-completion.md (888 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-267.md (5616 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit originate from Python scripts in `scripts/error_classification.py`, `scripts/eval/`, and `scripts/validation/`.
- All 30 concepts represent Python module constants, classes, functions, script filenames, or external protocol names rather than operational SDLC lifecycle concepts, and are classified as `kind: name-only` per METHOD.md R6 and D-023.
- All 30 concept cards pass byte-exact quotation verification via `bun scripts/synthesis/quote-check.ts` with zero failures (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~105,000 tokens across 18 source files (~425,000 bytes) and 18 citing inventory cards (~140,000 bytes); approximate tokens of output written: ~8,500 tokens across 30 concept cards and this unit report.
