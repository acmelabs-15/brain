---
package: matt
name: backlog
slug: backlog
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: true
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# backlog

## Definition — verbatim
> "\"backlog\" was previously used to mean both the *tool* hosting issues and the *body of work* inside it. Resolved: the tool is the **Issue tracker**; \"backlog\" is no longer used as a domain term." — CONTEXT.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 29 | defined here | Defined as a retired term previously denoting both the issue tracking tool and the accumulated work. |

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
defects: missing-path, other (from context-md.md: cites non-existent docs/agents/triage-labels.md and subject to runaway artifact bloat in CONTEXT.md)

## Design notes
An ambiguous term in earlier iterations of matt's ubiquitous language that conflated the issue tracking tool with the body of work inside it; formally deprecated and replaced by the canonical term 'Issue tracker'.
