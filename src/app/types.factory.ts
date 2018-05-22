export class ServerResponse {
  response: any;
}

export class Directory {
  id: string;
  name: string;
}

export class TypeError {
  id: string;
  name: string;
  weight: number;
  point: number;
  endDate: Date | string;
  description: string;
  ei: string;
}

export class FieldTypeError {
  id: string;
  name: string;
  type: string;
}
