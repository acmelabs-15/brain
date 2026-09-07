---
package: rjm
name: Precedence
slug: precedence
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Precedence

## Definition — verbatim
> "A comment can match more than one bucket. Assign exactly one, using this ranked precedence:" — .claude/agents/comment-analyzer.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/comment-analyzer.md | 42 | defines | Section heading and ranked rule (Preserve > Update > Remove) resolving multi-bucket matches. |
| templates/agents/comment-analyzer.shared.md | 53 | defines | Shared template specification of total order precedence for comment classification. |

## Consumes
Comments that qualify for multiple triage buckets.

## Produces
Unambiguous single category assignment.

## When applied
When a comment exhibits characteristics of more than one triage category.

## Sub-concepts
none

## Part of
triage-categories

## Implementation status
defects: doc-drift

## Design notes
A strict priority hierarchy (Preserve > Update > Remove) ensuring that comments with any salvageable intent are preserved rather than deleted.
