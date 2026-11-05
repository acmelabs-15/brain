# Conversation mode

Use this mode when the interview has no repository. It replaces the main skill's file creation, disk persistence, CLI checks, record links and file-based Finish. The whole-map evaluation and ask-user-question exchange rules still apply.

## Chart and state

Tell the user once: "This map lives in this conversation. To resume in another chat, carry over the latest map and its answers."

Before the first question, show the draft Intent, Destination, Notes, Map, Not yet specified and Out of scope. Use the main skill's row types and blocking links. Row numbers are local and never reused. A resolved row's Result holds its answer in a few words; longer evidence and conditions go in Notes under that row's number.

After each substantive answer or result, update the state in the conversation. Preserve partial answers, their source, conditions, remaining gap and next action under Notes. Keep an unanswered question pending. Show the updated map and changed notes so a restart does not rely on an unstated interpretation.

## Work the map

1. Evaluate every current row for answers already supplied, duplicate questions and changed blocking links. Superseding a row also redirects or removes each affected blocking link with its reason.
2. Start independent research when the host supports it, using the conversation variant in RESEARCH.md. The brief carries the context and a sufficient-answer condition. Its reply carries the answer, sources, outcome, follow-ups and next action. Save these under the row's Notes.
3. Ask one ready question through ask-user-question. A complete user answer can settle more than one row when it explicitly supplies each answer. Keep partial or conditional answers visible and unresolved where needed.
4. For a do row, record the action and observable completion condition before work. Inspect existing evidence after an interruption; continue unfinished safe work rather than blindly repeating effects.
5. When a required fact is unavailable, keep the row pending with its blocker and retry condition. Continue independent rows. Validate each returned research result against the current question before resolving it.

If no research-agent tool is available, record that limit and do a direct sourced lookup when it can answer the question within the host's capabilities. Otherwise keep the question blocked. Conversation mode creates no numbered files or separate progress files, and invokes no brain command.

## Validate and finish

Check the map directly after each change: row numbers are unique, blocking links name current rows, links have no cycles, and each resolved row has a supported answer. An empty frontier with open rows is blocked work.

Enter confirmation only when every row is resolved or superseded, the fog is empty, all partial answers and required work are settled, and all six Intent lines are supported. Put the Intent and the proposed next action inside one ask-user-question call. That skill interprets approval, conditions, corrections, delegation and silence.

After clear confirmation, write "Confirmed by <name> on <date>." beside the current Intent. Deliver the agreed decision or written outcome in the conversation. The interview then ends; it needs no file, commit, spec status or workspace check. If the user requests repository implementation or a saved artifact, hand the confirmed intent to the appropriate workflow using only that authorization.

## Resume or pause

Resume from the latest visible map and Notes. When they are unavailable, state the missing context and ask the user to supply or reconstruct it; do not claim that previous answers are recovered. Preserve supplied answers and ask only for remaining gaps.

Before a pause, show the current Intent, map, notes and next question or block as one portable state summary. This summary is the continuation record for conversation mode.
