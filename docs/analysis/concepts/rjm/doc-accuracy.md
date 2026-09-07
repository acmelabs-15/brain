---
package: rjm
name: doc-accuracy
slug: doc-accuracy
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# doc-accuracy

## Definition — verbatim
> "Verify documentation claims against actual code behavior. Code is truth; docs are the subject under test." — .claude/skills/doc-accuracy/SKILL.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 61 | used here | Cited as mandatory verification tool for checking prose claims before emitting artifacts. |
| .claude/skills/codebase-documenter/SKILL.md | 38 | used here | Recommended complementary skill to verify documented behavior against source code truth. |
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 3 | used here | Referenced in script header docstring as part of documentation audit tooling. |
| .claude/skills/doc-accuracy/SKILL.md | 2 | defined here | Frontmatter name defining the doc-accuracy skill. |
| .claude/skills/fix-markdown-fences/SKILL.md | 11 | used here | Differentiated in scope boundary: fix-markdown-fences handles syntax; doc-accuracy audits claims. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 83 | used here | Excluded from false-positive filters as a valid documentation analysis skill. |
| .claude/skills/prose-self-check/SKILL.md | 270 | used here | Paired with prose-self-check for verifying technical accuracy and documentation references. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 292 | used here | Listed as standard quality gate for checking spec prose accuracy against implementation. |
| .claude/skills/validation-authority/SKILL.md | 139 | used here | Cited under documentation verification gates enforcing code-as-truth standards. |
| scripts/validation/check_build_gates.py | 7 | used here | Referenced as build gate validator ensuring documentation matches current source state. |

## Consumes
Documentation files, markdown references, code examples, API claims, and actual source code implementations.

## Produces
Discrepancy reports, failed verification checks, compilability logs, and drift corrections aligning docs with code truth.

## When applied
When auditing documentation accuracy, verifying code examples compile, checking consistency across documents, or preparing pre-release audits.

## Sub-concepts
none

## Part of
validation-authority

## Implementation status
defects: doc-drift, orphan

## Design notes
The doc-accuracy skill operationalizes the principle that code is the definitive source of truth and documentation is a testable artifact subject to verification. In rjm, doc-accuracy runs multi-phase audits across code samples, behavioral assertions, and quantitative limits to eliminate documentation drift, ensuring contributors and models never rely on stale or misleading technical documentation.
