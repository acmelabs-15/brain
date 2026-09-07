---
package: rjm
name: best practice
slug: best-practice
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# best practice

## Definition — verbatim
> "| Clear | Over-analysis | Apply best practice |" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 13 | used here | Prescribed right approach for Clear problems contrasting with over-analysis. |
| .claude/skills/cynefin-classifier/SKILL.md | 59 | used here | Recommended response action in the Clear domain alongside following procedures and standardizing. |

## Consumes
Clear domain problems with known, repeatable cause-and-effect relationships.

## Produces
Direct execution of established, validated standard operating procedures.

## When applied
Applied specifically within the Clear domain where a single optimal method is universally recognized.

## Sub-concepts
none

## Part of
clear

## Implementation status
defects: doc-drift

## Design notes
In rjm's Cynefin model, `best practice` applies strictly to the Clear domain where cause-and-effect relationships are universally obvious and invariant. Treating practices outside Clear as "best practices" is flagged as a cognitive antipattern that induces complacency.
