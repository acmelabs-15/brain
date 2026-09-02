---
package: addy
path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md
type: doc
bytes: 854
unit: inv-addy-2
---

# evals/fixtures/planning-and-task-breakdown/notifications-spec.md

## Purpose — required, verbatim
> "Users can opt into email notifications when a task is assigned or becomes\noverdue. Preferences are stored per user and default to disabled. Assignment\nevents already exist; overdue detection runs every fifteen minutes." — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:3-5 (no explicit purpose statement)

## Design intent — required
Provides a multi-requirement feature specification fixture for evaluating `planning-and-task-breakdown` (eval id: 1). It outlines user preferences, job queuing, deduplication, email provider adapters, feature flags, verification requirements, and out-of-scope constraints, allowing the eval harness to verify whether the agent produces an executable, dependency-ordered plan of small vertical slices with acceptance criteria in `tasks/plan.md` without prematurely implementing code.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Consumed by eval execution harness for eval `id: 1` in `evals/cases/planning-and-task-breakdown.json:29-43`.

## Outputs — required
- Evaluated agent decomposes this into `tasks/plan.md`.

## Invokes — required
none

## Invoked by — required
- config `evals/cases/planning-and-task-breakdown.json` — evals/cases/planning-and-task-breakdown.json:33-35
- script `scripts/run-evals.js` — scripts/run-evals.js:389-398

## Concepts named — required, verbatim
- `Notifications specification` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:1 — defined here
- `email notifications` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:3 — used here
- `boundary validation` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:9 — used here
- `notification jobs` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:10 — used here
- `Deduplicate jobs` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:11 — used here
- `provider adapter` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:12 — used here
- `Feature flag` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:14 — used here
- `Verification` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:16 — used here

## Structure
- `# Notifications specification` — line 1
- `Requirements:` — line 7
- `Verification must include...` — line 16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The specification specifies concrete constraints (safe default for feature flags, no message bodies stored, job deduplication by user/task/event type/version) and explicit scope boundaries (no SMS, push notifications, or UI history), testing whether the plan generator correctly identifies scope boundaries and acceptance criteria.

## Context cost
854 bytes (~215 tokens) file size. Loaded as part of `evals/fixtures/planning-and-task-breakdown/` directory (854 bytes total).
