---
package: rjm
name: markdownlint
slug: markdownlint
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# markdownlint

## Definition — verbatim
(used, not defined)

> "Session protocol requires running quality checks at session end, including markdownlint for markdown formatting consistency. The current protocol uses repository-wide tool execution:" — .agents/architecture/ADR-043-scoped-tool-execution.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 145 | used here | Listed as the linter executed during the QUALITY_CHECKS phase to validate markdown exit code. |
| .agents/architecture/ADR-043-scoped-tool-execution.md | 24 | used here | Analyzed in context as an automated formatting tool whose unscoped execution causes repository-wide diff pollution. |
| .claude/skills/validation-authority/SKILL.md | 13 | used here | Cited as an external validator whose upstream defaults must be respected. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
markdownlint is an external linting CLI tool identifier executed during quality checks rather than an internal lifecycle concept.
