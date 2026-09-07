---
package: matt
name: clearing
slug: clearing
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# clearing

## Definition — verbatim
(used, not defined)

> "Hand that same conversation to [to-spec](https://aihero.dev/skills-to-spec) rather than [clearing](https://www.aihero.dev/ai-coding-dictionary/clearing) it." — docs/engineering/grill-with-docs.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/grill-with-docs.md | 39 | used here | Advises passing conversation context directly to to-spec rather than clearing the context window when glossary updates yield no ADRs. |
| docs/engineering/implement.md | 15 | used here | Recommends clearing context between tickets when running /implement to maintain fresh session hygiene. |
| external/implement.md | 30 | used here | Mentions clearing context between tickets to keep each vertical slice isolated and self-contained. |
| external/to-spec.md | 57 | used here | Cautions against clearing or compacting context between to-spec and to-tickets so large specs need not be re-fetched. |

## Consumes
An active agent session holding accumulated conversational context and tool call history.

## Produces
A fresh, empty context window free of stale conversational residue.

## When applied
Between independent execution tasks (such as sequential ticket implementations), while explicitly avoided when chaining tightly coupled pipeline stages (like grilling into to-spec).

## Sub-concepts
none

## Part of
ai-coding-dictionary

## Implementation status
clean

## Design notes
Clearing is the context hygiene discipline of resetting the conversation window between independent units of work. In Matt's architecture, tickets are deliberately sized to execute within a single clean context window, making previous conversation history disposable and preventing cross-task context pollution.
