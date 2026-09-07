---
package: rjm
name: Code Organization Review
slug: code-organization-review
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Code Organization Review

## Definition — verbatim
> "When reviewing PRs that add new directories or relocate files, assess structural cohesion." — .claude/agents/architect.md:534

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 532 | defined here | Structural cohesion review assessing directory hierarchy, nesting depth, and anti-patterns for filesystem changes. |
| templates/agents/architect.shared.md | 701 | defined here | Structural cohesion review assessing directory hierarchy, nesting depth, and anti-patterns for filesystem changes. |

## Consumes
Pull request diffs introducing new directories, file moves, or module restructuring.

## Produces
Structural assessment, anti-pattern identification (single-file directories, deep nesting), and consolidation recommendations.

## When applied
Triggered whenever a pull request adds new directories or moves files within the repository.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
Code Organization Review evaluates the filesystem layout of the project to maintain conceptual cohesion. It assesses directory nesting depth, identifies organizational anti-patterns (such as single-file directories, deep nesting without domain boundaries, and redundant parallel structures), and ensures consistent naming conventions across packages.
