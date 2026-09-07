---
package: rjm
name: "absolute"
slug: absolute
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# absolute

## Definition — verbatim
> "Is this code above the configured thresholds?" — .claude/skills/code-qualities-assessment/SKILL.md:138

## Also called — verbatim
> "``absolute``" — scripts/validation/check_adr_links.py:34

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 138 | defined here | Gate mode definition checking whether assessed files meet configured threshold limits. |
| scripts/validation/check_adr_links_baseline.txt | 9 | used here | Baseline entry count noting broken absolute path link entries in ADR documentation. |
| scripts/validation/check_adr_links.py | 34 | defined here | Violation class defining link targets starting with leading slash that fail relative resolution. |

## Consumes
File assessment scores and threshold configuration in `.qualityrc.json`, or markdown link destination paths.

## Produces
Gate pass/fail verdict (exit code 11 for threshold failure) or link violation record for leading-slash paths.

## When applied
Applied in `assess.py` when running in absolute mode (or for new files in regression mode), and in `check_adr_links.py` when validating markdown links.

## Sub-concepts
none

## Part of
gate-enforcement

## Implementation status
defects: doc-drift, missing-path

## Design notes
`absolute` represents a dual-use concept in rjm: in code qualities assessment, it is the gate mode that verifies whether code satisfies absolute numeric thresholds (e.g. cohesion >= 7, coupling >= 7), which is mandatory for brand new files lacking a historical base; in ADR validation, it designates link violations where a target path begins with an absolute leading slash, preventing proper blob navigation on GitHub.
