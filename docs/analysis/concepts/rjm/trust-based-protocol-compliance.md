---
package: rjm
name: Trust-based protocol compliance
slug: trust-based-protocol-compliance
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Trust-based protocol compliance

## Definition — verbatim
> "**Root Cause**: Trust-based protocol compliance fails when agents are given autonomy. Technical enforcement is required." — docs/technical-guardrails.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/technical-guardrails.md | 13 | defined here | Identified as the failed root cause philosophy that assumes autonomous agents will self-enforce behavioral guidelines. |

## Consumes
Natural language instructions, system prompt guidelines, and unverified process rules.

## Produces
False sense of security, omitted test runs, bypassed review steps, and protocol violations.

## When applied
In legacy workflows that depend on agent prompt adherence rather than automated validation gates to govern behavior.

## Sub-concepts
none

## Part of
technical-guardrails

## Implementation status
defects: doc-drift

## Design notes
An anti-pattern recognized in rjm architecture establishing that prompt instructions and moral suasion fail to keep autonomous agents compliant, serving as the foundational rationale for replacing honor systems with deterministic technical enforcement.
