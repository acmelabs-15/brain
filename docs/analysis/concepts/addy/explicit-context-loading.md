---
package: addy
name: Explicit Context Loading
slug: explicit-context-loading
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Explicit Context Loading

## Definition — verbatim
(used, not defined)

> "### Explicit Context Loading" — docs/gemini-cli-setup.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/gemini-cli-setup.md | 98 | used here | Heading describing manual `@` skill reference syntax to force skill inclusion into session context. |

## Consumes
Path to skill file (`@skills/<skill-name>/SKILL.md`).

## Produces
Immediate insertion of skill workflow instructions into active conversation context.

## When applied
When the developer wants to guarantee a specific workflow is executed without relying on agent auto-discovery.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Explicit Context Loading allows developers to bypass automated routing heuristics by directly referencing skill files via `@` syntax, providing deterministic execution when entering critical lifecycle phases.
