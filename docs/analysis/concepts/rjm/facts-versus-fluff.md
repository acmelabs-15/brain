---
package: rjm
name: facts versus fluff
slug: facts-versus-fluff
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# facts versus fluff

## Definition — verbatim
> "Take notes verbatim and review for facts versus fluff. Separate what they did" — .claude/skills/business-strategy/references/mom-test.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/mom-test.md | 49 | defines | Synthesis rule requiring strict separation between historical user actions and prospective hypothetical statements. |

## Consumes
Raw interview notes and verbatim transcripts.

## Produces
Filtered factual evidence log stripped of hypothetical promises, opinions, and predictions.

## When applied
Applied during interview synthesis and post-call review before drawing strategic or product conclusions.

## Sub-concepts
none

## Part of
the-mom-test

## Implementation status
clean

## Design notes
Facts versus fluff is the rigorous epistemological filter of The Mom Test in rjm. By categorizing past actions and money spent as facts, and future promises or opinions as fluff, it prevents teams from building software based on what users claim they would do.
