---
package: addy
name: marketplace
slug: marketplace
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

# marketplace

## Definition — verbatim
(used, not defined)
> "codex plugin marketplace add addyosmani/agent-skills" — docs/codex-setup.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codex-setup.md | 8 | defines | Command line registry namespace used by Codex CLI to register plugin repositories |

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
Marketplace is a package registry namespace and distribution command mechanism in Codex CLI rather than a lifecycle concept.
