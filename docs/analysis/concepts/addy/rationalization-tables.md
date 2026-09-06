---
package: addy
name: rationalization tables
slug: rationalization-tables
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# rationalization tables

## Definition — verbatim
(used, not defined)
> "- Let **skills** carry long checklists and rationalization tables." — docs/cursor-setup.md:183

## Also called — verbatim
- `Anti-rationalization tables` — docs/comparison.md:24
- `Common Rationalizations` — docs/comparison.md:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/cursor-setup.md | 183 | used here | Recommended to be placed in skills rather than always-on rules to optimize context windows. |

## Consumes
Observed agent failure modes, rationalizations, and common excuses to bypass verification steps.

## Produces
Tabular rebuttals pairing specific agent rationalizations with mandatory operational realities.

## When applied
Embedded within every lifecycle skill to intercept and counter excuses during execution.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Rationalization tables are anti-drift mechanisms embedded in skills that explicitly list the plausible-sounding excuses an agent generates to skip disciplined steps (such as omitting tests, assuming backwards compatibility, or bypassing verification) alongside direct refutations that hold the agent to project standards.
