  ngOnInit() {
    this.summaryData = this.routePlannerService.routeDataModel.SummaryData;
    // this.routeSummary = this.summaryData.SummaryDataList;

    this.eventsService.on(AARoutePlannerEvents.UPDATE_SUMMARY, this.updateSummaryData);
    this.eventsService.on(MapContextMenuEvents.ROUTE_DIRECTION_ERROR, this.routeDirectionError);
  }

  ngOnDestroy() {
    this.eventsService.remove(AARoutePlannerEvents.UPDATE_SUMMARY, this.updateSummaryData);
    this.eventsService.remove(MapContextMenuEvents.ROUTE_DIRECTION_ERROR, this.routeDirectionError);
  }
  
  
  export enum AARoutePlannerEvents {
  PLAN_ROUTE = 'PlanRoute',
  ADD_VIA_ROUTE = 'AddViaRoute',
  REVERSE_ROUTE = 'ReverseRoute',
  UPDATE_SUMMARY = 'UpdateSummary',
  UPDATE_SIGNSPOTS = 'UpdateSignspots',
  UPDATE_SUMMARY_MATRIC = 'UpdateSummaryMatrics',
  DEDUCTED_CHANGES = 'DeductedChanges'
}
