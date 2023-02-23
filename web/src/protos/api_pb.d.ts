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
  getInviteCode(): string;
  setInviteCode(value: string): GetGuestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuestsRequest): GetGuestsRequest.AsObject;
  static serializeBinaryToWriter(message: GetGuestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuestsRequest;
  static deserializeBinaryFromReader(message: GetGuestsRequest, reader: jspb.BinaryReader): GetGuestsRequest;
}

export namespace GetGuestsRequest {
  export type AsObject = {
    inviteCode: string,
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
  getGuestId(): string;
  setGuestId(value: string): UpdateAttendanceRequest;

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
    guestId: string,
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

export class SendInquiryRequest extends jspb.Message {
  getFullName(): string;
  setFullName(value: string): SendInquiryRequest;

  getEmail(): string;
  setEmail(value: string): SendInquiryRequest;

  getPhone(): string;
  setPhone(value: string): SendInquiryRequest;

  getMessage(): string;
  setMessage(value: string): SendInquiryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendInquiryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendInquiryRequest): SendInquiryRequest.AsObject;
  static serializeBinaryToWriter(message: SendInquiryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendInquiryRequest;
  static deserializeBinaryFromReader(message: SendInquiryRequest, reader: jspb.BinaryReader): SendInquiryRequest;
}

export namespace SendInquiryRequest {
  export type AsObject = {
    fullName: string,
    email: string,
    phone: string,
    message: string,
  }
}

export class SendInquiryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendInquiryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendInquiryResponse): SendInquiryResponse.AsObject;
  static serializeBinaryToWriter(message: SendInquiryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendInquiryResponse;
  static deserializeBinaryFromReader(message: SendInquiryResponse, reader: jspb.BinaryReader): SendInquiryResponse;
}

export namespace SendInquiryResponse {
  export type AsObject = {
  }
}

export class UpdateDietaryRequirementRequest extends jspb.Message {
  getGuestId(): string;
  setGuestId(value: string): UpdateDietaryRequirementRequest;

  getDietaryRequirement(): string;
  setDietaryRequirement(value: string): UpdateDietaryRequirementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDietaryRequirementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDietaryRequirementRequest): UpdateDietaryRequirementRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDietaryRequirementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDietaryRequirementRequest;
  static deserializeBinaryFromReader(message: UpdateDietaryRequirementRequest, reader: jspb.BinaryReader): UpdateDietaryRequirementRequest;
}

export namespace UpdateDietaryRequirementRequest {
  export type AsObject = {
    guestId: string,
    dietaryRequirement: string,
  }
}

export class UpdateDietaryRequirementResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UpdateDietaryRequirementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDietaryRequirementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDietaryRequirementResponse): UpdateDietaryRequirementResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDietaryRequirementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDietaryRequirementResponse;
  static deserializeBinaryFromReader(message: UpdateDietaryRequirementResponse, reader: jspb.BinaryReader): UpdateDietaryRequirementResponse;
}

export namespace UpdateDietaryRequirementResponse {
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

  getInviteCode(): string;
  setInviteCode(value: string): Guest;

  getDietaryRequirement(): string;
  setDietaryRequirement(value: string): Guest;

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
    inviteCode: string,
    dietaryRequirement: string,
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
