---
package: rjm
name: Script Structure
slug: script-structure
kind: template
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

# Script Structure

## Definition — verbatim
> "### Script Structure" — scripts/AGENTS.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 23 | defined here | Defines standard template structure including synopsis, description, parameters, and main execution block. |

## Consumes
New automation or utility script specifications.

## Produces
Standardized script layout with clear synopsis documentation and typed parameters.

## When applied
When authoring automation and utility scripts across the repository.

## Sub-concepts
error-handling-pattern

## Part of
powershell-coding-standards

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Standard structural template defining headers, comment-based help/synopsis, parameter blocks, and execution flow for repository maintenance and validation scripts.
