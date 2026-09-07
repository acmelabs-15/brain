---
package: matt
name: Phase 5
slug: phase-5
kind: phase
package_phase: matt:diagnosing-bugs
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 5

## Definition — verbatim
> "Into Phase 5</td><td>Probes map to a specific prediction, one variable at a time, every debug log tagged <code class="ah-code-inline">[DEBUG-a4f2]</code>-style so cleanup is one grep" — external/diagnosing-bugs.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 49 | defined here | Specifies the gate requirements and entry criteria for Phase 5 (remediation, regression testing, and cleanup). |

## Consumes
A confirmed hypothesis prediction from Phase 4 isolating the true root cause.

## Produces
A verified fix, a regression test at the correct seam (or documented absence of one), removed instrumentation, and a descriptive commit message.

## When applied
During bug diagnosis once the root cause is isolated, to implement the permanent fix and ensure no diagnostic residue remains.

## Sub-concepts
correct-seam, commit-message

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
Phase 5 is the remediation and verification phase in diagnosing-bugs. It mandates writing a regression test at a true seam before implementing the fix, completely removing all temporary instrumentation, and documenting the confirmed root-cause hypothesis in the commit message.
