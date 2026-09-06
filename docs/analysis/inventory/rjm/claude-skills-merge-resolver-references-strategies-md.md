---
package: rjm
path: .claude/skills/merge-resolver/references/strategies.md
type: reference
bytes: 9557
unit: inv-rjm-125
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/merge-resolver/references/strategies.md, sha256: 27835b54b377f6fa64b4d76ef60eb12370d0c95c40c9a7c39924ed7dc7a4b008}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/merge-resolver/references/strategies.md

## Purpose — required, verbatim
> "Detailed patterns for common conflict scenarios." — .claude/skills/merge-resolver/references/strategies.md:3

## Design intent — required
Provides domain-specific conflict resolution strategies and operational recipes for recurring merge collision patterns encountered in git workflows. It defines actionable procedures for additive changes, moved/renamed code, deleted code, conflicting logic with an intent priority hierarchy (Security > Bugfix > Feature/Refactor > Style), style conflicts, lock files, configurations, database migrations, numbered ADR/RFC sequence collisions, template-generated agent files, and append-only evidence artifacts. Without this reference, agents attempting conflict resolution would lack concrete recovery playbooks, risking improper content merges on append-only logs (violating audit immutability) or manual editing of derived template outputs.

## Phase — required
cross-phase

## Inputs — required
- Conflict markers: `<<<<<<< HEAD` — .claude/skills/merge-resolver/references/strategies.md:12, `=======` — .claude/skills/merge-resolver/references/strategies.md:14, `>>>>>>> main` — .claude/skills/merge-resolver/references/strategies.md:16
- Git history and diffs: `git log` — .claude/skills/merge-resolver/references/strategies.md:28, `grep` — .claude/skills/merge-resolver/references/strategies.md:39, `git grep` — .claude/skills/merge-resolver/references/strategies.md:54, `git show` — .claude/skills/merge-resolver/references/strategies.md:79
- Codebase style configuration: `.prettierrc` — .claude/skills/merge-resolver/references/strategies.md:89
- Configuration files: `jq` — .claude/skills/merge-resolver/references/strategies.md:110, `yaml` — .claude/skills/merge-resolver/references/strategies.md:113
- Numbered architecture documents: `.agents/architecture/` — .claude/skills/merge-resolver/references/strategies.md:137, 138
- Template files: `templates/agents/*.shared.md` — .claude/skills/merge-resolver/references/strategies.md:185, `templates/agents/*.{claude,copilot,vscode}.md` — .claude/skills/merge-resolver/references/strategies.md:214
- Append-only evidence artifacts: `.agents/sessions/*` — .claude/skills/merge-resolver/references/strategies.md:275, `.agents/qa/*` — .claude/skills/merge-resolver/references/strategies.md:275, `.agents/retrospective/*` — .claude/skills/merge-resolver/references/strategies.md:275

## Outputs — required
none

## Invokes — required
- script build/generate_agents.py — .claude/skills/merge-resolver/references/strategies.md:201
- script scripts/validate_session_json.py — .claude/skills/merge-resolver/references/strategies.md:279
- template templates/agents/architect.shared.md — .claude/skills/merge-resolver/references/strategies.md:212
- template templates/agents/orchestrator.shared.md — .claude/skills/merge-resolver/references/strategies.md:213

## Invoked by — required
- skill merge-resolver — .claude/skills/merge-resolver/SKILL.md:122
- script verify_no_conflict_markers.py — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:24

## Concepts named — required, verbatim
- `Resolution Strategies` — .claude/skills/merge-resolver/references/strategies.md:1 — defined here
- `Additive Changes` — .claude/skills/merge-resolver/references/strategies.md:5 — defined here
- `Moved or Renamed Code` — .claude/skills/merge-resolver/references/strategies.md:21 — defined here
- `Deleted Code` — .claude/skills/merge-resolver/references/strategies.md:42 — defined here
- `Conflicting Logic` — .claude/skills/merge-resolver/references/strategies.md:63 — defined here
- `Resolution Priority` — .claude/skills/merge-resolver/references/strategies.md:71 — defined here
- `Security` — .claude/skills/merge-resolver/references/strategies.md:73 — used here
- `Bugfix` — .claude/skills/merge-resolver/references/strategies.md:73 — used here
- `Feature/Refactor` — .claude/skills/merge-resolver/references/strategies.md:73 — used here
- `Style` — .claude/skills/merge-resolver/references/strategies.md:73 — used here
- `Style/Formatting Conflicts` — .claude/skills/merge-resolver/references/strategies.md:82 — defined here
- `Lock File Conflicts` — .claude/skills/merge-resolver/references/strategies.md:94 — defined here
- `Configuration File Conflicts` — .claude/skills/merge-resolver/references/strategies.md:102 — defined here
- `Database Migration Conflicts` — .claude/skills/merge-resolver/references/strategies.md:116 — defined here
- `Numbered Documentation Conflicts (ADR, RFC)` — .claude/skills/merge-resolver/references/strategies.md:126 — defined here
- `Architecture Decision Records` — .claude/skills/merge-resolver/references/strategies.md:128 — used here
- `ADR` — .claude/skills/merge-resolver/references/strategies.md:128 — used here
- `RFC` — .claude/skills/merge-resolver/references/strategies.md:128 — used here
- `Add/add conflict` — .claude/skills/merge-resolver/references/strategies.md:132 — used here
- `Template-Generated File Conflicts` — .claude/skills/merge-resolver/references/strategies.md:171 — defined here
- `Rebase Add/Add Conflicts` — .claude/skills/merge-resolver/references/strategies.md:216 — defined here
- `Append-Only Evidence Artifacts (Add/Add)` — .claude/skills/merge-resolver/references/strategies.md:273 — defined here
- `Rename, never content-merge` — .claude/skills/merge-resolver/references/strategies.md:277 — defined here

## Structure
- # Resolution Strategies — .claude/skills/merge-resolver/references/strategies.md:1
- ## Additive Changes — .claude/skills/merge-resolver/references/strategies.md:5
- ## Moved or Renamed Code — .claude/skills/merge-resolver/references/strategies.md:21
- ## Deleted Code — .claude/skills/merge-resolver/references/strategies.md:42
- ## Conflicting Logic — .claude/skills/merge-resolver/references/strategies.md:63
- ## Style/Formatting Conflicts — .claude/skills/merge-resolver/references/strategies.md:82
- ## Lock File Conflicts — .claude/skills/merge-resolver/references/strategies.md:94
- ## Configuration File Conflicts — .claude/skills/merge-resolver/references/strategies.md:102
- ## Database Migration Conflicts — .claude/skills/merge-resolver/references/strategies.md:116
- ## Numbered Documentation Conflicts (ADR, RFC) — .claude/skills/merge-resolver/references/strategies.md:126
- ## Template-Generated File Conflicts — .claude/skills/merge-resolver/references/strategies.md:171
- ## Rebase Add/Add Conflicts — .claude/skills/merge-resolver/references/strategies.md:216
- ## Append-Only Evidence Artifacts (Add/Add) — .claude/skills/merge-resolver/references/strategies.md:273

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/merge-resolver/references/strategies.md:89 · References `.prettierrc` which does not exist in the repository root.

## Observations
- Documents the historical lesson from PR #4856 where merging prose across session logs destroyed records, formalizing the rule: "Rename, never content-merge" for append-only evidence artifacts.
- Declares vendor-portability note at lines 302-303 explaining that `.agents/` artifact patterns are consulted only if present in the consumer repo, and vendored installs without them skip those resolution heuristics.
- Preserves intentional fenced conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>> main`) at lines 12-16 as documentation examples, which motivated the creation of `verify_no_conflict_markers.py` to prevent false-positive lint failures (issue #2424).

## Context cost
9,557 bytes. Approximately 2,400 tokens.
