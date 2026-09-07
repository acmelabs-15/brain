---
package: rjm
name: Verify explicitly
slug: verify-explicitly
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verify explicitly

## Definition — verbatim
> "1. **Verify explicitly**: Always authenticate and authorize based on all available data points." — .claude/skills/threat-modeling/references/security-zero-trust.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-zero-trust.md | 23 | defined here | Defined as the first foundational principle of the Zero Trust security model. |

## Consumes
Client identity, device posture, environmental telemetry, and request metadata.

## Produces
Continuous per-request authentication and authorization decisions without reliance on implicit trust.

## When applied
Applied at every trust boundary crossing and interaction touch point in system architecture.

## Sub-concepts
none

## Part of
- zero-trust

## Implementation status
defects: missing-path

## Design notes
The primary pillar of Zero Trust in rjm requiring that access decisions never rely on implicit trust or network location, continuously verifying identity and authorization using all available contextual data points.
