---
package: rjm
name: auto-update bypass
slug: auto-update-bypass
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# auto-update bypass

## Definition — verbatim
> "This binary auto-updates independently of the npm package version." — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 52 | defined here | Section heading and operational mechanism preventing CLI binaries from self-updating past pinned versions. |

## Consumes
Copilot CLI installation package and version pinning configuration.

## Produces
Deterministic tool invocation ensuring the CLI binary remains at the pinned, tested version.

## When applied
Applied during CI execution and developer setup to prevent upstream breaking regressions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
Auto-update bypass is an operational stability technique that uses execution wrappers and CLI flags (--no-auto-update) to suppress autonomous binary updates in third-party CLI packages, preserving deterministic CI environments.
