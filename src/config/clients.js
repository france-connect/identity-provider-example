export const clients = [{
  client_id: process.env.CLIENT_ID || '09a1a257648c1742c74d6a3d84b31943',
  client_secret: process.env.CLIENT_SECRET || '7ae4fef2aab63fb78d777fe657b7536f',
  grant_types: ['authorization_code'],
  response_types: ['code'],
  redirect_uris: [process.env.REDIRECT_URI || 'https://fcp.integ01.dev-franceconnect.fr/oidc_callback'],
  token_endpoint_auth_method: 'client_secret_post',
  post_logout_redirect_uris: [process.env.POST_LOGOUT_REDIRECT_URIS || 'https://fcp.integ01.dev-franceconnect.fr/api/v1/logout/redirect_from_provider'],
  backchannel_logout_uri: process.env.BACKCHANNEL_LOGOUT_URI,
  // Backward compatible default value
  id_token_signed_response_alg: process.env.ID_TOKEN_SIGNED_RESPONSE_ALG || 'HS256',
  // no default value as per library defaults
  // @see https://github.com/panva/node-openid-client/blob/master/lib/helpers/consts.js#L11
  id_token_encrypted_response_alg: process.env.ID_TOKEN_ENCRYPTED_RESPONSE_ALG,
  id_token_encrypted_response_enc: process.env.ID_TOKEN_ENCRYPTED_RESPONSE_ENC,
  userinfo_signed_response_alg: process.env.USERINFO_SIGNED_RESPONSE_ALG,
  userinfo_encrypted_response_alg: process.env.USERINFO_ENCRYPTED_RESPONSE_ALG,
  userinfo_encrypted_response_enc: process.env.USERINFO_ENCRYPTED_RESPONSE_ENC,
  jwks_uri: process.env.JWKS_URI,
}];
