---
package: matt
name: Puppeteer
slug: puppeteer
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Puppeteer

## Definition — verbatim
(used, not defined)

> "4. **Headless browser script** (Playwright / Puppeteer) that drives the UI and asserts on DOM/console/network." — skills/engineering/diagnosing-bugs/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/SKILL.md | 29 | used here | Cited alongside Playwright as a headless browser automation option for automating UI reproduction. |

## Consumes
Browser-based UI application and user interaction reproduction steps.

## Produces
An automated browser script driving UI interactions and checking DOM or network outputs.

## When applied
When constructing a headless browser feedback loop for a UI bug.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
An external headless browser automation library cited as a tool option for driving browser UIs to construct automated reproduction loops in UI debugging scenarios.
