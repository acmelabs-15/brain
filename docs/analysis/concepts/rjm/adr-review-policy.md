---
package: rjm
name: adr-review-policy
slug: adr-review-policy
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# adr-review-policy

## Definition — verbatim
> "- Architecture-change governance is enforced by the lefthook `adr-review-policy`" — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:494

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 494 | used here | Establishes the pre-commit Lefthook gate enforcing multi-agent adr-review consensus evidence on ADR modifications. |

## Consumes
Staged ADR files (`.agents/architecture/ADR-*.md`), session logs, and debate log artifacts under `.agents/critique/`.

## Produces
Pre-commit gate approval or rejection verifying multi-agent debate consensus for architectural changes.

## When applied
Triggered during pre-commit whenever an ADR file or session-protocol document is staged for commit.

## Sub-concepts
none

## Part of
routing-level-enforcement-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
A deterministic pre-commit gate enforced by Lefthook ensuring no architecture decision record can be created, updated, or superseded without recorded multi-agent debate evidence and consensus.
