---
package: addy
name: Data Integrity Failures
slug: data-integrity-failures
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Data Integrity Failures

## Definition — verbatim
(used, not defined)
> "| 8 | Data Integrity Failures | Verify updates/dependencies, signed artifacts |" — references/security-checklist.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 186 | references | Listed as OWASP #8 risk mitigated through update verification, signed artifacts, and supply-chain controls. |

## Consumes
Software dependencies, update channels, CI/CD deployment pipelines, and serialized data.

## Produces
Cryptographically signed artifacts, verified package checksums, and trusted update mechanisms.

## When applied
When updating external dependencies, configuring deployment pipelines, or deserializing data.

## Sub-concepts
supply-chain-hygiene

## Part of
owasp-top-10-quick-reference, security-checklist

## Implementation status
clean

## Design notes
Software and Data Integrity Failures (OWASP A08) encompass assumptions about software updates, critical data, and CI/CD pipelines without verifying their integrity. Addy safeguards integrity by demanding committed lockfiles, verifying package manager registry signatures and provenance, and barring untrusted package lifecycle scripts.
