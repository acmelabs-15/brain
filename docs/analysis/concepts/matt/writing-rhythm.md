---
package: matt
name: Writing rhythm
slug: writing-rhythm
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-beats/SKILL.md, sha256: a96abafa2372eede8267d770138b322d6125da8adaa7ccf0a5e08e4ee13ee71e}
  - {path: skills/in-progress/writing-fragments/SKILL.md, sha256: 298b0edd23df229183630de592ed8aa4289233560f2040691f6eb77caeaad4ea}
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Writing rhythm

## Definition — verbatim
> "Append to the article file as each block is agreed. Re-read the file from disk before every write: the user may have edited between turns." — skills/in-progress/writing-shape/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 60 | defined here | Section heading outlining one-beat-at-a-time appending, never writing ahead, and re-reading from disk to preserve human edits. |
| skills/in-progress/writing-fragments/SKILL.md | 71 | defined here | Section heading specifying silent fragment appending, conversational momentum, and disk re-reading before every write. |
| skills/in-progress/writing-shape/SKILL.md | 69 | defined here | Section heading directing block-by-block appending, disk state preservation, and in-place paragraph editing. |

## Consumes
User input, conversational agreement on content blocks, and current file state on disk.

## Produces
Disciplined disk persistence that respects human edits without desynchronization or overwriting.

## When applied
Governs file I/O and conversational pacing across all writing skills whenever writing or appending to disk.

## Sub-concepts
none

## Part of
writing-beats

## Implementation status
clean

## Design notes
Writing rhythm establishes a collaborative interaction pattern between agent and human author. By appending content incrementally, never writing ahead, and strictly re-reading the destination file from disk before each write, the agent preserves human edits and allows manual adjustments to dynamically steer future narrative choices.
