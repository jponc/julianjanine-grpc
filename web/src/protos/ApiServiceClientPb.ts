/**
 * @fileoverview gRPC-Web generated client stub for apipb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_api_pb from '../protos/api_pb';


export class ApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorHealthcheck = new grpcWeb.MethodDescriptor(
    '/apipb.Api/Healthcheck',
    grpcWeb.MethodType.UNARY,
    protos_api_pb.HealthcheckRequest,
    protos_api_pb.HealthcheckResponse,
    (request: protos_api_pb.HealthcheckRequest) => {
      return request.serializeBinary();
    },
    protos_api_pb.HealthcheckResponse.deserializeBinary
  );

  healthcheck(
    request: protos_api_pb.HealthcheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_api_pb.HealthcheckResponse>;

  healthcheck(
    request: protos_api_pb.HealthcheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_api_pb.HealthcheckResponse) => void): grpcWeb.ClientReadableStream<protos_api_pb.HealthcheckResponse>;

  healthcheck(
    request: protos_api_pb.HealthcheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_api_pb.HealthcheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/apipb.Api/Healthcheck',
        request,
        metadata || {},
        this.methodDescriptorHealthcheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apipb.Api/Healthcheck',
    request,
    metadata || {},
    this.methodDescriptorHealthcheck);
  }

  methodDescriptorGetGuests = new grpcWeb.MethodDescriptor(
    '/apipb.Api/GetGuests',
    grpcWeb.MethodType.UNARY,
    protos_api_pb.GetGuestsRequest,
    protos_api_pb.GetGuestsResponse,
    (request: protos_api_pb.GetGuestsRequest) => {
      return request.serializeBinary();
    },
    protos_api_pb.GetGuestsResponse.deserializeBinary
  );

  getGuests(
    request: protos_api_pb.GetGuestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_api_pb.GetGuestsResponse>;

  getGuests(
    request: protos_api_pb.GetGuestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_api_pb.GetGuestsResponse) => void): grpcWeb.ClientReadableStream<protos_api_pb.GetGuestsResponse>;

  getGuests(
    request: protos_api_pb.GetGuestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_api_pb.GetGuestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/apipb.Api/GetGuests',
        request,
        metadata || {},
        this.methodDescriptorGetGuests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apipb.Api/GetGuests',
    request,
    metadata || {},
    this.methodDescriptorGetGuests);
  }

  methodDescriptorUpdateAttendance = new grpcWeb.MethodDescriptor(
    '/apipb.Api/UpdateAttendance',
    grpcWeb.MethodType.UNARY,
    protos_api_pb.UpdateAttendanceRequest,
    protos_api_pb.UpdateAttendanceResponse,
    (request: protos_api_pb.UpdateAttendanceRequest) => {
      return request.serializeBinary();
    },
    protos_api_pb.UpdateAttendanceResponse.deserializeBinary
  );

  updateAttendance(
    request: protos_api_pb.UpdateAttendanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_api_pb.UpdateAttendanceResponse>;

  updateAttendance(
    request: protos_api_pb.UpdateAttendanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_api_pb.UpdateAttendanceResponse) => void): grpcWeb.ClientReadableStream<protos_api_pb.UpdateAttendanceResponse>;

  updateAttendance(
    request: protos_api_pb.UpdateAttendanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_api_pb.UpdateAttendanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/apipb.Api/UpdateAttendance',
        request,
        metadata || {},
        this.methodDescriptorUpdateAttendance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apipb.Api/UpdateAttendance',
    request,
    metadata || {},
    this.methodDescriptorUpdateAttendance);
  }

  methodDescriptorSendInquiry = new grpcWeb.MethodDescriptor(
    '/apipb.Api/SendInquiry',
    grpcWeb.MethodType.UNARY,
    protos_api_pb.SendInquiryRequest,
    protos_api_pb.SendInquiryResponse,
    (request: protos_api_pb.SendInquiryRequest) => {
      return request.serializeBinary();
    },
    protos_api_pb.SendInquiryResponse.deserializeBinary
  );

  sendInquiry(
    request: protos_api_pb.SendInquiryRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_api_pb.SendInquiryResponse>;

  sendInquiry(
    request: protos_api_pb.SendInquiryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_api_pb.SendInquiryResponse) => void): grpcWeb.ClientReadableStream<protos_api_pb.SendInquiryResponse>;

  sendInquiry(
    request: protos_api_pb.SendInquiryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_api_pb.SendInquiryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/apipb.Api/SendInquiry',
        request,
        metadata || {},
        this.methodDescriptorSendInquiry,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apipb.Api/SendInquiry',
    request,
    metadata || {},
    this.methodDescriptorSendInquiry);
  }

}

