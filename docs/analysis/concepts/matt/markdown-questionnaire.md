---
package: matt
name: Markdown questionnaire
slug: markdown-questionnaire
kind: artifact
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Markdown questionnaire

## Definition — verbatim
> "- **[to-questionnaire](./to-questionnaire/SKILL.md)**: Turn a decision you can't answer alone into a Markdown questionnaire for the one person who can (filled in async, or together over a meeting)." — skills/productivity/README.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/README.md | 12 | used here | Describes the output artifact produced by the to-questionnaire skill. |

## Consumes
An unresolved decision requiring input or domain knowledge from an external stakeholder.

## Produces
A formatted Markdown questionnaire document designed for asynchronous review or live discussion.

## When applied
When an agent or user encounters a decision they cannot answer alone and need targeted expert input.

## Sub-concepts
none

## Part of
to-questionnaire

## Implementation status
clean

## Design notes
A structured markdown artifact generated to present focused decision choices and context to external stakeholders, facilitating either asynchronous responses or synchronous review meetings.
