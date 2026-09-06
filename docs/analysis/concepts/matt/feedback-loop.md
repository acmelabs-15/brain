---
package: matt
name: feedback loop
slug: feedback-loop
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# feedback loop

## Definition — verbatim
> "It will not let the agent form a theory until a **tight** feedback loop exists: one named command, already run once, that goes red on *this* bug and green when it is fixed." — docs/engineering/diagnosing-bugs.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 5 | defined here | Defined as the indispensable prerequisite gate that stops an agent from guessing and drives all subsequent diagnosis. |
| external/diagnosing-bugs.md | 26 | defined here | Defined in external documentation as the single named command required to go red on the defect before forming theories. |
| skills/engineering/diagnosing-bugs/SKILL.md | 18 | defined here | Section heading for Phase 1 instructions mandating the construction of a tight pass/fail signal. |
| skills/productivity/teach/SKILL.md | 108 | defined here | Prescribed as the interactive pedagogical mechanism giving users immediate, automated feedback on exercises. |

## Consumes
Bug symptoms, test scripts, CLI fixtures, network captures, or interactive quiz responses.

## Produces
An automated pass/fail verification mechanism that evaluates performance or bug presence in seconds.

## When applied
At the start of bug diagnosis (Phase 1) before hypothesizing, or during interactive learning exercises in skill acquisition.

## Sub-concepts
tight, reproduction-rate

## Part of
diagnosing-bugs, teach

## Implementation status
defects: doc-drift (over-triggering on simple issues in diagnosing-bugs.md:59; missing GLOSSARY-FORMAT.md link in teach/SKILL.md:14-17), other (lack of initial knowledge assessment in teach/SKILL.md:85-90)

## Design notes
The central disciplining mechanism in Matt's problem-solving skills. By requiring an automated, reproducible feedback loop before permitting theory generation or code changes, it eliminates speculative "staring at code and guessing" by agents.
