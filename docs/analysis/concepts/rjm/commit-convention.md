---
package: rjm
name: Commit Convention
slug: commit-convention
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Commit Convention

## Definition — verbatim
> "## Commit Convention" — .claude/skills/reflect/references/integration-and-design.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/integration-and-design.md | 90 | defined here | Standardized commit message format for tracking skill observation additions by confidence level and session ID. |

## Consumes
Classified reflection findings (constraints, preferences, edge cases, notes) and session identifiers.

## Produces
Structured git commit messages documenting exact counts of added learnings per confidence tier.

## When applied
When committing skill observation memory updates to Git.

## Sub-concepts
none

## Part of
reflect

## Implementation status
defects: missing-path

## Design notes
A standardized Git commit message structure that records the exact counts of high-, medium-, and low-confidence learnings along with session provenance, ensuring transparency and auditability in version control history.
