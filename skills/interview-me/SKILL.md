---
name: interview-me
description: Interviews the user until intent is confirmed, with a durable map of questions, decisions and research that resumes across sessions. Use when an ask lacks who, why, success or a binding constraint; when the user names an idea to continue; when they say "interview me", "grill me", "are we sure?" or "stress-test my thinking"; or before guessing a requirement. Clear mechanical edits and pure information requests need no interview.
compatibility: Interactive session with user replies. Repository mode uses Bun and the brain CLI; conversation mode needs neither. Load skills and use question and agent tools through the active host's supported interfaces.
---

# Interview Me

Turn an unclear ask into confirmed intent. Keep a **map** of questions, a **frontier** of questions ready to answer, and **fog** for questions not yet sharp enough to state. Each answer updates the whole map before the next question.

This skill owns question selection, durable state, recovery and completion. **ask-user-question** owns question composition, recommendations, reply interpretation and repair. A request with no open requirement can proceed to its next skill without an interview.

## Start of every session

1. Load **ask-user-question**, **domain-modeling** and **context-engineering** through the host's skill mechanism. If the host has no Skill tool, read their SKILL.md files in full. Read ask-user-question's matching host reference before composing a question.
2. Choose the mode from the task's workspace. In a repo, use **repository mode** below. With no repo, read [Conversation mode](CONVERSATION.md) in full and use its state, research and Finish rules throughout. It replaces file and CLI operations in this skill.
3. In repository mode, read the workspace and domain documents. Resolve the full path of brain's `scripts/brain.ts` from the session-start report or setup-brain's host instructions. Below, `brain <cmd>` means `bun "<resolved path>/scripts/brain.ts" <cmd>` from the project root. Give sub-agents that full path.
4. Find the active idea in the workspace's selection order. An explicit user choice comes first. If this work has an idea, use [Resume](#resume); otherwise use [Chart](#chart).

Every numbered file comes from `brain new-doc`. In a repo without workspace setup, load setup-brain and follow its setup path. A non-interactive run records the missing user answer and its affected rows, then reports that block. It continues only work independent of that answer.

## State on disk

An idea is `IDEA-NNN-<slug>.md` in the workspace's ideas folder. The idea and its linked records hold the state needed for a fresh session; the prior conversation is not required.

| Part | Holds |
|---|---|
| Frontmatter | `define` during the interview; `specced` after a spec carries it on; `done` with a DEC or commit in `result`; `parked` when the user sets it aside |
| Intent | Outcome, User, Why now, Success, Constraint, Out of scope; the confirmation line only after the user confirms this version |
| Destination | The bounded spec, decision or change that ends this idea |
| Notes | Standing preferences, partial answers, pending questions and waits, each tied to its row |
| Map | One row per precise question, with blocking links and a result record |
| Not yet specified | Fog within the destination; `None.` when empty |
| Out of scope | Work ruled beyond the destination, with its reason and any retired row number |

### Rows

| Kind | Type | Resolved by | Result |
|---|---|---|---|
| Decide | `interview` | A supported user decision | DEC |
| Decide | `prototype` | The user's pick after the prototype skill | DEC linking the prototype |
| Decide | `ideate` | The user's pick after idea-refine | DEC with considered directions |
| Research | `research` | Sourced facts sufficient to answer the question | RES, `kind: research` |
| Do | `task` | Verified work that a later decision needs | RES, `kind: task` |

The map has these columns:

```text
| # | Question | Type | Status | Blocked by | Result |
```

- Row numbers are two digits, local to the idea, and never reused. A record's `from` names its row, such as `IDEA-004#03`.
- Status is `open`, `in-progress`, `resolved`, or `superseded by NN`.
- Blocked by lists rows in the same map, or `—`. Blocking links have no cycles and name the current questions.
- A resolved row's Result names one DEC or RES. Other Result cells hold `—`; their partial state lives in Notes or an in-progress record found by `from`.

The **frontier** is every open row whose blocking rows are resolved. Compute it from the current map. An empty frontier can mean blocked work; completion uses [Finish](#finish), not the frontier alone.

A do row names the decision it unblocks. The map defines the destination; work that delivers the destination belongs after confirmation. Small reversible choices within agreed behavior stay with the agent; state the reason in chat.

### Continuous writes

Save each substantive answer, condition, correction and finding as it arrives. Row completion is a validation boundary, not the first write.

For a partial answer, keep the row open and add or update a Notes entry:

```text
### Row 04 — partial
- Settled: members can view all reports.
- Source: user reply on 2026-11-05: "Every member may view reports."
- Conditions: none stated.
- Open: who may edit reports.
- Next: ask only about editing permission.
```

Record the pending question and row before asking it. Preserve the actual answer and its conditions before interpreting other rows. Clear the pending question once its answer is applied or the question is retired; a partial reply leaves its remaining gap in Notes. A partial answer needs no accepted DEC.

For a complete decision, finish these writes in order:

1. Save the user's answer and conditions in Notes, with its source.
2. Follow [domain-modeling's decision steps](../domain-modeling/SKILL.md#record-every-decision): create and fully fill the accepted DEC, including `from`, then validate it. Await the write and validation results.
3. Once the record has no finding, mark the row resolved and link its DEC. Replace the answer note with that link only after the complete record is on disk.

Submit the record write and the later map write in separate, sequential tool calls. A crash at any boundary must leave either the saved answer or its complete record available to Resume.

A research or do record is its own living progress record. Keep its findings, work already done, completion evidence and next action there. Only the main session writes the idea; each sub-agent writes its own record.

## Chart

Chart only when this work has no idea yet.

1. State a tentative hypothesis and what the request leaves unknown. Draft a bounded destination. When the destination itself needs a decision, make it a row and block affected rows on it.
2. List every precise question visible now, wide before deep. Check who benefits, why now, success and the binding constraint against facts already supplied. A precise but blocked question is a row; an unformed question is fog.
3. Create the idea with `brain new-doc IDEA <slug> --title "<title>"`. Fill the Intent draft, Destination, Notes, Map, fog and Out of scope. Mark unknown intent with its row, such as `Success: open, row 03.`
4. Wire the blocking links after numbering the rows. Run `brain check` and repair findings for the idea. Replace template placeholders outside comments.
5. Tell the user the destination, idea path and first frontier in a few lines. Start the loop, including ready research before the first question.

Chart is complete when the persisted map represents the known questions and its workspace check passes.

## The loop

1. **Evaluate the whole map** using the procedure below, including on resume.
2. **Start ready research**, up to the effective cap. Let it run while other rows proceed.
3. **Take one ready decide or do row.** Prefer a question whose answer starts useful research. Then choose the question that follows the current topic and removes the next material uncertainty; the number of blocked rows breaks a tie. Keep available work moving while research runs.
4. **Save the answer or work evidence continuously.** Use the question skill to interpret every part of a reply. Complete a DEC or RES only when its row's answer is supported. Record explicit delegation and its scope; act within it without repeatedly returning the same choice.
5. **Evaluate the whole map again** after every answer, decision and research result, even when the current row remains open. Save the changes before the next question.

If research returns while a question waits on the user, preserve the pending question and finish that exchange before selecting another. Save the research record at once. If its evidence invalidates a premise, explain the correction in the pending exchange before relying on an answer; retain any parts still valid.

When no row is ready, inspect the remaining state. Running work waits for its actual result. A failed prerequisite gets its reason, affected rows and retry condition recorded. Fog becomes rows when it can be stated, or moves out of scope with a supported reason. Open or in-progress rows keep Finish closed.

### Evaluate the whole map

Read each new answer or record against **every open and in-progress row**, the Intent and the fog.

1. **Use answers already given.** Resolve a row when the user's words or inspected evidence actually settle it and its required inputs hold. An explicit answer to two questions can settle both; write each decision's record. Keep a dependent choice pending when it only appears implied.
2. **Merge duplicate questions.** Keep one current row, supersede duplicates to it, and retain their supplied conditions and evidence in Notes or records.
3. **Revise or replace questions.** Sharpen the wording of an unchanged question. When its meaning changes, add a new row and mark the old row `superseded by NN`. Keep old records as history; supersede an old DEC once its replacement decision exists.
4. **Repair every affected blocking link.** Inspect all rows that name a superseded or removed row. Redirect each live dependency to the current replacement, or remove it with the reason in Notes when the answer is no longer needed. Check for cycles after the change.
5. **Recheck downstream answers.** When changed evidence invalidates a resolved row, add a replacement question and review its dependents. Keep unsupported answers out of current intent.
6. **Add or retire scope.** Turn relevant follow-ups and sharpened fog into rows. Remove a row that is now beyond the destination and record its number, question and reason under Out of scope. Preserve numbers. A change to the destination belongs to the user.
7. **Update the Intent and Notes.** Preserve conditions, unresolved gaps and the next supported action. If confirmed intent changes, remove its current confirmation and retain the previous version as history until the new intent is confirmed.
8. **Validate and save.** Run `brain check` and repair findings for changed records and the idea before proceeding to a dependent row. Report any unrelated findings separately.

This pass is complete when every current row has been checked for an existing answer, duplication and changed blocking links. The saved map, records and Intent must agree.

## Decide rows

A user decision is a fork where two paths are defensible, the choice changes what gets built, and more reading will not settle it. Follow **ask-user-question** for the full exchange: one question per call, evidence and consequences inside the question, the actual best-supported recommendation, and interpretation of the whole reply. It also owns tool availability and the plain-text fallback.

Inspect discoverable facts before asking. A small verified file or tool read can stay inline; independent research that needs a record becomes a research row. Keep source references with facts used in a question.

When the user says "scalable", "standard" or another broad term, first ask for a concrete load, failure, example or future change. Use the want-versus-should probe only when their reply shows a conflict between their desired outcome and an external expectation. Record sharpened domain terms through domain-modeling.

Use prototype or idea-refine when that row needs options made concrete before the user can decide. Their result returns to this loop; the map still owns what is settled and what remains open.

## Delegating research

Read [RESEARCH.md](RESEARCH.md) **in full before starting or continuing research**. It defines the brief, continuous record, answer sufficiency and failure recovery. Load writing-for-agents before composing a brief.

Use one agent and one brief per research row. On Claude Code, use brain's researcher agent; elsewhere use the host's general-purpose agent with the same write scope. A read-only agent can do an inline lookup but cannot own a record.

The configured cap is `BRAIN_MAX_PARALLEL`, then workspace `max_parallel`, then 8. The effective cap is the smaller of that value and the host's available capacity, counting running agents. Start all ready rows that fit before waiting; when capacity is limited, favor rows that unblock the next decisions. State a concrete host or dependency limit when fewer start. With no agent capability, record the limitation and keep the row pending; perform independent available work.

Give each agent the exact question, the rows its answer supports, known decisions, source paths, exclusions and the full brain CLI path. Each agent claims its own RES number. Mark successfully started rows in-progress and record their agent/record association in Notes as soon as it is known.

### Read a result

Read the record in full, including Question, Answer, Findings and Next action. Find it by `from` if the reply omits its path. Before applying it, compare the record's row and question with the **current** map.

| Current evidence | Action |
|---|---|
| The row was superseded, removed or changed | Keep that state. Retain the old record as evidence; import only findings relevant to current rows. Stop obsolete work when the host supports it. |
| The answer covers the current question; `outcome: answered`, `status: resolved` | Check sources and sufficiency, then resolve the row with its RES ID. Evaluate relevant follow-ups against the whole map. |
| `outcome: partial` or `blocked` | Keep the row in-progress. Record the remaining gap, blocker and exact condition for retry; continue independent work. |
| An interrupted in-progress record | Continue the same record only after checking its next action, prerequisites and whether its agent is still running. |
| No record or a failed capability | Record the failure in the idea's Notes, with the retry condition. Restart only after that condition changes or a different supported approach is available. |

A legacy RES without `outcome` can resolve a row only when its status is resolved and its contents answer the current question. A list of sourced findings is not, by itself, an answer. A retry continues the original question and record; the same missing fact does not become a fresh resolved row and follow-up on every attempt.

## Do rows

Before work starts, create its RES with `brain new-doc RES <slug> --title "<title>"`, `kind: task` and the row's `from`. Record the planned action, the observable completion condition and which steps are safe to repeat. Set the row in-progress.

Write progress and external resource references as each step succeeds. For work only the user can do, provide a precise checklist and keep the next step in the record. Save the user's report and any available verification evidence.

On an interruption, inspect the existing result before repeating an action. If it already succeeded, complete the record. Otherwise continue at the first unfinished step that is safe and authorized. An uncertain side effect stays unresolved until its result can be established.

The do row resolves only when its completion condition is observed and its record gives the facts the waiting decision needs. Set `outcome: answered` and `status: resolved`, then update the map.

## Finish

Enter Finish only when all these checks hold:

- Every map row is resolved or superseded, with valid replacement and blocking links.
- The fog is empty, and no partial answer, pending question, required research or do work remains.
- The six Intent lines are supported and contain no open row or placeholder.
- The idea and current records pass `brain check`.

1. Put the complete Intent and the proposed next action inside one question composed by ask-user-question. Include Outcome, User, Why now, Success, Constraint and Out of scope.
2. Interpret confirmation through that skill. A clear confirmation of this concrete intent is sufficient; preserve qualifications and settle any remaining condition. Silence leaves confirmation pending.
3. Save `Confirmed by <name> on <YYYY-MM-DD>.` only for the version the user confirms. A correction returns to the loop; recheck Finish before presenting revised intent.
4. Complete the confirmed destination:

| Destination | Completion |
|---|---|
| A spec | Load spec-driven-development with the idea ID and supporting DEC/RES records. Set `specced` once a spec lists the idea in `sources`. |
| A decision | Set `done` with that accepted decision's DEC ID in `result`. |
| An authorized change made in place | Perform and verify the change through the implementation workflow. Once committed, set `done` with its full commit SHA in `result`. |

Confirming intent supplies only the authority stated in the question. Follow the project's publication rules for any later outward-facing action.

Finish is complete when its conditions still hold, the confirmed destination exists, the idea's status/result match it, and `brain check` passes. If the map repeatedly grows without narrowing the destination, show the pattern and use ask-user-question to resolve the scope before adding more branches.

## Resume

1. Read the selected idea in full. For `done`, report its result. For `specced`, route to the spec that cites it. Resume a parked idea only at the user's request. For `define`, continue below.
2. Read partial answers, pending questions and waits in Notes. Reconcile **open and in-progress rows** with existing DEC and RES records by `from`; a crash can occur after a record is saved but before the map changes. Reuse a complete accepted answer rather than asking it again. A proposed DEC remains a proposal. Also validate records linked from resolved rows; repair an incomplete record from saved evidence, or reopen its row when the evidence does not settle it.
3. Apply research through [Read a result](#read-a-result), including the current-row check and retry condition. Check whether an agent still runs before replacing it. Continue its existing record and next action when it stopped.
4. Recover do work through [Do rows](#do-rows). Inspect completion evidence first. Preserve user-run checklist work until the user reports its result.
5. Evaluate the whole map. Tell the user briefly what is settled, what remains, and the next question or block. Continue the loop, or the first unfinished Finish step when its conditions hold.

Resume is complete when saved answers and current evidence determine the next action, with no repeated decision or unverified repeated effect.

### Session boundary

Follow context-engineering's boundary rules. Save current partial state and each record's next action before a planned stop or user-requested pause. Ask running agents to persist their work; settle available results and identify any agent still running. A forced interruption is recoverable through the same Resume procedure.

The handoff is the idea path and its current row/record state. A separate status note is not an authority or a required write.
