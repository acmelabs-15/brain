---
package: rjm
path: scripts/eval/README.md
type: script
bytes: 81217
unit: inv-rjm-237
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/README.md

## Purpose — required, verbatim
> "Behavioral evaluation tools for prompt, skill, and agent changes. Implements ADR-057." — scripts/eval/README.md:3

## Design intent — required
Serves as the central operational reference and architectural documentation for rjm's suite of behavioral evaluation tools across prompt, skill, rule, and agent definitions (implementing ADR-057). It establishes behavioral benchmarking and statistical validation procedures—including change detection routing, real Claude and Copilot CLI runtime parity, plan-rubric proxy scoring for end-to-end delivery, reviewer-asymmetry hypothesis testing, activation gating for progressive disclosure skills and rules, pairwise skill redundancy pruning, candidate model sweeps with bootstrap confidence intervals, and held-out-gated artifact optimization. Without this documentation, engineers and autonomous agents would lack the operational commands, statistical interpretation guardrails, variance controls, and failure mode taxonomies necessary to objectively verify that changes to system prompts, skills, and agent roles actually improve model behavior rather than fitting noise or degrading downstream capabilities.

## Phase — required
none

## Inputs — required
- Scenario definitions and fixtures:
  - `--scenarios tests/evals/research-scenarios.json` — scripts/eval/README.md:14
  - `--scenarios tests/evals/rule-scenarios/working-with-legacy-code.json` — scripts/eval/README.md:26
  - "tests/evals/rule-scenarios/{rule}.json" — scripts/eval/README.md:249
  - "tests/evals/rule-scenarios/clean-architecture.json" — scripts/eval/README.md:791
  - "examples/example-scenarios.json" — scripts/eval/README.md:1319
- Fixture suites and panel configurations:
  - "--pairs scripts/eval/examples/example-overlap-pairs.json" — scripts/eval/README.md:30
  - "--panel-config scripts/eval/panels/owner-copilot-cli.json" — scripts/eval/README.md:56
  - "--fixtures scripts/eval/examples/runtime-parity-fixtures.json" — scripts/eval/README.md:110
  - "--fixtures scripts/eval/examples/e2e-delivery-fixtures.json" — scripts/eval/README.md:156
  - "evals/reviewer-asymmetry-spike/fixtures/" — scripts/eval/README.md:195
  - "evals/security-spike/fixtures" — scripts/eval/README.md:397
  - "evals/analyst-spike/fixtures/F001.json" — scripts/eval/README.md:789
  - "tests/hooks/test_dash_guard.py" — scripts/eval/README.md:792
- Evaluated artifacts and prompts under test:
  - "--prompt .claude/commands/research.md" — scripts/eval/README.md:13
  - "templates/agents/{critic,qa,implementer}.shared.md" — scripts/eval/README.md:95
  - ".claude/rules/*.md" — scripts/eval/README.md:203
  - ".claude/skills/software-engineering-library/SKILL.md" — scripts/eval/README.md:255
  - ".claude/skills/software-engineering-library/references/working-with-legacy-code.md" — scripts/eval/README.md:256
- Runtime credentials and environment variables:
  - "ANTHROPIC_API_KEY" — scripts/eval/README.md:42
  - "OPENAI_API_KEY" — scripts/eval/README.md:44
  - "GITHUB_TOKEN" — scripts/eval/README.md:45
  - "COPILOT_CLI_BIN" — scripts/eval/README.md:81
  - "COPILOT_CLI_TIMEOUT" — scripts/eval/README.md:81
  - "EVAL_PROVIDER" — scripts/eval/README.md:1366
  - "EVAL_LEDGER_DIR" — scripts/eval/README.md:804
  - "XDG_STATE_HOME" — scripts/eval/README.md:804
- State files and prior reports:
  - ".eval-state/software-engineering-library-activation-state.json" — scripts/eval/README.md:304
  - "activation-results.json" — scripts/eval/README.md:335
  - "report.json" — scripts/eval/README.md:660

## Outputs — required
- Evaluation reports and result artifacts:
  - "--output artifacts/runtime-parity/report.json" — scripts/eval/README.md:112
  - "--output artifacts/e2e-delivery.json" — scripts/eval/README.md:161
  - "evals/reports/overlap-<RUNID>/" — scripts/eval/README.md:376
  - "matrix.json" — scripts/eval/README.md:376
  - "REPORT.md" — scripts/eval/README.md:377
  - "evals/{agent}-spike/reports/" — scripts/eval/README.md:442
  - "base.json" — scripts/eval/README.md:579
  - "split.json" — scripts/eval/README.md:662
  - "cand.json" — scripts/eval/README.md:680
- Evaluation verdicts and decisions:
  - "FAIL_JUDGE_ERRORS" — scripts/eval/README.md:214
  - "NO_POSITIVE_CASES" — scripts/eval/README.md:219
  - "NO_NEGATIVE_CASES" — scripts/eval/README.md:220
  - "FAIL_THRESHOLD" — scripts/eval/README.md:306
  - "FAIL_NO_DELTA" — scripts/eval/README.md:307
  - "NO_RESULT" — scripts/eval/README.md:307
  - "FAIL_ROUTE_MISSED_TARGET" — scripts/eval/README.md:312
  - "DISTINCT" — scripts/eval/README.md:357
  - "OVERLAP" — scripts/eval/README.md:358
  - "SUBSUMED" — scripts/eval/README.md:359
  - "KEEP_PIN" — scripts/eval/README.md:410
  - "DROP_PIN" — scripts/eval/README.md:414
  - "ACCEPT" — scripts/eval/README.md:893
  - "REJECT" — scripts/eval/README.md:546

## Invokes — required
- script eval-suite.py — scripts/eval/README.md:9
- script eval-prompt-change.py — scripts/eval/README.md:12
- script eval-agents.py — scripts/eval/README.md:19
- script eval-knowledge-integration.py — scripts/eval/README.md:22
- script eval-rule-activation.py — scripts/eval/README.md:25
- script eval-skill-overlap.py — scripts/eval/README.md:29
- script eval_runtime_parity.py — scripts/eval/README.md:33
- script eval-model-panel.py — scripts/eval/README.md:54
- script analyze-pr-churn.py — scripts/eval/README.md:94
- script _pr_churn.py — scripts/eval/README.md:94
- script eval-reviewer-asymmetry.py — scripts/eval/README.md:95
- script eval-e2e-delivery.py — scripts/eval/README.md:96
- script _e2e_delivery_core.py — scripts/eval/README.md:96
- script eval-model-sweep.py — scripts/eval/README.md:97
- script _model_sweep_core.py — scripts/eval/README.md:97
- script optimize-artifact.py — scripts/eval/README.md:99
- script _optimizer_core.py — scripts/eval/README.md:99
- script _optimizer_adapters.py — scripts/eval/README.md:99
- script _anthropic_api.py — scripts/eval/README.md:100
- script software_engineering_library_activation_gate.py — scripts/eval/README.md:336
- script eval-agent-vs-baseline.py — scripts/eval/README.md:390
- script _eval_common.py — scripts/eval/README.md:434
- script instruction_budget.py — scripts/eval/README.md:1376
- doc ADR-057 — scripts/eval/README.md:3
- doc ADR-058 — scripts/eval/README.md:72
- doc ADR-023 — scripts/eval/README.md:88
- doc ADR-088 — scripts/eval/README.md:291
- doc ADR-087 — scripts/eval/README.md:562
- doc ADR-035 — scripts/eval/README.md:1016
- doc prompt-eval-methodology.md — scripts/eval/README.md:1395

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:416
- reference rule-audit-procedure.md — src/copilot-cli/skills/context-optimizer/references/rule-audit-procedure.md:228
- reference rule-audit-instrument.md — src/copilot-cli/skills/context-optimizer/references/rule-audit-instrument.md:13
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:228
- reference rule-audit-instrument.md — .claude/skills/context-optimizer/references/rule-audit-instrument.md:13

## Concepts named — required, verbatim
- `copilot-cli` — scripts/eval/README.md:46 — defined here
- `eval-agents.py` — scripts/eval/README.md:90 — defined here
- `eval-knowledge-integration.py` — scripts/eval/README.md:91 — defined here
- `eval-skill-overlap.py` — scripts/eval/README.md:92 — defined here
- `eval-rule-activation.py` — scripts/eval/README.md:93 — defined here
- `analyze-pr-churn.py` — scripts/eval/README.md:94 — defined here
- `eval-reviewer-asymmetry.py` — scripts/eval/README.md:95 — defined here
- `eval-e2e-delivery.py` — scripts/eval/README.md:96 — defined here
- `eval-model-sweep.py` — scripts/eval/README.md:97 — defined here
- `eval_runtime_parity.py` — scripts/eval/README.md:98 — defined here
- `optimize-artifact.py` — scripts/eval/README.md:99 — defined here
- `verdict-pass` — scripts/eval/README.md:190 — defined here
- `min_findings_count` — scripts/eval/README.md:191 — defined here
- `baseline` — scripts/eval/README.md:207 — defined here
- `description` — scripts/eval/README.md:208 — defined here
- `full` — scripts/eval/README.md:209 — defined here
- `activation_score` — scripts/eval/README.md:212 — defined here
- `citation_score` — scripts/eval/README.md:212 — defined here
- `behavior_score` — scripts/eval/README.md:212 — defined here
- `FAIL_JUDGE_ERRORS` — scripts/eval/README.md:214 — defined here
- `skip-rule-not-applicable` — scripts/eval/README.md:218 — defined here
- `NO_POSITIVE_CASES` — scripts/eval/README.md:219 — defined here
- `NO_NEGATIVE_CASES` — scripts/eval/README.md:220 — defined here
- `rule_id` — scripts/eval/README.md:251 — defined here
- `expected_signals` — scripts/eval/README.md:263 — defined here
- `expected_gate` — scripts/eval/README.md:264 — defined here
- `consecutive_activation_failures` — scripts/eval/README.md:305 — defined here
- `last_verdict` — scripts/eval/README.md:306 — defined here
- `last_run_id` — scripts/eval/README.md:306 — defined here
- `last_checked_at` — scripts/eval/README.md:306 — defined here
- `FAIL_THRESHOLD` — scripts/eval/README.md:306 — defined here
- `FAIL_NO_DELTA` — scripts/eval/README.md:307 — defined here
- `NO_RESULT` — scripts/eval/README.md:307 — defined here
- `FAIL_ROUTE_MISSED_TARGET` — scripts/eval/README.md:312 — defined here
- `FAIL_POSITIVE_INCOMPLETE` — scripts/eval/README.md:321 — defined here
- `FAIL_NEGATIVE_INCOMPLETE` — scripts/eval/README.md:322 — defined here
- `FAIL_OVER_ACTIVATION` — scripts/eval/README.md:322 — defined here
- `DISTINCT` — scripts/eval/README.md:357 — defined here
- `OVERLAP` — scripts/eval/README.md:358 — defined here
- `SUBSUMED` — scripts/eval/README.md:359 — defined here
- `KEEP_PIN` — scripts/eval/README.md:410 — defined here
- `DROP_PIN` — scripts/eval/README.md:414 — defined here
- `opt` — scripts/eval/README.md:465 — defined here
- `sel` — scripts/eval/README.md:466 — defined here
- `test` — scripts/eval/README.md:467 — defined here
- `extract` — scripts/eval/README.md:491 — defined here
- `split` — scripts/eval/README.md:492 — defined here
- `budget` — scripts/eval/README.md:493 — defined here
- `score` — scripts/eval/README.md:494 — defined here
- `apply` — scripts/eval/README.md:495 — defined here
- `gate` — scripts/eval/README.md:496 — defined here
- `report` — scripts/eval/README.md:497 — defined here
- `buffer-check` — scripts/eval/README.md:498 — defined here
- `buffer-add` — scripts/eval/README.md:499 — defined here
- `optimizer-results/1` — scripts/eval/README.md:517 — defined here
- `--on-skip` — scripts/eval/README.md:541 — defined here
- `--judge-repeats` — scripts/eval/README.md:612 — defined here
- `score_samples` — scripts/eval/README.md:613 — defined here
- `--rule-reduce` — scripts/eval/README.md:613 — defined here
- `fingerprint` — scripts/eval/README.md:662 — defined here
- `discordant_gain` — scripts/eval/README.md:959 — defined here
- `discordant_loss` — scripts/eval/README.md:959 — defined here
- `p_value` — scripts/eval/README.md:960 — defined here
- `--max-p` — scripts/eval/README.md:964 — defined here
- `consultations` — scripts/eval/README.md:1023 — defined here
- `sel_consultations` — scripts/eval/README.md:1026 — defined here
- `corpus_verified` — scripts/eval/README.md:1226 — defined here
- `corpus_pinned` — scripts/eval/README.md:1268 — defined here

## Structure
- `# Eval Scripts` — scripts/eval/README.md:1
- `## Quick Start` — scripts/eval/README.md:5
- `## Providers` — scripts/eval/README.md:36
- `## Scripts` — scripts/eval/README.md:84
- `## Real CLI Runtime Parity` — scripts/eval/README.md:102
- `## End-to-End Delivery Eval` — scripts/eval/README.md:140
- `## Reviewer-Asymmetry Eval` — scripts/eval/README.md:181
- `## Rule Activation Eval` — scripts/eval/README.md:201
- `### Software Engineering Library Rollback Gate` — scripts/eval/README.md:289
- `## Skill Overlap Eval` — scripts/eval/README.md:345
- `## Model Sweep Eval` — scripts/eval/README.md:386
- `## Held-Out-Gated Optimization` — scripts/eval/README.md:446
- `### Subcommands` — scripts/eval/README.md:487
- `### Covering agents, rules, and hooks` — scripts/eval/README.md:501
- `### Reading a rule across several runs` — scripts/eval/README.md:570
- `### Two kinds of judge noise, two reducers` — scripts/eval/README.md:606
- `### A loop step` — scripts/eval/README.md:654
- `### Reporting the test group, once` — scripts/eval/README.md:700
- `### What the gate refuses` — scripts/eval/README.md:740
- `### What the seam does and does not protect` — scripts/eval/README.md:772
- `### What the numbers can and cannot show` — scripts/eval/README.md:957
- `### Exit codes` — scripts/eval/README.md:1014
- `### Scope` — scripts/eval/README.md:1092
- `### What a live run measured` — scripts/eval/README.md:1098
- `### A retracted agent-path claim, and the guard it produced` — scripts/eval/README.md:1140
- `### What this means for running the loop` — scripts/eval/README.md:1178
- `### Refusing an incomparable pair` — scripts/eval/README.md:1217
- `## Scenario File Format` — scripts/eval/README.md:1317
- `## Scenario File Locations` — scripts/eval/README.md:1339
- `## Flags` — scripts/eval/README.md:1348
- `## Environment` — scripts/eval/README.md:1362
- `## Token Budget Measurement` — scripts/eval/README.md:1369
- `## References` — scripts/eval/README.md:1391

## Scripts — required if type is script or the skill ships scripts
### Document File Nature
- path: `scripts/eval/README.md`, language: Markdown, lines: 1396
- documented invocation: none (non-executable markdown document classified as `type: script` in manifest due to its location under `scripts/eval/`)
- **executed:** yes
- actual command run: `sh -c 'test -x sources/rjm/scripts/eval/README.md'`
- abridged stdout: (empty)
- **actual exit code:** 1 (file has mode `-rw-r--r--`, non-executable markdown)
- documented exit codes: none (documentation reference)
- does the output match what the documentation claims? yes, file is markdown documentation describing evaluation tooling

### Documented Scripts Executed
#### Eval Suite Orchestrator
- path: `scripts/eval/eval-suite.py`, language: Python, lines: 580
- documented invocation:
"python3 scripts/eval/eval-suite.py --dry-run" — scripts/eval/README.md:9
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-suite.py --dry-run`
- abridged stdout: `EVAL SUITE: Detecting changes vs main ... Overall: PASS`
- **actual exit code:** 0
- documented exit codes: exit 0 on clean pass
- exit paths in code: `scripts/eval/eval-suite.py:429, 550, 575, 576`
- does the output match what the documentation claims? yes, detects changed files against base ref and runs suites in dry-run mode

#### Prompt Change Evaluator
- path: `scripts/eval/eval-prompt-change.py`, language: Python, lines: 825
- documented invocation:
"uv run python scripts/eval/eval-prompt-change.py" — scripts/eval/README.md:12
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-prompt-change.py --prompt .claude/commands/research.md --scenarios tests/evals/research-scenarios.json --base-ref main --dry-run`
- abridged stdout: `ERROR: Scenario file not found: tests/evals/research-scenarios.json`
- **actual exit code:** 2
- documented exit codes: exit 0 on pass, exit 1 on gate failure, exit 2 on configuration error
- exit paths in code: `scripts/eval/eval-prompt-change.py:675, 755, 757, 769, 780, 804, 813, 819`
- does the output match what the documentation claims? no, fails with exit code 2 because `tests/evals/research-scenarios.json` is missing from the repository

#### Agent Definition Evaluator
- path: `scripts/eval/eval-agents.py`, language: Python, lines: 1076
- documented invocation:
"python3 scripts/eval/eval-agents.py --agent analyst --dry-run" — scripts/eval/README.md:19
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-agents.py --agent analyst --dry-run`
- abridged stdout: `DRY-RUN OK: Dry-run preflight OK: classified 1 agent(s) (analyst). No API calls made`
- **actual exit code:** 0
- documented exit codes: exit 0 on pass/dry-run, exit 1 on weak spots or error
- exit paths in code: `scripts/eval/eval-agents.py:897, 926, 932, 939, 1014, 1072`
- does the output match what the documentation claims? yes, evaluates agent definitions in dry-run mode without API calls

#### Knowledge Integration Evaluator
- path: `scripts/eval/eval-knowledge-integration.py`, language: Python, lines: 773
- documented invocation:
"python3 scripts/eval/eval-knowledge-integration.py --skill cva-analysis --dry-run" — scripts/eval/README.md:22
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-knowledge-integration.py --skill cva-analysis --dry-run`
- abridged stdout: `KILL GATE: STOP (FAIL) ... FAILURE: cva-analysis: delta 0.00 < 0.5 threshold`
- **actual exit code:** 1
- documented exit codes: exit 0 on pass, exit 1 on kill-gate failure
- exit paths in code: `scripts/eval/eval-knowledge-integration.py:607, 635, 641, 650, 680, 769`
- does the output match what the documentation claims? no, dry-run fails with exit 1 because placeholder zero scores are checked against the delta threshold

#### Rule Activation Evaluator
- path: `scripts/eval/eval-rule-activation.py`, language: Python, lines: 2539
- documented invocation:
"python3 scripts/eval/eval-rule-activation.py" — scripts/eval/README.md:25
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-rule-activation.py --scenarios tests/evals/rule-scenarios/working-with-legacy-code.json --dry-run`
- abridged stdout: `[DRY-RUN] working-with-legacy-code: 4 scenarios x 3 mechanisms ... Total calls planned: 52`
- **actual exit code:** 0
- documented exit codes:
"The process exit code names which kind of thing went wrong: 0 clean, 1 a rule that underperformed, 2 a configuration problem, 3 an external or API failure, 4 a credential that could not be loaded." — scripts/eval/README.md:231-233
- exit paths in code: `scripts/eval/eval-rule-activation.py:2539` (via `main()` reduction over target verdict codes)
- for validators/gates: can it exit non-zero? yes (exits 1, 2, 3, 4); does it fail on default branch? no, dry-run passes on clean fixtures
- does the output match what the documentation claims? yes, plans evaluation calls across mechanisms without spend

#### Skill Overlap Evaluator
- path: `scripts/eval/eval-skill-overlap.py`, language: Python, lines: 1005
- documented invocation:
"python3 scripts/eval/eval-skill-overlap.py" — scripts/eval/README.md:29
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json --dry-run`
- abridged stdout: `Cost estimate: 48 API calls, ~168,000 tokens ... Dry run: 2 pair(s) validated`
- **actual exit code:** 0
- documented exit codes: exit 0 on success, exit 1 on missing skill directory, exit 2 on invalid pair format, exit 3 on judge parse failure
- exit paths in code: `scripts/eval/eval-skill-overlap.py:1005`
- does the output match what the documentation claims? yes, validates pairwise fixtures and computes cost estimate

#### Real CLI Runtime Parity Evaluator
- path: `scripts/eval/eval_runtime_parity.py`, language: Python, lines: 540
- documented invocation:
"uv run python scripts/eval/eval_runtime_parity.py --dry-run" — scripts/eval/README.md:33
- **executed:** yes
- actual command run: `python3 scripts/eval/eval_runtime_parity.py --dry-run`
- abridged stdout: `Error: [Errno 2] No such file or directory: 'copilot'`
- **actual exit code:** 3
- documented exit codes: `--dry-run` validates paths, assertions, controls, and CLI versions
- exit paths in code: `scripts/eval/eval_runtime_parity.py:539`
- does the output match what the documentation claims? requires `copilot` binary installed on system PATH to validate version

#### Model Panel Evaluator
- path: `scripts/eval/eval-model-panel.py`, language: Python, lines: 280
- documented invocation:
"python3 scripts/eval/eval-model-panel.py" — scripts/eval/README.md:54
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-model-panel.py --agents orchestrator --panel-config scripts/eval/panels/owner-copilot-cli.json --dry-run`
- abridged stdout: `DRY RUN: 1 unit(s) x 2 tier(s) = 2 harness invocation(s), n-runs=3, ZERO spend.`
- **actual exit code:** 0
- documented exit codes: exit 0 on success, non-zero on error
- does the output match what the documentation claims? yes, validates tiered model panel without spend

#### End-to-End Delivery Evaluator
- path: `scripts/eval/eval-e2e-delivery.py`, language: Python, lines: 247
- documented invocation:
"python3 scripts/eval/eval-e2e-delivery.py" — scripts/eval/README.md:155
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-e2e-delivery.py --fixtures scripts/eval/examples/e2e-delivery-fixtures.json --dry-run`
- abridged stdout: `{"dry_run": true, "max_score": 11, "planned_api_calls": 84, "model": "claude-sonnet-4-6"}`
- **actual exit code:** 0
- documented exit codes: exit 0 on clean completion
- does the output match what the documentation claims? yes, resolves fixtures and computes planned calls without spend

#### Candidate Model Sweep Evaluator
- path: `scripts/eval/eval-model-sweep.py`, language: Python, lines: 574
- documented invocation:
"scripts/eval/eval-model-sweep.py" — scripts/eval/README.md:395
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-model-sweep.py --agent security --fixtures evals/security-spike/fixtures --models claude-sonnet-4-6,claude-opus-4-6 --n-runs 3 --dry-run`
- abridged stdout: `sweep plan: agent=security fixtures=evals/security-spike/fixtures n_runs=3`
- **actual exit code:** 0
- documented exit codes: exit 0 on pass, exit 2 on unpriced model
- exit paths in code: `scripts/eval/eval-model-sweep.py:574`
- does the output match what the documentation claims? yes, validates pricing and prints sweep plan

#### Held-Out-Gated Optimization CLI
- path: `scripts/eval/optimize-artifact.py`, language: Python, lines: 3409
- documented invocation:
"OA=scripts/eval/optimize-artifact.py" — scripts/eval/README.md:657
- **executed:** yes
- actual command run: `python3 scripts/eval/optimize-artifact.py --help`
- abridged stdout: `usage: optimize-artifact.py ... Held-out-gated optimization rails for agents, rules, and hooks.`
- **actual exit code:** 0
- documented exit codes:
"0 | Accept, novel patch, or plain success" — scripts/eval/README.md:1088
"1 | Reject, already-rejected patch, or a refused patch" — scripts/eval/README.md:1089
"2 | Bad arguments, unreadable input, malformed data, or a stream that could not be written" — scripts/eval/README.md:1090
- exit paths in code: `scripts/eval/optimize-artifact.py:43, 120, 280, 557, 1068, 1767, 3341, 3356, 3372`
- for validators/gates: can it exit non-zero? yes (exit 1 for REJECT, exit 2 for ConfigError); does it fail on default branch? no, pure CLI with robust error trapping
- does the output match what the documentation claims? yes, provides optimization commands and tamper-evident holdout gating

## Defects — required
- missing-path · "tests/evals/research-scenarios.json" — scripts/eval/README.md:14 · Documented quick-start invocation references scenario fixture `tests/evals/research-scenarios.json` which does not exist in the repository.
- missing-path · "examples/example-scenarios.json" — scripts/eval/README.md:1319 · Reference points to `examples/example-scenarios.json` relative to repo root, but the template file actually exists at `scripts/eval/examples/example-scenarios.json`.
- missing-path · ".agents/architecture/ADR-057-prompt-behavioral-evaluation.md" — scripts/eval/README.md:1393 · Broken relative markdown link from `scripts/eval/README.md` (unresolved baseline link in check_adr_links_baseline.txt; requires `../../.agents/architecture/ADR-057-prompt-behavioral-evaluation.md`).
- missing-path · ".agents/architecture/ADR-023-quality-gate-prompt-testing.md" — scripts/eval/README.md:1394 · Broken relative markdown link from `scripts/eval/README.md` (unresolved baseline link in check_adr_links_baseline.txt; requires `../../.agents/architecture/ADR-023-quality-gate-prompt-testing.md`).
- missing-path · ".agents/testing/prompt-eval-methodology.md" — scripts/eval/README.md:1395 · Broken relative markdown link from `scripts/eval/README.md` (requires `../../.agents/testing/prompt-eval-methodology.md`).
- doc-drift · "uv run --frozen python scripts/validation/instruction_budget.py --file-type .py" — scripts/eval/README.md:1382 · Documents invocation with `--file-type .py`, but `instruction_budget.py` CLI does not support `--file-type` (options are `--ceiling EXT:BYTES`, `--path`, `--ci`, `--format`, `--reserve`).
- doc-drift · "uv run --frozen python scripts/validation/instruction_budget.py --file-type .md" — scripts/eval/README.md:1385 · Documents invocation with `--file-type .md`, but `instruction_budget.py` CLI does not support `--file-type`.
- script-bug · "python3 scripts/eval/eval-knowledge-integration.py --skill cva-analysis --dry-run" — scripts/eval/README.md:22 · Documented dry-run invocation fails with exit code 1 because dry-run placeholder zero scores are evaluated against the kill-gate delta threshold without a dry-run bypass.

## Observations
- The documentation establishes deep empirical discipline for LLM evaluations, explicitly identifying that model evaluations exhibit high sample variance (mean absolute movement of 0.49 points on a 5-point scale between identical runs) and establishing null controls, Bonferroni family-wise alpha correction, and tamper-evident holdout ledgers.
- Documents crucial cross-platform filesystem synchronization semantics for holdout ledgers: on POSIX, durability requires fsyncing the parent directory descriptor after renaming a temp file, whereas Windows CPython `MoveFileExW` omits `MOVEFILE_WRITE_THROUGH`, creating a power-cut vulnerability.
- Documents that GitHub Copilot CLI token counts are non-monotonic due to tool definition and cache accounting, mandating deterministic byte-level accounting via `instruction_budget.py` instead.
- Discloses a retracted empirical claim from prior development where an architect null control was confounded by unpinned fixtures across runs (`fixture_set_sha`), motivating an automated corpus identity guard in `gate`.

## Context cost
81217 bytes, approximately 20304 tokens.
