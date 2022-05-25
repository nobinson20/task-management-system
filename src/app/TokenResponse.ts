export interface TokenResponse{
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    userName?: string;
    ".issued"?: string;
    ".expires"?: string;
    error?: string;
    error_description?: string;
}