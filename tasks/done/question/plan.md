# Plan: question

Spec: `spec/SPEC-question.md` (approved 2026-09-19). Depends on nothing. Sources: RES-004, RES-005, and the 24 artifact files at `/Users/peterkloss/Dev/ACMElabs/ask-user-question/skills/_artifacts/`.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | `scripts/question/check.ts` and its tests: description under 300 characters, forbidden synonyms absent, `SKILL.md` under 250 lines, each reference under 120; package script; joins `bun run check` | — | the check fails on the current skill until Task 2 lands, so it joins the gates only at Task 4 |
| 2 | `SKILL.md` rewritten by the RES-005 §4 outline, ten sections, every failure-mode row cited to its artifact | — | the domain map's terms must replace five synonyms consistently |
| 3 | The three host references rewritten: distinct contract only, dated facts restored, the waiting rule removed; `agents/openai.yaml` added for Codex metadata | 2 | Antigravity stays a one-line unverified note, per the spec's open question |
| 4 | Wrap-up: `question:check` joins the gates and CI; `lifecycle:check` still passes; the combined `interview-me` names the skill; archive | 1, 2, 3 | none |

Sequential 1, then 2 and 3 in parallel, then 4.

## Verification checkpoints

- After 1: the check's tests pass; the check fails on the current skill by the description length.
- After 3: `question:check` exits 0; every RES-005 §3 contradiction resolved as the spec's success criterion 2 lists.
- After 4: `bun run check`, `sync -- --check` and `bun run validate` pass.

## Not in this plan

The evals case for a plan-approval question, which belongs to `evals`.
