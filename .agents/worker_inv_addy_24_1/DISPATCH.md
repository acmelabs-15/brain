# Task Dispatch: Worker (inv-addy-24)

## Identity
- Role: Worker (Implementation & Execution Agent)
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1
- Parent: Orchestrator (/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2)

## Authoritative Inputs
- MANDATORY: Read ORIGINAL_REQUEST.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read Scope: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2/SCOPE.md`
- Read Operating Manual: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md` (rules R1-R6, §3 template, §4 checklist)
- Read Target Source File: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/api-and-interface-design.md` (26,413 bytes)
- Read In-repo Skill: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/api-and-interface-design/SKILL.md`
- Read Explorer Handoffs:
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_1/handoff.md` (deep content, draft entry, verbatim quotes, doc-drift defects)
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_2/handoff.md` (conventions, precedents, manifest row 199, STATE.md updates)
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3/handoff.md` (R2 command execution, test runner script)
- Honor DO-NOT-READ.md: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md` (v2 branch only, no pre-project git history)

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## File Ownership & Deliverables
The Worker owns and must write/modify the following 4 files:

1. **Inventory Entry**:
   - Path: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md`
   - Must use exact template with frontmatter (`package: addy`, `path: ../addy-external/api-and-interface-design.md`, `type: external-doc`, `bytes: 26413`, `unit: inv-addy-24`).
   - Title: `# ../addy-external/api-and-interface-design.md`
   - Must fully populate all 12 required sections per METHOD.md rules R1-R6 and Explorer guidance.

2. **Work Unit Report**:
   - Path: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md`
   - Must use standard frontmatter (`unit: inv-addy-24`, `phase: 1`, `package: addy`, `session: 007`, `subagent_returned: complete`).
   - Must document assigned files, outputs produced with byte counts, R2 scripts executed (with real exit codes and outputs), 5-point coverage self-check, cross-unit notes, blocked/uncertain (`none`), time & size.

3. **Manifest Update**:
   - Path: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md`
   - Update row 199 from:
     `| ../addy-external/api-and-interface-design.md | 26413 | external-doc | [ ] |`
     to:
     `| ../addy-external/api-and-interface-design.md | 26413 | external-doc | [x] |`

4. **STATE.md Update**:
   - Path: `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`
   - Update work unit row for `inv-addy-24` from:
     `| inv-addy-24 | addy | 1 | 26413 | in-progress | 007 | — |`
     to:
     `| inv-addy-24 | addy | 1 | 26413 | complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-24.md |`
   - Check current counts in `STATE.md` and increment `Rows inventoried (addy)` accordingly.

## Verification Requirements
- Execute commands via Bun/TypeScript (no Python).
- Run the master test runner: `bun run /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3/verify-inv-addy-24.ts`
- Run synthesis linters:
  - `bun run scripts/synthesis/glossary-lint.ts` (must be clean, exit code 0)
  - `bun run scripts/synthesis/coverage.ts` (must report 0 empty required inventory fields)
- Verify `git status` and ensure all paths are clean.

## Output
Write your comprehensive handoff report to:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1/handoff.md`

Send a message back to the orchestrator upon completion.

## 2026-09-03T17:30:12Z
<USER_REQUEST>
You are the Worker for work unit inv-addy-24.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1
Your task dispatch file is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1/DISPATCH.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY FIRST STEPS:
1. Read ORIGINAL_REQUEST.md: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
2. Read AGENTS.md, docs/plan/METHOD.md (rules R1-R6, §3 template, §4 checklist), docs/plan/DO-NOT-READ.md (v2 branch only, no pre-project git history).
3. Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_2/SCOPE.md.
4. Read your dispatch file: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1/DISPATCH.md.
5. Read all 3 Explorer handoff reports:
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_1/handoff.md
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_2/handoff.md
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3/handoff.md

DELIVERABLES:
1. Write inventory entry: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/external-api-and-interface-design-md.md
2. Write work unit report: /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-24.md
3. Update manifest row 199 in /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md (mark [x])
4. Update STATE in /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md (mark inv-addy-24 complete, session 007, output path, update counts)

VERIFICATION:
- Execute commands using Bun/TypeScript (no Python).
- Run master test runner: bun run /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_24_3/verify-inv-addy-24.ts
- Run synthesis linters:
  - bun run scripts/synthesis/glossary-lint.ts
  - bun run scripts/synthesis/coverage.ts

Write your comprehensive handoff report to:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_24_1/handoff.md

Send a message back to the orchestrator (conversation ID: 7adbd448-405c-4e0f-b394-dd1cb78b1b75) upon completion.
</USER_REQUEST>
