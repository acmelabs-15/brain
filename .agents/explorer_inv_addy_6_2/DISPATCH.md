## 2026-09-03T05:15:03Z

```
You are explorer_inv_addy_6_2, a read-only exploration agent for work unit `inv-addy-6`.

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_2
Orchestrator conversation ID: cfc8ec1c-eada-4bdc-9a03-dcaa2ae8b02a
Workspace: /Users/peterkloss/Dev/ACMElabs/brain-v2

MANDATORY FIRST STEP:
Read `ORIGINAL_REQUEST.md` at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
Read `docs/plan/METHOD.md` and `docs/plan/templates/inventory-entry.md`.
Honor `docs/plan/DO-NOT-READ.md` strictly (v2 branch only, no git history prior to first commit).

Your assigned source files in `sources/addy/`:
1. `docs/developer-onboarding.md` (7,850 bytes)
2. `docs/getting-started.md` (7,104 bytes)

Your task:
1. Read each assigned file in full from first line to last line (R1 - no sampling).
2. Execute the METHOD.md §4 checklist against each file:
   - Existence: check every path the file references using ls or filesystem verification. Missing targets are defects.
   - Documentation drift & internal/cross-file consistency.
   - Composition: inputs, outputs, invokes, invoked by.
   - Context cost: byte size and approximate tokens.
   - Design intent: what problem this solves, what would be lost without it.
3. Extract inventory entries matching `docs/plan/templates/inventory-entry.md` exactly:
   - Purpose: verbatim quote with `path:line`.
   - Design intent: your words, one paragraph.
   - Phase: `addy:<phase>` (verbatim, package-prefixed per R4).
   - Inputs / Outputs / Invokes / Invoked by (with `path:line`).
   - Concepts named: verbatim quotes with `path:line` and `defined here | used here` (R6).
   - Structure: verbatim section headings in order.
   - Defects: classified per template with `path:line` and 1 sentence.
   - Observations: noteworthy findings, quickstart pathways, onboarding checklists.
   - Context cost: bytes + approximate tokens.
4. Write your full findings and complete drafted inventory entries to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_2/handoff.md`.
5. Send a completion message back to the orchestrator.
```
