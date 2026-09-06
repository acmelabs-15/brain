---
package: matt
name: teach
slug: teach
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
  - {path: skills/productivity/teach/agents/openai.yaml, sha256: 5856f3ae8aec742f1499c640aecdd5f1d6af5fa210a7c6ec794de8263a6f733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# teach

## Definition — verbatim
> "`teach` turns the directory you run it in into a standing teaching workspace and teaches you one topic across many [sessions](https://www.aihero.dev/ai-coding-dictionary/session), in short self-contained HTML lessons." — docs/productivity/teach.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 36 | used here | Cites teach as a stateful skill that builds a whole directory with explicit prerequisites. |
| docs/productivity/teach.md | 3 | defined here | Defines teach as the multi-session pedagogical skill creating an isolated learning workspace. |
| external/teach.md | 25 | defined here | Defines teach as the multi-session pedagogical skill creating an isolated learning workspace. |
| external/to-questionnaire.md | 74 | used here | Contrasts to-questionnaire with teach when structured knowledge capture is needed. |
| skills/productivity/README.md | 11 | used here | References teach as the standalone educational workspace skill in README. |
| skills/productivity/teach/agents/openai.yaml | 2 | defined here | References teach as the standalone educational workspace skill in openai.yaml. |
| skills/productivity/teach/SKILL.md | 2 | defined here | Defines teach as the multi-session pedagogical skill creating an isolated learning workspace. |

## Consumes
A topic to be learned and high-trust external documentation resources.

## Produces
A dedicated learning workspace with RESOURCES.md, MISSION.md, LEARNING-RECORD.md, and interactive HTML lessons.

## When applied
Invoked via `/teach` when a developer wants to study an extensive topic across multiple sessions.

## Sub-concepts
MISSION.md, RESOURCES.md, LEARNING-RECORD.md

## Part of
productivity

## Implementation status
defects: doc-drift, script-bug, internal-contradiction, orphan, missing-path, other

## Design notes
A dedicated pedagogical skill that isolates learning activities from production code. It verifies external learning materials rather than trusting model parametric memory and delivers bite-sized HTML lessons that track progress across sessions.
