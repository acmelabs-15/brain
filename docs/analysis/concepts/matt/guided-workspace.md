---
package: matt
name: guided workspace
slug: guided-workspace
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/agents/openai.yaml, sha256: 5856f3ae8aec742f1499c640aecdd5f1d6af5fa210a7c6ec794de8263a6f733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# guided workspace

## Definition — verbatim
> "short_description: \"Learn a concept in a guided workspace\"" — skills/productivity/teach/agents/openai.yaml:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/agents/openai.yaml | 3 | defined here | Highlights the workspace-guided learning model in the OpenAI interface metadata description. |

## Consumes
A local directory structure and pedagogical format templates (`MISSION-FORMAT.md`, `LEARNING-RECORD-FORMAT.md`).

## Produces
A guided multi-session learning environment with interactive HTML lessons and learning records.

## When applied
Triggered when a user initiates a teaching workflow via `/teach`.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
A workspace pattern in which the agent guides the user through structured, incremental learning by persisting missions, lessons, and records directly into a dedicated directory.
