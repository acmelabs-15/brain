---
package: rjm
name: Skill File Format
slug: skill-file-format
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skill File Format

## Definition — verbatim
> "## Skill File Format (ADR-017)" — .claude/agents/skillbook.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/skillbook.md | 57 | defined here | Specification format defining the required markdown sections for individual skill files. |
| templates/agents/skillbook.shared.md | 60 | defined here | Shared template specification defining the ADR-017 skill file layout. |

## Consumes
Validated learning rules, context descriptions, concrete evidence citations, and code patterns.

## Produces
Standardized memory documents saved to `.serena/memories/{domain}/{domain}-{NNN}-{short-descriptor}.md`.

## When applied
Applied whenever skillbook creates or updates a persistent skill file.

## Sub-concepts
none

## Part of
skillbook-agent

## Implementation status
defects: missing-path

## Design notes
Skill File Format defines the standardized markdown structure governed by ADR-017 for persistent memories in .serena/memories/{domain}/, including Statement, Context, Evidence, Atomicity, Impact, Pattern, and Anti-Pattern sections.
