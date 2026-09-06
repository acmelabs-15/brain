---
package: addy
name: Persistent Context
slug: persistent-context
kind: pattern
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

# Persistent Context

## Definition — verbatim
(used, not defined)

> "### Option 2: GEMINI.md (Persistent Context)" — docs/gemini-cli-setup.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/gemini-cli-setup.md | 38 | used here | Section heading presenting GEMINI.md configuration for always-on project context. |

## Consumes
Core skill files (`incremental-implementation`, `code-review-and-quality`) and project-specific conventions.

## Produces
Always-on context injected into agent prompt on every session turn.

## When applied
When core engineering rules or quality standards must be enforced continuously without relying on on-demand activation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Persistent Context in Addy provides an always-on baseline of core engineering rules and essential skills (such as incremental implementation and code review) by loading them into project-level configuration files (e.g., GEMINI.md or CLAUDE.md), contrasting with on-demand skill activation to preserve token budget while enforcing non-negotiable standards.
