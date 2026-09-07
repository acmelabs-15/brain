---
package: rjm
name: Repository management
slug: repository-management
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/github-api-capabilities.md, sha256: ba3d6e9563db20b6b305b98637896d233aa22c3caeea83f79ff21be7769a23b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Repository management

## Definition — verbatim
(used, not defined)

> "| Repository management | Full support | Full support | REST |" — docs/github-api-capabilities.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/github-api-capabilities.md | 48 | used here | Listed in the capability matrix with a recommendation to use the REST API for repository management operations. |

## Consumes
Repository administration permissions and configuration settings.

## Produces
Configured repository settings, collaborator access rules, topics, and repository policies.

## When applied
> "Repository management" — docs/github-api-capabilities.md:48

## Sub-concepts
branch-protection-rules

## Part of
none

## Implementation status
defects: orphan

## Design notes
Repository management encompasses administrative configuration, security policies, and governance across GitHub repositories. In rjm, it is recommended to operate over REST due to stable endpoint design and direct resource mappings.
