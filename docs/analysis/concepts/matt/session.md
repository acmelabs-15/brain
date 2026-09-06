---
package: matt
name: session
slug: session
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# session

## Definition — verbatim
(used, not defined)
> "You describe the situation you are in (an idea you cannot start, a pile of incoming bug reports, a [session](https://www.aihero.dev/ai-coding-dictionary/session) that has run long)" — docs/engineering/ask-matt.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 3 | used here | Describes a developer situation where an agent session has run long and requires context routing. |
| docs/engineering/code-review.md | 58 | used here | Explains that code review must run in an isolated session rather than inheriting the authoring session's assumptions. |
| docs/engineering/codebase-design.md | 5 | used here | Describes focusing codebase design inquiries within a dedicated session. |
| docs/engineering/domain-modeling.md | 5 | used here | Identifies domain modeling as an active discipline applied throughout an interactive session. |
| docs/engineering/grill-with-docs.md | 5 | used here | Emphasizes conducting interview grilling within a stateful working session. |
| docs/engineering/implement.md | 15 | used here | Details how implementation runs either within the same session or across fresh ticket sessions. |
| docs/engineering/improve-codebase-architecture.md | 5 | used here | Describes scoping codebase architecture health reviews to dedicated sessions. |
| docs/engineering/prototype.md | 35 | used here | Recommends opening an isolated session to build a prototype without polluting the main thread. |
| docs/engineering/research.md | 5 | used here | Describes delegating research to background agents so the active developer session remains uninterrupted. |
| docs/engineering/tdd.md | 5 | used here | Notes executing test-driven development cycles inside an ongoing development session. |
| docs/engineering/to-spec.md | 11 | used here | Explains synthesizing the reasoning from a conversation session into a durable specification. |
| docs/engineering/to-tickets.md | 5 | used here | Recommends decomposing specs into tickets across or within sessions. |
| docs/engineering/wayfinder.md | 3 | used here | Contrasts wayfinder for multi-session efforts against single-session grill-with-docs workflows. |
| docs/productivity/grill-me.md | 3 | used here | Characterizes grill-me as an interactive conversational session outside a repository. |
| docs/productivity/grilling.md | 15 | used here | Explains conducting structured interrogation rounds within an ongoing interaction session. |
| docs/productivity/handoff.md | 5 | used here | Discusses staying in the current session versus exporting context at a phase boundary. |
| docs/productivity/to-questionnaire.md | 46 | used here | Mentions collecting stakeholder requirements asynchronously when interactive sessions are unfeasible. |
| docs/productivity/writing-for-agents.md | 50 | used here | Notes structuring documentation so agents execute predictable processes across sessions. |
| external/ask-matt.md | 25 | used here | External catalog documentation on managing long-running interactive sessions. |
| external/code-review.md | 50 | used here | External documentation highlighting independent session review to avoid confirmation bias. |
| external/handoff.md | 26 | used here | External guide contrasting in-session continuation against portable handoffs. |
| external/implement.md | 30 | used here | External reference on single-session versus multi-session implementation splits. |
| external/prototype.md | 44 | used here | External documentation discussing throwaway prototyping sessions on isolated branches. |
| external/research.md | 26 | used here | External catalog description of background research concurrent with active sessions. |
| external/tdd.md | 26 | used here | External guide describing test-driven development interaction sessions. |
| external/to-questionnaire.md | 51 | used here | External reference for gathering inputs when direct interview sessions cannot occur. |
| external/to-tickets.md | 26 | used here | External documentation on slicing specs into isolated ticket implementation sessions. |
| external/wayfinder.md | 25 | used here | External guide explaining why large ambiguous projects exceed a single session. |
| external/writing-for-agents.md | 58 | used here | External documentation on authoring instructions that maintain consistency across sessions. |

## Consumes
User prompts, project configuration, and skill definitions.

## Produces
Conversational history, modified code, and generated artifacts.

## When applied
Whenever a human developer interacts with an agent in Claude Code.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, script-bug, other (confirmation bias in same-session review, sub-agent runaway loops, and temp file loss in handoffs)

## Design notes
The fundamental interactive unit and bounded execution container in matt's methodology. A session encompasses conversational turns between developer and agent and holds one or more phases of work (such as grilling, prototyping, or implementing). Because an agent's reasoning degrades once context approaches the smart zone (~150k tokens), managing the session's lifecycle at phase boundaries—via continuing, clearing, compacting, or handing off—is critical to prevent loss of design rationale and factual drift.
