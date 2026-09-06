---
package: rjm
path: .claude/skills/ai-agents-research-methodology/SKILL.md
type: skill
bytes: 16614
unit: inv-rjm-86
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-research-methodology/SKILL.md

## Purpose — required, verbatim
> "This repo runs on verification-based governance: labels like \"MANDATORY\" or \"NON-NEGOTIABLE\" are insufficient, every requirement needs a verification mechanism. The same standard applies to ideas. An idea is not accepted because it sounds right, because a model agreed with it, or because a retro asserted it. It is accepted when it survives the lifecycle below and leaves an inspectable artifact at every stage." — .claude/skills/ai-agents-research-methodology/SKILL.md:17-22

## Design intent — required
Formalizes the empirical research discipline and end-to-end idea lifecycle required to graduate hunches into accepted repository results under verification-based governance. It enforces that every claim is supported by a single explanatory mechanism surviving adversarial refutation across seven gated stages (contradiction log, empirical probe with negative control, buy-vs-build capability gate and eval baseline, six-agent ADR debate, calibrated gate/skill delivery, telemetry monitoring, and explicit adoption or documented retirement). Without it, autonomous agents and contributors spend cycles building on unverified root-cause assumptions (exemplified by PR #1989's false pagination premise), ship uncalibrated threshold detectors that cannot fire on real repository history, rely on vendor documentation rather than empirical probes, or silently drop discarded proposals only to have future agents unwittingly re-propose them.

## Phase — required
cross-phase

## Inputs — required
- User trigger phrases: `how do I prove this idea`, `run the idea lifecycle`, `what is the evidence bar`, `turn this hunch into a result` (.claude/skills/ai-agents-research-methodology/SKILL.md:31-34)
- Hunches, observations, and anomaly signals from `.agents/retrospective/`, user corrections, incident postmortems, or cross-model disagreements (.claude/skills/ai-agents-research-methodology/SKILL.md:207-221)
- Pre-existing codebase artifacts, Serena memories via `memory-search`, and architectural decision records (.claude/skills/ai-agents-research-methodology/SKILL.md:104-106)
- Capability definitions evaluated against `AGENTS.md` and `buy-vs-build-framework` (.claude/skills/ai-agents-research-methodology/SKILL.md:130-134)
- Eval scenario fixtures in `tests/evals/*.json` (.claude/skills/ai-agents-research-methodology/SKILL.md:75, 80-81)

## Outputs — required
- Contradiction logs: Serena decision memories named `decision-<short-slug>` (.claude/skills/ai-agents-research-methodology/SKILL.md:110-113)
- Empirical probe scripts and dated decision memories with negative controls (.claude/skills/ai-agents-research-methodology/SKILL.md:117-126, 198)
- Buy-vs-build Quick tier evaluation verdicts (.claude/skills/ai-agents-research-methodology/SKILL.md:133-134, 199)
- Written pre-run predictions and measured evaluation baseline reports (.claude/skills/ai-agents-research-methodology/SKILL.md:65-70, 86-88, 199)
- Architectural Decision Records `ADR-*.md` and 6-agent debate logs via `adr-review` (.claude/skills/ai-agents-research-methodology/SKILL.md:142-148, 200)
- Enforced gates, hooks, validators, or skills with calibration tables tested against the last 5 merged PRs (.claude/skills/ai-agents-research-methodology/SKILL.md:155-163, 201)
- Documented retirement or rejection records in retrospective decision tables (.claude/skills/ai-agents-research-methodology/SKILL.md:185-191, 203)

## Invokes — required
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-research-methodology/SKILL.md:11
- skill ai-agents-research-frontier — .claude/skills/ai-agents-research-methodology/SKILL.md:10
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-research-methodology/SKILL.md:27
- skill adr-review — .claude/skills/ai-agents-research-methodology/SKILL.md:55
- agent architect — .claude/skills/ai-agents-research-methodology/SKILL.md:55
- agent critic — .claude/skills/ai-agents-research-methodology/SKILL.md:55
- agent independent-thinker — .claude/skills/ai-agents-research-methodology/SKILL.md:55
- agent security — .claude/skills/ai-agents-research-methodology/SKILL.md:55
- agent analyst — .claude/skills/ai-agents-research-methodology/SKILL.md:55
- agent high-level-advisor — .claude/skills/ai-agents-research-methodology/SKILL.md:55
- skill decision-critic — .claude/skills/ai-agents-research-methodology/SKILL.md:56
- skill buy-vs-build-framework — .claude/skills/ai-agents-research-methodology/SKILL.md:58
- skill chestertons-fence — .claude/skills/ai-agents-research-methodology/SKILL.md:59
- doc ADR-057 — .claude/skills/ai-agents-research-methodology/SKILL.md:60
- skill prose-self-check — .claude/skills/ai-agents-research-methodology/SKILL.md:61
- skill doc-accuracy — .claude/skills/ai-agents-research-methodology/SKILL.md:61
- script eval-prompt-change.py — .claude/skills/ai-agents-research-methodology/SKILL.md:73
- script eval-agent-vs-baseline.py — .claude/skills/ai-agents-research-methodology/SKILL.md:91
- script eval-rule-activation.py — .claude/skills/ai-agents-research-methodology/SKILL.md:92
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-research-methodology/SKILL.md:95
- skill memory-search — .claude/skills/ai-agents-research-methodology/SKILL.md:105
- skill spec-generator — .claude/skills/ai-agents-research-methodology/SKILL.md:131
- skill adr-generator — .claude/skills/ai-agents-research-methodology/SKILL.md:143
- skill ai-agents-change-control — .claude/skills/ai-agents-research-methodology/SKILL.md:148
- skill SkillForge — .claude/skills/ai-agents-research-methodology/SKILL.md:156
- doc ADR-084 — .claude/skills/ai-agents-research-methodology/SKILL.md:173
- script pre_pr.py — .claude/skills/ai-agents-research-methodology/SKILL.md:201
- skill reflect — .claude/skills/ai-agents-research-methodology/SKILL.md:213
- skill retrospective — .claude/skills/ai-agents-research-methodology/SKILL.md:214
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-research-methodology/SKILL.md:225
- doc ADR-069 — .claude/skills/ai-agents-research-methodology/SKILL.md:228

## Invoked by — required
- skill ai-agents-research-frontier — .claude/skills/ai-agents-research-frontier/SKILL.md:14
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-docs-of-record/SKILL.md:5
- skill ai-agents-external-claims — .claude/skills/ai-agents-external-claims/SKILL.md:5
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:85
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:88

## Concepts named — required, verbatim
- `idea lifecycle` — .claude/skills/ai-agents-research-methodology/SKILL.md:6 — defined here | used here
- `eval baseline` — .claude/skills/ai-agents-research-methodology/SKILL.md:7 — defined here | used here
- `ADR debate` — .claude/skills/ai-agents-research-methodology/SKILL.md:7 — defined here | used here
- `post-ship monitoring` — .claude/skills/ai-agents-research-methodology/SKILL.md:8 — defined here | used here
- `verification-based governance` — .claude/skills/ai-agents-research-methodology/SKILL.md:17 — defined here | used here
- `Evidence Bar` — .claude/skills/ai-agents-research-methodology/SKILL.md:36 — defined here | used here
- `RCA` — .claude/skills/ai-agents-research-methodology/SKILL.md:44 — used here
- `adr-review` — .claude/skills/ai-agents-research-methodology/SKILL.md:55 — used here
- `decision-critic` — .claude/skills/ai-agents-research-methodology/SKILL.md:56 — used here
- `independent-thinker` — .claude/skills/ai-agents-research-methodology/SKILL.md:57 — used here
- `critic` — .claude/skills/ai-agents-research-methodology/SKILL.md:57 — used here
- `buy-vs-build-framework` — .claude/skills/ai-agents-research-methodology/SKILL.md:58 — used here
- `Quick tier` — .claude/skills/ai-agents-research-methodology/SKILL.md:58 — used here
- `chestertons-fence` — .claude/skills/ai-agents-research-methodology/SKILL.md:59 — used here
- `Eval harness` — .claude/skills/ai-agents-research-methodology/SKILL.md:60 — used here
- `prose-self-check` — .claude/skills/ai-agents-research-methodology/SKILL.md:61 — used here
- `doc-accuracy` — .claude/skills/ai-agents-research-methodology/SKILL.md:61 — used here
- `Predict Numbers Before Running` — .claude/skills/ai-agents-research-methodology/SKILL.md:63 — defined here | used here
- `--dry-run` — .claude/skills/ai-agents-research-methodology/SKILL.md:83 — used here
- `Contradiction Log` — .claude/skills/ai-agents-research-methodology/SKILL.md:102 — defined here | used here
- `Empirical Probe` — .claude/skills/ai-agents-research-methodology/SKILL.md:115 — defined here | used here
- `negative control` — .claude/skills/ai-agents-research-methodology/SKILL.md:122 — defined here | used here
- `Capability Gate` — .claude/skills/ai-agents-research-methodology/SKILL.md:127 — defined here | used here
- `spec-generator` — .claude/skills/ai-agents-research-methodology/SKILL.md:131 — used here
- `adr-generator` — .claude/skills/ai-agents-research-methodology/SKILL.md:143 — used here
- `ai-agents-change-control` — .claude/skills/ai-agents-research-methodology/SKILL.md:148 — used here
- `SkillForge` — .claude/skills/ai-agents-research-methodology/SKILL.md:156 — used here
- `calibration table` — .claude/skills/ai-agents-research-methodology/SKILL.md:157 — defined here | used here
- `EVENT=` — .claude/skills/ai-agents-research-methodology/SKILL.md:169 — used here
- `Budding` — .claude/skills/ai-agents-research-methodology/SKILL.md:171 — used here
- `Growing` — .claude/skills/ai-agents-research-methodology/SKILL.md:171 — used here
- `Mature` — .claude/skills/ai-agents-research-methodology/SKILL.md:171 — used here
- `Proficient` — .claude/skills/ai-agents-research-methodology/SKILL.md:171 — used here
- `Inert` — .claude/skills/ai-agents-research-methodology/SKILL.md:171 — used here
- `Harmful` — .claude/skills/ai-agents-research-methodology/SKILL.md:171 — used here
- `calibrated gate` — .claude/skills/ai-agents-research-methodology/SKILL.md:183 — defined here | used here
- `Retro mining` — .claude/skills/ai-agents-research-methodology/SKILL.md:207 — defined here | used here
- `User corrections` — .claude/skills/ai-agents-research-methodology/SKILL.md:212 — defined here | used here
- `Incident postmortems` — .claude/skills/ai-agents-research-methodology/SKILL.md:214 — defined here | used here
- `Five-Whys` — .claude/skills/ai-agents-research-methodology/SKILL.md:215 — used here
- `Cross-model disagreement` — .claude/skills/ai-agents-research-methodology/SKILL.md:217 — defined here | used here
- `User Sovereignty` — .claude/skills/ai-agents-research-methodology/SKILL.md:219 — defined here | used here
- `FM-9` — .claude/skills/ai-agents-research-methodology/SKILL.md:231 — used here

## Structure
# AI Agents Research Methodology
## Triggers
## The Evidence Bar
## Predict Numbers Before Running
## Process
### Phase 1: Hunch, Then Search, Then Contradiction Log
### Phase 2: Spike With an Empirical Probe
### Phase 3: Capability Gate and Eval Baseline
### Phase 4: ADR and Debate
### Phase 5: Ship as a Gate or Skill, With Calibration
### Phase 6: Monitor
### Phase 7: Adopt, or Retire With a Record
## Lifecycle at a Glance
## Where Good Ideas Historically Came From
## Writing Up Results
## Anti-Patterns
## Verification
## Provenance and Maintenance

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/ai-agents-research-methodology/SKILL.md:45 cites script `get_unresolved_review_threads.py` without its directory path; the actual path in the repository is `.claude/skills/github/scripts/pr/get_unresolved_review_threads.py`.
- `missing-path` · .claude/skills/ai-agents-research-methodology/SKILL.md:201 (and line 216) references `pre_pr.py` without its directory path; the actual path in the repository is `scripts/validation/pre_pr.py`.
- `doc-drift` · .claude/skills/ai-agents-research-methodology/SKILL.md:83,271 cites `scripts/eval/eval-prompt-change.py:567` for `--dry-run`, but line 567 defines `--runs`; `--dry-run` is defined at line 577.
- `doc-drift` · .claude/skills/ai-agents-research-methodology/SKILL.md:131-132 quotes `AGENTS.md (line 40)` as `"buy-vs-build Quick tier BEFORE spec-generator + baseline; greater than 13wk no baseline = prune. Skip: bug, doc, refactor, approved extension."` which drifts via paraphrase from the actual verbatim text at `AGENTS.md:40`: `"New capability: buy-vs-build Quick BEFORE /spec+baseline; >13wk no baseline = prune. Skip: bug/doc/refactor/approved-cap-extension"`.
- `doc-drift` · .claude/skills/ai-agents-research-methodology/SKILL.md:270 cites `.claude/skills/buy-vs-build-framework/SKILL.md:66` for Quick tier gate, but line 66 defines Standard tier; Quick tier is defined at line 65.
- `internal-contradiction` · .claude/skills/ai-agents-research-methodology/SKILL.md:169-173,278-281 explains that `push_guard_base.py`, every guard built on it, and the tier classifier skill were deleted under ADR-084 (issue #5154) with no live producer or consumer, yet the lifecycle summary table at line 202 still specifies `"Detector-specific telemetry and tier report"` and `"Tier not Inert/Harmful"` as the gate for Phase 6.

## Observations
- Prediction-before-measurement rule: strict requirement that numerical expectations (pass rates, activation scores, delta percentages) must be recorded in session logs or spike notes prior to running eval tools, preventing post-hoc justification ("a prediction made after seeing the data is a description, not a test").
- Zero-spend verification: establishes `--dry-run` as the mandatory first step for prompt and rule evaluations to validate inputs without consuming API spend.
- Threshold detector calibration rule: born out of PR #1989 (where an uncalibrated rework detector with threshold 6 was shipped to a repository whose max edits was 4), requiring a calibration table showing firing behavior across the last 5 merged PRs before any threshold-based gate can be committed.
- Explicit recording of negative results: mandates that rejected designs (such as issue #2230's rejected launcher-level fail-open wrapper) must be recorded in decision tables and retrospectives to prevent repeated duplicate proposals by future autonomous agents.

## Context cost
16614 bytes (~4154 tokens) for SKILL.md. Invoking files load related skills (`ai-agents-empirical-probe-toolkit`, `ai-agents-docs-of-record`, `buy-vs-build-framework`) and retrospective templates on demand, adding approximately 45KB (~11250 tokens). Total context cost: ~62KB (~15500 tokens).
