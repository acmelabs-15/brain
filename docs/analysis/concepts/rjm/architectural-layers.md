---
package: rjm
name: architectural layers
slug: architectural-layers
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# architectural layers

## Definition — verbatim
> "## Architectural Layers" — .claude/skills/quality-grades/SKILL.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 3 | references | Description defining the six architectural layers scanned during quality auditor runs. |
| .claude/skills/quality-grades/SKILL.md | 59 | defines | Section defining the six standard layers (agents, skills, scripts, tests, docs, workflows). |

## Consumes
Repository directory tree and file artifacts categorized by layer.

## Produces
Layer-based segmentation of repository assets for targeted grading and quality audits.

## When applied
Used during repository audits to organize quality grading by structural concern.

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
clean

## Design notes
The structural taxonomy dividing repository artifacts into six standard layers: agents, skills, scripts, tests, docs, and workflows. Graded independently by the quality auditor, these layers isolate architectural health and debt hotspots across distinct functional concerns.
