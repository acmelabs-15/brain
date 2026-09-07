---
package: rjm
name: Trust-based compliance
slug: trust-based-compliance
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Trust-based compliance

## Definition — verbatim
(used, not defined)

> "Trust-based compliance ineffective." — .agents/analysis/002-project-constraints-consolidation.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 36 | used here | Identified as the failed governance model where passive documentation failed to prevent agent violations. |

## Consumes
Written guidelines, memories, and documentation assuming agent adherence without technical enforcement.

## Produces
none

## When applied
Historically relied upon prior to Session 15; analyzed and systematically replaced by verification-based enforcement.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Trust-based compliance is an anti-pattern in autonomous agent architectures where the system assumes agents will remember and obey rules written in documentation without mechanical verification. Empirical findings from rjm's Session 15 demonstrated that even when rules were clearly documented in memories and ADRs, agents repeatedly violated them under context pressure. The package explicitly rejects trust-based compliance in favor of automated, verification-based checkpoints.
