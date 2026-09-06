---
package: matt
name: prototype
slug: prototype
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/prototype/SKILL.md, sha256: 714de632d116bb73f65cdb5a882db15b9369a6713b9a47c0fad827848f0bfbe3}
  - {path: skills/engineering/prototype/agents/openai.yaml, sha256: 5af65e43ab41a350436697b81e27b7f848d36782043b73c322bb2c9fa9cc55dc}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# prototype

## Definition — verbatim
> "`prototype` writes **throwaway code that answers a question**: does this state model feel right, or what should this screen look like." — docs/engineering/prototype.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 29 | used here | Describes the prototype detour branch in the main flow when questions need runnable code. |
| docs/engineering/prototype.md | 3 | defined here | Canonical definition of prototype as throwaway code that answers a specific design question. |
| docs/engineering/wayfinder.md | 49 | used here | Describes creating prototype decision tickets to resolve technical uncertainties on a map. |
| docs/productivity/grill-me.md | 35 | used here | Notes pivoting to a prototype when conversational interview cannot resolve a UI or state question. |
| docs/productivity/grilling.md | 18 | used here | Identifies prototyping as an escape hatch when grilling reaches unresolvable empirical questions. |
| docs/productivity/handoff.md | 26 | used here | Details using handoff to bridge between the main session and an isolated prototype directory. |
| docs/productivity/to-questionnaire.md | 18 | used here | Distinguishes code prototyping from stakeholder questionnaires for resolving gaps. |
| external/ask-matt.md | 36 | used here | External catalog documentation describing the prototyping branch in the main flow. |
| external/diagnosing-bugs.md | 30 | used here | External documentation contrasting bug diagnosis with exploratory prototyping. |
| external/grill-me.md | 44 | used here | External catalog documentation on when to break out into a prototype. |
| external/grilling.md | 30 | used here | External reference on breaking out of grilling to validate state or UI with a prototype. |
| external/handoff.md | 34 | used here | External guide explaining handoff isolation for prototype workspaces. |
| external/prototype.md | 28 | defined here | External catalog definition of the prototype skill. |
| external/research.md | 30 | used here | External guide contrasting background reading research with code prototyping. |
| external/to-questionnaire.md | 30 | used here | External documentation distinguishing empirical code questions from stakeholder questions. |
| external/to-spec.md | 69 | used here | External reference describing incorporating prototype learnings into specifications. |
| external/wayfinder.md | 47 | used here | External documentation describing filing prototype tickets within wayfinder. |
| skills/engineering/prototype/agents/openai.yaml | 2 | defined here | Configuration defining the prototype agent skill interface. |
| skills/engineering/prototype/SKILL.md | 2 | defined here | Skill frontmatter declaring prototype's purpose and invocation rules. |
| skills/engineering/wayfinder/SKILL.md | 65 | defined here | Instructions within wayfinder for creating a prototype decision ticket. |
| skills/engineering/wayfinder/SKILL.md | 78 | defined here | Guidelines within wayfinder for executing prototype spikes to unblock decisions. |

## Consumes
A specific design or technical question that cannot be resolved through dialogue alone.

## Produces
A standalone interactive HTML page, UI variations, or isolated spike code answering the question.

## When applied
When grilling or planning encounters an empirical question about UI appearance or state logic.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An empirical exploration technique in matt designed to break deadlocks during requirements gathering. When conversational inquiry cannot settle how a state machine behaves or how a screen feels, the developer detours to a prototype on an isolated branch. The code is written as deliberately throwaway—omitting tests, persistence, and abstractions—so that only the validated answer is preserved and folded into subsequent specifications.
