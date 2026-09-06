---
package: addy
name: Data Privacy & Compliance
slug: data-privacy-compliance
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Data Privacy & Compliance

## Definition — verbatim
> "Treat personal data as a liability to minimize, not an asset to hoard." — skills/security-and-hardening/SKILL.md:358

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 356 | defined here | Establishes privacy-by-design engineering disciplines covering data minimization, retention TTLs, and subject rights |

## Consumes
User data schemas, telemetry logging, retention policies, legal compliance mandates (GDPR, CCPA).

## Produces
Classified data fields (Non-personal, Personal PII, Sensitive), retention TTL policies, auditable consent records, and subject export/deletion pathways.

## When applied
When designing database schemas, integrating third-party analytics/LLM vendors, or handling personal identity data.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Data Privacy & Compliance frames personal data handling as an active engineering architecture concern rather than an after-the-fact legal policy. Addy directs developers to classify fields upon creation, enforce minimal collection boundaries, set automated TTL deletion paths across all stores, and design schemas to honor data subject rights such as export and erasure.
