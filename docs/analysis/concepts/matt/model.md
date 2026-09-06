---
package: matt
name: model
slug: model
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# model

## Definition — verbatim
(used, not defined)
> "Ask an agent to write instructions for another agent and it spends most of its words explaining what the [model](https://www.aihero.dev/ai-coding-dictionary/model) already knows." — docs/productivity/writing-for-agents.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 60 | used here | Notes that questions outside the router's explicit map are answered by model inference. |
| docs/engineering/diagnosing-bugs.md | 59 | used here | Emphasizes constraining model speculation during bug diagnosis with a concrete reproduction test. |
| docs/engineering/grill-with-docs.md | 41 | used here | Describes leveraging the model's domain knowledge during architectural grilling. |
| docs/engineering/implement.md | 23 | used here | Warns that phrasing nudges the model to search for non-existent files if plan locations are not explicit. |
| docs/engineering/improve-codebase-architecture.md | 56 | used here | Describes model discovery of code smells and architectural leverage points. |
| docs/engineering/research.md | 45 | used here | Notes delegating heavy source reading to background model instances. |
| docs/engineering/resolving-merge-conflicts.md | 29 | used here | Emphasizes guiding the model to evaluate commit intent when resolving merge conflicts. |
| docs/engineering/tdd.md | 59 | used here | Details the model driving iterative test-driven development cycles. |
| docs/engineering/to-spec.md | 45 | used here | Describes prompting the model to summarize conversation threads into specifications. |
| docs/engineering/to-tickets.md | 59 | used here | Outlines the model slicing specifications into discrete issues. |
| docs/engineering/wizard.md | 77 | used here | Notes the model invoking wizard skills when hitting human-gated steps. |
| docs/productivity/grill-me.md | 68 | used here | Discusses the model exploring the knowledge frontier during conversational grilling. |
| docs/productivity/teach.md | 5 | used here | Characterizes the model serving as an adaptive tutor across instructional sessions. |
| docs/productivity/to-questionnaire.md | 52 | used here | Directs the model to formulate focused questions targeting missing external knowledge. |
| docs/productivity/wait-what.md | 5 | used here | Instructs the model to re-explain concepts using repository ubiquitous language. |
| docs/productivity/writing-for-agents.md | 5 | used here | Warns that explaining what the model already knows pays token cost without changing behavior. |
| external/ask-matt.md | 51 | used here | External catalog documentation on model inference boundaries. |
| external/implement.md | 31 | used here | External reference on model behavior during implementation loops. |
| external/research.md | 43 | used here | External guide on background model research processes. |
| external/resolving-merge-conflicts.md | 36 | used here | External documentation on model reasoning during conflict resolution. |
| external/tdd.md | 48 | used here | External guide on model-driven red-green-refactor workflows. |
| external/to-questionnaire.md | 55 | used here | External reference on model questionnaire formulation. |
| external/to-tickets.md | 52 | used here | External documentation on model ticket generation. |
| external/wait-what.md | 26 | used here | External guide on model re-pitching and explanation adjustments. |
| external/writing-for-agents.md | 26 | used here | External documentation on optimizing document token loads for model consumption. |

## Consumes
Token prompts, repository code, and system context loaded into working memory.

## Produces
Reasoning tokens, structured document outputs, shell commands, and code edits.

## When applied
Continuously across all generative, analytical, and conversational steps.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (tendency to hallucinate ungrounded skill capabilities or search for missing files when prompts lack explicit paths)

## Design notes
The underlying foundation large language model (such as Claude 3.5 Sonnet) powering the agent harness. In matt's methodology, the model is treated as already possessing broad programming competencies, meaning instructional documents must focus on repository-specific constraints, ubiquitous domain language, and process guardrails rather than generic coding tutorials.
