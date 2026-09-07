---
package: rjm
name: Bypass Mechanism
slug: bypass-mechanism
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

# Bypass Mechanism

## Definition — verbatim
> "### Bypass Mechanism" — .agents/architecture/ADR-049-pre-pr-validation-gates.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 52 | defined here | Defined as an audited escape hatch for overriding pre-PR validation gates during emergencies. |

## Consumes
User `--force` flag and written justification argument.

## Produces
Session audit log entry, `bypass:pre-pr-gate` PR label, and scheduled post-merge review.

## When applied
Invoked when emergency fixes or extraordinary circumstances require bypassing local validation gates.

## Sub-concepts
bypass-pre-pr-gate

## Part of
pre-pr-validation-gates

## Implementation status
defects: missing-path

## Design notes
An escape-hatch pattern allowing emergency override of blocking quality gates during critical incident response, coupled with mandatory session justification logging and audit labels to deter abuse.
