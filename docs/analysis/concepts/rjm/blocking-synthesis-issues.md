---
package: rjm
name: BLOCKING synthesis issues
slug: blocking-synthesis-issues
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

# BLOCKING synthesis issues

## Definition — verbatim
(used, not defined)

> "| No BLOCKING synthesis issues | 0 blocking | ADR review process |" — .agents/architecture/ADR-049-pre-pr-validation-gates.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 49 | used here | Specified as a zero-tolerance gate criterion from the ADR review process. |

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
BLOCKING synthesis issues designates a severity classification threshold from the ADR review process requiring zero unresolved blocking issues prior to PR creation.
