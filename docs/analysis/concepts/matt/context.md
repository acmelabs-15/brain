---
package: matt
name: context
slug: context
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# context

## Definition — verbatim
> "One paragraph orienting a recipient who wasn't in the user's head. Enough to answer well, not a page." — skills/productivity/to-questionnaire/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 16 | used here | Describes making decisions about the LLM context window at phase boundaries. |
| docs/engineering/code-review.md | 52 | used here | Explains that parallel sub-agents prevent context cross-pollution during review. |
| docs/engineering/domain-modeling.md | 58 | used here | Describes maintaining lean domain context files without bloating working memory. |
| docs/engineering/prototype.md | 47 | used here | Notes isolating throwaway prototype experimentation from the main conversation context. |
| docs/engineering/research.md | 53 | used here | Discusses running research in background contexts to keep the main context focused. |
| docs/engineering/resolving-merge-conflicts.md | 35 | used here | Refers to loading git conflict hunks and commit intent into the agent's context. |
| docs/engineering/triage.md | 83 | used here | Describes providing issue context to agents when assigning triage roles. |
| docs/engineering/wayfinder.md | 75 | used here | Discusses charting complex problem spaces across multiple context windows. |
| docs/engineering/wizard.md | 59 | used here | Notes executing interactive setup scripts outside of the model context window. |
| docs/productivity/grill-me.md | 65 | used here | Describes maintaining conversational inquiry without external repository context. |
| docs/productivity/handoff.md | 15 | used here | Explains that swapping harnesses requires exporting context because the new harness cannot see the old context. |
| docs/productivity/to-questionnaire.md | 46 | used here | Details capturing external stakeholder domain context via questionnaires. |
| docs/productivity/writing-for-agents.md | 5 | used here | Warns that explaining things the model already knows wastes token context without changing behavior. |
| external/ask-matt.md | 29 | used here | External catalog documentation on managing conversational context limits. |
| external/code-review.md | 47 | used here | External documentation on context isolation across code review sub-agents. |
| external/domain-modeling.md | 50 | used here | External guide on keeping domain context focused on ubiquitous language. |
| external/handoff.md | 30 | used here | External reference on context portability when moving between tools or environments. |
| external/prototype.md | 52 | used here | External documentation on preventing prototype experiments from polluting conversational context. |
| external/research.md | 47 | used here | External guide on delegating source reading to background contexts. |
| external/resolving-merge-conflicts.md | 39 | used here | External documentation on providing commit history context during merge resolution. |
| external/to-questionnaire.md | 51 | used here | External reference on capturing missing stakeholder context. |
| external/wayfinder.md | 62 | used here | External guide on managing context size across large discovery maps. |
| external/writing-for-agents.md | 26 | used here | External documentation on minimizing context costs in agent instructions. |
| skills/productivity/to-questionnaire/SKILL.md | 30 | defined here | Defines the Context section of the questionnaire template to orient recipients. |

## Consumes
User prompts, repository files, domain models, and previous conversation history.

## Produces
Working memory for agent reasoning, or structured background sections in documents.

## When applied
Continuously during agent execution, and explicitly managed at session phase boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other (runaway artifact bloat where models expand CONTEXT.md into running specs, and degradation as tokens approach the smart zone limit)

## Design notes
A dual-purpose concept in matt spanning the operational token budget of the LLM in an active session and the structural orientation provided to humans or agents. In session management, context is treated as a primary source of verbatim reasoning that must be defended against premature compaction or lossy summarizing until phase boundaries necessitate clearing, compacting, or handing off.
