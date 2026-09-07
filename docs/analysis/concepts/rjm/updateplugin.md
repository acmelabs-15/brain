---
package: rjm
name: updatePlugin
slug: updateplugin
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# updatePlugin

## Definition — verbatim
(used, not defined)

> "The premise that has changed is the Copilot one: the shipped 1.0.78-0 bundle calls `updatePlugin` unconditionally, and the official CLI plugin reference lists `version` as optional metadata." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 16 | used here | Cites GitHub Copilot CLI runtime bundle function executed to refresh installed plugin caches. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An internal JavaScript function identifier in the GitHub Copilot CLI runtime bundle that triggers plugin cache updates, representing an external host runtime implementation detail rather than an in-scope development lifecycle concept.
