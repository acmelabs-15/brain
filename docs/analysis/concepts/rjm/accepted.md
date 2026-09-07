---
package: rjm
name: ACCEPTED
slug: accepted
kind: gate
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ACCEPTED

## Definition — verbatim
> "| **Accepted** | Decision approved by stakeholders |" — .claude/skills/adr-generator/references/adr-best-practices.md:72

## Also called — verbatim
"ACCEPTED" — .agents/critique/ADR-045-debate-log.md:157

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 157 | defined here | Recorded as the final consolidated review verdict after resolving all P0 issues. |
| .claude/skills/adr-generator/references/adr-best-practices.md | 72 | defined here | Defined in status table as the state where a decision is approved by stakeholders. |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 91 | used here | Enforced as authoritative governance state in detect_adr_changes.py requiring review gate validation. |
| .claude/skills/adr-review/SKILL.md | 222 | used here | Listed in review checklist as an authoritative frontmatter status enum value per ADR-073. |

## Consumes
ADR proposal, review evidence, stakeholder approvals, resolved critique issues.

## Produces
Authoritative lifecycle state transition marking an architectural decision as approved and ready for implementation.

## When applied
Assigned to an ADR when review consensus is reached and all blocking critique issues are verified resolved.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: cross-file-contradiction, exit-code-mismatch, missing-dependency, doc-drift, missing-path

## Design notes
ACCEPTED is the formal approval state in rjm's ADR governance lifecycle signifying that an architectural decision has been formally reviewed, approved by stakeholders, and confirmed free of blocking defects. Transitioning to accepted trips automated review gates to ensure changes are strictly bound to audit evidence.
