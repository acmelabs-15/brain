---
package: rjm
name: Dependency Hygiene
slug: dependency-hygiene
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

# Dependency Hygiene

## Definition — verbatim
> "### Dependency Hygiene" — .claude/agents/janitor.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 53 | defined here | Section heading detailing dependency pruning, consolidation, and security updating rules. |
| templates/agents/janitor.shared.md | 61 | defined here | Section heading specifying dependency cleanup tasks across shared templates. |

## Consumes
Package manifests, import statements, dependency lock files, and vulnerability scan reports.

## Produces
Pruned dependency lists, updated security patches, consolidated third-party packages, and lighter dependency footprints.

## When applied
During codebase audits when evaluating third-party packages for bloat, obsolescence, or vulnerabilities.

## Sub-concepts
none

## Part of
debt-removal-tasks

## Implementation status
clean

## Design notes
Enforces discipline over external dependencies within rjm. By mandating the removal of unused imports and packages, replacing bloated libraries with lighter alternatives, and consolidating redundant dependencies, it minimizes supply-chain attack surfaces and accelerates installation and build pipelines.
