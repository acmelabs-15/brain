---
package: rjm
name: Security Review Scope
slug: security-review-scope
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Security Review Scope

## Definition — verbatim
> "## Security Review Scope" — templates/agents/security.shared.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/security.shared.md | 72 | defined here | Mandatory gate definition establishing that all pull requests require pinned changeset security evaluation. |

## Consumes
Changeset diff snapshot artifacts, commit SHAs, or pull request numbers.

## Produces
Enumerable review scope bound to a specific snapshot with verified file counts.

## When applied
Evaluated at the start of every security review before assessing code.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: missing-path, doc-drift

## Design notes
A governance rule establishing that security review is mandatory for all code changes, requiring an explicitly enumerated and pinned changeset snapshot before any security evaluation can proceed.
