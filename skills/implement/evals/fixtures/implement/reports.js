function visibleReports(reports) {
  return reports.filter((report) => !report.archived);
}

export { visibleReports };
