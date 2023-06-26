export interface Band {
  name: string;
  recordLabel?: string;
}

type RecordLabelBands = Band & {
  festivals: string[];
};

export interface MusicFestival {
  name?: string;
  bands: Band[];
}

export interface FestivalsAPIResponse {
  data: MusicFestival[];
}

export interface RecordLabels {
  name: string;
  bands: RecordLabelBands[];
}
