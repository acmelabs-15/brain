---
package: rjm
path: scripts/skillbook.py
type: script
bytes: 24879
unit: inv-rjm-261
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/skillbook.py

## Purpose — required, verbatim
> "Skillbook CLI: evidence-tiered agent policy registry." — scripts/skillbook.py:10

## Design intent — required
Provides a command-line interface for managing evidence-tiered behavioral policies and context-dependent policy tensions stored under `.agents/skillbook/` (`policies.json`, `tensions.json`, and `workflows.json`). Grounded in empirical eval execution outcomes rather than sentiment detection, policies progress through evidence tiers (`hypothesis` -> `observed` -> `validated`) based on confirmation/contradiction counts weighted by provenance (external signals weighted 1.0 vs self-referential evaluations discounted to 0.25). Tiers never demote (monotonicity invariant); validated policies with rising contradiction rates flip status to `questioning` instead of losing rank. Also resolves inter-policy tensions per operational context so that agent personas dynamically query non-conflicting behavioral rules.

## Phase — required
rjm:cross-phase

## Inputs — required
- Subcommands and arguments:
  - `status`: `--json`
  - `confirm`: `<policy-id>` (required), `--eval <id>` (required), `--context-type` (`external` or `self-referential`, default `external`)
  - `contradict`: `<policy-id>` (required), `--eval <id>` (required), `--context-type` (default `external`), `--reason`
  - `promote`: no arguments
  - `tension list`: `--json`
  - `tension prefer`: `<tension-id>`, `<context>`, `<policy-id>`, `--eval <id>`
  - `select`: `<agent>`, `<context>`, `--json`
- Global option: `--skillbook-dir` (default: `.agents/skillbook`)
- Files read: `.agents/skillbook/policies.json`, `.agents/skillbook/tensions.json`, `.agents/skillbook/workflows.json`

## Outputs — required
- Files modified atomically: `.agents/skillbook/policies.json`, `.agents/skillbook/tensions.json`
- Standard output: policy status tables, active policy selections, promotion logs, tension lists, or JSON payloads
- Standard error: error diagnostics on missing policies, missing tensions, or unreadable files

## Invokes — required
none

## Invoked by — required
- script evidence_weight — scripts/validation/validate_skillbook.py:43

## Concepts named — required, verbatim
- `policies.json` — scripts/skillbook.py:12 — used here
- `tensions.json` — scripts/skillbook.py:12 — used here
- `workflows.json` — scripts/skillbook.py:12 — used here
- `ADR-035` — scripts/skillbook.py:34 — used here
- `evidence_weight` — scripts/skillbook.py:136 — defined here
- `recompute_counts` — scripts/skillbook.py:141 — defined here
- `contradict_rate` — scripts/skillbook.py:165 — defined here
- `eligible_tier` — scripts/skillbook.py:175 — defined here
- `resolve_status` — scripts/skillbook.py:192 — defined here
- `promote_policy` — scripts/skillbook.py:205 — defined here
- `add_evidence` — scripts/skillbook.py:230 — defined here
- `make_evidence_entry` — scripts/skillbook.py:247 — defined here
- `find_policy` — scripts/skillbook.py:273 — defined here
- `run_promote` — scripts/skillbook.py:281 — defined here
- `find_tension` — scripts/skillbook.py:298 — defined here
- `tension_prefer` — scripts/skillbook.py:306 — defined here
- `select_policies` — scripts/skillbook.py:330 — defined here
- `_tension_annotation` — scripts/skillbook.py:371 — defined here
- `_load_or_exit` — scripts/skillbook.py:405 — defined here
- `cmd_status` — scripts/skillbook.py:417 — defined here
- `_log_evidence` — scripts/skillbook.py:439 — defined here
- `cmd_confirm` — scripts/skillbook.py:469 — defined here
- `cmd_contradict` — scripts/skillbook.py:474 — defined here
- `cmd_promote` — scripts/skillbook.py:479 — defined here
- `cmd_tension` — scripts/skillbook.py:495 — defined here
- `_cmd_tension_list` — scripts/skillbook.py:502 — defined here
- `_cmd_tension_prefer` — scripts/skillbook.py:525 — defined here
- `cmd_select` — scripts/skillbook.py:551 — defined here
- `build_parser` — scripts/skillbook.py:593 — defined here
- `main` — scripts/skillbook.py:661 — defined here

## Structure
- _atomic_write_text — scripts/skillbook.py:60
- repo_root — scripts/skillbook.py:99
- skillbook_paths — scripts/skillbook.py:104
- load_skillbook_file — scripts/skillbook.py:113
- save_skillbook_file — scripts/skillbook.py:126
- evidence_weight — scripts/skillbook.py:136
- recompute_counts — scripts/skillbook.py:141
- contradict_rate — scripts/skillbook.py:165
- eligible_tier — scripts/skillbook.py:175
- resolve_status — scripts/skillbook.py:192
- promote_policy — scripts/skillbook.py:205
- add_evidence — scripts/skillbook.py:230
- make_evidence_entry — scripts/skillbook.py:247
- find_policy — scripts/skillbook.py:273
- run_promote — scripts/skillbook.py:281
- find_tension — scripts/skillbook.py:298
- tension_prefer — scripts/skillbook.py:306
- select_policies — scripts/skillbook.py:330
- _tension_annotation — scripts/skillbook.py:371
- _load_or_exit — scripts/skillbook.py:405
- cmd_status — scripts/skillbook.py:417
- _log_evidence — scripts/skillbook.py:439
- cmd_confirm — scripts/skillbook.py:469
- cmd_contradict — scripts/skillbook.py:474
- cmd_promote — scripts/skillbook.py:479
- cmd_tension — scripts/skillbook.py:495
- _cmd_tension_list — scripts/skillbook.py:502
- _cmd_tension_prefer — scripts/skillbook.py:525
- cmd_select — scripts/skillbook.py:551
- build_parser — scripts/skillbook.py:593
- main — scripts/skillbook.py:661

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/skillbook.py`
- language: Python
- lines: 675
- documented invocation:
  - "status                              List policies with tier/confirms/contradicts." — scripts/skillbook.py:26
  - "confirm <policy-id> --eval <id>     Log an eval-grounded confirmation." — scripts/skillbook.py:27
  - "contradict <policy-id> --eval <id>  Log an eval-grounded contradiction." — scripts/skillbook.py:28
  - "promote                             Re-evaluate tiers and statuses." — scripts/skillbook.py:29
  - "tension list                        Show detected tensions." — scripts/skillbook.py:30
  - "tension prefer <ten> <ctx> <pol>    Record a per-context tension resolution." — scripts/skillbook.py:31
  - "select <agent> <context>            Active policies for an agent in a context." — scripts/skillbook.py:32
- **executed:** yes
- actual command run: `uv run python ./scripts/skillbook.py status`
- abridged stdout:
  ```text
  POLICY                               TIER        STATUS         CONF  CONTRA
  pol-architect-design-first           hypothesis  active         0.00    0.00
  pol-security-vuln-first              hypothesis  active         0.00    0.00
  pol-qa-risk-based-verification       hypothesis  active         0.00    0.00
  pol-devops-pipeline-reliability      hypothesis  active         0.00    0.00
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - Documented:
    - "0  - Success" — scripts/skillbook.py:35
    - "1  - Logic error (policy/tension not found, invalid argument)" — scripts/skillbook.py:36
    - "2  - Config error (skillbook file missing or unreadable)" — scripts/skillbook.py:37
  - Actual exit paths:
    - `0`: scripts/skillbook.py:423, scripts/skillbook.py:426, scripts/skillbook.py:436, scripts/skillbook.py:466, scripts/skillbook.py:472, scripts/skillbook.py:477, scripts/skillbook.py:492, scripts/skillbook.py:508, scripts/skillbook.py:511, scripts/skillbook.py:522, scripts/skillbook.py:548, scripts/skillbook.py:562, scripts/skillbook.py:565, scripts/skillbook.py:585
    - `1`: scripts/skillbook.py:414 (`raise SystemExit(EXIT_LOGIC)`), scripts/skillbook.py:450 (`return EXIT_LOGIC`), scripts/skillbook.py:531 (`return EXIT_LOGIC`), scripts/skillbook.py:538 (`return EXIT_LOGIC`)
    - `2`: scripts/skillbook.py:411 (`raise SystemExit(EXIT_CONFIG)`)
- for validators/gates:
  - Registry manager and policy selection engine. Exits 1 on invalid policy or tension references, and exits 2 if files in `.agents/skillbook/` are missing or unparseable.
  - Does it fail on default branch? No, `status`, `tension list`, and `select` commands execute cleanly with exit code 0 against existing `.agents/skillbook/` registry files.
- does the output match what the documentation claims?
  - Yes, outputs formatted tables and JSON structures reflecting policy tiers, confirmation counts, and contextual tension resolutions.

## Defects — required
- doc-drift — scripts/skillbook.py:12 — docstring claims script "Manages .agents/skillbook/policies.json, tensions.json, and workflows.json.", and `skillbook_paths` declares "workflows": base_dir / "workflows.json" (scripts/skillbook.py:109), but no CLI command or helper function ever reads, writes, or modifies `workflows.json`.

## Observations
- Atomic writing via temporary files: `_atomic_write_text` writes to `.filename.<random>.tmp` before replacing the target file using `os.replace`, guaranteeing file integrity on write interruptions (scripts/skillbook.py:60-78).
- Idempotency guards: adding evidence checks whether `eval_id` already exists for that policy; tension preference checks whether `eval_id` was already recorded for that context, preventing duplicate confirmations from multiple eval runs (scripts/skillbook.py:237-240, 319-323).

## Context cost
File size: 24,879 bytes (675 lines). Standard library only. Context cost ~6,220 tokens.
