---
package: rjm
name: Simplify Incrementally
slug: simplify-incrementally
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Simplify Incrementally

## Definition — verbatim
> "One concept at a time" — .claude/agents/janitor.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 78 | defined here | Third step of the execution strategy restricting refactoring changes to one concept per pass. |

## Consumes
Complex multi-faceted code structures targeted for simplification.

## Produces
Granular, isolated refactoring commits focused on single architectural simplifications.

## When applied
When refactoring complex modules, ensuring changes are not bundled into unreviewable batch rewrites.

## Sub-concepts
none

## Part of
execution-strategy

## Implementation status
clean

## Design notes
Limits the blast radius of refactoring by demanding changes be made one concept at a time. This prevents massive, composite diffs that combine unrelated deletions, inlinings, and pattern shifts, making code reviews manageable and regressions easy to isolate with git bisect.
