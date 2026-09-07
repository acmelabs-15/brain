---
package: rjm
name: Cross-Platform Patterns
slug: cross-platform-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cross-Platform Patterns

## Definition — verbatim
> "### Cross-Platform Patterns" — scripts/AGENTS.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 95 | defined here | Defines conventions for path separators, command resolution, and environment variables across platforms. |

## Consumes
Filesystem paths, environment variables, and shell invocations in scripts.

## Produces
Cross-platform compatible automation running reliably on Windows, macOS, and Linux.

## When applied
During script authoring and code review to avoid platform-dependent assumptions.

## Sub-concepts
none

## Part of
powershell-coding-standards

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Cross-platform development rules ensuring file path resolution, environment variables, and shell invocations operate consistently across POSIX and Windows developer environments.
