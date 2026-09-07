---
package: rjm
name: Observability Review Task
slug: observability-review-task
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Observability Review Task

## Definition — verbatim
(used, not defined)

> "You are reviewing a pull request for observability: can an operator understand what the new code does in production from its external outputs?" — .claude/skills/review/references/observability.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 8 | defined here | Top-level document title heading defining the instructions and scope for reviewing pull requests for observability. |

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
clean

## Design notes
Observability Review Task is a document title heading in .claude/skills/review/references/observability.md rather than an independent lifecycle concept, classified as kind: name-only per D-023.
