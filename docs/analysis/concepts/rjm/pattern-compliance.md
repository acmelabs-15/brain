---
package: rjm
name: Pattern Compliance
slug: pattern-compliance
kind: checklist
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pattern Compliance

## Definition — verbatim
> "| **Pattern Compliance** | Result dataclass, argparse, exit codes |" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 22 | defined here | Script Agent review criterion checking Result dataclass, argparse, and standardized exit codes. |

## Consumes
Python scripts packaged in skill `scripts/` directory.

## Produces
Verification of standard pattern implementation (Result dataclass, argparse CLI, exit codes).

## When applied
Evaluated by the Script Agent during Phase 4 synthesis review.

## Sub-concepts
none

## Part of
script-agent

## Implementation status
clean

## Design notes
A quality criterion enforced by the Script Agent in SkillForge Phase 4 to verify that skill scripts conform to repository standards such as Result dataclasses, standard argparse interfaces, and uniform exit codes.
