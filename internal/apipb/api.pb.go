// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.20.1
// source: protos/api.proto

package apipb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Attendance int32

const (
	Attendance_ATTENDANCE_PENDING   Attendance = 0
	Attendance_ATTENDANCE_TENTATIVE Attendance = 1
	Attendance_ATTENDANCE_YES       Attendance = 2
	Attendance_ATTENDANCE_NO        Attendance = 3
)

// Enum value maps for Attendance.
var (
	Attendance_name = map[int32]string{
		0: "ATTENDANCE_PENDING",
		1: "ATTENDANCE_TENTATIVE",
		2: "ATTENDANCE_YES",
		3: "ATTENDANCE_NO",
	}
	Attendance_value = map[string]int32{
		"ATTENDANCE_PENDING":   0,
		"ATTENDANCE_TENTATIVE": 1,
		"ATTENDANCE_YES":       2,
		"ATTENDANCE_NO":        3,
	}
)

func (x Attendance) Enum() *Attendance {
	p := new(Attendance)
	*p = x
	return p
}

func (x Attendance) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Attendance) Descriptor() protoreflect.EnumDescriptor {
	return file_protos_api_proto_enumTypes[0].Descriptor()
}

func (Attendance) Type() protoreflect.EnumType {
	return &file_protos_api_proto_enumTypes[0]
}

func (x Attendance) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Attendance.Descriptor instead.
func (Attendance) EnumDescriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{0}
}

// Healtcheck
type HealthcheckRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HealthcheckRequest) Reset() {
	*x = HealthcheckRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthcheckRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthcheckRequest) ProtoMessage() {}

func (x *HealthcheckRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthcheckRequest.ProtoReflect.Descriptor instead.
func (*HealthcheckRequest) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{0}
}

type HealthcheckResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *HealthcheckResponse) Reset() {
	*x = HealthcheckResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthcheckResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthcheckResponse) ProtoMessage() {}

func (x *HealthcheckResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthcheckResponse.ProtoReflect.Descriptor instead.
func (*HealthcheckResponse) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{1}
}

func (x *HealthcheckResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

// GetGuests
type GetGuestsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	InviteCode string `protobuf:"bytes,1,opt,name=invite_code,json=inviteCode,proto3" json:"invite_code,omitempty"`
}

func (x *GetGuestsRequest) Reset() {
	*x = GetGuestsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetGuestsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetGuestsRequest) ProtoMessage() {}

func (x *GetGuestsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetGuestsRequest.ProtoReflect.Descriptor instead.
func (*GetGuestsRequest) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{2}
}

func (x *GetGuestsRequest) GetInviteCode() string {
	if x != nil {
		return x.InviteCode
	}
	return ""
}

type GetGuestsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Guests []*Guest `protobuf:"bytes,1,rep,name=guests,proto3" json:"guests,omitempty"`
}

func (x *GetGuestsResponse) Reset() {
	*x = GetGuestsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetGuestsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetGuestsResponse) ProtoMessage() {}

func (x *GetGuestsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetGuestsResponse.ProtoReflect.Descriptor instead.
func (*GetGuestsResponse) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{3}
}

func (x *GetGuestsResponse) GetGuests() []*Guest {
	if x != nil {
		return x.Guests
	}
	return nil
}

// UpdateAttendance
type UpdateAttendanceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GuestId    string     `protobuf:"bytes,1,opt,name=guest_id,json=guestId,proto3" json:"guest_id,omitempty"`
	Attendance Attendance `protobuf:"varint,2,opt,name=attendance,proto3,enum=apipb.Attendance" json:"attendance,omitempty"`
}

func (x *UpdateAttendanceRequest) Reset() {
	*x = UpdateAttendanceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateAttendanceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateAttendanceRequest) ProtoMessage() {}

func (x *UpdateAttendanceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateAttendanceRequest.ProtoReflect.Descriptor instead.
func (*UpdateAttendanceRequest) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{4}
}

func (x *UpdateAttendanceRequest) GetGuestId() string {
	if x != nil {
		return x.GuestId
	}
	return ""
}

func (x *UpdateAttendanceRequest) GetAttendance() Attendance {
	if x != nil {
		return x.Attendance
	}
	return Attendance_ATTENDANCE_PENDING
}

type UpdateAttendanceResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *UpdateAttendanceResponse) Reset() {
	*x = UpdateAttendanceResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateAttendanceResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateAttendanceResponse) ProtoMessage() {}

func (x *UpdateAttendanceResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateAttendanceResponse.ProtoReflect.Descriptor instead.
func (*UpdateAttendanceResponse) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{5}
}

func (x *UpdateAttendanceResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

// SendInquiry
type SendInquiryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FullName string `protobuf:"bytes,1,opt,name=full_name,json=fullName,proto3" json:"full_name,omitempty"`
	Email    string `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	Phone    string `protobuf:"bytes,3,opt,name=phone,proto3" json:"phone,omitempty"`
	Message  string `protobuf:"bytes,4,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *SendInquiryRequest) Reset() {
	*x = SendInquiryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendInquiryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendInquiryRequest) ProtoMessage() {}

func (x *SendInquiryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendInquiryRequest.ProtoReflect.Descriptor instead.
func (*SendInquiryRequest) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{6}
}

func (x *SendInquiryRequest) GetFullName() string {
	if x != nil {
		return x.FullName
	}
	return ""
}

func (x *SendInquiryRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *SendInquiryRequest) GetPhone() string {
	if x != nil {
		return x.Phone
	}
	return ""
}

func (x *SendInquiryRequest) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type SendInquiryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *SendInquiryResponse) Reset() {
	*x = SendInquiryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendInquiryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendInquiryResponse) ProtoMessage() {}

func (x *SendInquiryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendInquiryResponse.ProtoReflect.Descriptor instead.
func (*SendInquiryResponse) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{7}
}

// Types
type Guest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id         string     `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name       string     `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Attendance Attendance `protobuf:"varint,3,opt,name=attendance,proto3,enum=apipb.Attendance" json:"attendance,omitempty"`
	InviteCode string     `protobuf:"bytes,4,opt,name=invite_code,json=inviteCode,proto3" json:"invite_code,omitempty"`
}

func (x *Guest) Reset() {
	*x = Guest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Guest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Guest) ProtoMessage() {}

func (x *Guest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Guest.ProtoReflect.Descriptor instead.
func (*Guest) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{8}
}

func (x *Guest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Guest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Guest) GetAttendance() Attendance {
	if x != nil {
		return x.Attendance
	}
	return Attendance_ATTENDANCE_PENDING
}

func (x *Guest) GetInviteCode() string {
	if x != nil {
		return x.InviteCode
	}
	return ""
}

type Invitation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
}

func (x *Invitation) Reset() {
	*x = Invitation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_api_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Invitation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Invitation) ProtoMessage() {}

func (x *Invitation) ProtoReflect() protoreflect.Message {
	mi := &file_protos_api_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Invitation.ProtoReflect.Descriptor instead.
func (*Invitation) Descriptor() ([]byte, []int) {
	return file_protos_api_proto_rawDescGZIP(), []int{9}
}

func (x *Invitation) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

var File_protos_api_proto protoreflect.FileDescriptor

var file_protos_api_proto_rawDesc = []byte{
	0x0a, 0x10, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x05, 0x61, 0x70, 0x69, 0x70, 0x62, 0x22, 0x14, 0x0a, 0x12, 0x48, 0x65, 0x61,
	0x6c, 0x74, 0x68, 0x63, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22,
	0x2f, 0x0a, 0x13, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x63, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x22, 0x33, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x47, 0x75, 0x65, 0x73, 0x74, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x5f, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x69, 0x6e, 0x76, 0x69, 0x74,
	0x65, 0x43, 0x6f, 0x64, 0x65, 0x22, 0x39, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x47, 0x75, 0x65, 0x73,
	0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x24, 0x0a, 0x06, 0x67, 0x75,
	0x65, 0x73, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x61, 0x70, 0x69,
	0x70, 0x62, 0x2e, 0x47, 0x75, 0x65, 0x73, 0x74, 0x52, 0x06, 0x67, 0x75, 0x65, 0x73, 0x74, 0x73,
	0x22, 0x67, 0x0a, 0x17, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x74, 0x74, 0x65, 0x6e, 0x64,
	0x61, 0x6e, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x67,
	0x75, 0x65, 0x73, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x67,
	0x75, 0x65, 0x73, 0x74, 0x49, 0x64, 0x12, 0x31, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x65, 0x6e, 0x64,
	0x61, 0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x11, 0x2e, 0x61, 0x70, 0x69,
	0x70, 0x62, 0x2e, 0x41, 0x74, 0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x52, 0x0a, 0x61,
	0x74, 0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x22, 0x34, 0x0a, 0x18, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x41, 0x74, 0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22,
	0x77, 0x0a, 0x12, 0x53, 0x65, 0x6e, 0x64, 0x49, 0x6e, 0x71, 0x75, 0x69, 0x72, 0x79, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x75, 0x6c, 0x6c, 0x5f, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x75, 0x6c, 0x6c, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x12, 0x18,
	0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x15, 0x0a, 0x13, 0x53, 0x65, 0x6e, 0x64,
	0x49, 0x6e, 0x71, 0x75, 0x69, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x7f, 0x0a, 0x05, 0x47, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x31, 0x0a, 0x0a,
	0x61, 0x74, 0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x11, 0x2e, 0x61, 0x70, 0x69, 0x70, 0x62, 0x2e, 0x41, 0x74, 0x74, 0x65, 0x6e, 0x64, 0x61,
	0x6e, 0x63, 0x65, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x12,
	0x1f, 0x0a, 0x0b, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x43, 0x6f, 0x64, 0x65,
	0x22, 0x20, 0x0a, 0x0a, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12,
	0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f,
	0x64, 0x65, 0x2a, 0x65, 0x0a, 0x0a, 0x41, 0x74, 0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65,
	0x12, 0x16, 0x0a, 0x12, 0x41, 0x54, 0x54, 0x45, 0x4e, 0x44, 0x41, 0x4e, 0x43, 0x45, 0x5f, 0x50,
	0x45, 0x4e, 0x44, 0x49, 0x4e, 0x47, 0x10, 0x00, 0x12, 0x18, 0x0a, 0x14, 0x41, 0x54, 0x54, 0x45,
	0x4e, 0x44, 0x41, 0x4e, 0x43, 0x45, 0x5f, 0x54, 0x45, 0x4e, 0x54, 0x41, 0x54, 0x49, 0x56, 0x45,
	0x10, 0x01, 0x12, 0x12, 0x0a, 0x0e, 0x41, 0x54, 0x54, 0x45, 0x4e, 0x44, 0x41, 0x4e, 0x43, 0x45,
	0x5f, 0x59, 0x45, 0x53, 0x10, 0x02, 0x12, 0x11, 0x0a, 0x0d, 0x41, 0x54, 0x54, 0x45, 0x4e, 0x44,
	0x41, 0x4e, 0x43, 0x45, 0x5f, 0x4e, 0x4f, 0x10, 0x03, 0x32, 0xae, 0x02, 0x0a, 0x03, 0x41, 0x70,
	0x69, 0x12, 0x46, 0x0a, 0x0b, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x63, 0x68, 0x65, 0x63, 0x6b,
	0x12, 0x19, 0x2e, 0x61, 0x70, 0x69, 0x70, 0x62, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x63,
	0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x61, 0x70,
	0x69, 0x70, 0x62, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x63, 0x68, 0x65, 0x63, 0x6b, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x09, 0x47, 0x65, 0x74,
	0x47, 0x75, 0x65, 0x73, 0x74, 0x73, 0x12, 0x17, 0x2e, 0x61, 0x70, 0x69, 0x70, 0x62, 0x2e, 0x47,
	0x65, 0x74, 0x47, 0x75, 0x65, 0x73, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x18, 0x2e, 0x61, 0x70, 0x69, 0x70, 0x62, 0x2e, 0x47, 0x65, 0x74, 0x47, 0x75, 0x65, 0x73, 0x74,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x55, 0x0a, 0x10, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x74, 0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x12,
	0x1e, 0x2e, 0x61, 0x70, 0x69, 0x70, 0x62, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x74,
	0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1f, 0x2e, 0x61, 0x70, 0x69, 0x70, 0x62, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x74,
	0x74, 0x65, 0x6e, 0x64, 0x61, 0x6e, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x00, 0x12, 0x46, 0x0a, 0x0b, 0x53, 0x65, 0x6e, 0x64, 0x49, 0x6e, 0x71, 0x75, 0x69, 0x72,
	0x79, 0x12, 0x19, 0x2e, 0x61, 0x70, 0x69, 0x70, 0x62, 0x2e, 0x53, 0x65, 0x6e, 0x64, 0x49, 0x6e,
	0x71, 0x75, 0x69, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x61,
	0x70, 0x69, 0x70, 0x62, 0x2e, 0x53, 0x65, 0x6e, 0x64, 0x49, 0x6e, 0x71, 0x75, 0x69, 0x72, 0x79,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x12, 0x5a, 0x10, 0x2e, 0x2f,
	0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x61, 0x70, 0x69, 0x70, 0x62, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protos_api_proto_rawDescOnce sync.Once
	file_protos_api_proto_rawDescData = file_protos_api_proto_rawDesc
)

func file_protos_api_proto_rawDescGZIP() []byte {
	file_protos_api_proto_rawDescOnce.Do(func() {
		file_protos_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_api_proto_rawDescData)
	})
	return file_protos_api_proto_rawDescData
}

var file_protos_api_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_protos_api_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_protos_api_proto_goTypes = []interface{}{
	(Attendance)(0),                  // 0: apipb.Attendance
	(*HealthcheckRequest)(nil),       // 1: apipb.HealthcheckRequest
	(*HealthcheckResponse)(nil),      // 2: apipb.HealthcheckResponse
	(*GetGuestsRequest)(nil),         // 3: apipb.GetGuestsRequest
	(*GetGuestsResponse)(nil),        // 4: apipb.GetGuestsResponse
	(*UpdateAttendanceRequest)(nil),  // 5: apipb.UpdateAttendanceRequest
	(*UpdateAttendanceResponse)(nil), // 6: apipb.UpdateAttendanceResponse
	(*SendInquiryRequest)(nil),       // 7: apipb.SendInquiryRequest
	(*SendInquiryResponse)(nil),      // 8: apipb.SendInquiryResponse
	(*Guest)(nil),                    // 9: apipb.Guest
	(*Invitation)(nil),               // 10: apipb.Invitation
}
var file_protos_api_proto_depIdxs = []int32{
	9, // 0: apipb.GetGuestsResponse.guests:type_name -> apipb.Guest
	0, // 1: apipb.UpdateAttendanceRequest.attendance:type_name -> apipb.Attendance
	0, // 2: apipb.Guest.attendance:type_name -> apipb.Attendance
	1, // 3: apipb.Api.Healthcheck:input_type -> apipb.HealthcheckRequest
	3, // 4: apipb.Api.GetGuests:input_type -> apipb.GetGuestsRequest
	5, // 5: apipb.Api.UpdateAttendance:input_type -> apipb.UpdateAttendanceRequest
	7, // 6: apipb.Api.SendInquiry:input_type -> apipb.SendInquiryRequest
	2, // 7: apipb.Api.Healthcheck:output_type -> apipb.HealthcheckResponse
	4, // 8: apipb.Api.GetGuests:output_type -> apipb.GetGuestsResponse
	6, // 9: apipb.Api.UpdateAttendance:output_type -> apipb.UpdateAttendanceResponse
	8, // 10: apipb.Api.SendInquiry:output_type -> apipb.SendInquiryResponse
	7, // [7:11] is the sub-list for method output_type
	3, // [3:7] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_protos_api_proto_init() }
func file_protos_api_proto_init() {
	if File_protos_api_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protos_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthcheckRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthcheckResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetGuestsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetGuestsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateAttendanceRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateAttendanceResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendInquiryRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendInquiryResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Guest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_api_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Invitation); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_api_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protos_api_proto_goTypes,
		DependencyIndexes: file_protos_api_proto_depIdxs,
		EnumInfos:         file_protos_api_proto_enumTypes,
		MessageInfos:      file_protos_api_proto_msgTypes,
	}.Build()
	File_protos_api_proto = out.File
	file_protos_api_proto_rawDesc = nil
	file_protos_api_proto_goTypes = nil
	file_protos_api_proto_depIdxs = nil
}
