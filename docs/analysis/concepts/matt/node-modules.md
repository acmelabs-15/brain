---
package: matt
name: node_modules
slug: node-modules
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gitignore, sha256: a7e7370254fc919ab78ddf61e0e3763b80ea7ade18863c6650c329da44b8ec7b}
  - {path: package-lock.json, sha256: b89967d44b654ceb7b9fcc7e0d6c3f74fb110bb96eb66c65bac14099c729338d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# node_modules

## Definition — verbatim
(used, not defined)
> "node_modules" — .gitignore:1

## Also called — verbatim
> "\"node_modules/@babel/runtime\": {" — package-lock.json:16

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gitignore | 1 | used here | Ignores the installed node_modules directory from git tracking. |
| package-lock.json | 16 | defined here | Top-level package key path prefix in the lockfile dependency tree. |

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
Standard Node.js dependency directory path in `.gitignore` and `package-lock.json` rather than an engineering lifecycle concept.
