---
package: addy
name: competing-hypothesis debugging
slug: competing-hypothesis-debugging
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# competing-hypothesis debugging

## Definition — verbatim
> "## Worked example: Agent Teams for competing-hypothesis debugging" — references/orchestration-patterns.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 174 | defined here | Worked example demonstrating collaborative Agent Teams where personas challenge and disprove competing root-cause theories |

## Consumes
Unexplained production bug reports, multiple mutually exclusive plausible root-cause hypotheses, specialized investigator personas (code-reviewer, security-auditor, test-engineer)

## Produces
Validated root-cause consensus supported by evidence and targeted reproduction tests

## When applied
When debugging complex, intermittent production issues where multiple plausible root causes exist and evidence must rule out competing theories

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Competing-hypothesis debugging is an adversarial investigative technique leveraging Agent Teams for complex production defect analysis. Rather than allowing a single agent to fixate on the first plausible explanation, multiple specialized personas concurrently explore competing root-cause hypotheses and actively attempt to disprove each other's theories, ensuring that the surviving explanation is empirically verified before fixes are attempted.
