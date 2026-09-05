---
package: rjm
path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md
type: agent
bytes: 21044
unit: inv-rjm-62
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md

## Purpose — required, verbatim
> "Inserting a six-question First Principles gate as Step 0 blocks specification work unless the author demonstrates real demand before any downstream steps run." — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:26

## Design intent — required
The rjm specification workflow (`/spec`) historically began at problem clarification (Step 1), allowing engineers and agents to invest substantial clarification, design, and implementation effort in features driven by aspirational demand, unverified predictions, or undefined users. REQ-016 introduces a mandatory blocking "Step 0 First Principles Gate" consisting of six forcing questions (Demand Reality, Status Quo, Desperate Specificity, Narrowest Wedge, Observation, and Future-fit) before any downstream specification work begins. Crucially, the requirement defines objective, model-evaluable operational tests to detect speculative observations, aspirational demand, unnamed blocked entities, incomplete inputs, and a canonical 20-entry hedge phrase list. It also specifies downstream invariants: preventing re-elicitation in Step 2, replacing the Tier 5 simplicity check, adding binary pre-mortem drift checks in Step 9, enforcing byte-identical sync with Copilot CLI, blocking auto-mode bypass, and defining explicit kill criteria to sunset the gate if friction exceeds value. Without this gate, spec pipelines would continue suffering expensive late-stage rework, scope explosion, and architectural waste (empirically evidenced by 9 retrospectives, including PR #1887's 69 commits and 11+ review cycles).

## Phase — required
rjm:spec

## Inputs — required
- Retrospective root-cause evidence from 9 retrospective records: `2026-05-05-pr-1887-iteration-paradox.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:36, `2025-12-15-drift-detection-disaster.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:38, `2026-01-03-adr-workflow-bypass.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:39, `2026-01-03-adr-generation-quality.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:40, `2025-12-19-self-contained-agents.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:41, `2025-12-24-memory-split-failure.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:42, `2025-12-15-instruction-files-gap.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:43, and `2025-12-26-prd-planning-workflow.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:44
- Existing command and skill implementations: `.claude/commands/spec.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:26 and `src/copilot-cli/skills/spec/SKILL.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:26
- Python parser implementation and test suite: `tests/commands/step0_parser.py` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:64
- Metric tally log: `.agents/sessions/STEP-0-METRICS.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:176
- Standards: RFC 2119 requirement language standards — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:62

## Outputs — required
- Updated command specification adding Step 0 at `.claude/commands/spec.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:144
- Byte-identical synchronized skill update at `src/copilot-cli/skills/spec/SKILL.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:145
- First section of PRD artifact formatted as `## Step 0 First Principles` with six labelled subfields — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:243
- Canonical halt trigger schema with error IDs H1 through H5 — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:214
- Auto-mode halt signal `STEP_0_REQUIRES_ELICITATION` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:159
- Metrics tally log at `.agents/sessions/STEP-0-METRICS.md` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:176

## Invokes — required
- command spec.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:26
- skill SKILL.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:26
- file step0_parser.py — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:64
- file STEP-0-METRICS.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:176
- doc 2026-05-05-pr-1887-iteration-paradox.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:36
- doc 2025-12-15-drift-detection-disaster.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:38
- doc 2026-01-03-adr-workflow-bypass.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:39
- doc 2026-01-03-adr-generation-quality.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:40
- doc 2025-12-19-self-contained-agents.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:41
- doc 2025-12-24-memory-split-failure.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:42
- doc 2025-12-15-instruction-files-gap.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:43
- doc 2025-12-26-prd-planning-workflow.md — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:44
- doc DESIGN-006 — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:10
- doc TASK-006 — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:11

## Invoked by — required
- doc hedge-phrases.md — docs/spec-quality/hedge-phrases.md:146
- doc ADR-070-memory-first-gate-spec-pipeline.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:299

## Concepts named — required, verbatim
- `Step 0 First Principles Gate` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:22 — defined here
- `First Principles` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:26 — used here
- `Demand Reality` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:55 — defined here
- `Status Quo` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:55 — defined here
- `Desperate Specificity` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:55 — defined here
- `Narrowest Wedge` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:55 — defined here
- `Observation` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:55 — defined here
- `Future-fit` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:55 — defined here
- `Hedge Phrase List` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:60 — defined here
- `RFC 2119` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:62 — used here
- `speculative` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:68 — defined here
- `aspirational` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:81 — defined here
- `PRD` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:106 — used here
- `requirements-interview` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:109 — used here
- `Tier 5` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:118 — used here
- `critic pre-mortem` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:124 — used here
- `Demand Reality drift` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:128 — defined here
- `Desperate Specificity drift` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:132 — defined here
- `Narrowest Wedge drift` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:136 — defined here
- `auto-mode` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:156 — used here
- `STEP_0_REQUIRES_ELICITATION` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:159 — defined here
- `Kill criteria` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:164 — defined here
- `Halt Triggers` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:212 — defined here
- `Halt Message Schema` — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:220 — defined here

## Structure
- REQ-016: Add Step 0 First Principles Gate to spec pipeline
- Problem
- Evidence (retrospective audit, 2026-05-09)
- Requirement Statements
- REQ-016-01: Step 0 precedes Step 1
- REQ-016-02: Hedge phrase triggers halt
- REQ-016-03: Speculative Observation triggers halt (operational test)
- REQ-016-04: Aspirational Demand Reality triggers halt (operational test)
- REQ-016-05: Unnamed blocked entity triggers halt (operational test)
- REQ-016-06: Pass produces structured Step 0 block
- REQ-016-07: requirements-interview does not re-elicit Step 0 questions
- REQ-016-08: Tier 5 re-validates Step 0 instead of separate simplicity challenge
- REQ-016-09: Critic pre-mortem runs three binary Step 0 validity checks
- REQ-016-10: Copilot CLI file mirrors spec.md changes
- REQ-016-11: Partial completion triggers halt
- REQ-016-12: Auto-mode honors Step 0 without bypass
- REQ-016-13: Kill criteria for the gate itself
- Context
- Hedge Phrase List (canonical, REQ-016-02)
- Halt Triggers (canonical)
- Halt Message Schema
- Auto-mode Behavior
- Acceptance Criteria
- Rationale
- Why not narrow to a single question
- Why operational tests over judgment
- Dependencies

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:10 · Frontmatter related field lists `DESIGN-006` and `TASK-006` instead of `DESIGN-016` (`DESIGN-016-spec-step0-first-principles-gate.md`) and `TASK-016` (`TASK-016-spec-step0-first-principles-gate.md`); DESIGN-006 and TASK-006 relate to em-en dash enforcement.
- missing-path · .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:275 · Cites optional `ADR-060 to record the architectural decision` but ADR-060 in repository is `ADR-060-rework-warning-session-log-persistence.md`; the actual ADR documenting the spec pipeline gate is `ADR-070-memory-first-gate-spec-pipeline.md`.

## Observations
- Groundbreaking gate design that replaces subjective qualitative judgment ("is this speculative?") with deterministic, checkable operational tests (presence of quotes, commit hashes, specific named entities vs. generic categories).
- Introduces an explicit hedge phrase detector and halts with structured machine-readable errors (H1-H5) to prevent wasted engineering and agent investment downstream.
- Implements self-monitoring governance via explicit kill criteria (30 invocations, false-positive and bypass rate thresholds) tracked in `STEP-0-METRICS.md` so that burdensome or unneeded process gates can be pruned or recalibrated.

## Context cost
21044 bytes, ~4900 tokens. Standalone requirements document; references `.claude/commands/spec.md`, `src/copilot-cli/skills/spec/SKILL.md`, and 9 retrospectives.
