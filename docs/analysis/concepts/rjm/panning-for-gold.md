---
package: rjm
name: panning-for-gold
slug: panning-for-gold
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
  - {path: .claude/skills/panning-for-gold/scripts/__init__.py, sha256: 15a724228f8db66216147be533a0b34f2ef47c62be6d1ec6b799808ddc54b74a}
  - {path: .claude/skills/panning-for-gold/scripts/inventory.py, sha256: b622e9c01913b410cadc11fa13a34ca0b2a6bc8bfcccfac206b54c2a3f3f4972}
  - {path: .claude/skills/panning-for-gold/scripts/pan.py, sha256: f448b2523db6e65590e2bf7fd22bd6426e17d2eb9424632d6d77019aff99b533}
  - {path: .claude/skills/panning-for-gold/scripts/synthesis.py, sha256: 8349fd7fd52af44f1f05ce0dd8ea038ca334dfb456f5ba2b92932ab1451dce87}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# panning-for-gold

## Definition — verbatim
> "name: panning-for-gold" — .claude/skills/panning-for-gold/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/panning-for-gold/scripts/__init__.py | 1 | used here | Referenced and applied in __init__.py during verification and operational workflows. |
| .claude/skills/panning-for-gold/scripts/inventory.py | 2 | used here | Referenced and applied in inventory.py during verification and operational workflows. |
| .claude/skills/panning-for-gold/scripts/pan.py | 2 | used here | Referenced and applied in pan.py during verification and operational workflows. |
| .claude/skills/panning-for-gold/scripts/synthesis.py | 2 | used here | Referenced and applied in synthesis.py during verification and operational workflows. |
| .claude/skills/panning-for-gold/SKILL.md | 2 | defined here | Primary definition of `panning-for-gold` within SKILL.md. |
| .claude/skills/research-and-incorporate/SKILL.md | 22 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |
| .claude/skills/world-model-diagnostic/SKILL.md | 291 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (panning-for-gold) utilized within the rjm ecosystem to ensure consistency and systematic execution.
