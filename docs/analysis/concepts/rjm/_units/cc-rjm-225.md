---
unit: cc-rjm-225
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-225

## Files assigned
- [x] sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md
- [x] sources/rjm/.claude/skills/validation-authority/SKILL.md
- [x] sources/rjm/.claude/skills/windows-image-updater/SKILL.md
- [x] sources/rjm/.claude/skills/windows-image-updater/references/troubleshooting.md
- [x] sources/rjm/.claude/skills/work-operating-model/SKILL.md
- [x] sources/rjm/.claude/skills/work-operating-model/references/entry-contract.md
- [x] sources/rjm/.claude/skills/work-operating-model/references/layer-questions.md
- [x] sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py
- [x] sources/rjm/.claude/skills/world-model-diagnostic/SKILL.md
- [x] sources/rjm/docs/customization.md
- [x] sources/rjm/scripts/eval/_eval_agent_types.py
- [x] sources/rjm/scripts/eval/_model_sweep_core.py
- [x] sources/rjm/scripts/eval/_runtime_parity.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/examples/runtime-parity-fixtures.json
- [x] sources/rjm/scripts/metrics/kill_criteria.py
- [x] sources/rjm/scripts/validation/adr_lifecycle_baseline.json

## Outputs produced
- docs/analysis/concepts/rjm/critical-high-priority.md (966 bytes)
- docs/analysis/concepts/rjm/medium-priority.md (944 bytes)
- docs/analysis/concepts/rjm/accepted-risks.md (937 bytes)
- docs/analysis/concepts/rjm/validation-authority.md (1414 bytes)
- docs/analysis/concepts/rjm/eslint.md (972 bytes)
- docs/analysis/concepts/rjm/psavoidusingwritehost.md (1048 bytes)
- docs/analysis/concepts/rjm/md013.md (918 bytes)
- docs/analysis/concepts/rjm/no-console.md (918 bytes)
- docs/analysis/concepts/rjm/windows-container-image-update.md (1437 bytes)
- docs/analysis/concepts/rjm/dotnet-build.md (974 bytes)
- docs/analysis/concepts/rjm/dotnet-test.md (975 bytes)
- docs/analysis/concepts/rjm/adopipelinegeneration.md (1084 bytes)
- docs/analysis/concepts/rjm/onebranch.md (943 bytes)
- docs/analysis/concepts/rjm/configgen.md (970 bytes)
- docs/analysis/concepts/rjm/topology-project.md (1038 bytes)
- docs/analysis/concepts/rjm/ltsc.md (970 bytes)
- docs/analysis/concepts/rjm/cpm.md (973 bytes)
- docs/analysis/concepts/rjm/directory-packages-props.md (1032 bytes)
- docs/analysis/concepts/rjm/user-md.md (1192 bytes)
- docs/analysis/concepts/rjm/soul-md.md (1391 bytes)
- docs/analysis/concepts/rjm/heartbeat-md.md (1246 bytes)
- docs/analysis/concepts/rjm/schema-version.md (2214 bytes)
- docs/analysis/concepts/rjm/rhythms.md (1793 bytes)
- docs/analysis/concepts/rjm/institutional-knowledge.md (2018 bytes)
- docs/analysis/concepts/rjm/friction.md (1946 bytes)
- docs/analysis/concepts/rjm/5-layer-interview.md (1802 bytes)
- docs/analysis/concepts/rjm/work-operating-model.md (2073 bytes)
- docs/analysis/concepts/rjm/canonical-layers.md (983 bytes)
- docs/analysis/concepts/rjm/required-top-level.md (984 bytes)
- docs/analysis/concepts/rjm/allowed-interview-status.md (1005 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/critical-high-priority.md ... docs/analysis/concepts/rjm/allowed-interview-status.md (exit code 0, 35 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `SOUL.md` spans `docs/customization.md` and the `work-operating-model` skill; it is both an identity cornerstone for agent reconstruction and an optional human-readable markdown view of team operating model norms.
- `schema_version` is shared across evaluation runners, drift metric event loggers, and operating model validators as a versioning constant and schema attribute.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~47,700 tokens (~190.9 KB source across 17 files).
Approximate tokens of output written: ~9,300 tokens (37,148 bytes across 30 concept cards).
