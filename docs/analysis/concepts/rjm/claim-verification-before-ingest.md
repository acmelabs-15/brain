---
package: rjm
name: claim-verification-before-ingest
slug: claim-verification-before-ingest
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# claim-verification-before-ingest

## Definition — verbatim
(used, not defined)

> "This skill hardens the general-purpose gstack `claim-verification-before-ingest` pattern into the repo's own artifact-ingest path." — .claude/skills/ai-agents-external-claims/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 15 | references | Cites the gstack pattern hardened into the repository's external-claims discipline. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 117 | references | Entry in FOREIGN_SKILL_CATALOGS mapping the foreign pattern to its owning catalog gstack. |

## Consumes
Third-party statistics, benchmark results, and vendor claims prior to inclusion in repository assets.

## Produces
Validated, primary-source-backed claims approved for ingestion into durable records.

## When applied
Prior to recording any external assertion in an ADR, retrospective, rule, or durable documentation.

## Sub-concepts
walk-the-gate-or-file-conservative, primary-source

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
A foreign pattern originating in the gstack catalog that requires external claims to be corroborated against primary sources at ingest time, preventing unvetted assertions and secondary hearsay from corrupting repository documentation.
