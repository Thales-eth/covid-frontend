export interface ICovidHistoricalData {
  links: Links;
  meta: Meta;
  data: ICovidDataItem[];
}

export interface ICovidDataItem {
  date: string;
  states: number;
  cases: Cases;
  testing: Testing;
  outcomes: Outcomes;
}

interface Outcomes {
  hospitalized: Hospitalized;
  death: Death;
}

interface Death {
  total: Currently;
}

interface Hospitalized {
  currently: Currently;
  in_icu: Inicu;
  on_ventilator: Inicu;
}

interface Inicu {
  currently: Currently;
}

interface Currently {
  value: null | number;
  calculated: Calculated3;
}

interface Calculated3 {
  population_percent: null | number;
  change_from_prior_day: null | number;
  seven_day_change_percent: null | number;
  seven_day_average: null | number;
}

interface Testing {
  total: Total2;
}

interface Total2 {
  value: number;
  calculated: Calculated2;
}

interface Calculated2 {
  population_percent: number;
  change_from_prior_day: null | number;
  seven_day_change_percent: null | number;
}

interface Cases {
  total: Total;
}

interface Total {
  value: null | number;
  calculated: Calculated;
}

interface Calculated {
  population_percent: null | number;
  change_from_prior_day: null | number;
  seven_day_change_percent: null | number;
}

interface Meta {
  build_time: string;
  license: string;
  version: string;
  field_definitions: Fielddefinition[];
}

interface Fielddefinition {
  name: string;
  field?: string;
  deprecated: boolean;
  prior_names: string[];
}

interface Links {
  self: string;
}

export interface IWeeklyAverageData {
  cases: number;
  testing: number;
  deaths: number;
}

export type TWeeklyAverageData = Map<string, IWeeklyAverageData>;
