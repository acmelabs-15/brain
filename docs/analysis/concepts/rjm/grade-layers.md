---
package: rjm
name: Grade layers
slug: grade-layers
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Grade layers

## Definition — verbatim
> "2. **Grade layers**: each domain is scored A-F across six architectural layers (agents, skills, scripts, tests, docs, workflows), with gaps tagged critical, significant, or minor." — .claude/skills/quality-grades/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/SKILL.md | 27 | defined here | Step 2 of the quality-grades process evaluating domains across six architectural layers with letter grades and gap severity tags. |

## Consumes
Discovered product domains and repository artifacts across agents, skills, scripts, tests, docs, and workflows.

## Produces
Scored layer evaluations with assigned letter grades (A-F) and categorized gap listings per layer.

## When applied
Step 2 of domain quality auditing following domain detection.

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
defects: doc-drift

## Design notes
A multi-layered evaluation technique that scores product domains across six architectural layers (agents, skills, scripts, tests, docs, workflows) rather than reducing health to a monolithic code metric, ensuring balanced quality across specifications, automation, and documentation.
