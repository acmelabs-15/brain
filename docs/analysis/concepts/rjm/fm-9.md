---
package: rjm
name: FM-9
slug: fm-9
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-9

## Definition — verbatim
> "Confident-incorrectness recurrence" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/incident-history.md | 21 | used here | Incident narrative explaining FM-9 where a change claims to mirror a contract without quoting it, leading to the verbatim quoting rule. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 200 | used here | Documentation standard citing FM-9 to forbid unverified claims of matching or mirroring external files. |
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 22 | used here | Provenance table tracking catalog entries for FM-9 and FM-11 in FAILURE-MODES.md. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 112 | used here | Empirical probe toolkit guidance identifying FM-9 confident-incorrectness as the failure mode probe recipes prevent. |
| .claude/skills/ai-agents-external-claims/SKILL.md | 67 | used here | Verification checklist item referencing FM-9 and requiring verbatim quotation over paraphrase for cross-repo claims. |
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 128 | used here | Retrospective analysis of PR #1887 noting that FM-9 enforcement in canonical-source-mirror rules arose from this incident. |
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 91 | used here | Catalog entry defining FM-9 as confident-incorrectness recurrence when claiming mirror parity without quoting the source. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 231 | used here | Research checklist mandating verbatim quotes of canonical sources when asserting mirror parity under FM-9. |

## Consumes
Contract claims, mirror declarations, documentation assertions.

## Produces
Verbatim quote verifications, explicit divergence declarations, and canonical source citations.

## When applied
Applied whenever an agent asserts parity, compliance, or mirroring between two files or contracts.

## Sub-concepts
verbatim-quoting

## Part of
none

## Implementation status
clean

## Design notes
FM-9 is the failure mode catalog identifier for confident-incorrectness recurrence, where an agent asserts that code matches or mirrors a contract without quoting it, relying on imperfect memory. Codified across governance, research, QA, and failure archaeology to enforce byte-exact citation.
