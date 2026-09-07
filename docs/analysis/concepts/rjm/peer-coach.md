---
package: rjm
name: Peer/Coach
slug: peer-coach
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Peer/Coach

## Definition — verbatim
> "| **Peer/Coach** | Early feedback to improve content | Low, friendly and constructive | During drafting, before wider sharing |" — .claude/skills/adr-review/references/zimmermann-review-guidance.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 9 | defined here | First review perspective providing friendly, constructive feedback on early drafts before wider sharing. |

## Consumes
Initial ADR drafts and exploratory architecture proposals.

## Produces
Constructive feedback, readability suggestions, and identification of missing options.

## When applied
During early ADR authoring prior to team-wide publication or formal debate.

## Sub-concepts
none

## Part of
three-review-perspectives, zimmermann-review-guidance

## Implementation status
defects: missing-path

## Design notes
The informal review stance in rjm's ADR review framework. It provides constructive, low-pressure feedback to help authors refine problems and options before submitting decisions to formal multi-agent review.
