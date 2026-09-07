---
package: rjm
name: research-and-incorporate
slug: research-and-incorporate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# research-and-incorporate

## Definition — verbatim
> "name: research-and-incorporate" — .claude/skills/research-and-incorporate/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 2 | defined here | Frontmatter name identifying the skill for researching external topics and incorporating knowledge into project memory. |

## Consumes
Topic name, context description, optional source URLs, and front-gate verification of downstream consumer.

## Produces
Analysis document (`.agents/analysis/{topic-slug}.md`), Serena project memory, 5-10 atomic Forgetful memories, and follow-up issue.

## When applied
Invoked via `/research-and-incorporate` or natural language triggers when deep research on an external concept is required for project integration.

## Sub-concepts
front-gate-first, phase-1-research, phase-2-analysis-document, phase-3-applicability, phase-4-memory-integration, phase-5-action-items

## Part of
cross-phase lifecycle tooling

## Implementation status
defects: doc-drift, missing-path

## Design notes
A structured 5-phase research workflow in rjm designed to ingest external concepts, frameworks, and methodologies into durable, searchable repository context while enforcing prompt-injection defenses and front-gate necessity checks.
