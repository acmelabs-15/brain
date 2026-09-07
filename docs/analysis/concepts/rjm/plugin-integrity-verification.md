---
package: rjm
name: Plugin Integrity Verification
slug: plugin-integrity-verification
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plugin Integrity Verification

## Definition — verbatim
(used, not defined)

> "### P0-6: No Plugin Integrity Verification (Security)" — .agents/critique/ADR-045-debate-log.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 45 | defined here | Raised as a P0 blocking security defect in ADR-045 for missing plugin cryptographic verification. |

## Consumes
Plugin distribution packages, cryptographic signatures, release manifests, commit hashes.

## Produces
Security integrity verdict validating plugin provenance and authenticity.

## When applied
Mandated prior to installing, updating, or loading external framework plugins.

## Sub-concepts
sha-pinning

## Part of
4-plugin-model

## Implementation status
defects: cross-file-contradiction

## Design notes
Plugin Integrity Verification is a security control mandated in ADR-045 critique requiring cryptographic checks (such as SHA pinning or signatures) before installing plugins, preventing supply-chain attacks from compromised maintainers or sources.
