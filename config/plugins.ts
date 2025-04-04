export default ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"), // Required
      },
      settings: {
        defaultFrom: "mail-address@gmail.com",
        defaultReplyTo: "mail-address@gmail.com",
      },
    },
  },
});
