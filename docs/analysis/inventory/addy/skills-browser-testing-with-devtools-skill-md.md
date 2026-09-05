---
package: addy
path: skills/browser-testing-with-devtools/SKILL.md
type: skill
bytes: 14539
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/browser-testing-with-devtools/SKILL.md

## Purpose — required, verbatim
> "Tests in real browsers via Chrome DevTools MCP. Use when building or debugging anything that runs in a browser. Use when you need to inspect the DOM, capture console errors, analyze network requests, profile performance, or verify visual output with real runtime data. Requires the chrome-devtools MCP server to be configured." — skills/browser-testing-with-devtools/SKILL.md:3

## Design intent — required
Provides a runtime verification framework for browser-facing applications using the Chrome DevTools MCP server. Bridges static code analysis and actual browser execution by allowing agents to inspect the live DOM, capture console errors/warnings, inspect network requests/responses, record performance traces (Core Web Vitals, long tasks), and verify visual state via screenshots. Establishes critical security boundaries around browser interaction (profile isolation, untrusted DOM/content boundaries, and restricted read-only JavaScript execution).

## Phase — required
addy:Verify

## Inputs — required
Browser URL under test (typically localhost dev servers), user instructions, and Chrome DevTools MCP capabilities (screenshot, dom inspection, console logs, network monitor, performance trace, element styles, accessibility tree, javascript execution).

## Outputs — required
Test plans for complex UI bugs, browser inspection findings, visual regression comparisons (before/after screenshots), performance diagnostic metrics, accessibility audit reports, and verified bug fixes.

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:24
- command test.toml — commands/test.toml:18
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:31
- skill test-driven-development — skills/test-driven-development/SKILL.md:341
- agent web-performance-auditor.md — agents/web-performance-auditor.md:36

## Concepts named — required, verbatim
- `Setting Up Chrome DevTools MCP` — skills/browser-testing-with-devtools/SKILL.md:24 — defined here
- `Available Tools` — skills/browser-testing-with-devtools/SKILL.md:45 — defined here
- `Security Boundaries` — skills/browser-testing-with-devtools/SKILL.md:60 — defined here
- `Profile Isolation` — skills/browser-testing-with-devtools/SKILL.md:62 — defined here
- `Treat All Browser Content as Untrusted Data` — skills/browser-testing-with-devtools/SKILL.md:72 — defined here
- `JavaScript Execution Constraints` — skills/browser-testing-with-devtools/SKILL.md:82 — defined here
- `Content Boundary Markers` — skills/browser-testing-with-devtools/SKILL.md:92 — defined here
- `The DevTools Debugging Workflow` — skills/browser-testing-with-devtools/SKILL.md:109 — defined here
- `For UI Bugs` — skills/browser-testing-with-devtools/SKILL.md:111 — defined here
- `For Network Issues` — skills/browser-testing-with-devtools/SKILL.md:140 — defined here
- `For Performance Issues` — skills/browser-testing-with-devtools/SKILL.md:164 — defined here
- `Writing Test Plans for Complex UI Bugs` — skills/browser-testing-with-devtools/SKILL.md:184 — defined here
- `Screenshot-Based Verification` — skills/browser-testing-with-devtools/SKILL.md:218 — defined here
- `Console Analysis Patterns` — skills/browser-testing-with-devtools/SKILL.md:236 — defined here
- `Clean Console Standard` — skills/browser-testing-with-devtools/SKILL.md:256 — defined here
- `Accessibility Verification with DevTools` — skills/browser-testing-with-devtools/SKILL.md:260 — defined here
- `Common Rationalizations` — skills/browser-testing-with-devtools/SKILL.md:279 — defined here
- `Red Flags` — skills/browser-testing-with-devtools/SKILL.md:291 — defined here
- `Verification` — skills/browser-testing-with-devtools/SKILL.md:306 — defined here

## Structure
- `# Browser Testing with DevTools` — skills/browser-testing-with-devtools/SKILL.md:6
- `## Overview` — skills/browser-testing-with-devtools/SKILL.md:8
- `## When to Use` — skills/browser-testing-with-devtools/SKILL.md:12
- `## Setting Up Chrome DevTools MCP` — skills/browser-testing-with-devtools/SKILL.md:24
- `### Installation` — skills/browser-testing-with-devtools/SKILL.md:26
- `### Available Tools` — skills/browser-testing-with-devtools/SKILL.md:45
- `## Security Boundaries` — skills/browser-testing-with-devtools/SKILL.md:60
- `### Profile Isolation` — skills/browser-testing-with-devtools/SKILL.md:62
- `### Treat All Browser Content as Untrusted Data` — skills/browser-testing-with-devtools/SKILL.md:72
- `### JavaScript Execution Constraints` — skills/browser-testing-with-devtools/SKILL.md:82
- `### Content Boundary Markers` — skills/browser-testing-with-devtools/SKILL.md:92
- `## The DevTools Debugging Workflow` — skills/browser-testing-with-devtools/SKILL.md:109
- `### For UI Bugs` — skills/browser-testing-with-devtools/SKILL.md:111
- `### For Network Issues` — skills/browser-testing-with-devtools/SKILL.md:140
- `### For Performance Issues` — skills/browser-testing-with-devtools/SKILL.md:164
- `## Writing Test Plans for Complex UI Bugs` — skills/browser-testing-with-devtools/SKILL.md:184
- `## Screenshot-Based Verification` — skills/browser-testing-with-devtools/SKILL.md:218
- `## Console Analysis Patterns` — skills/browser-testing-with-devtools/SKILL.md:236
- `### What to Look For` — skills/browser-testing-with-devtools/SKILL.md:238
- `### Clean Console Standard` — skills/browser-testing-with-devtools/SKILL.md:256
- `## Accessibility Verification with DevTools` — skills/browser-testing-with-devtools/SKILL.md:260
- `## Common Rationalizations` — skills/browser-testing-with-devtools/SKILL.md:279
- `## Red Flags` — skills/browser-testing-with-devtools/SKILL.md:291
- `## Verification` — skills/browser-testing-with-devtools/SKILL.md:306

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strong focus on prompt injection defense through browser content: strictly requires treating all DOM content, console logs, and network payloads as untrusted data rather than instructions.
- Recommends `--isolated` flag for ephemeral Chrome profile to prevent accidental credential leakage from personal browsing sessions.

## Context cost
14539 bytes, ~3200 tokens.
