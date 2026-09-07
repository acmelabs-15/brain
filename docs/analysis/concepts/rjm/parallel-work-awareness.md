---
package: rjm
name: Parallel Work Awareness
slug: parallel-work-awareness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Parallel Work Awareness

## Definition — verbatim
> "### Parallel Work Awareness" — .claude/agents/implementer.md:484

## Also called — verbatim
> "### Parallel Work Awareness" — templates/agents/implementer.shared.md:473

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 484 | defined here | Section heading detailing protocols to prevent helper duplication when working concurrently with other agents. |
| templates/agents/implementer.shared.md | 473 | defined here | Section heading instructing agents on preventing duplicate utilities during parallel execution. |

## Consumes
Existing test helpers, shared utility libraries, and concurrent agent branch artifacts.

## Produces
Reused common helpers and unified utilities rather than duplicate private helper implementations.

## When applied
When multiple agents work in parallel on concurrent tasks or before defining new helper methods.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Parallel Work Awareness prevents boilerplate and helper duplication when multiple agents operate concurrently in rjm. By directing agents to search for existing fixtures and utility functions before creating new helpers, it keeps the codebase DRY and avoids merge conflicts.
