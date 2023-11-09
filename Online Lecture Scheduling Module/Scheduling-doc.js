Lecture = {
  Scheduling: {
    BaseForm: function (calendar, item) {},
    ButtonEventArgs: function (button) {},
    Calendar: function (element) {},
    CalendarView: function () {},
    CancelEventArgs: function () {},
    CellEventArgs: function (cell) {},
    Contact: function () {},
    DailyRecurrence: function () {},
    DateChangedEventArgs: function (newDate, prevDate) {},
    DateTime: function (date) {},
    DayOfWeek: function () {},
    DayOfWeekFormat: function () {},
    DayOfWeekType: function () {},
    DaysOfWeek: function () {},
    Dictionary: function () {},
    EmptyEventArgs: function () {},
    EventArgs: function () {},
    EventDispatcher: function () {},
    FormEventArgs: function (form) {},
    GroupType: function () {},
    HeaderEventArgs: function (type) {},
    HeaderType: function () {},
    HorizontalHeaderStyle: function () {},
    IEnumerable: function (items) {},
    Item: function () {},
    ItemEventArgs: function (item) {},
    ItemModifiedEventArgs: function (item, oldItem, action) {},
    ItemModifyAction: function () {},
    ItemModifyingEventArgs: function (item, changes, action) {},
    ItemSettings: function () {},
    Keys: function () {},
    List: function (items) {},
    ListSettings: function () {},
    Location: function () {},
    MainHeaderStyle: function () {},
    MonthlyRecurrence: function () {},
    MonthRangeSettings: function () {},
    MonthSettings: function () {},
    NotifyCollectionChangedAction: function () {},
    NotifyCollectionChangedEventArgs: function (action, changes, index) {},
    NotifyCollectionChangedEventDispatcher: function () {},
    NotifyCollectionChangingEventArgs: function (action, changes, index) {},
    NotifyCollectionChangingEventDispatcher: function () {},
    ObservableCollection: function (items) {},
    Occurrence: function () {},
    Orientation: function () {},
    PropertyChangedEventArgs: function () {},
    PropertyChangedEventDispatcher: function () {},
    PropertyEventArgs: function (propertyName, oldValue, newValue) {},
    Recurrence: function () {},
    RecurrenceEnd: function () {},
    RecurrencePattern: function () {},
    RecurrenceState: function () {},
    Reminder: function () {},
    ReminderType: function () {},
    Resource: function () {},
    ResourceViewSettings: function () {},
    ResourceViewTimeline: function () {},
    Schedule: function () {},
    Selection: function () {},
    SelectionEventArgs: function (startTime, endTime, resource) {},
    Task: function () {},
    TaskEventArgs: function (task) {},
    TaskPriority: function () {},
    TaskStatus: function () {},
    TimelineSettings: function () {},
    TimeRange: function (start, end) {},
    TimeSpan: function (ticks) {},
    TimetableSettings: function () {},
    TimeUnit: function () {},
    VerticalHeaderStyle: function () {},
    ViewCell: function () {},
    WeekRangeSettings: function () {},
    WeekRangeViewStyle: function () {},
    YearlyRecurrence: function () {},
    __namespace: true,
  },
  __namespace: true,
};

Lecture.Scheduling.BaseForm.prototype = {
  addControl: function (control) {},
  clearControls: function () {},
  closeForm: function (formId) {},
  col: function () {},
  createButton: function (options) {},
  createCheckBox: function (options) {},
  createCheckBoxList: function (options) {},
  createDropDownList: function (options) {},
  createEditBox: function (options) {},
  createRadioButton: function (options) {},
  createTextArea: function (options) {},
  createTextBox: function (options) {},
  divider: function () {},
  drawButtons: function () {},
  drawContent: function () {},
  drawHeader: function () {},
  getContent: function () {},
  getControls: function () {},
  getControlValue: function (controlId) {},
  getElement: function () {},
  getHeader: function () {},
  removeControl: function (control) {},
  row: function () {},
  showForm: function () {},
};
Lecture.Scheduling.BaseForm.__class = true;
Lecture.Scheduling.ButtonEventArgs.prototype = {};
Lecture.Scheduling.ButtonEventArgs.__class = true;
Lecture.Scheduling.Calendar.prototype = {
  attach: function () {},
  copyFrom: function (settings) {},
  detach: function () {},
  draw: function () {},
  getCellAt: function (x, y) {},
  getTimeCell: function (time, isEndTime, resource) {},
  getTimeCells: function (startTime, endTime, isEndTime, resource) {},
  hasItemsToRemind: function () {},
  hasTasksToRemind: function () {},
  onButtonClick: function () {},
  onCalendarLoad: function () {},
  onCellClick: function () {},
  onCellDoubleClick: function () {},
  onCueClick: function () {},
  onFormClose: function () {},
  onFormShow: function () {},
  onHeaderClick: function () {},
  onHeaderDoubleClick: function () {},
  onItemClick: function () {},
  onItemCreated: function () {},
  onItemCreating: function () {},
  onItemDeleted: function () {},
  onItemDeleting: function () {},
  onItemDoubleClick: function () {},
  onItemDragEnd: function () {},
  onItemDragStart: function () {},
  onItemInplaceEditEnd: function () {},
  onItemInplaceEditStart: function () {},
  onItemModified: function () {},
  onItemModifying: function () {},
  onItemReminderTriggered: function () {},
  onItemResizeEnd: function () {},
  onItemResizeStart: function () {},
  onRecurringItemDeleting: function () {},
  onSelectionChanged: function () {},
  onSelectionEnd: function () {},
  onSelectionStart: function () {},
  onTaskReminderTriggered: function () {},
  onVisibleDateChanged: function (args) {},
  render: function () {},
  repaint: function (full) {},
};
Lecture.Scheduling.Calendar.__class = true;

Lecture.Scheduling.CalendarView.prototype = {
  List: 0,
  MonthRange: 1,
  ResourceView: 2,
  SingleMonth: 3,
  Timetable: 4,
  WeekRange: 5,
};
Lecture.Scheduling.CalendarView.__enum = true;

Lecture.Scheduling.CancelEventArgs.prototype = {};
Lecture.Scheduling.CancelEventArgs.__class = true;

Lecture.Scheduling.CellEventArgs.prototype = {};
Lecture.Scheduling.CellEventArgs.__class = true;

Lecture.Scheduling.Contact.prototype = {
  fromJson: function (json) {},
  loadFromXml: function (element, context) {},
  saveToXml: function (element, context) {},
  toJson: function () {},
};
Lecture.Scheduling.Contact.__class = true;

Lecture.Scheduling.DailyRecurrence.prototype = {
  ByDayInterval: 0,
  EveryWeekend: 1,
  EveryWorkday: 2,
};
Lecture.Scheduling.DailyRecurrence.__enum = true;

Lecture.Scheduling.DateChangedEventArgs.prototype = {};
Lecture.Scheduling.DateChangedEventArgs.__class = true;

Lecture.Scheduling.DateTime.prototype = {
  __getDate: function () {},
  __getDay: function () {},
  __getFullYear: function () {},
  __getHours: function () {},
  __getMilliseconds: function () {},
  __getMinutes: function () {},
  __getMonth: function () {},
  __getSeconds: function () {},
  __getTime: function () {},
  __getTimezoneOffset: function () {},
  __getUTCDate: function () {},
  __getUTCDay: function () {},
  __getUTCFullYear: function () {},
  __getUTCHours: function () {},
  __getUTCMilliseconds: function () {},
  __getUTCMinutes: function () {},
  __getUTCMonth: function () {},
  __getUTCSeconds: function () {},
  __setDate: function (day) {},
  __setFullYear: function (year, month, day) {},
  __setHours: function (hour, min, sec, millisec) {},
  __setMilliseconds: function (millisec) {},
  __setMinutes: function (min, sec, millisec) {},
  __setSeconds: function (sec, millisec) {},
  __setTime: function (millisec) {},
  __setUTCDate: function (day) {},
  __setUTCFullYear: function (year, month, day) {},
  __setUTCHours: function (hour, min, sec, millisec) {},
  __setUTCMilliseconds: function (millisec) {},
  __setUTCMinutes: function (min, sec, millisec) {},
  __setUTCSeconds: function (sec, millisec) {},
  __toDateString: function () {},
  __toLocaleDateString: function () {},
  __toLocaleString: function () {},
  __toLocaleTimeString: function () {},
  __toString: function () {},
  __toTimeString: function () {},
  __toUTCString: function () {},
  __valueOf: function () {},
  addDays: function () {},
  addHours: function () {},
  addMilliseconds: function () {},
  addMinutes: function () {},
  addMonths: function () {},
  addSeconds: function () {},
  addYears: function () {},
  clone: function () {},
  combine: function (date, time) {},
  compareTo: function (date) {},
  daysBetween: function (date1, date2) {},
  equals: function (date) {},
  fromDateParts: function (
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  ) {},
  fromDateString: function (dateString) {},
  fromMilliseconds: function (milliseconds) {},
  getDate: function () {},
  getDayOfMonth: function (date) {},
  getDayOfWeek: function (date) {},
  getDaysInMonth: function () {},
  getMonth: function () {},
  getWeekFirstDate: function (date, formatInfo) {},
  getYear: function (date) {},
  greaterThan: function (date) {},
  greaterThanOrEqual: function (date) {},
  hoursBetween: function (date1, date2) {},
  isLeapYear: function () {},
  lessThan: function (date) {},
  lessThanOrEqual: function (date) {},
  maxDate: function (date1, date2) {},
  maxValue: function () {},
  millisecondsBetween: function (date1, date2) {},
  minDate: function (date1, date2) {},
  minutesBetween: function (date1, date2) {},
  minValue: function () {},
  monthsBetween: function (date1, date2) {},
  now: function () {},
  secondsBetween: function (date1, date2) {},
  subtract: function () {},
  today: function () {},
  toString: function (format, formatInfo) {},
  valueOf: function () {},
  weeksBetween: function (date1, date2) {},
  yearsBetween: function (date1, date2) {},
};
Lecture.Scheduling.DateTime.__class = true;

Lecture.Scheduling.DayOfWeek.prototype = {
  Friday: 0,
  Monday: 1,
  Saturday: 2,
  Sunday: 3,
  Thursday: 4,
  Tuesday: 5,
  Wednesday: 6,
};
Lecture.Scheduling.DayOfWeek.__enum = true;

Lecture.Scheduling.DayOfWeekFormat.prototype = {
  Abbreviated: 0,
  Full: 1,
  SingleLetter: 2,
};
Lecture.Scheduling.DayOfWeekFormat.__enum = true;

Lecture.Scheduling.DayOfWeekType.prototype = {
  AnyDay: 0,
  Friday: 1,
  Monday: 2,
  Saturday: 3,
  Sunday: 4,
  Thursday: 5,
  Tuesday: 6,
  Wednesday: 7,
  Weekend: 8,
  Workday: 9,
};
Lecture.Scheduling.DayOfWeekType.__enum = true;

Lecture.Scheduling.DaysOfWeek.prototype = {
  All: 0,
  Friday: 1,
  Monday: 2,
  None: 3,
  Saturday: 4,
  Sunday: 5,
  Thursday: 6,
  Tuesday: 7,
  Wednesday: 8,
};
Lecture.Scheduling.DaysOfWeek.__enum = true;

Lecture.Scheduling.Dictionary.prototype = {
  contains: function (key) {},
  get: function (key) {},
  remove: function (key) {},
  set: function (key, value) {},
};
Lecture.Scheduling.Dictionary.__class = true;

Lecture.Scheduling.EmptyEventArgs.prototype = {};
Lecture.Scheduling.EmptyEventArgs.__class = true;

Lecture.Scheduling.EventArgs.prototype = {};
Lecture.Scheduling.EventArgs.__class = true;

Lecture.Scheduling.EventDispatcher.prototype = {
  addEventListener: function () {},
  raiseEvent: function () {},
  removeEventListener: function () {},
};
Lecture.Scheduling.EventDispatcher.__class = true;

Lecture.Scheduling.FormEventArgs.prototype = {};
Lecture.Scheduling.FormEventArgs.__class = true;

Lecture.Scheduling.GroupType.prototype = {
  FilterByContacts: 0,
  FilterByLocations: 1,
  FilterByResources: 2,
  FilterByTasks: 3,
  GroupByContacts: 4,
  GroupByLocations: 5,
  GroupByResources: 6,
  GroupByTasks: 7,
  None: 8,
};
Lecture.Scheduling.GroupType.__enum = true;

Lecture.Scheduling.HeaderEventArgs.prototype = {};
Lecture.Scheduling.HeaderEventArgs.__class = true;

Lecture.Scheduling.HeaderType.prototype = {
  Cell: 0,
  DayNames: 1,
  Group: 2,
  Main: 3,
  Timeline: 4,
  WeekNumbers: 5,
};
Lecture.Scheduling.HeaderType.__enum = true;

Lecture.Scheduling.HorizontalHeaderStyle.prototype = {
  Bottom: 0,
  None: 1,
  Top: 2,
};
Lecture.Scheduling.HorizontalHeaderStyle.__enum = true;

Lecture.Scheduling.IEnumerable.prototype = {
  add: function (item) {},
  addRange: function (range) {},
  clear: function () {},
  clone: function () {},
  contains: function (item) {},
  copyTo: function (destination, length, sourceIndex, destinationIndex) {},
  count: function () {},
  forEach: function (callback, context) {},
  indexOfItem: function (obj, fromIndex) {},
  insert: function (index, item) {},
  item: function (index) {},
  items: function () {},
  max: function (selector) {},
  min: function (selector) {},
  remove: function (item) {},
  removeAt: function (index) {},
  removeRange: function (index, count) {},
  reverse: function () {},
  select: function (selector) {},
  sort: function (compareFn) {},
  sum: function (selector) {},
  toArray: function () {},
  where: function (selector) {},
};
Lecture.Scheduling.IEnumerable.__class = true;

Lecture.Scheduling.Item.prototype = {
  clone: function () {},
  fromJson: function (json) {},
  loadFromXml: function (element, context) {},
  onExceptionCreated: function () {},
  onPropertyChanged: function () {},
  onRecurrenceReset: function () {},
  saveToXml: function (element, context) {},
  toJson: function () {},
};
Lecture.Scheduling.Item.__class = true;

Lecture.Scheduling.ItemEventArgs.prototype = {};
Lecture.Scheduling.ItemEventArgs.__class = true;

Lecture.Scheduling.ItemModifiedEventArgs.prototype = {};
Lecture.Scheduling.ItemModifiedEventArgs.__class = true;

Lecture.Scheduling.ItemModifyAction.prototype = {
  Drag: 0,
  Edit: 1,
  InplaceEdit: 2,
  Resize: 3,
};
Lecture.Scheduling.ItemModifyAction.__enum = true;

Lecture.Scheduling.ItemModifyingEventArgs.prototype = {};
Lecture.Scheduling.ItemModifyingEventArgs.__class = true;

Lecture.Scheduling.ItemSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.ItemSettings.__class = true;

Lecture.Scheduling.Keys.prototype = {
  Alt: 0,
  Control: 1,
  None: 2,
  Shift: 3,
};
Lecture.Scheduling.Keys.__enum = true;

Lecture.Scheduling.List.prototype = {};
Lecture.Scheduling.List.__class = true;

Lecture.Scheduling.ListSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.ListSettings.__class = true;

Lecture.Scheduling.Location.prototype = {
  fromJson: function (json) {},
  loadFromXml: function (element, context) {},
  saveToXml: function (element, context) {},
  toJson: function () {},
};
Lecture.Scheduling.Location.__class = true;

Lecture.Scheduling.MainHeaderStyle.prototype = {
  Buttons: 0,
  None: 1,
  Title: 2,
};
Lecture.Scheduling.MainHeaderStyle.__enum = true;

Lecture.Scheduling.MonthlyRecurrence.prototype = {
  ByDayNumber: 0,
  ByDayType: 1,
};
Lecture.Scheduling.MonthlyRecurrence.__enum = true;

Lecture.Scheduling.MonthRangeSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.MonthRangeSettings.__class = true;

Lecture.Scheduling.MonthSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.MonthSettings.__class = true;

Lecture.Scheduling.NotifyCollectionChangedAction.prototype = {};
Lecture.Scheduling.NotifyCollectionChangedAction.__class = true;

Lecture.Scheduling.NotifyCollectionChangedEventArgs.prototype = {};
Lecture.Scheduling.NotifyCollectionChangedEventArgs.__class = true;

Lecture.Scheduling.NotifyCollectionChangedEventDispatcher.prototype = {};
Lecture.Scheduling.NotifyCollectionChangedEventDispatcher.__class = true;

Lecture.Scheduling.NotifyCollectionChangingEventArgs.prototype = {};
Lecture.Scheduling.NotifyCollectionChangingEventArgs.__class = true;

Lecture.Scheduling.NotifyCollectionChangingEventDispatcher.prototype = {};
Lecture.Scheduling.NotifyCollectionChangingEventDispatcher.__class = true;

Lecture.Scheduling.ObservableCollection.prototype = {
  add: function (item) {},
  clear: function () {},
  onCollectionChanged: function (args) {},
  onCollectionChanging: function (args) {},
  onPropertyChanged: function (args) {},
  remove: function (item) {},
  removeAt: function (itemIndex) {},
  removeRange: function (index, count) {},
};
Lecture.Scheduling.ObservableCollection.__class = true;

Lecture.Scheduling.Occurrence.prototype = {
  First: 0,
  Fourth: 1,
  Last: 2,
  Second: 3,
  Third: 4,
};
Lecture.Scheduling.Occurrence.__enum = true;

Lecture.Scheduling.Orientation.prototype = {
  Horizontal: 0,
  Vertical: 1,
};
Lecture.Scheduling.Orientation.__enum = true;

Lecture.Scheduling.PropertyChangedEventArgs.prototype = {};
Lecture.Scheduling.PropertyChangedEventArgs.__class = true;

Lecture.Scheduling.PropertyChangedEventDispatcher.prototype = {};
Lecture.Scheduling.PropertyChangedEventDispatcher.__class = true;

Lecture.Scheduling.PropertyEventArgs.prototype = {};
Lecture.Scheduling.PropertyEventArgs.__class = true;

Lecture.Scheduling.Recurrence.prototype = {
  applyPattern: function (recurrence) {},
  associateWith: function (master) {},
  clearExceptions: function () {},
  clone: function () {},
  fromJson: function (json) {},
  generateItems: function (startDate, endDate) {},
  getEndDate: function () {},
  getExceptions: function () {},
  getOccurrence: function (index, refIsDeleted, noException) {},
  loadFromXml: function (element, context) {},
  markException: function (item, deleted, reminder) {},
  removeException: function (item) {},
  samePatternAs: function (recurrence) {},
  saveToXml: function (element, context) {},
  toJson: function () {},
  toLocalizedString: function (formatInfo, localInfo) {},
};
Lecture.Scheduling.Recurrence.__class = true;

Lecture.Scheduling.RecurrenceEnd.prototype = {
  EndDate: 0,
  Never: 1,
  NumOccurrences: 2,
};
Lecture.Scheduling.RecurrenceEnd.__enum = true;

Lecture.Scheduling.RecurrencePattern.prototype = {
  ByTimeInterval: 0,
  Daily: 1,
  Monthly: 2,
  Weekly: 3,
  Yearly: 4,
};
Lecture.Scheduling.RecurrencePattern.__enum = true;

Lecture.Scheduling.RecurrenceState.prototype = {
  Exception: 0,
  Master: 1,
  None: 2,
  Occurrence: 3,
};
Lecture.Scheduling.RecurrenceState.__enum = true;

Lecture.Scheduling.Reminder.prototype = {
  clone: function () {},
  fromJson: function (json) {},
  loadFromXml: function (element, context) {},
  onChanged: function () {},
  saveToXml: function (element, context) {},
  toJson: function () {},
};
Lecture.Scheduling.Reminder.__class = true;

Lecture.Scheduling.ReminderType.prototype = {
  Exact: 0,
  Leading: 1,
};
Lecture.Scheduling.ReminderType.__enum = true;

Lecture.Scheduling.Resource.prototype = {
  fromJson: function (json) {},
  loadFromXml: function (element, context) {},
  saveToXml: function (element, context) {},
  toJson: function () {},
};
Lecture.Scheduling.Resource.__class = true;

Lecture.Scheduling.ResourceViewSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.ResourceViewSettings.__class = true;

Lecture.Scheduling.ResourceViewTimeline.prototype = {
  Bottom: 0,
  Middle: 1,
  Top: 2,
};
Lecture.Scheduling.ResourceViewTimeline.__enum = true;

Lecture.Scheduling.Schedule.prototype = {
  copyFrom: function (settings) {},
  fromJson: function (json) {},
  fromXmlDocument: function (document) {},
  getItemById: function (id, occurrenceIndex) {},
  getMasterById: function (id) {},
  getResourceById: function (id) {},
  loadFromXml: function (fileUrl, onLoad, onError) {},
  saveToXml: function (url) {},
  toJson: function () {},
  toXmlDocument: function () {},
};
Lecture.Scheduling.Schedule.__class = true;

Lecture.Scheduling.Selection.prototype = {
  clear: function () {},
  getRange: function () {},
  isEmpty: function () {},
  setRange: function (start, end, resource) {},
};
Lecture.Scheduling.Selection.__class = true;

Lecture.Scheduling.SelectionEventArgs.prototype = {};
Lecture.Scheduling.SelectionEventArgs.__class = true;

Lecture.Scheduling.Task.prototype = {
  fromJson: function (json) {},
  loadFromXml: function (element, context) {},
  saveToXml: function (element, context) {},
  toJson: function () {},
};
Lecture.Scheduling.Task.__class = true;

Lecture.Scheduling.TaskEventArgs.prototype = {};
Lecture.Scheduling.TaskEventArgs.__class = true;

Lecture.Scheduling.TaskPriority.prototype = {
  High: 0,
  Low: 1,
  Normal: 2,
};
Lecture.Scheduling.TaskPriority.__enum = true;

Lecture.Scheduling.TaskStatus.prototype = {
  Completed: 0,
  Deferred: 1,
  InProgress: 2,
  NotStarted: 3,
  WaitingOther: 4,
};
Lecture.Scheduling.TaskStatus.__enum = true;

Lecture.Scheduling.TimelineSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.TimelineSettings.__class = true;

Lecture.Scheduling.TimeRange.prototype = {
  contains: function (range) {},
  equals: function (range) {},
  intersects: function (range) {},
};
Lecture.Scheduling.TimeRange.__class = true;

Lecture.Scheduling.TimeSpan.prototype = {
  add: function (timespan) {},
  clone: function () {},
  fromDays: function (days) {},
  fromHours: function (hours) {},
  fromMilliseconds: function (milliseconds) {},
  fromMinutes: function (minutes) {},
  fromSeconds: function (seconds) {},
  subtract: function (timespan) {},
  equals: function () {},
};
Lecture.Scheduling.TimeSpan.__class = true;

Lecture.Scheduling.TimetableSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.TimetableSettings.__class = true;

Lecture.Scheduling.TimeUnit.prototype = {
  Day: 0,
  Hour: 1,
  Minute: 2,
  Month: 3,
  Second: 4,
  Week: 5,
  Year: 6,
};
Lecture.Scheduling.TimeUnit.__enum = true;

Lecture.Scheduling.VerticalHeaderStyle.prototype = {
  Left: 0,
  None: 1,
  Right: 2,
};
Lecture.Scheduling.VerticalHeaderStyle.__enum = true;

Lecture.Scheduling.ViewCell.prototype = {};
Lecture.Scheduling.ViewCell.__class = true;

Lecture.Scheduling.WeekRangeSettings.prototype = {
  copyFrom: function (settings) {},
  onPropertyChanged: function () {},
};
Lecture.Scheduling.WeekRangeSettings.__class = true;

Lecture.Scheduling.WeekRangeViewStyle.prototype = {
  SingleWeek: 0,
  WeekPerRow: 1,
};
Lecture.Scheduling.WeekRangeViewStyle.__enum = true;

Lecture.Scheduling.YearlyRecurrence.prototype = {
  ByDayType: 0,
  SpecificDate: 1,
};
Lecture.Scheduling.YearlyRecurrence.__enum = true;
