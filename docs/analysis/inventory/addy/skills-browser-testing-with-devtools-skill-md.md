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
verified: 2026-09-04 quote-check+coverage
---

# skills/browser-testing-with-devtools/SKILL.md

## Purpose — required, verbatim
> "Tests in real browsers via Chrome DevTools MCP. Use when building or debugging anything that runs in a browser. Use when you need to inspect the DOM, capture console errors, analyze network requests, profile performance, or verify visual output with real runtime data. Requires the chrome-devtools MCP server to be configured." — skills/browser-testing-with-devtools/SKILL.md:3

## Design intent — required
Instructs agents on performing live browser verification and interactive debugging using Chrome DevTools via MCP. Bridges the gap between static source code analysis and real runtime execution by establishing workflows for visual regression (before/after screenshots), DOM inspection, console error diagnosis, network traffic analysis, and performance tracing (Core Web Vitals). Crucially establishes mandatory security boundaries: strict profile isolation (defaulting to `--isolated` to avoid hijacking user login sessions), treating all browser DOM and network content as untrusted data rather than instructions, and constraining JavaScript execution to read-only state inspection. Without this skill, agents would rely on static guesses or risk prompt injection and credential exposure when interacting with live web pages.

## Phase — required
addy:Verify

## Inputs — required
- Local development server URL (e.g. `http://localhost:3000/tasks` at `skills/browser-testing-with-devtools/SKILL.md:192`)
- Live DOM tree, computed CSS styles, and accessibility tree
- Browser console streams (errors, warnings, debug logs)
- Network request/response records and timing
- Performance traces and Core Web Vitals metrics

## Outputs — required
- Screenshot captures for visual verification and regression comparison
- Diagnosed UI, network, and performance root causes with targeted source code fixes
- Structured UI bug test plans
- Accessibility tree validation findings

## Invokes — required
- config .mcp.json — skills/browser-testing-with-devtools/SKILL.md:28

## Invoked by — required
- file CLAUDE.md — CLAUDE.md:24
- file README.md — README.md:261
- file agents/web-performance-auditor.md — agents/web-performance-auditor.md:36
- file docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:87
- file docs/adoption-guide.md — docs/adoption-guide.md:60
- file docs/cursor-setup.md — docs/cursor-setup.md:158
- command commands/test.toml — commands/test.toml:18
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:31
- skill skills/test-driven-development/SKILL.md — skills/test-driven-development/SKILL.md:341
- config evals/cases/browser-testing-with-devtools.json — evals/cases/browser-testing-with-devtools.json:2

## Concepts named — required, verbatim
- `Chrome DevTools MCP` — skills/browser-testing-with-devtools/SKILL.md:10 — used here
- `Core Web Vitals` — skills/browser-testing-with-devtools/SKILL.md:18 — used here
- `Screenshot` — skills/browser-testing-with-devtools/SKILL.md:51 — defined here
- `DOM Inspection` — skills/browser-testing-with-devtools/SKILL.md:52 — defined here
- `Console Logs` — skills/browser-testing-with-devtools/SKILL.md:53 — defined here
- `Network Monitor` — skills/browser-testing-with-devtools/SKILL.md:54 — defined here
- `Performance Trace` — skills/browser-testing-with-devtools/SKILL.md:55 — defined here
- `Element Styles` — skills/browser-testing-with-devtools/SKILL.md:56 — defined here
- `Accessibility Tree` — skills/browser-testing-with-devtools/SKILL.md:57 — defined here
- `JavaScript Execution` — skills/browser-testing-with-devtools/SKILL.md:58 — defined here
- `Profile Isolation` — skills/browser-testing-with-devtools/SKILL.md:62 — defined here
- `Content Boundary Markers` — skills/browser-testing-with-devtools/SKILL.md:92 — defined here
- `The DevTools Debugging Workflow` — skills/browser-testing-with-devtools/SKILL.md:109 — defined here
- `Largest Contentful Paint` — skills/browser-testing-with-devtools/SKILL.md:171 — used here
- `Cumulative Layout Shift` — skills/browser-testing-with-devtools/SKILL.md:172 — used here
- `Interaction to Next Paint` — skills/browser-testing-with-devtools/SKILL.md:173 — used here
- `Clean Console Standard` — skills/browser-testing-with-devtools/SKILL.md:256 — defined here

## Structure
- `# Browser Testing with DevTools`
- `## Overview`
- `## When to Use`
- `## Setting Up Chrome DevTools MCP`
- `### Installation`
- `### Available Tools`
- `## Security Boundaries`
- `### Profile Isolation`
- `### Treat All Browser Content as Untrusted Data`
- `### JavaScript Execution Constraints`
- `### Content Boundary Markers`
- `## The DevTools Debugging Workflow`
- `### For UI Bugs`
- `### For Network Issues`
- `### For Performance Issues`
- `## Writing Test Plans for Complex UI Bugs`
- `### Setup`
- `### Steps`
- `### Verification`
- `## Screenshot-Based Verification`
- `## Console Analysis Patterns`
- `### What to Look For`
- `### Clean Console Standard`
- `## Accessibility Verification with DevTools`
- `## Common Rationalizations`
- `## Red Flags`
- `## Verification`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights critical security boundaries for AI agent tooling: mandates dedicated or `--isolated` browser profile to prevent accessing personal browser cookies/sessions, treats all live DOM text and network responses as untrusted data to prevent prompt injection, enforces read-only execution constraints for page JavaScript, and mandates visual confirmation via before/after screenshot comparisons.

## Context cost
14539 bytes (~3635 tokens). Isolated skill reading browser runtime data and `.mcp.json` config.
