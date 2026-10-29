---
id: RES-001
status: resolved
kind: research
from: IDEA-001#02
date: 2026-09-03
---
# RES-001: Which CSS feature reads the system theme?

## Question
Which CSS feature reads the system theme?

## Findings
- The prefers-color-scheme media feature reports the system theme as light or dark. Source: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme, checked 2026-09-03, last-modified: Mon, 01 Sep 2026 10:00:00 GMT.
- A matchMedia listener sees a change of the system theme while the page is open. Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia, checked 2026-09-03.

## Follow-ups
- Does a switch in the app override the system theme?
