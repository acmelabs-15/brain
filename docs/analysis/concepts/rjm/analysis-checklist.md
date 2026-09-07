---
package: rjm
name: Analysis Checklist
slug: analysis-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Analysis Checklist

## Definition — verbatim
(used, not defined)

> "## Analysis Checklist" — .agents/security/static-analysis-checklist.md:198

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 198 | defined here | Section heading introducing the three-phase security review process (Pre-Analysis, Core Analysis, Post-Analysis). |

## Consumes
Codebase files, trust boundaries, dependency lists, and data flow mappings.

## Produces
Prioritized security findings with remediation steps, documentation, and threat model updates.

## When applied
Applied during security auditing and static analysis reviews of code and configuration.

## Sub-concepts
pre-analysis, core-analysis, post-analysis

## Part of
none

## Implementation status
clean

## Design notes
A structured security review checklist dividing static analysis into pre-analysis (context gathering and boundary identification), core analysis (CWE verification), and post-analysis (finding prioritization and remediation planning) phases.
