import * as jspb from 'google-protobuf'



export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export class HealthcheckRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthcheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthcheckRequest): HealthcheckRequest.AsObject;
  static serializeBinaryToWriter(message: HealthcheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthcheckRequest;
  static deserializeBinaryFromReader(message: HealthcheckRequest, reader: jspb.BinaryReader): HealthcheckRequest;
}

export namespace HealthcheckRequest {
  export type AsObject = {
  }
}

export class HealthcheckResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HealthcheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthcheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthcheckResponse): HealthcheckResponse.AsObject;
  static serializeBinaryToWriter(message: HealthcheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthcheckResponse;
  static deserializeBinaryFromReader(message: HealthcheckResponse, reader: jspb.BinaryReader): HealthcheckResponse;
}

export namespace HealthcheckResponse {
  export type AsObject = {
    message: string,
  }
}

export class GetGuestsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuestsRequest): GetGuestsRequest.AsObject;
  static serializeBinaryToWriter(message: GetGuestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuestsRequest;
  static deserializeBinaryFromReader(message: GetGuestsRequest, reader: jspb.BinaryReader): GetGuestsRequest;
}

export namespace GetGuestsRequest {
  export type AsObject = {
  }
}

export class GetGuestsResponse extends jspb.Message {
  getGuestsList(): Array<Guest>;
  setGuestsList(value: Array<Guest>): GetGuestsResponse;
  clearGuestsList(): GetGuestsResponse;
  addGuests(value?: Guest, index?: number): Guest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuestsResponse): GetGuestsResponse.AsObject;
  static serializeBinaryToWriter(message: GetGuestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuestsResponse;
  static deserializeBinaryFromReader(message: GetGuestsResponse, reader: jspb.BinaryReader): GetGuestsResponse;
}

export namespace GetGuestsResponse {
  export type AsObject = {
    guestsList: Array<Guest.AsObject>,
  }
}

export class Guest extends jspb.Message {
  getId(): string;
  setId(value: string): Guest;

  getName(): string;
  setName(value: string): Guest;

  getAttendance(): Attendance;
  setAttendance(value: Attendance): Guest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Guest.AsObject;
  static toObject(includeInstance: boolean, msg: Guest): Guest.AsObject;
  static serializeBinaryToWriter(message: Guest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Guest;
  static deserializeBinaryFromReader(message: Guest, reader: jspb.BinaryReader): Guest;
}

export namespace Guest {
  export type AsObject = {
    id: string,
    name: string,
    attendance: Attendance,
  }
}

export class Invitation extends jspb.Message {
  getCode(): string;
  setCode(value: string): Invitation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invitation.AsObject;
  static toObject(includeInstance: boolean, msg: Invitation): Invitation.AsObject;
  static serializeBinaryToWriter(message: Invitation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invitation;
  static deserializeBinaryFromReader(message: Invitation, reader: jspb.BinaryReader): Invitation;
}

export namespace Invitation {
  export type AsObject = {
    code: string,
  }
}

export enum Attendance { 
  ATTENDANCE_PENDING = 0,
  ATTENDANCE_TENTATIVE = 1,
  ATTENDANCE_YES = 2,
  ATTENDANCE_NO = 3,
}
