import * as jspb from 'google-protobuf'



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
  getInvitecode(): string;
  setInvitecode(value: string): GetGuestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuestsRequest): GetGuestsRequest.AsObject;
  static serializeBinaryToWriter(message: GetGuestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuestsRequest;
  static deserializeBinaryFromReader(message: GetGuestsRequest, reader: jspb.BinaryReader): GetGuestsRequest;
}

export namespace GetGuestsRequest {
  export type AsObject = {
    invitecode: string,
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

export class UpdateAttendanceRequest extends jspb.Message {
  getGuestid(): string;
  setGuestid(value: string): UpdateAttendanceRequest;

  getAttendance(): Attendance;
  setAttendance(value: Attendance): UpdateAttendanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAttendanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAttendanceRequest): UpdateAttendanceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAttendanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAttendanceRequest;
  static deserializeBinaryFromReader(message: UpdateAttendanceRequest, reader: jspb.BinaryReader): UpdateAttendanceRequest;
}

export namespace UpdateAttendanceRequest {
  export type AsObject = {
    guestid: string,
    attendance: Attendance,
  }
}

export class UpdateAttendanceResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UpdateAttendanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAttendanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAttendanceResponse): UpdateAttendanceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAttendanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAttendanceResponse;
  static deserializeBinaryFromReader(message: UpdateAttendanceResponse, reader: jspb.BinaryReader): UpdateAttendanceResponse;
}

export namespace UpdateAttendanceResponse {
  export type AsObject = {
    message: string,
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
