---
package: rjm
path: .claude/skills/adr-review/references/issue-resolution.md
type: reference
bytes: 5986
unit: inv-rjm-77
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-review/references/issue-resolution.md, sha256: 0a50a77e7a5b822596d45280d9b7a1ee36a6d19b7f86e9ad7e948c98ee51e4e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-review/references/issue-resolution.md

## Purpose — required, verbatim
> "When debate topics are resolved, issues MUST be handled by priority." — .claude/skills/adr-review/references/issue-resolution.md:3

## Design intent — required
Governs the handling, resolution, and tracking of debate issues based on priority levels (P0, P1, and P2). It establishes that P0 issues are absolute blocking gates that must be resolved in the ADR revision, P1 issues must either be resolved or formally deferred with justification, a GitHub issue (`priority:P1,backlog,adr-followup`), and a Serena cross-session memory entry, and P2 issues are non-blocking and recorded in the backlog. Without it, architectural debates would either bottleneck on non-critical concerns or lose track of important deferred issues due to LLM context amnesia across future sessions.

## Phase — required
none

## Inputs — required
- Debate findings and issues raised during ADR review by participating agents — .claude/skills/adr-review/references/issue-resolution.md:79, 139
- Target ADR path, debate log path, and parent issue/epic numbers — .claude/skills/adr-review/references/issue-resolution.md:77-78, 92

## Outputs — required
- GitHub issues for deferred P1 items (`gh issue create` with `priority:P1,backlog,adr-followup`) — .claude/skills/adr-review/references/issue-resolution.md:70, 109
- Serena memory files for cross-session keyword surfacing (`mcp__serena__write_memory`) — .claude/skills/adr-review/references/issue-resolution.md:49-53
- GitHub issues for non-blocking P2 items (`gh issue create` with `backlog,adr-followup`) — .claude/skills/adr-review/references/issue-resolution.md:129-159
- Debate log update section: "Residual P2 Issues (Backlogged)" — .claude/skills/adr-review/references/issue-resolution.md:167-172
- Issue Resolution Summary table added to final review recommendations — .claude/skills/adr-review/references/issue-resolution.md:179-192

## Invokes — required
none

## Invoked by — required
- skill adr-review — .claude/skills/adr-review/SKILL.md:123

## Concepts named — required, verbatim
- `Acceptance Gate` — .claude/skills/adr-review/references/issue-resolution.md:9 — defined here
- `P1 Deferral Requirements` — .claude/skills/adr-review/references/issue-resolution.md:17 — defined here
- `Surfacing Mechanism` — .claude/skills/adr-review/references/issue-resolution.md:26 — defined here
- `keyword-based surfacing` — .claude/skills/adr-review/references/issue-resolution.md:36 — defined here
- `P1 Deferral Issue Template` — .claude/skills/adr-review/references/issue-resolution.md:67 — defined here
- `Residual P2 Issues` — .claude/skills/adr-review/references/issue-resolution.md:123 — defined here
- `Resolution Summary Template` — .claude/skills/adr-review/references/issue-resolution.md:174 — defined here

## Structure
- # Issue Resolution Protocol — .claude/skills/adr-review/references/issue-resolution.md:1
- ## P0/P1: Must Resolve Before Acceptance — .claude/skills/adr-review/references/issue-resolution.md:5
- ## P1 Deferral Requirements — .claude/skills/adr-review/references/issue-resolution.md:18
- ### Surfacing Mechanism (How Amnesiac Agents Find Deferred Items) — .claude/skills/adr-review/references/issue-resolution.md:26
- ### Practical Example — .claude/skills/adr-review/references/issue-resolution.md:38
- ### P1 Deferral Issue Template — .claude/skills/adr-review/references/issue-resolution.md:68
- ## P2: Plan and Backlog — .claude/skills/adr-review/references/issue-resolution.md:119
- ## Debate Log Update — .claude/skills/adr-review/references/issue-resolution.md:162
- ## Resolution Summary Template — .claude/skills/adr-review/references/issue-resolution.md:174

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Addresses LLM amnesia across sessions through a 3-part keyword-based surfacing mechanism: GitHub issue cross-linking, Phase 0 search for `label:adr-followup`, and Serena memory-index keyword routing (.claude/skills/adr-review/references/issue-resolution.md:28-36).
- Establishes a strict validation invariant: "The sum of (Resolved + Deferred) for each priority MUST equal Count. All deferred P1 items MUST have corresponding GitHub issues." (.claude/skills/adr-review/references/issue-resolution.md:192).
- Hardcodes repository name `--repo rjmurillo/ai-agents` in `gh issue create` CLI examples (.claude/skills/adr-review/references/issue-resolution.md:46, 110, 159), limiting out-of-the-box portability to external repositories.

## Context cost
5986 bytes. Approximately 1500 tokens.
