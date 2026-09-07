---
package: rjm
name: front-gate-before-pipeline
slug: front-gate-before-pipeline
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# front-gate-before-pipeline

## Definition — verbatim
(used, not defined)

> "Pair this with the `front-gate-before-pipeline` pattern. Front-gate fires before work begins; this skill fires after work appears done." — .claude/skills/avoiding-manufactured-work/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/plan.md | 15 | used here | Applied to mandate that planning halts unless an upfront front-gate has validated the underlying specification. |
| .claude/skills/avoiding-manufactured-work/SKILL.md | 14 | used here | Cited as the complementary pre-execution counterpart to post-completion manufactured-work avoidance. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 118 | used here | Registered in FOREIGN_SKILL_CATALOGS as an external skill pattern originating from the gstack catalog. |
| .claude/skills/panning-for-gold/SKILL.md | 53 | used here | Referenced as the Phase 0 pattern executed inline or via external skill before extraction runs. |
| .claude/skills/research-and-incorporate/SKILL.md | 22 | used here | Mandated as a pre-Phase 1 check to ensure research is driven by a real consumer rather than speculative interest. |

## Consumes
Pipeline trigger requests and raw candidate inputs across planning, research, and data synthesis workflows.

## Produces
Go/no-go determination halting pipelines lacking demonstrable consumer demand.

## When applied
Executed immediately prior to initiating any substantial multi-step pipeline (`/plan`, `/research`, `panning-for-gold`).

## Sub-concepts
six-forcing-questions

## Part of
front-gate, avoiding-manufactured-work

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural guardrail pattern that enforces pre-execution gating across all generative pipelines in rjm. It pairs symmetrically with `avoiding-manufactured-work`: while front-gate stops unjustified work from starting, avoiding-manufactured-work stops unneeded deliverables from persisting at the end. Together they mitigate autonomous LLM reward bias.
