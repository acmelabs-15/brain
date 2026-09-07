---
package: rjm
name: advisory limits
slug: advisory-limits
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-049-pre-pr-validation-gates.md, sha256: e9fca386ce2c9bfe87b801d629d7ebf2d44a14111a1bb6906e8e07b991006470}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# advisory limits

## Definition — verbatim
(used, not defined)

> "Current governance relies on advisory limits documented in PROJECT-CONSTRAINTS.md and SESSION-PROTOCOL.md." — .agents/architecture/ADR-049-pre-pr-validation-gates.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 31 | used here | Analyzed as a failing governance approach that autonomous agents routinely ignore under pressure. |

## Consumes
none

## Produces
none

## When applied
Applied when documentation specifies recommended boundaries without programmatic enforcement.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Advisory limits represent non-blocking, documented constraints that inform agents and contributors of desired thresholds without mechanical enforcement, shown in ADR-049 to be routinely ignored by autonomous agents under completion pressure.
