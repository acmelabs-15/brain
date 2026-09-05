---
package: matt
path: external/code-review.md
type: doc
bytes: 359558
unit: inv-matt-11
deprecated: false
aliases: []
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/code-review.md

## Purpose — required, verbatim
> "Review a diff against your standards and against the spec." — external/code-review.md:24

## Design intent — required
Provides an objective, dual-axis evaluation of code changes between HEAD and a specified fixed reference point (commit, branch, tag, `main`, or `HEAD~5`). To prevent passing aspects from obscuring fatal flaws, it runs Standards review ("is it built right?") and Spec review ("is it the right thing?") in isolated sub-agents that cannot see each other's reasoning, producing separate findings with worst-issue rankings per axis and deliberately refusing to blend them into a single verdict.

## Phase — required
matt:The Main Flow

## Inputs — required
Diff between `<fixed-point>` and `HEAD` (specified branch, commit, or tag); repository standards files (`CODING_STANDARDS.md`, `CONTRIBUTING.md`); originating spec or issue reference (`#123`, argument path, spec file in `docs/`/`specs/`/`.scratch/`, or user prompt).

## Outputs — required
Two-axis review report under `## Standards` and `## Spec` headings, citing standards files or named code smells on Standards, spec lines on Spec, and identifying the worst issue per axis with actionable remediation advice.

## Invokes — required
- skill setup-matt-pocock-skills — external/code-review.md:40
- skill tdd — external/code-review.md:29
- skill implement — external/code-review.md:29
- skill improve-codebase-architecture — external/code-review.md:29
- skill diagnosing-bugs — external/code-review.md:29
- skill ask-matt — external/code-review.md:75
- skill to-spec — external/code-review.md:72
- skill to-tickets — external/code-review.md:72

## Invoked by — required
- skill implement — external/code-review.md:29

## Concepts named — required, verbatim
- `Standards` — external/code-review.md:25 — defined here
- `Spec` — external/code-review.md:25 — defined here
- `sub-agent` — external/code-review.md:25 — used here
- `the repo always overrides` — external/code-review.md:43 — defined here
- `smell baseline` — external/code-review.md:44 — defined here
- `Mysterious Name` — external/code-review.md:44 — used here
- `Duplicated Code` — external/code-review.md:44 — used here
- `Feature Envy` — external/code-review.md:44 — used here
- `Data Clumps` — external/code-review.md:44 — used here
- `Primitive Obsession` — external/code-review.md:44 — used here
- `Repeated Switches` — external/code-review.md:44 — used here
- `Shotgun Surgery` — external/code-review.md:44 — used here
- `Divergent Change` — external/code-review.md:44 — used here
- `Speculative Generality` — external/code-review.md:44 — used here
- `Message Chains` — external/code-review.md:44 — used here
- `Middle Man` — external/code-review.md:44 — used here
- `Refused Bequest` — external/code-review.md:44 — used here
- `primary source` — external/code-review.md:43 — used here

## Structure
- # The /code-review Skill — external/code-review.md:24
- ## What it does — external/code-review.md:24
- ## When to reach for it — external/code-review.md:27
- ## Prerequisites — external/code-review.md:31
- ## The two axes — external/code-review.md:41
- ## Common questions — external/code-review.md:45
- ## It's working if — external/code-review.md:60
- ## Where it fits — external/code-review.md:68
- ## Related reading — external/code-review.md:76
- ## Skill actions — external/code-review.md:76

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/code-review.md:47: Collides with Claude Code built-in `/code-review` command where installed skill either shadows or is shadowed by native tool depending on install path.
- `script-bug` · external/code-review.md:49: Sub-agents lack delegation guards and can recursively re-invoke `/code-review`, fanning out over 50+ agent instances.
- `doc-drift` · external/code-review.md:59: Reviews three-dot diff (`<fixed-point>...HEAD`) excluding staged and working-tree modifications, leaving uncommitted work invisible.

## Observations
Emphasizes that review is honest only when run in an independent session separate from the session that authored the code ("Same context reviewing itself isn't review, it's confirmation bias with a slash command"). Highlights the 12 Fowler smells as a fallback baseline when repo standards documentation is absent.

## Context cost
359558 bytes, ~73000 tokens (HTML snapshot including full inline hydration payload).
