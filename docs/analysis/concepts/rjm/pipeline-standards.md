---
package: rjm
name: Pipeline Standards
slug: pipeline-standards
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pipeline Standards

## Definition — verbatim
> "## Pipeline Standards" — .claude/agents/devops.md:274

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 274 | defined here | Section heading defining engineering best practices for GitHub Actions, build, and test configurations. |
| templates/agents/devops.shared.md | 189 | defined here | Section heading establishing standard pipeline conventions in the shared devops agent template. |

## Consumes
Workflow definition files (`.github/workflows/*.yml`), action dependencies, and build scripts.

## Produces
Standardized, secure pipeline definitions using pinned action commit SHAs, composite actions, matrix builds, and artifact caching.

## When applied
When authoring or reviewing CI/CD pipeline definitions.

## Sub-concepts
none

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
The baseline engineering standards governing CI/CD implementation in rjm. It enforces security practices such as pinning GitHub Actions to exact full-length commit SHAs, utilizing composite actions for reuse, leveraging dependency caching for build speed, and isolating test categories.
