---
package: addy
name: Supply-chain hygiene
slug: supply-chain-hygiene
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Supply-chain hygiene

## Definition — verbatim
> "**Supply-chain hygiene** (advisory audits do not catch newly malicious packages):" — references/security-checklist.md:141

## Also called — verbatim
"Supply-Chain Hygiene" — skills/security-and-hardening/SKILL.md:299

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 141 | defines | Checklist of supply-chain practices addressing lockfile immutability, script gating, and provenance. |
| skills/security-and-hardening/SKILL.md | 299 | defines | Process section establishing installation boundary verification, script blocking, and dependency review. |

## Consumes
Committed package lockfiles, package registries, diffs, and package provenance metadata.

## Produces
Tamper-resistant dependency graphs with validated provenance, frozen CI installs, and approved build scripts.

## When applied
Applied when introducing, updating, or reviewing dependencies across development and CI environments.

## Sub-concepts
installation-boundary, install-script-gate

## Part of
dependency-security, security-and-hardening

## Implementation status
clean

## Design notes
Supply-chain hygiene addresses risks that standard vulnerability advisory audits cannot catch, such as newly published malicious packages, typosquatting, and compromised maintainer accounts. It mandates committed immutable lockfiles, careful manual review of dependency additions, verification of registry provenance and signatures, and strict lifecycle script gating.
