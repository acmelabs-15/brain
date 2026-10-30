/**
 * Run git for brain's scripts. Every run reads each path as a literal path, never as a glob
 * (`GIT_LITERAL_PATHSPECS=1`): a file named `a[1].md` names that file alone, so a check or a
 * commit cannot reach `a1.md` too.
 */

/** What one git run gives back: `ok` when git ran and exited 0, its output, and its error text. */
export type GitRun = { ok: boolean; out: string; error: string };

/**
 * Run `git <args>` in `cwd`. It never throws: when git cannot start (no git on this machine, no
 * folder at `cwd`), `ok` is false and `error` says why.
 */
export function git(cwd: string, ...args: string[]): GitRun {
  try {
    const run = Bun.spawnSync(["git", ...args], {
      cwd,
      env: { ...process.env, GIT_LITERAL_PATHSPECS: "1" },
      stdout: "pipe",
      stderr: "pipe",
    });
    return {
      ok: run.exitCode === 0,
      out: run.stdout.toString(),
      error: run.stderr.toString().trim(),
    };
  } catch (error) {
    return { ok: false, out: "", error: error instanceof Error ? error.message : String(error) };
  }
}
