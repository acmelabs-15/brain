# RES-003: triage and wayfinder against addy's pack

Date: 2026-09-19. Status: evidence gathered, decision open.

## Question

RES-002 section 6 row 9 found that matt's on-ramps, `triage` and `wayfinder`, have no addy counterpart beyond the capability map, and row 8 that matt's skills assume a setup step brain does not run (`docs/research/RES-002-matt-over-addy.md:144-145`, `:149`). This note maps each named element to addy's pack, lists what each needs from a repo, and gives three shapes for brain.

## Codes

`M` = `/private/tmp/claude-501/-Users-peterkloss/d71891a9-f15c-48be-b664-852390fc2582/scratchpad/matt/skills/engineering`, `A` = `/Users/peterkloss/Dev/ACMElabs/brain-wrap`. TR, AB, OS = `M/triage/SKILL.md`, `AGENT-BRIEF.md`, `OUT-OF-SCOPE.md`. WF = `M/wayfinder/SKILL.md`. SM, TL, ITL, ITG, ITGL = `M/setup-matt-pocock-skills/SKILL.md`, `triage-labels.md`, `issue-tracker-local.md`, `issue-tracker-github.md`, `issue-tracker-gitlab.md`. DT, DW = `M/../../docs/engineering/triage.md`, `wayfinder.md`. S, R, I, P, U, D = `A/skills/<name>/SKILL.md` for spec-driven-development, idea-refine, interview-me, planning-and-task-breakdown, using-agent-skills, debugging-and-error-recovery. CP = `A/.claude/commands/plan.md`. SB = `A/skills/setup-brain/SKILL.md`.

## 1. Triage

Steps. The maintainer types `/triage` and says what they want (TR:47-53); the model never triggers it (TR:4). With no target it lists three buckets, oldest first: unlabeled, `needs-triage`, `needs-info` with reporter activity (TR:58-66). For one issue: gather context, with a redundancy search by domain concept and a read of `.out-of-scope/` (TR:70); recommend a category and state, then wait (TR:72); verify the claim by reproducing the bug or checking out the PR (TR:74); grill if needed (TR:76); apply the outcome (TR:78-86). A direct order skips grilling (TR:88-90). A later session reads prior notes first (TR:110-111). It is only for issues the maintainer did not write (DT:5).

| Triage element | addy counterpart | Verdict |
|---|---|---|
| Roles: two categories, five states, one of each per issue, transitions (TR:26-45) | none | none |
| Label mapping from canonical names (TR:43, TL:5-11) | none; P:162 names a tracker only for tasks the agent writes | none |
| Attention buckets (TR:58-66) | none | none |
| Recommend, then wait for direction (TR:72, DT:7) | assumptions list and "correct me now" gate, U:53-59; stop on confusion, U:65-70 | partial |
| Verify the claim first (TR:74, DT:53) | reproduce first, D:40-45 | same, for bugs only; no PR checkout |
| Grill with grilling plus domain-modeling (TR:76) | one question per turn, I:53-62; domain-modeling is vendored, `A/skills/domain-modeling/SKILL.md:2` | partial; cadence conflict, RES-002:20 |
| Agent brief: durable, behavioural, no paths, acceptance criteria, out of scope (AB:9-37, AB:41-68); `ready-for-human` variant (TR:80) | task template with acceptance, verification, files touched, P:83-103; restate with out of scope, I:98-107 | partial; P:99-101 lists files, AB:15-16 bans them |
| Needs-info notes template (TR:92-108) | none | none |
| `wontfix` three ways (TR:82-85, DT:43-47) | none | none |
| `.out-of-scope/` knowledge base, one file per concept, matched by concept (OS:3-17, OS:70-82) | out-of-scope line in a restate, I:106; Not Doing list, R:129-132 | partial; per artifact, never re-read |
| Resume from prior notes (TR:110-111) | offer to save intent, I:138 | none for tracker comments |
| PRs as an issue with code (TR:11, TR:39); AI disclaimer (TR:13-17) | none | none |

Sum: addy has the gates (recommend, verify, one question at a time) and none of the state machine, tracker vocabulary, or knowledge base. Every `none` row is tracker-facing.

## 2. Wayfinder

Steps. It plans and does not build (WF:11-13). Chart mode: name the destination through grilling and domain-modeling (WF:111); grill breadth-first for open decisions, and stop with no map if no fog appears (WF:112); create the map issue, label `wayfinder:map` (WF:113); create the tickets that can be stated now as child issues, then wire blocking in a second pass (WF:114); fire one research subagent per research ticket on a `research/<name>` branch (WF:115); stop (WF:116). Work mode: load the map at low resolution (WF:122); claim the first frontier ticket by assignee (WF:123); resolve it, zooming into related tickets (WF:124); post a resolution comment, close, append one line to Decisions so far (WF:125); add new tickets, graduate fog, rule out of scope (WF:126). One ticket per session, except research (WF:105). A cleared map hands off to to-spec (DW:65-66).

| Wayfinder element | addy counterpart | Verdict |
|---|---|---|
| Destination named first, fixes scope (WF:9, WF:32-34, WF:111) | restate with Outcome and Success, I:98-108; one-pager Problem Statement, R:112-119 | partial; not the head of a multi-session artifact |
| Map as an index on the tracker, Decisions so far one line per closed ticket (WF:21-25, WF:40-44) | capability map, a module table plus build order, S:44-57; plan file as index of tracker ids, P:164; Architecture Decisions, P:174-176 | partial; modules to build, not decisions made |
| Decision tickets: a question, sized to one session (WF:57-63) | Open Questions lists, S:146-147, P:207-208, R:134-135; tasks are build slices, P:79-103 | partial |
| Four ticket types, HITL or AFK (WF:73-80); HITL guard (WF:75) | interview-me for grilling, I:53; prototype vendored, `A/skills/prototype/SKILL.md:2`; non-interactive guard, I:34-36; no research or task type | partial |
| Claim by assignee before work; concurrent sessions (WF:67, WF:128) | overwrite guard for a plan another session may be building, P:150-155 | partial; no claim |
| Native blocking, frontier query (WF:69) | dependency graph, P:35-55; Dependencies field, P:97; "blocked by" in a tracker, P:162 | partial; edges, no frontier |
| Fog of war, Not yet specified, graduation (WF:82-93) | Open Questions, S:146-147; floor when something foundational is missing, I:132 | partial; no fog-or-ticket test |
| Out of scope section, closed tickets never graduate (WF:95-101) | I:106, R:129-132; absent from the spec template, S:117-148 | partial |
| Plan, don't do (WF:11-13) | no code during planning, P:33, CP:8 | same, within one session |
| One decision per session across many sessions (WF:105, DW:60) | offer to save intent for a multi-session project, I:138; plans survive session boundaries, P:228; recurse per module, S:65 | partial; I:138 is a save offer, no protocol for the next session |
| Refer by name (WF:15-17); research subagents at charting (WF:115); resolution comment, close, pointer (WF:125) | none; for research, RES-002:22 | none |
| No fog means no map: stop (WF:112) | Phase 0 skipped for a single capability, S:36 | partial |

Sum: addy holds each idea in a smaller form inside one session and one repo file. Absent is the tracker as shared state: claim, frontier, resolution, and the fog test.

## 3. What each needs from a repo

Both read `docs/agents/issue-tracker.md`, which matt's setup writes after a four-option tracker question (SM:38-49). Absent, triage says run setup (TR:43); wayfinder says the same, then falls back to local markdown (WF:25). brain's setup writes no tracker file and says not to ask (SB:36). matt's setup writes label names to `docs/agents/triage-labels.md` (SM:57, SM:102) but creates no labels in the tracker, so `gh` fails on first apply (DT:73-74, issue #616); it writes nothing for `wayfinder:*` labels (SM:9-13). `.out-of-scope/` is a repo directory triage reads and writes (OS:8-15, TR:70). Domain reads (TR:70, TR:76, WF:111) are covered by brain's `docs/agents/domain.md` (SB:12).

Triage commands per step:

| Step | GitHub (ITG) | GitLab (ITGL) | Local (ITL) |
|---|---|---|---|
| Buckets (TR:58) | `gh issue list --state open --json ... --label`, ITG:9; `gh pr list` with `authorAssociation`, ITG:23, broken, DT:63 | `glab issue list -F json --label`, ITGL:9; `glab mr list -F json`, ITGL:24 | none; ITL:13-19 define publish and fetch only |
| Read (TR:70) | `gh issue view <n> --comments`, ITG:8; `gh pr view`, `gh pr diff`, ITG:23 | `glab issue view <n> --comments`, ITGL:8; `glab mr view`, `glab mr diff`, ITGL:23 | `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, ITL:9 |
| Verify (TR:74) | no command in any template | | |
| Notes or brief (TR:79-81) | `gh issue comment <n> --body`, ITG:10 | `glab issue note <n> --message`, ITGL:10 | append under `## Comments`, ITL:11 |
| Label, close (TR:82, TR:86) | `gh issue edit <n> --add-label` / `--remove-label`, ITG:11; `gh issue close <n> --comment`, ITG:12 | `glab issue update <n> --label` / `--unlabel`, ITGL:11; note, then `glab issue close <n>`, ITGL:12 | `Status:` line, ITL:10 |

Wayfinder commands per step:

| Step | GitHub (ITG) | GitLab (ITGL) | Local (ITL) |
|---|---|---|---|
| Map, child (WF:113-114) | `gh issue create --label wayfinder:map`, ITG:40; sub-issue via `gh api`, else `Part of #<map>`, ITG:41 | `glab issue create --label wayfinder:map`, ITGL:41; `Part of #<map>`, ITGL:42 | `.scratch/<effort>/map.md`, ITL:25; `issues/NN-<slug>.md` with `Type:`, `Status:`, ITL:26 |
| Blocking (WF:114) | `gh api --method POST repos/<o>/<r>/issues/<child>/dependencies/blocked_by -F issue_id=<db id>`, id from `gh api ... --jq .id`, ITG:42 | `glab issue note <child> --message "/blocked_by #<n>"`, Premium only, ITGL:43 | `Blocked by: NN, NN` line, ITL:27 |
| Frontier (WF:123) | `gh issue list --state open` scoped, drop `blocked_by > 0` or assignee, ITG:43 | `glab issue list -F json`, `glab api projects/:id/issues/:iid/links`, ITGL:44 | scan for open, unblocked, unclaimed, ITL:28 |
| Claim (WF:123) | `gh issue edit <n> --add-assignee @me`, ITG:44 | `glab issue update <n> --assignee @me`, ITGL:45 | `Status: claimed`, ITL:29 |
| Resolve (WF:125) | `gh issue comment`, `gh issue close`, then edit the map; no map-edit command, ITG:45 | `glab issue note`, `glab issue close`, ITGL:46 | `## Answer`, `Status: resolved`, append to `map.md`, ITL:30 |

Skills called. Triage: grilling, domain-modeling (TR:76). Wayfinder: grilling, domain-modeling (WF:79, WF:111), research (WF:77), prototype (WF:78), handoff (DW:19). brain vendors domain-modeling, prototype and handoff (`A/skills/domain-modeling/SKILL.md:2`, `A/skills/prototype/SKILL.md:2`, `A/skills/handoff/SKILL.md:2`); grilling and research are absent from `A/skills/`. Wayfinder wants native blocking in the tracker UI (WF:69, DW:27); its docs advise against local markdown (DW:78).

## 4. Three shapes for brain

**(a) Vendor both, add a tracker choice to setup-brain.**
Work: setup-brain gains matt's Sections A and B (SM:38-57), which reverses SB:36; `write.ts` must emit `issue-tracker.md` and `triage-labels.md`, since every write goes through the script (SB:14); a label-creation step matt lacks (DT:74); grilling and research vendored or replaced, and interview-me in place of grilling changes the question cadence (RES-002:20). Carried defects: `gh pr list` field (DT:63), local template duplication (DT:86), `task` tickets read as build steps (DW:53), the Notes override hole (DW:69), question verbosity (DW:81). Value: the only shape with a lane for inbound issues (DT:71) and multi-session planning with a visible frontier (DW:93). Every brain user pays one more setup question and two more files, with or without inbound work.

**(b) Fold the decision-map idea into the capability map and interview-me; skip triage.**
Work: a wrapper that adds Destination, Not yet specified, Out of scope and Decisions so far to the intent file interview-me offers (I:138) or beside the capability map (S:65), plus the fog-or-ticket test (WF:88-91) and one decision per session (WF:105). addy's files stay unchanged (RES-002:7). Loses: claim and frontier across concurrent sessions (WF:67-69), native blocking in a UI (DW:27), research subagents (WF:115), ticket types (WF:73-80), any inbound-issue lane. The capability map is a module table (S:44), so decisions sit in a second section beside it. Cheapest shape that keeps the multi-session idea; no tracker question.

**(c) Skip both now.**
Work: none. RES-002 rows 8 and 9 stay open. brain keeps no lane for issues the user did not write (DT:5) and nothing past I:138's save offer for work that outgrows one session. setup-brain stays at SB:36. Nothing written now blocks (a) or (b) later.
