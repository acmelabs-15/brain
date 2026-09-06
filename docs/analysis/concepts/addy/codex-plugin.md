---
package: addy
name: Codex plugin
slug: codex-plugin
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codex-setup.md, sha256: ca30bfcc17ae3b2253573cd21c5f0768ae7eb99e7972b2935aa8c2ba68d65147}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Codex plugin

## Definition — verbatim
(used, not defined)
> "This repository is also a [Codex plugin](https://developers.openai.com/codex/plugins/build). The same root-level `skills/` directory used by Claude Code is consumed by Codex, so no files are copied or duplicated." — docs/codex-setup.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codex-setup.md | 3 | defines | Packaging configuration enabling the repository skills to be consumed by OpenAI Codex CLI |

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
Codex plugin describes a distribution packaging format and manifest configuration for the OpenAI Codex CLI runtime rather than a software development lifecycle concept.
