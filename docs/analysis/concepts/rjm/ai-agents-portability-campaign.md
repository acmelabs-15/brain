---
package: rjm
name: ai-agents-portability-campaign
slug: ai-agents-portability-campaign
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ai-agents-portability-campaign

## Definition — verbatim
> "Execute cross-harness hook changes for Claude Code and GitHub Copilot CLI using the settled official contract, versioned probes, generators, and runtime tests." — .claude/skills/ai-agents-portability-campaign/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 2 | defined here | Skill frontmatter name establishing the workflow for cross-harness hook migrations. |
| .claude/skills/CLAUDE.md | 8 | used here | Core governance directive routing all cross-harness mutations through ai-agents-portability-campaign. |
| templates/AGENTS.md | 10 | used here | Agent template rule mandating ai-agents-portability-campaign for cross-harness hook and runtime changes. |

## Consumes
Settled official harness contracts (`agent-harness-reference`), probe evidence, and test fixtures.

## Produces
Verified cross-harness hook adaptations, updated generators, and passing runtime test suites.

## When applied
Triggered when porting hooks to new harnesses, addressing Copilot hook regressions, or updating across CLI versions.

## Sub-concepts
phase-0-load-the-settled-contract, phase-1-classify-the-source-hook, phase-2-change-canonical-sources, phase-3-test-before-generation, phase-4-regenerate-all-mirrors, phase-5-test-shipped-artifacts, phase-6-refresh-knowledge-only-when-needed

## Part of
cross-harness-abstraction

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path

## Design notes
A standardized 7-phase methodology (Phases 0 through 6) designed to manage cross-platform agent and hook compatibility across Claude Code and GitHub Copilot CLI. Rather than allowing ad-hoc drift across vendor interfaces, the campaign enforces strict progression from settled contract verification through canonical editing, pre-generation testing, mirror regeneration, and artifact validation.
