---
package: rjm
name: CLAUDE_CODE_ONLY_KEYS
slug: claude-code-only-keys
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_pr_review_config.py, sha256: 6ecb12ec366c7eabe944f9e19f33e45d830ff1783fd7e899fcc516bae7dbeb79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CLAUDE_CODE_ONLY_KEYS

## Definition — verbatim
(used, not defined)

> "CLAUDE_CODE_ONLY_KEYS = [" — scripts/validate_pr_review_config.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_pr_review_config.py | 77 | defined here | Constant list defining script keys that are required only for the Claude Code platform. |

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
defects: orphan

## Design notes
CLAUDE_CODE_ONLY_KEYS is a schema list identifier specifying script keys exclusive to Claude Code execution in scripts/validate_pr_review_config.py rather than an SDLC lifecycle concept.
