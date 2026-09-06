---
package: addy
name: Pre-PR checklist
slug: pre-pr-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Pre-PR checklist

## Definition — verbatim
(used, not defined)
> "## 5. Pre-PR checklist" — docs/developer-onboarding.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 98 | used here | Section header and standing checklist of validation gates required before submitting a PR. |

## Consumes
Local repository modifications, validator script outputs, and contribution proposals.

## Produces
Comprehensive contribution readiness clearance across Tier 1, Tier 2, command parity, hook tests, and eval coverage.

## When applied
Executed by contributors immediately prior to opening pull requests against the repository.

## Sub-concepts
none

## Part of
- `verification-loop`

## Implementation status
clean

## Design notes
The Pre-PR checklist defines the required pre-flight validation gates for repository contributors. By requiring Tier 1 structural checks, Tier 2 trigger evaluations, command parity verification, and hook regression tests to pass locally before submission, it guarantees that incoming pull requests meet mechanical standards before human review begins.
