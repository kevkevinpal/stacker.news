import { gql } from 'graphql-tag'

import user from './user'
import message from './message'
import item from './item'
import wallet from './wallet'
import lnurl from './lnurl'
import notifications from './notifications'
import invite from './invite'
import sub from './sub'
import upload from './upload'
import growth from './growth'
import rewards from './rewards'
import referrals from './referrals'
import price from './price'
import admin from './admin'

const common = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }

  scalar JSONObject
  scalar Date
`

export default [common, user, item, message, wallet, lnurl, notifications, invite,
  sub, upload, growth, rewards, referrals, price, admin]
