export interface FetchRequest {
  key: string;
}

export interface FetchSuccess {
  key: string;
  data: any;
}

export interface FetchFailure {
  key: string;
  error: any;
}