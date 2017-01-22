declare function __uri (url: string): string

interface ServerResult {
  code: Number,
  desc: String,
  data: any,
}

declare module 'nodemailer-smtp-transport'
