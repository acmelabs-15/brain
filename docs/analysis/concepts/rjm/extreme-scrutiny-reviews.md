---
package: rjm
name: extreme scrutiny reviews
slug: extreme-scrutiny-reviews
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# extreme scrutiny reviews

## Definition — verbatim
(used, not defined)

> "All four specialized agents (critic, high-level-advisor, security, QA) have completed extreme scrutiny reviews of the remediation plan." — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 14 | used here | Describes the comprehensive adversarial review process conducted by four specialized agents on the remediation plan. |

## Consumes
Remediation plans, PR diffs, architecture designs, and test suites.

## Produces
Adversarial critiques, vulnerability discoveries, gap analyses, and binding verdicts.

## When applied
Applied when reviewing complex, high-risk, or contentious pull requests before authorizing changes into main.

## Sub-concepts
none

## Part of
multi-agent-review

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`extreme scrutiny reviews` denotes a rigorous multi-perspective review technique where specialized agents independently audit code, security postures, test coverage, and architecture to discover latent edge cases and vulnerabilities.
