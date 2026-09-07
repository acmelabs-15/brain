---
package: rjm
name: bypass:pre-pr-gate
slug: bypass-pre-pr-gate
kind: name-only
package_phase: none
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

# bypass:pre-pr-gate

## Definition — verbatim
> "2. Add a `bypass:pre-pr-gate` label to the resulting PR." — .agents/architecture/ADR-049-pre-pr-validation-gates.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 57 | defined here | Defined as a mandatory tracking label applied to PRs created via gate bypass. |

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
defects: missing-path

## Design notes
bypass:pre-pr-gate is a GitHub label identifier applied to pull requests when the pre-PR gate is bypassed, enabling tracking and triggering post-merge audit reviews.
