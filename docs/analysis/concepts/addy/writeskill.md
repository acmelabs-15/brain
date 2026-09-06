---
package: addy
name: writeSkill
slug: writeskill
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals-test.js, sha256: a5615342742376308da5890c366714d33dba36a09b66bd2a842dc5f773af0de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# writeSkill

## Definition — verbatim
(used, not defined)
> "function writeSkill(root, name, description) {" — scripts/run-evals-test.js:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 20 | defined here | Scaffolds a synthetic SKILL.md directory and markdown file for test sandboxes. |

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
defects: other

## Design notes
Test utility function in `scripts/run-evals-test.js` writing synthetic skill fixtures into temporary test directories, rather than an engineering lifecycle concept.
