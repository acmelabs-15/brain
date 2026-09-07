---
package: rjm
name: Chesterton's Fence analysis
slug: chesterton-s-fence-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-053-adr-exception-criteria.md, sha256: 9bd6a784d02e1fad5ea86eb815d46114decc3c000e4f0fa9be3842620fce1183}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Chesterton's Fence analysis

## Definition — verbatim
> "Chesterton's Fence analysis corrects this asymmetry by requiring that context to be documented before approval." — .agents/architecture/ADR-053-adr-exception-criteria.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-053-adr-exception-criteria.md | 35 | defined here | Defined as a formal three-question analytical requirement before any ADR exception can be approved. |

## Consumes
The original ADR rationale, assessment of impact if removed, and documentation of at least two compliance alternatives attempted.

## Produces
A completed Chesterton's Fence analysis block fulfilling `.agents/governance/ADR-EXCEPTION-CRITERIA.md`.

## When applied
Mandatory whenever an engineer or agent requests an exception to an established ADR policy.

## Sub-concepts
none

## Part of
- chesterton-s-fence
- adr-exceptions

## Implementation status
clean

## Design notes
Chesterton's Fence analysis operationalizes intentional friction in rjm's governance workflow. Because requesting an exception is structurally easier than defending an architectural constraint, this technique forces the requester to answer three strict questions: quoting the original rule's rationale verbatim, documenting what breaks if removed, and enumerating alternative compliance attempts. Without this analysis, the architect agent issues a CRITICAL_FAIL and blocks the change in CI.
