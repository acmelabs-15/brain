---
package: rjm
name: won't fix
slug: won-t-fix
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# won't fix

## Definition — verbatim
(used, not defined)

> "This is not a Won't Fix judgment call: the claim about the code was false," — .claude/skills/reviewer-findings/SKILL.md:288

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 145 | used here | Action item requiring CI merge guards to block merges if any review thread was marked won't fix without security review. |
| .claude/skills/reviewer-findings/SKILL.md | 288 | used here | Review findings triage guidance clarifying that refuting a false code claim is distinct from a subjective Won't Fix judgment call. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, orphan

## Design notes
`won't fix` is a review triage status and decision label indicating that an identified comment or finding will not be addressed in the codebase, classified as `kind: name-only` per D-023.
