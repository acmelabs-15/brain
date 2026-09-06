---
package: matt
name: Local-markdown tickets
slug: local-markdown-tickets
kind: artifact
package_phase: matt:to-tickets
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

# Local-markdown tickets

## Definition — verbatim
> "**Local-markdown tickets** are now one file per ticket under `.scratch/<feature>/issues/<NN>-<slug>.md` — never a single combined `tickets.md`." — CHANGELOG.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 120 | defined here | Documents support for local markdown ticket files across planning tools |

## Consumes
A feature slug, spec, or wayfinder map without access to an external issue tracker

## Produces
Individual markdown issue files stored under `.scratch/<feature-slug>/issues/`

## When applied
When running `/to-tickets` or `/wayfinder` in offline, local, or tracker-agnostic environments

## Sub-concepts
none

## Part of
to-tickets, wayfinder

## Implementation status
clean

## Design notes
Local-markdown tickets provide a file-based fallback for issue tracking that allows teams to use Matt's decomposition and ticket-driven workflows entirely within local repository scratch directories without requiring GitHub or Linear integrations.
