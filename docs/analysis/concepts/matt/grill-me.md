---
package: matt
name: grill-me
slug: grill-me
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/grill-me/SKILL.md, sha256: caaf8b8de1684f96e26b28f3c29189db5c89cce4b73e1c93d86164f66ef88637}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# grill-me

## Definition — verbatim
> "A relentless interview to sharpen a plan or design." — skills/productivity/grill-me/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Standardized Skill tool calling instruction for underlying grilling logic. |
| .out-of-scope/question-limits.md | 3 | used here | Discusses interview depth limits and stopping conditions in grilling sessions. |
| docs/engineering/grill-with-docs.md | 3 | used here | Contrasts grill-me against codebase-backed grill-with-docs. |
| docs/engineering/implement.md | 19 | used here | Recommends grill-me for sharpening early conceptual plans before implementation. |
| docs/productivity/grill-me.md | 3 | defined here | Human-facing documentation explaining the stateless inquiry interview loop. |
| docs/productivity/grilling.md | 15 | used here | Explains grill-me as the user-facing entry point invoking the grilling engine. |
| docs/productivity/teach.md | 18 | used here | Contrasts educational inquiry with design interrogation in grill-me. |
| docs/productivity/to-questionnaire.md | 15 | used here | Compares interactive grill-me interviews with batched questionnaires. |
| external/ask-matt.md | 29 | used here | Routes users with loose ideas to grill-me in the skill discovery guide. |
| external/grill-me.md | 25 | defined here | External documentation overview of the grill-me interview process. |
| external/grill-with-docs.md | 25 | used here | Compares stateless grill-me with repository-aware grilling. |
| external/grilling.md | 30 | used here | References grill-me invoking underlying grilling methodology. |
| external/implement.md | 30 | used here | Advises grilling vague requirements before committing to code. |
| external/prototype.md | 67 | used here | Recommends grill-me when evaluating speculative feature proposals. |
| external/to-questionnaire.md | 30 | used here | Distinguishes synchronous interview rounds from asynchronous questionnaires. |
| external/wayfinder.md | 30 | used here | Contrasts single-session grill-me against multi-session wayfinder mapping. |
| skills/productivity/grill-me/SKILL.md | 2 | defined here | User-invoked skill delegating directly to grilling via the Skill tool. |
| skills/productivity/README.md | 9 | used here | Listed as the stateless inquiry skill in productivity README. |

## Consumes
A loose idea, proposed feature direction, business problem, or uncommitted plan.

## Produces
A sharpened understanding and committed decisions in the user's mind; leaves no files on disk.

## When applied
At the earliest stage of an idea, before plans or code are drafted.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A stateless, conversational interview skill that subjects early, uncommitted ideas to relentless inquiry. By asking frontier questions in structured rounds while intentionally refusing to create files or jump into plan generation, it forces the user to confront assumptions and clarify intent.
