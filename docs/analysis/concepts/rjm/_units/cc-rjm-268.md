---
unit: cc-rjm-268
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-268

## Files assigned
- [x] sources/rjm/scripts/eval/_copilot_cli.py
- [x] sources/rjm/scripts/eval/_copilot_cli_acp.py
- [x] sources/rjm/scripts/eval/_copilot_cli_constants.py
- [x] sources/rjm/scripts/eval/_copilot_cli_transcript.py
- [x] sources/rjm/scripts/eval/_copilot_windows_files.py
- [x] sources/rjm/scripts/eval/_eval_common.py
- [x] sources/rjm/scripts/eval/_eval_errors.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/eval/eval-model-panel.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/eval/eval-reviewer-asymmetry.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/eval_skill_router.py
- [x] sources/rjm/templates/agents/code-simplifier.shared.md
- [x] sources/rjm/templates/agents/comment-analyzer.shared.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-cli-acp-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-cli-constants-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-cli-transcript-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-windows-files-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-errors-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-router-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-reviewer-asymmetry-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-code-simplifier-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-comment-analyzer-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/initialize.md (906 bytes)
- docs/analysis/concepts/rjm/session-new.md (875 bytes)
- docs/analysis/concepts/rjm/session-prompt.md (858 bytes)
- docs/analysis/concepts/rjm/session-close.md (824 bytes)
- docs/analysis/concepts/rjm/session-update.md (918 bytes)
- docs/analysis/concepts/rjm/agent-message-chunk.md (913 bytes)
- docs/analysis/concepts/rjm/footer-label-re.md (882 bytes)
- docs/analysis/concepts/rjm/footer-column.md (874 bytes)
- docs/analysis/concepts/rjm/footer-value-max-words.md (895 bytes)
- docs/analysis/concepts/rjm/footer-prose-endings.md (936 bytes)
- docs/analysis/concepts/rjm/session-state-env.md (943 bytes)
- docs/analysis/concepts/rjm/copilot-session-state-dir.md (979 bytes)
- docs/analysis/concepts/rjm/unverified-model-env.md (942 bytes)
- docs/analysis/concepts/rjm/trace-line-prefixes.md (931 bytes)
- docs/analysis/concepts/rjm/provider-label.md (889 bytes)
- docs/analysis/concepts/rjm/session-state-root.md (931 bytes)
- docs/analysis/concepts/rjm/copilot-home.md (882 bytes)
- docs/analysis/concepts/rjm/transcriptcandidate.md (926 bytes)
- docs/analysis/concepts/rjm/malformedprovidermetadataerror.md (2639 bytes)
- docs/analysis/concepts/rjm/read-session-transcript.md (899 bytes)
- docs/analysis/concepts/rjm/events-jsonl.md (846 bytes)
- docs/analysis/concepts/rjm/open-windows-transcript.md (1072 bytes)
- docs/analysis/concepts/rjm/assistant-message.md (883 bytes)
- docs/analysis/concepts/rjm/taste-ceiling.md (966 bytes)
- docs/analysis/concepts/rjm/safe-process-error.md (922 bytes)
- docs/analysis/concepts/rjm/minimal-process-env.md (942 bytes)
- docs/analysis/concepts/rjm/untrusted-text-envelope.md (948 bytes)
- docs/analysis/concepts/rjm/system-fingerprint.md (881 bytes)
- docs/analysis/concepts/rjm/ai-agents-text-eval-v1.md (886 bytes)
- docs/analysis/concepts/rjm/complete.md (1928 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-268.md (5793 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit originate from Copilot CLI evaluation infrastructure scripts (`scripts/eval/_copilot_cli*.py`, `_eval_errors.py`, etc.) and cross-platform agent templates (`templates/agents/*.shared.md`).
- 29 concepts represent Python constants, functions, classes, protocol method strings, filenames, and internal heuristics (`kind: name-only` per D-023).
- 1 concept (`COMPLETE`) represents an operational agent execution handoff gate (`kind: gate`, `package_phase: cross-phase`).
- All 30 concept cards verify with zero failures (31 PASS, 0 FAIL) under `bun scripts/synthesis/quote-check.ts`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~110,000 tokens across 18 source files (~380,000 bytes) and 18 citing inventory cards (~125,000 bytes); approximate tokens of output written: ~8,200 tokens across 30 concept cards and this unit report.
