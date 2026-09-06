---
package: addy
name: writeClaudeCommand
slug: writeclaudecommand
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-commands-test.js, sha256: 15759574e8a6348693096681343602b6d63d3ab8fb2db90b308e2ca83ac08ab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# writeClaudeCommand

## Definition — verbatim
(used, not defined)
> "function writeClaudeCommand(root, stem, descriptionLine) {" — scripts/validate-commands-test.js:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands-test.js | 30 | defines | Test helper function creating a mock Claude markdown command file in a sandbox directory. |

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
Test fixture helper function used to write synthetic Claude markdown command files within test sandboxes rather than an independent lifecycle concept.
