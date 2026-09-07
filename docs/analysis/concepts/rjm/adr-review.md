---
package: rjm
name: adr-review
slug: adr-review
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# adr-review

## Definition — verbatim
> "name: adr-review" — .claude/skills/adr-review/SKILL.md:2

## Also called — verbatim
`ADR Review` — AGENTS.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 16 | used here | Cites 6-agent adr-review debate resolving supersession governance. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 138 | used here | Notes security tier restoration resulting from adr-review debate consensus. |
| .agents/architecture/ADR-042-python-migration-strategy.md | 16 | used here | Records 6-role adr-review consensus ratifying Python migration. |
| .agents/architecture/ADR-052-template-strategy.md | 16 | used here | Cites adr-review debate log confirming acceptance of target template architecture. |
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 76 | used here | Marks adr-review as a blocking gate triggered on ADR modifications. |
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 278 | used here | Affirms that command-to-skill architectural migration triggers the adr-review gate. |
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 18 | used here | Documents 6-agent adr-review debate findings shaping optional frontmatter phase. |
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 18 | used here | Mandates adr-review completion before status transitions to Accepted. |
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 18 | used here | Identifies blocking gaps resolved through adr-review before implementation. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 16 | used here | Records consensus reached in Round 1 of six-role adr-review debate. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 248 | used here | Cites adr-review panel debate finding regarding authorization precedent. |
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 24 | used here | References adr-review seats flagging contract flag side-effects. |
| .claude/skills/adr-generator/SKILL.md | 190 | used here | Recommends invoking adr-review skill for multi-agent validation after drafting. |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 88 | used here | Evaluates ADR diffs to determine if content modifications require adr-review. |
| .claude/skills/adr-review/SKILL.md | 2 | defined here | Defines the adr-review multi-agent debate orchestration skill. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 30 | used here | Maps adr-review debate gate as mandatory validation for ADR documents of record. |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 76 | used here | Specifies that frontier research edits to ADRs fire the adr-review debate gate. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 55 | used here | Formulates adr-review 6-agent debate rules and automatic trigger criteria. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 16 | used here | Cites adr-review as a core decision-making integration partner. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 237 | used here | Outlines automatic adr-review trigger for Standard and Deep tier decisions. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 191 | used here | Instructs triggering adr-review for multi-agent consensus on framework decisions. |
| .claude/skills/code-qualities-assessment/SKILL.md | 410 | used here | Documents workflow integration between code quality assessment and adr-review. |
| AGENTS.md | 43 | defined here | Establishes the repo-wide policy rule that any ADR edit fires adr-review. |
| scripts/eval/eval-knowledge-integration.py | 246 | used here | Evaluates knowledge integration against adr-review consensus records. |
| scripts/validation/git_hook_policy.py | 8408 | defined here | Implements mechanical git hook policy enforcement handler for adr-review. |
| scripts/validation/rule_activation_coverage_baseline.json | 26 | used here | Tracks activation coverage baseline metrics for adr-review rule triggers. |

## Consumes
Draft or modified ADR documents (`.agents/architecture/ADR-*.md`) and architectural change proposals.

## Produces
Structured multi-agent debate logs (`.agents/critique/ADR-NNN-debate-log.md`), consensus verdicts, and updated ADR documents.

## When applied
Triggered automatically upon the creation, modification, or supersession of any architectural decision record file.

## Sub-concepts
none

## Part of
routing-level-enforcement-gates, architecture-governance

## Implementation status
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, internal-contradiction, missing-dependency, missing-doc, missing-path, unfailable-gate

## Design notes
A mandatory multi-agent consensus gate in rjm that coordinates six specialized personas (architect, critic, independent-thinker, security, analyst, high-level-advisor) in structured debate rounds. It prevents unilateral architectural changes by requiring consensus before any ADR can transition to Accepted status.
