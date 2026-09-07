---
package: rjm
name: chestertons-fence
slug: chestertons-fence
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# chestertons-fence

## Definition — verbatim
> "understand why the original is slow or messy before ripping it out." — .claude/skills/decision-critic/references/rewrite-regression-check.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 117 | used here | Cited as the governance requirement that any ADR moving corpus artifacts must pass through chestertons-fence. |
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 33 | used here | Composed as the first skill in the Step 0.5 Memory-First Gate sequence to answer why current state exists. |
| .agents/architecture/ADR-TEMPLATE.md | 54 | used here | Automation script cited for researching prior art when changing existing systems in ADRs. |
| .claude/skills/adr-generator/SKILL.md | 76 | used here | Triggered during readiness check to gather prior art before modifying existing systems. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 59 | used here | Mapped as the gate answering "why does this constraint exist" before proposing removals. |
| .claude/skills/context-gather/SKILL.md | 137 | used here | Listed as a sibling preflight skill in the /build chain. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 77 | used here | Cross-linked to advise understanding why code is slow or messy before ripping it out. |
| .claude/skills/decision-critic/SKILL.md | 4 | used here | Explicitly distinguished as the proper tool for probing why constraints exist rather than decision-critic. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 22 | used here | Referenced as an example of a token that names both a skill and a memory. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 14 | used here | Emitted as a required recommendation line (PRESERVE, MODIFY, REPLACE, REMOVE) in the Prior Art block. |
| templates/agents/architect.shared.md | 47 | used here | Listed under primary architecture principles to understand existing patterns before changing them. |

## Consumes
Target file, pattern, constraint, or component to be modified or removed, plus repository git archaeology.

## Produces
Historical rationale and recommendation (PRESERVE, MODIFY, REPLACE, or REMOVE) with supporting evidence.

## When applied
Before proposing the removal or alteration of any settled constraint, pattern, architecture, or legacy implementation.

## Sub-concepts
none

## Part of
prior-art-investigation, memory-first-gate

## Implementation status
out-of-scope (memory and archaeology skill excluded per METHOD §1.2)

## Design notes
The core principle and archaeological investigation skill ensuring that agents and engineers thoroughly understand why an existing design or constraint was created before altering or deleting it, preventing recurring regressions.
