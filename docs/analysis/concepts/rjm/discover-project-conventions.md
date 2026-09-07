---
package: rjm
name: Discover Project Conventions
slug: discover-project-conventions
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Discover Project Conventions

## Definition — verbatim
> "Before flagging a convention violation, discover the rules that actually apply to this repository." — .claude/agents/code-reviewer.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 52 | defined here | Protocol for discovering repo-specific rules, linter configs, and local patterns before flagging violations. |
| templates/agents/code-reviewer.shared.md | 62 | defined here | Protocol for discovering repo-specific rules, linter configs, and local patterns before flagging violations. |

## Consumes
Repository instruction files (AGENTS.md, CLAUDE.md, CONTRIBUTING.md), linter/formatter configurations, and local directory patterns.

## Produces
Evidence-based catalog of discovered conventions against which candidate code changes are judged.

## When applied
Conducted prior to reporting any convention or style violation during code review.

## Sub-concepts
none

## Part of
code-reviewer

## Implementation status
clean

## Design notes
Discover Project Conventions mandates that reviewing agents actively discover repository-specific rules (from AGENTS.md, CLAUDE.md, linter configs, or local directory patterns) before asserting violations. By distinguishing established local conventions from generic preferences and requiring citations for discovered rules, it eliminates arbitrary stylistic disputes.
