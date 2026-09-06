---
package: matt
name: spec
slug: spec
kind: artifact
package_phase: matt:specify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
  - {path: skills/engineering/implement/agents/openai.yaml, sha256: 8970a8596ade0c28ab427f41a4ea242d6bdf6186c59ebf55e1238dbecaab79dc}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/engineering/to-spec/agents/openai.yaml, sha256: 1c5b4d1e3d8e52287ef19cc2742fdbbfae1914ac75d33af3e4c8174f08cc55bb}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# spec

## Definition — verbatim
> "`to-spec` turns the conversation you have just had into a **[spec](https://www.aihero.dev/ai-coding-dictionary/spec)**, and publishes it to your issue tracker as a single issue." — docs/engineering/to-spec.md:3

## Also called — verbatim
`to-prd` — docs/engineering/to-spec.md:39

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Cites the spec as the primary input to implement-spec. |
| CONTEXT.md | 12 | used here | Explains that CONTEXT.md maintains a glossary and deliberately omits specifications. |
| docs/engineering/ask-matt.md | 5 | used here | Routes multi-session work through spec generation. |
| docs/engineering/code-review.md | 3 | defined here | Defines the Spec axis in code review, verifying whether code satisfies originating spec requirements. |
| docs/engineering/code-review.md | 3 | used here | References the spec as the ground-truth benchmark for functional review. |
| docs/engineering/domain-modeling.md | 40 | used here | Connects domain model definitions directly to specification requirements. |
| docs/engineering/grill-with-docs.md | 39 | used here | Notes that specifications capture agreements made during grilling before context is cleared. |
| docs/engineering/implement.md | 3 | used here | States that implement reads the ticket or spec to establish pre-agreed seams. |
| docs/engineering/improve-codebase-architecture.md | 18 | used here | Refers to architectural specifications when planning refactors. |
| docs/engineering/tdd.md | 18 | used here | Notes that expected values in TDD should derive from the spec rather than code internals. |
| docs/engineering/to-spec.md | 3 | defined here | Defines the spec as a synthesized record of decisions published as a single issue tracker item. |
| docs/engineering/to-tickets.md | 3 | used here | Explains breaking a spec into a set of tickets with blocking edges. |
| docs/engineering/triage.md | 17 | used here | Distinguishes incoming triage issues from structured specifications. |
| docs/engineering/wayfinder.md | 63 | used here | Connects wayfinder maps to downstream specification creation. |
| docs/productivity/writing-for-agents.md | 3 | used here | Details formatting specifications to maximize agent adherence. |
| external/ask-matt.md | 26 | used here | Outlines the idea → spec → tickets → implement workflow. |
| external/code-review.md | 25 | defined here | Discusses the Spec review axis evaluating implementation against spec intent. |
| external/code-review.md | 25 | used here | Emphasizes reviewing diffs against specification constraints. |
| external/domain-modeling.md | 40 | used here | Explains embedding domain entity definitions within specifications. |
| external/grill-with-docs.md | 38 | used here | Discusses distilling conversational exploration into a permanent specification. |
| external/implement.md | 25 | used here | Describes using specifications to guide test seam selection during implementation. |
| external/improve-codebase-architecture.md | 31 | used here | Mentions aligning architectural improvements with pending specifications. |
| external/tdd.md | 30 | used here | Cites specifications as the authoritative source of expected test values. |
| external/to-spec.md | 25 | defined here | Highlights the spec as a decision record that survives context window clearing. |
| external/to-tickets.md | 25 | used here | Describes slicing specifications into vertical tracer-bullet tickets. |
| external/triage.md | 30 | used here | Contrasts informal bug tickets with comprehensive specifications. |
| external/wayfinder.md | 54 | used here | Explains using specifications to finalize routes planned in wayfinder. |
| external/writing-for-agents.md | 25 | used here | Details specification design principles for coding agents. |
| skills/engineering/code-review/SKILL.md | 9 | defined here | Outlines the Spec axis checking whether code meets the specification. |
| skills/engineering/implement/agents/openai.yaml | 3 | used here | References specifications in implement agent descriptions. |
| skills/engineering/implement/SKILL.md | 3 | used here | Names reading the spec or ticket as the initial step in implementation. |
| skills/engineering/to-spec/agents/openai.yaml | 3 | used here | Summarizes the role of specifications in agent workflows. |
| skills/engineering/to-spec/SKILL.md | 3 | defined here | Specifies the format and sections of an agent-ready specification. |
| skills/in-progress/implement-spec/SKILL.md | 7 | used here | References the provided specification as the basis for automated multi-ticket execution. |

## Consumes
Settled discussions from grilling sessions, domain glossary vocabulary (`CONTEXT.md`), ADRs, pre-agreed public seams.

## Produces
A single published issue tracker item documenting Problem Statement, Solution, User Stories, Implementation Decisions, Testing Decisions, Out of Scope, and Further Notes.

## When applied
When a feature build spans multiple agent sessions and must survive session resets and context clearing.

## Sub-concepts
seams, spec-template, user-stories, implementation-decisions, testing-decisions

## Part of
to-spec

## Implementation status
defects: missing-path

## Design notes
The authoritative decision record in Matt Pocock's lifecycle. A spec captures decisions already agreed upon during exploratory grilling rather than making new ones. It deliberately excludes perishable file paths and ephemeral code snippets (except those validated by throwaway prototypes), serving as the durable contract against which downstream tickets and code reviews evaluate implementation fidelity.
