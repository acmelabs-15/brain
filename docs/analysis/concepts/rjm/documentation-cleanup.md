---
package: rjm
name: Documentation Cleanup
slug: documentation-cleanup
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Documentation Cleanup

## Definition — verbatim
> "### Documentation Cleanup" — .claude/agents/janitor.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 67 | defined here | Section heading detailing removal of stale comments, auto-generated boilerplate, and broken links. |
| templates/agents/janitor.shared.md | 75 | defined here | Section heading specifying documentation hygiene tasks across shared templates. |

## Consumes
Outdated inline comments, auto-generated boilerplate headers, redundant docstrings, and stale documentation links.

## Produces
Clean source files free of comment drift, updated documentation links, and uncluttered codebases.

## When applied
During codebase cleanup to eliminate misleading or redundant documentation.

## Sub-concepts
none

## Part of
debt-removal-tasks

## Implementation status
clean

## Design notes
Addresses documentation rot by removing comments and markdown files that have diverged from the actual codebase. It prevents developer and agent confusion by purging outdated explanations, deleting auto-generated boilerplate, and eliminating comments that merely restate what clean code already expresses.
