---
package: rjm
name: review
slug: review
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# review

## Definition — verbatim
> "name: review" — .claude/skills/review/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 3 | references | Reference directing pre-merge PR reviews to the review skill instead of broad audits. |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 452 | references | Script checking ADR modifications during the formal review lifecycle stage. |
| .claude/skills/code-qualities-assessment/SKILL.md | 3 | references | Reference routing pre-merge code inspections to the review skill. |
| .claude/skills/quality-grades/SKILL.md | 4 | references | Guidance advising users to use review rather than quality-grades for pre-merge diffs. |
| .claude/skills/review/SKILL.md | 2 | defines | Skill definition declaring the review skill name in frontmatter. |
| .claude/skills/review/SKILL.md | 21 | defines | Command table specifying /review for running Stage-1 and Stage-2 pre-merge reviews. |
| docs/getting-started.md | 78 | defines | Lifecycle pipeline table defining Step 6 Review (/review) five-axis evaluation. |
| README.md | 306 | defines | Architecture diagram positioning REVIEW between VERIFY and SHIP phases. |
| README.md | 311 | defines | Pipeline command workflow row illustrating /review following /test and preceding /ship. |
| scripts/sync/detect_spec_drift.py | 6 | references | Script noting that specification staleness typically surfaces at /review time. |
| scripts/validation/check_skill_portability.py | 8 | references | Validation script verifying portability constraints enforced during review. |
| templates/agents/quality-auditor.shared.md | 4 | references | Template guidance directing pre-merge diff evaluation to the review skill. |

## Consumes
Code changes, passing test results from /test, and original specification artifacts.

## Produces
Five-axis review report (architecture, security, quality, tests, standards) with prioritized findings.

## When applied
Verbatim: "After `/test` passes" prior to shipping or merging changes.

## Sub-concepts
code-qualities-assessment

## Part of
none

## Implementation status
clean

## Design notes
The formal pre-merge review phase in the rjm development lifecycle, executed between verification and shipping. It applies a rigorous five-axis review (architecture, security, quality, tests, standards) against branch diffs to catch regressions, specification drift, and architectural non-compliance before integration.
