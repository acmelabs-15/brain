---
unit: cc-rjm-372
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-372

## Files assigned
- [x] sources/rjm/scripts/workflow/__init__.py
- [x] sources/rjm/scripts/workflow/coordinator.py
- [x] sources/rjm/scripts/workflow/executor.py
- [x] sources/rjm/scripts/workflow/loader.py
- [x] sources/rjm/scripts/workflow/parallel.py
- [x] sources/rjm/scripts/workflow/schema.py
- [x] sources/rjm/scripts/workflows/determine_should_run_from_filters.py
- [x] sources/rjm/scripts/workflows/resolve_dispatch_input.py
- [x] sources/rjm/templates/AGENTS.md
- [x] sources/rjm/templates/agents/analyst.shared.md
- [x] docs/analysis/inventory/rjm/scripts-workflow---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-workflow-coordinator-py.md
- [x] docs/analysis/inventory/rjm/scripts-workflow-executor-py.md
- [x] docs/analysis/inventory/rjm/scripts-workflow-loader-py.md
- [x] docs/analysis/inventory/rjm/scripts-workflow-parallel-py.md
- [x] docs/analysis/inventory/rjm/scripts-workflow-schema-py.md
- [x] docs/analysis/inventory/rjm/scripts-workflows-determine-should-run-from-filters-py.md
- [x] docs/analysis/inventory/rjm/scripts-workflows-resolve-dispatch-input-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-analyst-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/mark-parallel-steps.md (1110 bytes)
- docs/analysis/concepts/rjm/coordinationmode.md (1614 bytes)
- docs/analysis/concepts/rjm/stepkind.md (1527 bytes)
- docs/analysis/concepts/rjm/stepref.md (1265 bytes)
- docs/analysis/concepts/rjm/stepresult.md (1561 bytes)
- docs/analysis/concepts/rjm/workflowdefinition.md (1831 bytes)
- docs/analysis/concepts/rjm/workflowresult.md (1442 bytes)
- docs/analysis/concepts/rjm/workflowstatus.md (1524 bytes)
- docs/analysis/concepts/rjm/workflowstep.md (1825 bytes)
- docs/analysis/concepts/rjm/steprunner.md (1237 bytes)
- docs/analysis/concepts/rjm/load-workflow.md (868 bytes)
- docs/analysis/concepts/rjm/parse-workflow.md (907 bytes)
- docs/analysis/concepts/rjm/parse-step.md (903 bytes)
- docs/analysis/concepts/rjm/parallelresult.md (1199 bytes)
- docs/analysis/concepts/rjm/stepexecutor.md (1125 bytes)
- docs/analysis/concepts/rjm/execute-parallel.md (884 bytes)
- docs/analysis/concepts/rjm/aggregate-outputs.md (882 bytes)
- docs/analysis/concepts/rjm/should-run.md (910 bytes)
- docs/analysis/concepts/rjm/parse-filter-keys.md (947 bytes)
- docs/analysis/concepts/rjm/parse-force-run-events.md (1007 bytes)
- docs/analysis/concepts/rjm/parse-filter-outputs.md (963 bytes)
- docs/analysis/concepts/rjm/parse-choices.md (880 bytes)
- docs/analysis/concepts/rjm/rejection.md (928 bytes)
- docs/analysis/concepts/rjm/drift-monitoring.md (1232 bytes)
- docs/analysis/concepts/rjm/cwe-patterns.md (1196 bytes)
- docs/analysis/concepts/rjm/when-to-produce-vs-when-to-ask.md (1359 bytes)
- docs/analysis/concepts/rjm/github-url-routing.md (1527 bytes)
- docs/analysis/concepts/rjm/command-routing.md (1435 bytes)
- docs/analysis/concepts/rjm/read-only-constraint.md (1249 bytes)
- docs/analysis/concepts/rjm/decision-frameworks.md (1304 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-372.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/mark-parallel-steps.md docs/analysis/concepts/rjm/coordinationmode.md docs/analysis/concepts/rjm/stepkind.md docs/analysis/concepts/rjm/stepref.md docs/analysis/concepts/rjm/stepresult.md docs/analysis/concepts/rjm/workflowdefinition.md docs/analysis/concepts/rjm/workflowresult.md docs/analysis/concepts/rjm/workflowstatus.md docs/analysis/concepts/rjm/workflowstep.md docs/analysis/concepts/rjm/steprunner.md docs/analysis/concepts/rjm/load-workflow.md docs/analysis/concepts/rjm/parse-workflow.md docs/analysis/concepts/rjm/parse-step.md docs/analysis/concepts/rjm/parallelresult.md docs/analysis/concepts/rjm/stepexecutor.md docs/analysis/concepts/rjm/execute-parallel.md docs/analysis/concepts/rjm/aggregate-outputs.md docs/analysis/concepts/rjm/should-run.md docs/analysis/concepts/rjm/parse-filter-keys.md docs/analysis/concepts/rjm/parse-force-run-events.md docs/analysis/concepts/rjm/parse-filter-outputs.md docs/analysis/concepts/rjm/parse-choices.md docs/analysis/concepts/rjm/rejection.md docs/analysis/concepts/rjm/drift-monitoring.md docs/analysis/concepts/rjm/cwe-patterns.md docs/analysis/concepts/rjm/when-to-produce-vs-when-to-ask.md docs/analysis/concepts/rjm/github-url-routing.md docs/analysis/concepts/rjm/command-routing.md docs/analysis/concepts/rjm/read-only-constraint.md docs/analysis/concepts/rjm/decision-frameworks.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-372 completes 30 concept cards spanning three areas of the rjm package:
  1. Workflow orchestration framework primitives (`scripts/workflow/`):
     - Pipeline schema dataclasses and enums (`CoordinationMode`, `StepKind`, `StepRef`, `StepResult`, `WorkflowDefinition`, `WorkflowResult`, `WorkflowStatus`, `WorkflowStep`).
     - Step execution protocol (`StepRunner`) and loaders/parsers (`load_workflow`, `parse_workflow`, `_parse_step`).
     - Concurrency and output aggregation machinery (`ParallelResult`, `StepExecutor`, `execute_parallel`, `aggregate_outputs`, `mark_parallel_steps`).
  2. Workflow filter condition parsing and dispatch input resolution (`scripts/workflows/`):
     - Path-filter evaluation and mainline execution forcing (`should_run`, `parse_filter_keys`, `parse_force_run_events`, `parse_filter_outputs`).
     - Dispatch input choice parsing and validation rejection messages (`parse_choices`, `rejection`).
  3. Agent governance rules, vulnerability analysis patterns, and analyst behavioral boundaries (`templates/AGENTS.md`, `templates/agents/analyst.shared.md`):
     - CI agent drift monitoring gate (`Drift Monitoring`) and security role threat patterns (`CWE patterns`).
     - Analyst behavioral decision rubric (`When to Produce vs When to Ask`), GitHub tool mapping (`GitHub URL routing`), orchestrator execution separation (`Command routing`), immutability safety guard (`Read-Only Constraint`), and structured analytical models (`Decision Frameworks`).
- Concepts representing Python helper functions, private parsers, type aliases, or security classifications are classified as `kind: name-only` per D-023.
- Core pipeline schema objects and execution outputs are classified as `kind: artifact`, execution and coordination topologies as `kind: pattern`, and cognitive decision catalogs as `kind: reference`.
- All 57 occurrences recorded in `facts/cc-rjm-372.txt` are mapped in the `Where used` tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: doc-drift, orphan`, `defects: orphan`, `defects: doc-drift`, `defects: missing-path`, or `clean`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~13,000 tokens across 30 concept cards and 1 unit report.
