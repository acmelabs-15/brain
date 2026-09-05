---
package: addy
path: external/debugging-and-error-recovery.md
type: doc
bytes: 23705
unit: inv-addy-18
aliases: []
memo_inputs:
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/debugging-and-error-recovery.md

## Purpose — required, verbatim
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — external/debugging-and-error-recovery.md:5

## Design intent — required
Serves as the public web documentation and discovery page for the `debugging-and-error-recovery` skill on `skills.addy.ie`. It introduces the skill's purpose (systematic root-cause debugging across reproduce, localize, reduce, fix, guard steps with a stop-the-line rule and safe fallbacks), provides installation commands via the skills CLI, contextualizes the skill within the Verify phase (associating it with `/test`), links to related verification skills (`browser-testing-with-devtools`), and links to the full canonical `SKILL.md` in the GitHub repository. Without this page, developers exploring the agent-skills ecosystem on the web would lack a discoverable landing page and one-command CLI installation entry point for systematic debugging.

## Phase — required
addy:Verify

## Inputs — required
- Triggering conditions: "Tests fail, builds break, or behavior is unexpected." — external/debugging-and-error-recovery.md:5
- User action: selection of CLI install command for standalone skill (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery`) or full catalog pack (`npx skills add addyosmani/agent-skills`) — external/debugging-and-error-recovery.md:8

## Outputs — required
- Guidance on systematic root-cause debugging workflow across 6 anatomy sections: Overview, When to Use, Process, Rationalizations, Red Flags, Verification — external/debugging-and-error-recovery.md:10
- Navigation links to repository source `SKILL.md`, related Verify phase skills (`browser-testing-with-devtools`), and lifecycle overview — external/debugging-and-error-recovery.md:11-12

## Invokes — required
- skill debugging-and-error-recovery — external/debugging-and-error-recovery.md:8
- command /test — external/debugging-and-error-recovery.md:12
- skill browser-testing-with-devtools — external/debugging-and-error-recovery.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `stop-the-line rule` — external/debugging-and-error-recovery.md:5 — used here
- `safe fallbacks` — external/debugging-and-error-recovery.md:5 — used here
- `Verify phase` — external/debugging-and-error-recovery.md:5, 12 — used here
- `skills CLI` — external/debugging-and-error-recovery.md:6 — used here
- `Overview` — external/debugging-and-error-recovery.md:10 — used here
- `When to Use` — external/debugging-and-error-recovery.md:10 — used here
- `Process` — external/debugging-and-error-recovery.md:10 — used here
- `Rationalizations` — external/debugging-and-error-recovery.md:10 — used here
- `Red Flags` — external/debugging-and-error-recovery.md:10 — used here
- `Verification` — external/debugging-and-error-recovery.md:10 — used here
- `/test` — external/debugging-and-error-recovery.md:12 — used here
- `browser-testing-with-devtools` — external/debugging-and-error-recovery.md:12 — used here

## Structure
- `debugging-and-error-recovery` — external/debugging-and-error-recovery.md:5
- `Install just this skill` — external/debugging-and-error-recovery.md:5
- `How this skill is structured` — external/debugging-and-error-recovery.md:8
- `Verify phase` — external/debugging-and-error-recovery.md:12
- `More in the Verify phase` — external/debugging-and-error-recovery.md:12
- `browser-testing-with-devtools` — external/debugging-and-error-recovery.md:12
- `Product` — external/debugging-and-error-recovery.md:15
- `Setup` — external/debugging-and-error-recovery.md:15
- `Resources` — external/debugging-and-error-recovery.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/debugging-and-error-recovery.md:10 · The page asserts in "How this skill is structured" that every skill follows a 6-part anatomy including "03 Process", but skills/debugging-and-error-recovery/SKILL.md defines its workflow under "The Stop-the-Line Rule" (line 21) and "The Triage Checklist" (line 36) without a "Process" section.

## Observations
Provides web-based skill discovery and standalone CLI installation instructions (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery`). Highlights the stop-the-line rule and safe fallbacks as core debugging principles. References the Verify phase and `/test` command, and provides lateral navigation to `browser-testing-with-devtools`.

## Context cost
23,705 bytes (approx. 5,800 tokens) for this external documentation HTML snapshot. Loads standalone without external dependencies.
