---
package: rjm
path: .claude/skills/ai-agents-research-frontier/SKILL.md
type: skill
bytes: 20769
unit: inv-rjm-86
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-research-frontier/SKILL.md

## Purpose — required, verbatim
> "Open problems where this repository can advance the state of the art, ranked in owner-confirmed priority order. This skill tells you WHAT is worth working on and what \"done\" would look like. It does not teach experiment discipline (that is `ai-agents-research-methodology`) and it is not the portability battle plan (that is `ai-agents-portability-campaign`)." — .claude/skills/ai-agents-research-frontier/SKILL.md:11-15

## Design intent — required
Establishes the owner-confirmed, prioritized agenda of open research programs for advancing the repository's autonomous agent architecture across verified governance (ADR-069), cross-harness abstraction (ADR-072/ADR-068), and the self-improving loop (issue #1345). It prevents repository contributors and autonomous agents from pursuing speculative, unanchored prompt engineering or uncoordinated multi-harness alterations by grounding each problem in date-stamped current-state evidence, an explicit honesty contract, three ordered concrete initial steps, and a falsifiable milestone. Without it, research efforts decay into folklore, work on unmeasured rules without baselines, or duplicate previously retired mechanisms like deleted telemetry emitters and uncalibrated guards.

## Phase — required
cross-phase

## Inputs — required
- User trigger phrases: `research frontier`, `open problems`, `what should we research next`, `frontier programs` (.claude/skills/ai-agents-research-frontier/SKILL.md:24-27)
- Working tree state and anchor artifacts: ADR-069, ADR-072, ADR-068, `scripts/eval/eval-rule-activation.py`, `tests/evals/rule-scenarios/*`, `tests/build_scripts/test_generate_hooks_runtime_contract.py` (.claude/skills/ai-agents-research-frontier/SKILL.md:31-35, 46-53)
- Corpus metrics from `.claude/skills/`, `.claude/rules/`, `.agents/retrospective/`, and `.serena/memories/` (.claude/skills/ai-agents-research-frontier/SKILL.md:51)
- Past incident retrospectives and failure baselines in `.agents/governance/FAILURE-MODES.md` (.claude/skills/ai-agents-research-frontier/SKILL.md:112-115)

## Outputs — required
- Ranked program selection and research agenda execution for verified governance, cross-harness abstraction, or self-improving loop (.claude/skills/ai-agents-research-frontier/SKILL.md:31-35, 57-61)
- Rule-activation baseline scenario files under `tests/evals/rule-scenarios/*.json` (.claude/skills/ai-agents-research-frontier/SKILL.md:121)
- Governance methodology documentation and ADR proposals via `adr-generator` (.claude/skills/ai-agents-research-frontier/SKILL.md:127-129)
- Cross-harness versioned contract specification and parameterized conformance test suites (.claude/skills/ai-agents-research-frontier/SKILL.md:177-183)
- Falsifiable experimental milestone reports, calibration fixtures, and PR proposals via `ai-agents-change-control` (.claude/skills/ai-agents-research-frontier/SKILL.md:133-138, 191-195, 255-259)

## Invokes — required
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-frontier/SKILL.md:14
- skill ai-agents-portability-campaign — .claude/skills/ai-agents-research-frontier/SKILL.md:15
- doc ADR-069 — .claude/skills/ai-agents-research-frontier/SKILL.md:33
- script eval-rule-activation.py — .claude/skills/ai-agents-research-frontier/SKILL.md:33
- doc ADR-072 — .claude/skills/ai-agents-research-frontier/SKILL.md:34
- doc ADR-068 — .claude/skills/ai-agents-research-frontier/SKILL.md:34
- script generate_agents.py — .claude/skills/ai-agents-research-frontier/SKILL.md:34
- skill buy-vs-build-framework — .claude/skills/ai-agents-research-frontier/SKILL.md:60
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-research-frontier/SKILL.md:69
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-research-frontier/SKILL.md:75
- skill ai-agents-change-control — .claude/skills/ai-agents-research-frontier/SKILL.md:75
- skill adr-review — .claude/skills/ai-agents-research-frontier/SKILL.md:76
- skill adr-generator — .claude/skills/ai-agents-research-frontier/SKILL.md:128
- script variance-control.py — .claude/skills/ai-agents-research-frontier/SKILL.md:136
- skill agent-harness-reference — .claude/skills/ai-agents-research-frontier/SKILL.md:146
- script build_all.py — .claude/skills/ai-agents-research-frontier/SKILL.md:155
- doc ADR-036 — .claude/skills/ai-agents-research-frontier/SKILL.md:159
- script validate_hook_anchoring.py — .claude/skills/ai-agents-research-frontier/SKILL.md:163
- skill reflect — .claude/skills/ai-agents-research-frontier/SKILL.md:208
- agent skillbook — .claude/skills/ai-agents-research-frontier/SKILL.md:209
- skill memory — .claude/skills/ai-agents-research-frontier/SKILL.md:212
- skill memory-search — .claude/skills/ai-agents-research-frontier/SKILL.md:212
- skill memory-reflexion — .claude/skills/ai-agents-research-frontier/SKILL.md:226
- doc ADR-063 — .claude/skills/ai-agents-research-frontier/SKILL.md:226
- doc ADR-089 — .claude/skills/ai-agents-research-frontier/SKILL.md:227
- doc ADR-084 — .claude/skills/ai-agents-research-frontier/SKILL.md:247
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-research-frontier/SKILL.md:313

## Invoked by — required
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-methodology/SKILL.md:10

## Concepts named — required, verbatim
- `Verified governance` — .claude/skills/ai-agents-research-frontier/SKILL.md:3 — defined here | used here
- `cross-harness abstraction` — .claude/skills/ai-agents-research-frontier/SKILL.md:3 — defined here | used here
- `self-improving loop` — .claude/skills/ai-agents-research-frontier/SKILL.md:3 — defined here | used here
- `Honesty contract` — .claude/skills/ai-agents-research-frontier/SKILL.md:17 — defined here | used here
- `Falsifiable milestone` — .claude/skills/ai-agents-research-frontier/SKILL.md:31 — defined here | used here
- `ADR-069` — .claude/skills/ai-agents-research-frontier/SKILL.md:33 — used here
- `ADR-072` — .claude/skills/ai-agents-research-frontier/SKILL.md:34 — used here
- `ADR-068` — .claude/skills/ai-agents-research-frontier/SKILL.md:34 — used here
- `Self-improving loop` — .claude/skills/ai-agents-research-frontier/SKILL.md:35 — defined here | used here
- `buy-vs-build-framework` — .claude/skills/ai-agents-research-frontier/SKILL.md:60 — used here
- `Quick tier` — .claude/skills/ai-agents-research-frontier/SKILL.md:60 — used here
- `negative control` — .claude/skills/ai-agents-research-frontier/SKILL.md:70 — used here
- `adr-review` — .claude/skills/ai-agents-research-frontier/SKILL.md:76 — used here
- `debate gate` — .claude/skills/ai-agents-research-frontier/SKILL.md:76 — used here
- `Curated Context Corpus` — .claude/skills/ai-agents-research-frontier/SKILL.md:81 — defined here | used here
- `verification-based governance` — .claude/skills/ai-agents-research-frontier/SKILL.md:105 — defined here | used here
- `FM-1` — .claude/skills/ai-agents-research-frontier/SKILL.md:112 — used here
- `Context Reading Failure` — .claude/skills/ai-agents-research-frontier/SKILL.md:112 — used here
- `adr-generator` — .claude/skills/ai-agents-research-frontier/SKILL.md:128 — used here
- `kill budgets` — .claude/skills/ai-agents-research-frontier/SKILL.md:145 — used here
- `contract tests` — .claude/skills/ai-agents-research-frontier/SKILL.md:160 — used here
- `Detect-Log-Graduate` — .claude/skills/ai-agents-research-frontier/SKILL.md:208 — defined here | used here
- `Budding` — .claude/skills/ai-agents-research-frontier/SKILL.md:221 — used here
- `Growing` — .claude/skills/ai-agents-research-frontier/SKILL.md:222 — used here
- `Mature` — .claude/skills/ai-agents-research-frontier/SKILL.md:222 — used here
- `Proficient` — .claude/skills/ai-agents-research-frontier/SKILL.md:222 — used here
- `Inert` — .claude/skills/ai-agents-research-frontier/SKILL.md:222 — used here
- `Harmful` — .claude/skills/ai-agents-research-frontier/SKILL.md:222 — used here
- `calibration gate` — .claude/skills/ai-agents-research-frontier/SKILL.md:239 — defined here | used here
- `auto-proposal` — .claude/skills/ai-agents-research-frontier/SKILL.md:255 — defined here | used here
- `decision memory` — .claude/skills/ai-agents-research-frontier/SKILL.md:277 — used here

## Structure
# AI Agents Research Frontier
## Triggers
## The Three Programs at a Glance
## Process
### Phase 1: Verify current state before claiming anything
### Phase 2: Pick a program
### Phase 3: Execute the first steps
### Phase 4: Report and gate
## Program 1: Verified Governance (ADR-069, PROPOSED)
### Why current state of the art fails
### This repo's asset
### First three steps
### Falsifiable milestone
## Program 2: Cross-Harness Abstraction (ADR-072 seam, ADR-068)
### Why current state of the art fails
### This repo's asset
### First three steps
### Falsifiable milestone
## Program 3: Self-Improving Loop (issue #1345)
### Why current state of the art fails
### This repo's asset
### First three steps
### Falsifiable milestone
## Anti-Patterns
## Verification
## Provenance and Maintenance

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/ai-agents-research-frontier/SKILL.md:53 references `tests/build_scripts/test_copilot_dispatcher_artifact.py` in test command `uv run pytest -q "tests/build_scripts/test_copilot_dispatcher_artifact.py::TestDispatcherArtifacts::test_retired_hooks_are_absent_and_keepers_are_plugin_only"`, but this test file is missing from `tests/build_scripts/`.
- `doc-drift` · .claude/skills/ai-agents-research-frontier/SKILL.md:114 (and line 307) cites `.agents/governance/FAILURE-MODES.md:44` for FM-1 95.8% evidence, but line 44 is blank; the 95.8% non-compliance statement is on line 45.
- `internal-contradiction` · .claude/skills/ai-agents-research-frontier/SKILL.md:35,216-225,309 documents that `EVENT=` telemetry emitter `push_guard_base.py` and the maturity tier classifier were deleted under ADR-084 (issue #5154) and "neither the emitter nor the classifier exists in this repo today", yet Table row 3 on line 35 still lists `EVENT=` telemetry under Anchor artifacts and step 3 on line 255 assumes an "Apply hook surfaces the same correction memory" even though apply hooks were also unregistered and deleted (issue #3184).

## Observations
- Strict honesty contract: explicit operational mandate that every claim must be re-verified against the working tree and date-stamped; unconfirmed claims must remain marked `PROPOSED` or `UNVERIFIED` rather than treated as accepted policy.
- Falsifiability discipline: each of the three programs explicitly articulates not only what a successful milestone looks like, but what negative result would falsify the program's underlying thesis (e.g. ADR-069 falsified if gated corpus sessions show no measurable difference; cross-harness abstraction falsified if manual patching is required for a third harness target).
- Explicit acknowledgement of dead code and retired systems: accurately captures that the `EVENT=` telemetry emitter (`push_guard_base.py`) and guard maturity tier classifier were deleted under ADR-084 (#5154), cautioning future agents against assuming an automated consumer loop exists.

## Context cost
20769 bytes (~5192 tokens) for SKILL.md. Invoking files load referenced ADRs (ADR-069: ~12KB, ADR-072: ~15KB, ADR-068: ~10KB) and eval harness documentation on demand, adding approximately 37KB (~9250 tokens). Total context cost: ~58KB (~14500 tokens).
