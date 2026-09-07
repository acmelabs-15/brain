---
package: rjm
name: Custom merge driver
slug: custom-merge-driver
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Custom merge driver

## Definition — verbatim
(used, not defined)

> "| **3. Custom merge driver** | GitHub server-side merge ignores `.gitattributes` drivers. `mergeable` still reports CONFLICTING. Closed. |" — .agents/architecture/ADR-091-post-merge-version-bot.md:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 226 | used here | Evaluated as an alternative for automatic 3-way conflict resolution, rejected due to GitHub server-side limitations. |

## Consumes
Gitattributes configuration and git merge resolution hooks.

## Produces
Customized three-way merge resolution for specified file types.

## When applied
Investigated for automating resolution of manifest version conflicts.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Git merge customization technique investigated in ADR-091 to automatically resolve scalar conflicts, rejected because GitHub's server-side pull request merge API ignores client-side `.gitattributes` merge drivers.
