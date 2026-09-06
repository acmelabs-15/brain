---
package: addy
name: By file group
slug: by-file-group
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# By file group

## Definition — verbatim
> "| **By file group** | Separate changes for groups needing different reviewers | Cross-cutting concerns |" — skills/code-review-and-quality/SKILL.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 122 | defined here | Change splitting strategy partitioning cross-cutting concerns by file group for targeted reviewers |

## Consumes
Multi-domain modifications affecting distinct parts of a system (e.g., database schemas, API routes, UI components).

## Produces
Grouped pull requests partitioned by architectural domain or reviewer specialization.

## When applied
When an overarching modification cuts across multiple boundaries requiring different domain experts.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, By file group is a decomposition pattern that partitions broad, cross-cutting code modifications into discrete changes based on subsystem or reviewer expertise. This isolates domain concerns and avoids burdening reviewers with code outside their expertise.
