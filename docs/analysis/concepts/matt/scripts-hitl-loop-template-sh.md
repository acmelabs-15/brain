---
package: matt
name: scripts/hitl-loop.template.sh
slug: scripts-hitl-loop-template-sh
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/hitl-loop.template.sh

## Definition — verbatim
(used, not defined)

> "The skill ships `scripts/hitl-loop.template.sh` for this: the agent runs the script, you follow prompts in your terminal, and your answers come back as parseable output." — docs/engineering/diagnosing-bugs.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 36 | used here | Shipped template script path cited as the last-resort human-in-the-loop feedback mechanism. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
defects: other (static security scanner false positive flagged by Snyk on the shipped shell script in docs/engineering/diagnosing-bugs.md:74)

## Design notes
An executable bash script template shipped with diagnosing-bugs for prompting humans via terminal read commands, classified as name-only because it is a file path rather than an agent lifecycle concept.
