# Selection

Read this before asking the user to select a set, or when candidates exceed the
active question tool's option limit. The main skill still owns preparation,
recommendations, reply interpretation and waiting. The active schema decides
which controls and fields are available.

## Prepare the candidates

Inspect the source before asking. A fact that uniquely identifies the required
candidate settles that fact; ask only when a user choice remains.

Give each candidate a stable ID and a clear name or path. Put the complete set and
the relevant consequences inside the question. Keep IDs stable while the question
is pending. If evidence changes the set, explain the change before applying a reply.

## Select a set

For independent actions, such as removing instruction sections:

1. Use native multi-select only when the active schema supports it and the complete
   set fits the control's limits. Each option names one action, what replaces it,
   and anything the action retains or loses. Explain how to keep everything through
   the host's supported empty-selection or custom-answer path.
2. Otherwise ask one remove/keep question per section, one call at a time. Include
   that section's exact scope and consequences in each question. Preserve earlier
   answers and ask only about sections still undecided.
3. Record the selected set from actual answers. An explicit “none” or a confirmed
   empty selection keeps everything. A missing result, host cancellation without
   an answer, expiry or unanswered prompt leaves the decision pending. An explicit
   user instruction to cancel an action retires it within the stated scope.

For a single candidate, a remove/keep question is enough; satisfy the active
tool's minimum option count without inventing more actions. Follow the host's
custom-answer mechanism rather than adding a duplicate Other control.

## Select one from too many candidates

Preserve access to every candidate and to the valid “none” outcome, if there is
one. Choose a supported path:

- **Free text is supported:** list all candidates with their IDs inside the
  question and ask for one ID or none. Use the host's text-question type when it
  has one. If text is available only through a custom-answer path, explain that
  path and use only genuine options within the control's limits.
- **Only bounded choices are supported:** ask one narrowing question at a time.
  Show the full candidate list and each group's members inside the question.
  Groups must retain every candidate; a group selection only narrows the list.
  Ask for the final candidate before treating it as selected.

Keep the recommendation tied to the inspected evidence. A smaller option limit
changes the interaction, not which candidates the user is allowed to choose.

## Apply the reply

Match the reply to the pending question and its current candidates. Use known
IDs or unambiguous names. A label, a separate note, and free text can all carry
conditions. Preserve them together.

If an ID is unknown, a name matches several candidates, or two parts of the reply
conflict, ask only for that remaining clarification. Preserve every part already
settled. For hosts that return comma-separated labels, match known labels before
interpreting the remaining text; commas in a label or note are not separators by
themselves.

Before a write or removal, record the exact authorized set and its conditions in
the caller's existing state. Pass only that set to the action. Clear answers need
no second approval merely because their input was text. A changed action scope
needs its own supported decision before that change proceeds.

Selection is complete when the chosen candidates are unambiguous, all conditions
for the next action are settled, and every affected action traces to an actual
answer. For a partial set, continue independent approved work only when the caller
permits it; keep every undecided action pending.
