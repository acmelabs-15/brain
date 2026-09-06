---
package: matt
name: plug-and-play
slug: plug-and-play
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# plug-and-play

## Definition — verbatim
(used, not defined)
> "A recurring request is a **plug-and-play** distribution: subscribe to the set as a read-only, always-current bundle you don't edit, rather than a fork you own." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 3 | used here | Defined as the read-only distribution model driving the Claude Code plugin decision |

## Consumes
Native plugin packaging and marketplace distribution mechanisms.

## Produces
Read-only, centrally updated skill installations without local file copies or git churn.

## When applied
When distributing skills as managed, subscription-like bundles rather than copied local project files.

## Sub-concepts
claude-code-plugin

## Part of
none

## Implementation status
clean

## Design notes
A distribution philosophy where users subscribe to skills as read-only, upstream-managed bundles rather than owning mutable forks in their project repositories. It motivates packaging skills as native plugins where updates propagate automatically without merge conflicts or manual synchronization.
