
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.12.0
 * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
 */
Prisma.prismaVersion = {
  client: "6.12.0",
  engine: "8047c96bbd92db98a2abc7c9323ce77c02c89dbc"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  content: 'content',
  route: 'route',
  param: 'param',
  subscriber_avatar: 'subscriber_avatar',
  post_image: 'post_image',
  type: 'type',
  created_at: 'created_at',
  guestId: 'guestId',
  subscriberId: 'subscriberId'
};

exports.Prisma.Block_userScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  blockerId: 'blockerId',
  blockedId: 'blockedId'
};

exports.Prisma.ChatroomScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Chatroom_memberScalarFieldEnum = {
  chatroomId: 'chatroomId',
  userId: 'userId'
};

exports.Prisma.ComboScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  post_id: 'post_id',
  count: 'count',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  comment: 'comment',
  created_at: 'created_at',
  post_id: 'post_id',
  user_id: 'user_id'
};

exports.Prisma.ConfigScalarFieldEnum = {
  id: 'id',
  verify_amount: 'verify_amount'
};

exports.Prisma.Email_otpScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  otp: 'otp',
  expired_at: 'expired_at',
  last_request_at: 'last_request_at'
};

exports.Prisma.FollowshipScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  followedId: 'followedId',
  followerId: 'followerId'
};

exports.Prisma.GuestScalarFieldEnum = {
  id: 'id',
  password: 'password',
  user_name: 'user_name',
  avatar: 'avatar',
  verify_photo: 'verify_photo',
  verify: 'verify',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email',
  emailOTP: 'emailOTP'
};

exports.Prisma.Image_messageScalarFieldEnum = {
  id: 'id',
  image: 'image',
  created_at: 'created_at',
  updated_at: 'updated_at',
  message_id: 'message_id'
};

exports.Prisma.InviteScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  inviterId: 'inviterId',
  invitedId: 'invitedId'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  message: 'message',
  created_at: 'created_at',
  updated_at: 'updated_at',
  sender_id: 'sender_id',
  chatroom_id: 'chatroom_id',
  is_read: 'is_read',
  order: 'order'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  name: 'name'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  picture: 'picture',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.Post_likeScalarFieldEnum = {
  id: 'id',
  post_id: 'post_id',
  user_id: 'user_id'
};

exports.Prisma.PraiseScalarFieldEnum = {
  id: 'id',
  is_like: 'is_like',
  user_id: 'user_id',
  guest_id: 'guest_id',
  created_at: 'created_at'
};

exports.Prisma.Recycle_accountScalarFieldEnum = {
  id: 'id',
  delete_time: 'delete_time',
  user_id: 'user_id'
};

exports.Prisma.Report_postScalarFieldEnum = {
  id: 'id',
  report_type: 'report_type',
  content: 'content',
  created_at: 'created_at',
  post_id: 'post_id',
  user_id: 'user_id'
};

exports.Prisma.Reset_passwordScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  otp: 'otp',
  expired_at: 'expired_at',
  last_request_at: 'last_request_at'
};

exports.Prisma.RewardScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  created_at: 'created_at',
  updated_at: 'updated_at',
  guest_id: 'guest_id'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  legal_name: 'legal_name',
  phone_number: 'phone_number',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_name: 'user_name',
  introduction: 'introduction',
  guestId: 'guestId'
};

exports.Prisma.WarningScalarFieldEnum = {
  id: 'id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  guestId: 'guestId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  activity: 'activity',
  block_user: 'block_user',
  chatroom: 'chatroom',
  chatroom_member: 'chatroom_member',
  combo: 'combo',
  comment: 'comment',
  config: 'config',
  email_otp: 'email_otp',
  followship: 'followship',
  guest: 'guest',
  image_message: 'image_message',
  invite: 'invite',
  message: 'message',
  migrations: 'migrations',
  post: 'post',
  post_like: 'post_like',
  praise: 'praise',
  recycle_account: 'recycle_account',
  report_post: 'report_post',
  reset_password: 'reset_password',
  reward: 'reward',
  user: 'user',
  warning: 'warning'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
