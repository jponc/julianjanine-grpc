import { config } from "../../config";
import { ApiClient } from "../../protos/ApiServiceClientPb";

export const apiClient = new ApiClient(config.grpcUrl);
