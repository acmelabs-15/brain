---
package: matt
name: context window
slug: context-window
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# context window

## Definition — verbatim
(used, not defined)

> "A session that yields a sharper glossary and zero ADRs is working as designed, but it means the bulk of what you agreed exists only in the [context window](https://www.aihero.dev/ai-coding-dictionary/context-window) you agreed it in." — docs/engineering/grill-with-docs.md:39

## Also called — verbatim
`window` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:23

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 77 | used here | Cited as an AI Coding Dictionary vocabulary term that must be linked on first use. |
| docs/engineering/grill-with-docs.md | 39 | used here | Notes that conversational agreements exist only in the context window until captured into specs or ADRs. |
| docs/engineering/implement.md | 41 | used here | Explains that tickets are sized to fit a single fresh context window so prior session context is disposable. |
| docs/engineering/improve-codebase-architecture.md | 64 | used here | Warns against overflowing the context window during large architectural audits. |
| docs/engineering/to-spec.md | 16 | used here | Notes that if decided work fits in one context window, to-spec can be skipped in favor of direct implementation. |
| docs/engineering/to-tickets.md | 5 | used here | Explains that tickets are sized for a single fresh context window because implementing sessions have not seen the spec. |
| docs/productivity/grill-me.md | 52 | used here | Observes that grilling sessions must be compacted or handed off before context window capacity degrades reasoning. |
| external/grill-me.md | 57 | used here | Discusses context window constraints when exploring unstructured problem spaces. |
| external/grill-with-docs.md | 38 | used here | Describes context window lifetime and the ephemeral nature of unpersisted discussion. |
| external/implement.md | 44 | used here | Emphasizes scoping ticket implementation to a single context window to preserve execution quality. |
| external/improve-codebase-architecture.md | 54 | used here | Highlights context window consumption when reading deep dependency trees. |
| external/to-tickets.md | 26 | used here | Mandates sizing vertical slice tickets to comfortably fit inside a fresh context window. |

## Consumes
Session tokens, conversation turns, file contents, and tool execution outputs.

## Produces
Ephemeral working memory for the language model during an active agent session.

## When applied
Governs all interactions across agent sessions, triggering boundary decisions when capacity limits are approached.

## Sub-concepts
none

## Part of
ai-coding-dictionary

## Implementation status
clean

## Design notes
The finite token memory capacity of an LLM session. In Matt Pocock's methodology, context window constraints serve as the foundational architectural forcing function: specifications and tickets are explicitly sized as vertical slices so that each unit of work executes cleanly within a single fresh context window, keeping sessions stateless and disposable.
