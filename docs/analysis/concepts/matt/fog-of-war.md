---
package: matt
name: fog of war
slug: fog-of-war
kind: pattern
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fog of war

## Definition — verbatim
> "Decisions you can tell are coming but cannot yet phrase sharply. The test for fog versus ticket is whether you can state the question precisely *now*, not whether you can answer it." — docs/engineering/wayfinder.md:37

## Also called — verbatim
`Not yet specified` — docs/engineering/wayfinder.md:37

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 193 | defined here | Introduces the fog of war leading-word frame for wayfinder maps |
| docs/engineering/wayfinder.md | 37 | defined here | Defines fog of war as decisions coming that cannot yet be phrased sharply |
| external/wayfinder.md | 41 | defined here | Documentation explaining how resolving tickets clears the fog ahead |
| skills/engineering/wayfinder/SKILL.md | 84 | defined here | Instructions for maintaining the fog of war in the Not yet specified section |

## Consumes
A project destination and emerging architectural uncertainties

## Produces
Entries in the `## Not yet specified` section of a wayfinder map that graduate into tickets as clarity increases

## When applied
When charting a route toward a destination where subsequent decisions depend on earlier discoveries

## Sub-concepts
none

## Part of
wayfinder, the-map

## Implementation status
clean

## Design notes
Fog of war prevents premature planning by distinguishing between questions that can be formulated sharply today (which become tickets) and hazy future decisions that cannot yet be phrased precisely (which remain fog until earlier tickets clear them).
