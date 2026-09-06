---
package: matt
name: mattpocock-skills
slug: mattpocock-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: package-lock.json, sha256: b89967d44b654ceb7b9fcc7e0d6c3f74fb110bb96eb66c65bac14099c729338d}
  - {path: package.json, sha256: 167010d1c535a085be165835a4cc89e1de2760c2bf3b6e43c6ae045e41d0587b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# mattpocock-skills

## Definition — verbatim
(used, not defined)
> "\"name\": \"mattpocock-skills\"," — .claude-plugin/plugin.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/marketplace.json | 10 | defined here | Plugin name identifier in the marketplace catalog definition. |
| .claude-plugin/plugin.json | 2 | defined here | Plugin name field in the Claude Code plugin manifest. |
| package-lock.json | 2 | defined here | Root package name in the npm package lockfile. |
| package.json | 2 | defined here | Package name field in the npm package manifest. |

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
defects: cross-file-contradiction

## Design notes
Package identifier and plugin name in manifest and lockfiles rather than an engineering or lifecycle concept.
