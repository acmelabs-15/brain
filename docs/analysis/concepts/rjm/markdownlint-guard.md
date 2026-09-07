---
package: rjm
name: markdownlint_guard
slug: markdownlint-guard
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# markdownlint_guard

## Definition — verbatim
(used, not defined)

> "`markdownlint_guard` and `require_subagent_model`, summing to 100 seconds of" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 140 | used here | Hook guard running markdownlint on documentation changes, relocated to git hooks |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 77 | used here | Deleted PreToolUse shim retired in favor of git commit hooks |

## Consumes
Markdown file edits and markdownlint configuration rules.

## Produces
Lint validation verdict blocking tool execution on markdown style violations.

## When applied
Applied during PreToolUse before saving edits to markdown files.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
markdownlint_guard was a PreToolUse hook that verified markdown formatting rules on file writes, later relocated to Git pre-commit hooks under ADR-085 to avoid runtime tool latency.
