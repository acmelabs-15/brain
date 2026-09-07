---
package: rjm
name: reflect
slug: reflect
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# reflect

## Definition — verbatim
> "name: reflect" — .claude/skills/reflect/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-gather/SKILL.md | 135 | used here | Listed in skill composition as a downstream consumer benefiting from pre-gathered context. |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 16 | used here | Listed as an excluded root skill name in regex pattern validation. |
| .claude/skills/reflect/SKILL.md | 2 | defined here | Frontmatter name defining the real-time learning and correction extraction skill. |
| .claude/skills/retrospective/SKILL.md | 4 | used here | Contrasted in skill description as the immediate in-conversation correction capture tool versus full session retrospectives. |

## Consumes
User corrections, edge case discoveries, and conversation feedback signals.

## Produces
Calibrated learning patterns (HIGH/MED/LOW confidence) and continuous improvement updates for skills.

## When applied
Invoked proactively after corrections ("no", "wrong") or praise ("perfect", "exactly") during interactive agent operation.

## Sub-concepts
none

## Part of
continuous-improvement

## Implementation status
clean

## Design notes
An immediate learning capture technique in rjm that processes conversational feedback and corrections in real time, converting transient mistakes into reusable institutional memory before session termination.
