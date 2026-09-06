---
package: addy
name: evals.json
slug: evals-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals.json

## Definition — verbatim
(used, not defined)

> "- **Anthropic's skill-creator v2** defines a per-skill `evals.json` (prompt + `expectations[]`, graded from the transcript) plus trigger-accuracy testing of descriptions against sample prompts. We adopt its [`evals.json` schema](https://github.com/anthropics/skills/tree/main/skills/skill-creator) for our behavioral tier and add one optional `kind` field to select the artifact being graded." — evals/README.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/README.md | 9 | used here | Configuration file name defining per-skill behavioral prompts, expectations, and grading kind |

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
defects: doc-drift

## Design notes
Configuration file name specifying evaluation test cases for skills; not a software development lifecycle concept.
