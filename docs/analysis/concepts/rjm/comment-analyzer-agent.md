---
package: rjm
name: Comment Analyzer Agent
slug: comment-analyzer-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Comment Analyzer Agent

## Definition — verbatim
> "You verify comments against the code they describe. You flag mismatches with file:line evidence and propose a specific change." — templates/agents/comment-analyzer.shared.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/comment-analyzer.shared.md | 21 | defines | Support agent role dedicated to auditing code comments and docstrings for accuracy and drift against current code. |

## Consumes
Code diffs, docstrings, source files, and caller implementations.

## Produces
Structured findings triaging comments into Preserve, Update, or Remove categories with file:line citations and suggested edits.

## When applied
Triggered during PR review threads touching comments, during technical debt audits, or on demand when evaluating comment rot.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An advisory audit role ensuring docstring and comment hygiene, preventing stale or misleading documentation from accumulating across code changes.
