---
package: matt
name: YAGNI scoping filter
slug: yagni-scoping-filter
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# YAGNI scoping filter

## Definition — verbatim
> "Add a YAGNI scoping filter to the **`improve-codebase-architecture`** skill's Explore step." — CHANGELOG.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 94 | defined here | Defined as Rule 5 in the changelog for prompt design and scoped agent workflows |

## Consumes
Proposed feature requirements, candidate tasks, or agent-generated change proposals

## Produces
Pruned task lists and minimal diffs restricted to strictly necessary modifications

## When applied
Applied when reviewing proposed scopes, planning tickets, or pruning agent tasks

## Sub-concepts
none

## Part of
writing-for-agents, to-tickets

## Implementation status
clean

## Design notes
The YAGNI scoping filter enforces strict boundary discipline on agent changes by explicitly prohibiting speculative abstractions, premature generalizations, and incidental cleanups, ensuring that context and implementation effort remain concentrated only on what is immediately required.
