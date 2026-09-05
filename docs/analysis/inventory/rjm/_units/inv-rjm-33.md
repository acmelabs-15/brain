---
unit: inv-rjm-33
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-33

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-080-model-pin-justification-policy.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-081-confidence-elicitation-experiment.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-082-claude-hook-group-dispatch.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-080-model-pin-justification-policy-md.md` (10422 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-081-confidence-elicitation-experiment-md.md` (7114 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-082-claude-hook-group-dispatch-md.md` (7466 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-33 covers three architectural decision records (ADR-080, ADR-081, ADR-082) addressing model pin governance, confidence elicitation experiment design, and Claude Code hook multiplexing and consolidation.
- Key findings and cross-unit connections:
  - **ADR-080**: Formulates the model pin justification policy across skills, agents, and commands. Given the lack of an eval sweep harness for skills and commands, versioned model IDs are completely banned for skills and commands (only inheritance or cost-justified rolling aliases allowed). Versioned pins for agents are restricted to those backed by a committed KEEP_PIN sweep artifact (delta >= 0.05 recall, bootstrap CI lower bound > 0 over at least 8 fixtures). Ratchet enforcement via `scripts/validation/check_model_pins.py` with a draining baseline. Interacts with ADR-002, ADR-034, ADR-036, ADR-039, ADR-057, and ADR-079.
  - **ADR-081**: Evaluates issue #3016's proposal for a metacognitive confidence-elicitation signal ("what am I least confident about right now?") at completion time. Adversarial multi-agent review demonstrated that invoking an LLM inside a 5-second PreToolUse blocking hook breaks execution budgets and calibrating self-reports against critic LLMs creates circular ground truth. The ADR rejects the blocking hook and reframes the approach into an offline shadow study with external defect labels (tests, CI, human review). References the retired false-completion gate (`invoke_false_completion_gate.py`) and silent-failure-hunter.
  - **ADR-082**: Resolves severe process-spawn latency bottlenecks in Claude Code hooks (where 53 registrations produced 4-11 Python spawns per event, severely degrading execution on Windows under Defender scanning) and removes duplicated hook execution when the project-toolkit plugin is co-installed. Consolidates hooks into in-process groups via `runpy` in `invoke_dispatch_claude.py` and `claude_hook_dispatch.py`, with strict JSON stdout capture, event-correct blocking modes (`gate`, `gate_all`, `observe`), and a self-host bail on `CLAUDE_PLUGIN_ROOT` equality. Extends ADR-068; related to ADR-085, ADR-097.
- Defects discovered via METHOD.md §4 checklist:
  - ADR-080: `missing-path` at line 241 (cites bare `build_all.py --check` instead of `build/scripts/build_all.py`).
  - ADR-080: `doc-drift` at line 9 (frontmatter `implemented: false` contradicts actual implemented enforcement check in CI, as self-documented in lines 347-351).
  - ADR-080: `doc-drift` at line 116 (stale citation to `templates/platforms/copilot-cli.yaml:95` which is `outputDir`, and omitted vscode/visual-studio configs, as noted in lines 320-326).
  - ADR-080: `cross-file-contradiction` at lines 313-318 (skill copier `src/copilot-cli/skills` drops bare aliases with cost rationales because skills lack the model tier translation implemented for agents).
  - ADR-081: `missing-path` at line 94 (references retired and removed `.claude/hooks/PreToolUse/invoke_false_completion_gate.py`).
  - ADR-081: `missing-path` at line 171 (references proposed offline calibration script `scripts/eval/eval-confidence-calibration.py`, unbuilt because Track 1 was not implemented).
  - ADR-082: `missing-path` at line 271 (references non-existent test file `tests/build_scripts/test_copilot_dispatcher_artifact.py` in the Evidence test command).
  - ADR-082: `missing-path` at lines 136-141 (references pruned/deleted hooks `invoke_session_start_memory_first.py`, `invoke_adr_review_guard.py`, `invoke_adr_architect_gate.py`, with deletion noted in lines 142-148).
  - ADR-082: `doc-drift` at lines 158-162 (cites single-shim group `plugin-posttooluse-1-markdown_auto_lint` as an example, though deleted under issue #5154 / ADR-085 section 10).
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate source read: 47,156 bytes (~11,789 tokens across 851 lines). Output written: 25,002 bytes (~6,250 tokens across 3 cards) plus this unit report.
