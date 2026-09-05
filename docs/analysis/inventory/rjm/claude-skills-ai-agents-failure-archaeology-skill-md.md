---
package: rjm
path: .claude/skills/ai-agents-failure-archaeology/SKILL.md
type: skill
bytes: 16580
unit: inv-rjm-84
in_scope_via: .claude/skills/ai-agents-change-control/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-failure-archaeology/SKILL.md

## Purpose — required, verbatim
> "The chronicle of this repo's settled battles. Maps each major incident to symptom, root cause, evidence path, and the artifact that fixed it, so nobody re-fights a decided question." — .claude/skills/ai-agents-failure-archaeology/SKILL.md:3

## Design intent — required
Serves as the canonical repository chronicle of settled architectural battles and past failure archaeology. Maps each major incident to its symptoms, root causes, evidence paths, and the fossilized rules, tests, or gates that resolved it. Prevents developers and autonomous agents from re-litigating decided questions, weakening established guards, or re-introducing frictionless bypasses without confronting the historical evidence and operational costs that led to their creation.

## Phase — required
cross-phase

## Inputs — required
- Trigger prompts:
  `has this failed before` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:25
  `why does this rule exist` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:26
  `failure archaeology` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:27
  `what happened with issue 2205` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:28
  `are we re-litigating a settled decision` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:29
- Retrospectives in `.agents/retrospective/`
- Memories in `.serena/memories/`
- Reference document `references/incidents.md`
- Failure modes catalog in `.agents/governance/FAILURE-MODES.md`
- Architecture ADRs in `.agents/architecture/`

## Outputs — required
- Verdicts on settled positions (`REJECTED`, `BANNED`, `SETTLED EMPIRICALLY`, `SETTLED`).
- Classifications of incidents against the 11 canonical failure modes (`FM-1` through `FM-11`).
- Routing to `.claude/rules/retros.md`, `ai-agents-change-control`, and `.agents/architecture/` for proposing new evidence or recording new settled outcomes.

## Invokes — required
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-failure-archaeology/SKILL.md:3
- skill retrospective — .claude/skills/ai-agents-failure-archaeology/SKILL.md:3
- reference references/incidents.md — .claude/skills/ai-agents-failure-archaeology/SKILL.md:20
- script scripts/validation/validate_hook_anchoring.py — .claude/skills/ai-agents-failure-archaeology/SKILL.md:41
- script tests/build_scripts/test_generate_hooks_runtime_contract.py — .claude/skills/ai-agents-failure-archaeology/SKILL.md:41
- script build/scripts/validate_plugin_version_bump.py — .claude/skills/ai-agents-failure-archaeology/SKILL.md:54
- skill ai-agents-change-control — .claude/skills/ai-agents-failure-archaeology/SKILL.md:59
- doc .claude/rules/canonical-source-mirror.md — .claude/skills/ai-agents-failure-archaeology/SKILL.md:64
- doc .serena/memories/decision-copilot-cli-hook-plugin-root-contract.md — .claude/skills/ai-agents-failure-archaeology/SKILL.md:65
- agent merge-resolver — .claude/skills/ai-agents-failure-archaeology/SKILL.md:66
- skill ai-agents-config-catalog — .claude/skills/ai-agents-failure-archaeology/SKILL.md:70
- skill memory-search — .claude/skills/ai-agents-failure-archaeology/SKILL.md:108
- doc .claude/rules/retros.md — .claude/skills/ai-agents-failure-archaeology/SKILL.md:125
- skill chestertons-fence — .claude/skills/ai-agents-failure-archaeology/SKILL.md:127
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-failure-archaeology/SKILL.md:135
- skill agent-harness-reference — .claude/skills/ai-agents-failure-archaeology/SKILL.md:136
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-failure-archaeology/SKILL.md:137
- config lefthook.yml — .claude/skills/ai-agents-failure-archaeology/SKILL.md:169
- skill ai-agents-portability-campaign — .claude/skills/ai-agents-failure-archaeology/SKILL.md:173

## Invoked by — required
- skill .claude/skills/ai-agents-change-control/SKILL.md — .claude/skills/ai-agents-change-control/SKILL.md:3
- reference .claude/skills/ai-agents-change-control/references/incident-history.md — .claude/skills/ai-agents-change-control/references/incident-history.md:3
- skill .claude/skills/ai-agents-debugging-playbook/SKILL.md — .claude/skills/ai-agents-debugging-playbook/SKILL.md:5
- skill .claude/skills/ai-agents-architecture-contract/SKILL.md — .claude/skills/ai-agents-architecture-contract/SKILL.md:44
- skill .claude/skills/ai-agents-docs-of-record/SKILL.md — .claude/skills/ai-agents-docs-of-record/SKILL.md:42
- skill .claude/skills/ai-agents-research-frontier/SKILL.md — .claude/skills/ai-agents-research-frontier/SKILL.md:313
- skill .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:123
- skill .claude/skills/ai-agents-build-and-env/SKILL.md — .claude/skills/ai-agents-build-and-env/SKILL.md:140
- skill .claude/skills/ai-agents-research-methodology/SKILL.md — .claude/skills/ai-agents-research-methodology/SKILL.md:27

## Concepts named — required, verbatim
- `settled battles` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:3 — defined here
- `fossils of incidents` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:11 — defined here
- `Major Incidents Table` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:33 — defined here
- `Settled Battles List` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:56 — defined here
- `Launcher-level fail-open wrapper` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:63 — defined here
- `Self-referential tests` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:64 — defined here
- `Copilot CLI plugin-root env contract` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:65 — defined here
- `Session-file merge conflicts` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:66 — defined here
- `Threshold-based detectors` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:67 — defined here
- `Drift-gate failures` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:68 — defined here
- `Silent defaults` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:69 — defined here
- `Frictionless escape hatches` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:70 — defined here
- `Guards shipped without self-application` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:71 — defined here
- `CLI subcommands proposed from analogy` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:72 — defined here
- `Failure-Mode Catalog` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:74 — defined here
- `FM-CONTRACT` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:78 — defined here
- `FM-1` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:83 — used here
- `FM-2` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:84 — used here
- `FM-3` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:85 — used here
- `FM-4` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:86 — used here
- `FM-5` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:87 — used here
- `FM-6` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:88 — used here
- `FM-7` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:89 — used here
- `FM-8` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:90 — used here
- `FM-9` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:91 — used here
- `FM-10` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:92 — used here
- `FM-11` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:93 — used here
- `Auto-retros` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:121 — defined here

## Structure
- `# ai-agents Failure Archaeology` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:8
- `## Triggers` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:23
- `## Process` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:31
- `### Phase 1: Check the Major Incidents Table` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:33
- `### Phase 2: Check the Settled Battles List` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:56
- `### Phase 3: Map to the Failure-Mode Catalog` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:74
- `### Phase 4: Do Your Own Archaeology` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:99
- `## Anti-Patterns` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:130
- `## Verification` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:143
- `## Provenance and Maintenance` — .claude/skills/ai-agents-failure-archaeology/SKILL.md:158

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/ai-agents-failure-archaeology/SKILL.md:105 · `.agents/retrospective/INDEX.md` indexes only 11 out of 210 retrospective files in `.agents/retrospective/`, as documented on line 105 and verified by the provenance script on line 165 (`210 retro files, 11 indexed`).
- doc-drift · .claude/skills/ai-agents-failure-archaeology/SKILL.md:113 · historical retros cite `ADR-063` for plugin hook runtime contract verification, but the actual file on disk is `ADR-071-plugin-hook-runtime-contract-verification.md` while `ADR-063-memory-skill-decomposition.md` was assigned to memory decomposition.

## Observations
- Canonical repository principle: "This repo's rules are fossils of incidents." (.claude/skills/ai-agents-failure-archaeology/SKILL.md:11).
- Explains why `git log` is insufficient for archaeological investigation in squashed repositories where branch SHAs do not resolve locally, routing investigation through retrospective documents and decision memories instead.
- Outlines the 11-pattern taxonomy of agent failure modes (`FM-1` through `FM-11`).

## Context cost
16580 bytes for SKILL.md (~4145 tokens). Combined with references/incidents.md (14476 bytes), total context cost is 31056 bytes (~7764 tokens).
