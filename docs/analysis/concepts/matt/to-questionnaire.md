---
package: matt
name: to-questionnaire
slug: to-questionnaire
kind: technique
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# to-questionnaire

## Definition — verbatim
> "`to-questionnaire` turns a decision you can't settle on your own into a **questionnaire**: a Markdown document you hand to the one person who holds what you're missing, for them to fill in async or for the two of you to work through in a meeting." — docs/productivity/to-questionnaire.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/grill-with-docs.md | 19 | used here | Recommends reaching for to-questionnaire when a decision is blocked on domain knowledge held in another person's head. |
| docs/productivity/to-questionnaire.md | 3 | defined here | Defines to-questionnaire as turning a blocked decision into a structured Markdown questionnaire for an asynchronous or meeting response. |
| external/grill-with-docs.md | 30 | used here | Directs users to reach for to-questionnaire when decisions require human stakeholder input. |
| external/to-questionnaire.md | 25 | defined here | Describes the tool's core purpose of generating structured questionnaire documents for external knowledge capture. |
| external/to-questionnaire.md | 28 | defined here | Explains the human-invoked /to-questionnaire slash command convention. |
| skills/productivity/README.md | 12 | used here | Summarizes to-questionnaire in the productivity skill directory index. |
| skills/productivity/to-questionnaire/SKILL.md | 2 | defined here | Frontmatter declaration naming the to-questionnaire skill. |

## Consumes
An unresolved decision or question blocked on knowledge possessed by a specific external person or stakeholder.

## Produces
A Markdown questionnaire file with numbered questions, multiple-choice options with explicit trade-offs, and a recommended default.

## When applied
When an engineer or agent encounters a blocking decision that cannot be deduced from the repository or answered without human domain expertise.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
to-questionnaire bridges the gap between autonomous development and human organizational reality. When progress stalls on unwritten domain knowledge, it packages the ambiguity into a structured, low-friction survey format that respects the stakeholder's time while forcing clear decision options.
