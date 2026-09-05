---
package: rjm
path: .claude/skills/ai-agents-architecture-contract/references/weak-points.md
type: reference
bytes: 3980
unit: inv-rjm-80
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-architecture-contract/references/weak-points.md, sha256: 381a0518aa121d1c2a028e091ae0a16f5728f59a76a673fe35acad4c9d326be7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-architecture-contract/references/weak-points.md

## Purpose — required, verbatim
> "The full evidence for the honestly-weak parts of the repository structure. SKILL.md Phase 7 keeps the compact list (name plus one-line consequence) so you know the hazard exists while working near it; this reference carries the dated evidence you cite when you act on one." — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:3

## Design intent — required
Documents and tracks known architectural vulnerabilities, technical debt, and historical traps in the repository with dated evidence and concrete consequences. Without this document, contributors and agents would make flawed assumptions about uniformity (such as assuming parity between hook sources, assuming documentation is always current, or assuming default pytest runs include all skill suites), leading to escaped regressions and subtle operational failures.

## Phase — required
cross-phase

## Inputs — required
Audit observations from repository configuration and code: `.claude/settings.json`, `.claude/hooks/hooks.json`, `templates/README.md`, `CONTRIBUTING.md`, `.agents/governance/GENERATOR-FILES.md`, `.github/workflows/pytest.yml`, `pyproject.toml`, ADR status headers, and git commit history.

## Outputs — required
none

## Invokes — required
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:15

## Invoked by — required
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:138

## Concepts named — required, verbatim
`Known-Weak Points` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:1 — defined here
`Hook sources serve different consumers` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:11 — defined here
`ADR-097` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:11 — used here
`manual dual-edit` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:12 — defined here
`Stale docs contradict reality` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:13 — defined here
`verification-based enforcement` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:13 — used here
`FM-9` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:13 — used here
`Ruff debt is ratcheted, not eliminated` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:14 — defined here
`Skill tests split by location` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:15 — defined here
`Proposed-ADR ambiguity` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:16 — defined here
`EVENT telemetry pipeline fully retired` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:17 — defined here
`ADR-084` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:17 — used here
`Retro-cited SHAs` — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:18 — defined here

## Structure
# Known-Weak Points: Evidence and Consequence — .claude/skills/ai-agents-architecture-contract/references/weak-points.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplary engineering honesty: rather than concealing architectural compromises, the repository explicitly catalogs 8 weak points with dated evidence, root cause PRs/issues, and operational guidance ("do not design as if they were sound").

## Context cost
3980 bytes, ~1000 tokens.
