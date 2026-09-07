---
package: rjm
name: Assertive vs Inquisitive Relationships
slug: assertive-vs-inquisitive-relationships
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Assertive vs Inquisitive Relationships

## Definition — verbatim
> "## Assertive vs Inquisitive Relationships" — .claude/skills/analyze/references/design-legacy-code.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-legacy-code.md | 29 | defined here | Defines the architectural design preference for assertive over inquisitive object interactions. |

## Consumes
Object-oriented interaction models and method call graphs.

## Produces
Actor-based component designs where behavior remains co-located with state.

## When applied
Used when reviewing component interactions and refactoring getter chains or feature envy smells.

## Sub-concepts
tell-don-t-ask

## Part of
design-legacy-code

## Implementation status
defects: missing-path

## Design notes
This design principle advocates assertive relationships over inquisitive ones: systems should position responsibilities so each object acts as an autonomous actor carrying out a task, rather than a passive data store queried by outside callers. Keeping behavior co-located with data preserves encapsulation and minimizes system-wide coupling.
