
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model master_tutorial
 * 
 */
export type master_tutorial = $Result.DefaultSelection<Prisma.$master_tutorialPayload>
/**
 * Model tutorial_detail
 * 
 */
export type tutorial_detail = $Result.DefaultSelection<Prisma.$tutorial_detailPayload>
/**
 * Model images_tutorial
 * 
 */
export type images_tutorial = $Result.DefaultSelection<Prisma.$images_tutorialPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Master_tutorials
 * const master_tutorials = await prisma.master_tutorial.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Master_tutorials
   * const master_tutorials = await prisma.master_tutorial.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.master_tutorial`: Exposes CRUD operations for the **master_tutorial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Master_tutorials
    * const master_tutorials = await prisma.master_tutorial.findMany()
    * ```
    */
  get master_tutorial(): Prisma.master_tutorialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorial_detail`: Exposes CRUD operations for the **tutorial_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutorial_details
    * const tutorial_details = await prisma.tutorial_detail.findMany()
    * ```
    */
  get tutorial_detail(): Prisma.tutorial_detailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images_tutorial`: Exposes CRUD operations for the **images_tutorial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images_tutorials
    * const images_tutorials = await prisma.images_tutorial.findMany()
    * ```
    */
  get images_tutorial(): Prisma.images_tutorialDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    master_tutorial: 'master_tutorial',
    tutorial_detail: 'tutorial_detail',
    images_tutorial: 'images_tutorial'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "master_tutorial" | "tutorial_detail" | "images_tutorial"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      master_tutorial: {
        payload: Prisma.$master_tutorialPayload<ExtArgs>
        fields: Prisma.master_tutorialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.master_tutorialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.master_tutorialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload>
          }
          findFirst: {
            args: Prisma.master_tutorialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.master_tutorialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload>
          }
          findMany: {
            args: Prisma.master_tutorialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload>[]
          }
          create: {
            args: Prisma.master_tutorialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload>
          }
          createMany: {
            args: Prisma.master_tutorialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.master_tutorialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload>
          }
          update: {
            args: Prisma.master_tutorialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload>
          }
          deleteMany: {
            args: Prisma.master_tutorialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.master_tutorialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.master_tutorialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_tutorialPayload>
          }
          aggregate: {
            args: Prisma.Master_tutorialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster_tutorial>
          }
          groupBy: {
            args: Prisma.master_tutorialGroupByArgs<ExtArgs>
            result: $Utils.Optional<Master_tutorialGroupByOutputType>[]
          }
          count: {
            args: Prisma.master_tutorialCountArgs<ExtArgs>
            result: $Utils.Optional<Master_tutorialCountAggregateOutputType> | number
          }
        }
      }
      tutorial_detail: {
        payload: Prisma.$tutorial_detailPayload<ExtArgs>
        fields: Prisma.tutorial_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tutorial_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tutorial_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload>
          }
          findFirst: {
            args: Prisma.tutorial_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tutorial_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload>
          }
          findMany: {
            args: Prisma.tutorial_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload>[]
          }
          create: {
            args: Prisma.tutorial_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload>
          }
          createMany: {
            args: Prisma.tutorial_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tutorial_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload>
          }
          update: {
            args: Prisma.tutorial_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload>
          }
          deleteMany: {
            args: Prisma.tutorial_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tutorial_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tutorial_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutorial_detailPayload>
          }
          aggregate: {
            args: Prisma.Tutorial_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorial_detail>
          }
          groupBy: {
            args: Prisma.tutorial_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tutorial_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.tutorial_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Tutorial_detailCountAggregateOutputType> | number
          }
        }
      }
      images_tutorial: {
        payload: Prisma.$images_tutorialPayload<ExtArgs>
        fields: Prisma.images_tutorialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.images_tutorialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.images_tutorialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload>
          }
          findFirst: {
            args: Prisma.images_tutorialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.images_tutorialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload>
          }
          findMany: {
            args: Prisma.images_tutorialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload>[]
          }
          create: {
            args: Prisma.images_tutorialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload>
          }
          createMany: {
            args: Prisma.images_tutorialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.images_tutorialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload>
          }
          update: {
            args: Prisma.images_tutorialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload>
          }
          deleteMany: {
            args: Prisma.images_tutorialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.images_tutorialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.images_tutorialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tutorialPayload>
          }
          aggregate: {
            args: Prisma.Images_tutorialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages_tutorial>
          }
          groupBy: {
            args: Prisma.images_tutorialGroupByArgs<ExtArgs>
            result: $Utils.Optional<Images_tutorialGroupByOutputType>[]
          }
          count: {
            args: Prisma.images_tutorialCountArgs<ExtArgs>
            result: $Utils.Optional<Images_tutorialCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    master_tutorial?: master_tutorialOmit
    tutorial_detail?: tutorial_detailOmit
    images_tutorial?: images_tutorialOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Master_tutorialCountOutputType
   */

  export type Master_tutorialCountOutputType = {
    tutorial_detail: number
  }

  export type Master_tutorialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorial_detail?: boolean | Master_tutorialCountOutputTypeCountTutorial_detailArgs
  }

  // Custom InputTypes
  /**
   * Master_tutorialCountOutputType without action
   */
  export type Master_tutorialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_tutorialCountOutputType
     */
    select?: Master_tutorialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Master_tutorialCountOutputType without action
   */
  export type Master_tutorialCountOutputTypeCountTutorial_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutorial_detailWhereInput
  }


  /**
   * Count Type Tutorial_detailCountOutputType
   */

  export type Tutorial_detailCountOutputType = {
    images_tutorial: number
  }

  export type Tutorial_detailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images_tutorial?: boolean | Tutorial_detailCountOutputTypeCountImages_tutorialArgs
  }

  // Custom InputTypes
  /**
   * Tutorial_detailCountOutputType without action
   */
  export type Tutorial_detailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial_detailCountOutputType
     */
    select?: Tutorial_detailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tutorial_detailCountOutputType without action
   */
  export type Tutorial_detailCountOutputTypeCountImages_tutorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: images_tutorialWhereInput
  }


  /**
   * Models
   */

  /**
   * Model master_tutorial
   */

  export type AggregateMaster_tutorial = {
    _count: Master_tutorialCountAggregateOutputType | null
    _avg: Master_tutorialAvgAggregateOutputType | null
    _sum: Master_tutorialSumAggregateOutputType | null
    _min: Master_tutorialMinAggregateOutputType | null
    _max: Master_tutorialMaxAggregateOutputType | null
  }

  export type Master_tutorialAvgAggregateOutputType = {
    id: number | null
  }

  export type Master_tutorialSumAggregateOutputType = {
    id: number | null
  }

  export type Master_tutorialMinAggregateOutputType = {
    id: number | null
    judul: string | null
    kode_matakuliah: string | null
    url_presentation: string | null
    url_finished: string | null
    createor_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Master_tutorialMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    kode_matakuliah: string | null
    url_presentation: string | null
    url_finished: string | null
    createor_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Master_tutorialCountAggregateOutputType = {
    id: number
    judul: number
    kode_matakuliah: number
    url_presentation: number
    url_finished: number
    createor_email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Master_tutorialAvgAggregateInputType = {
    id?: true
  }

  export type Master_tutorialSumAggregateInputType = {
    id?: true
  }

  export type Master_tutorialMinAggregateInputType = {
    id?: true
    judul?: true
    kode_matakuliah?: true
    url_presentation?: true
    url_finished?: true
    createor_email?: true
    created_at?: true
    updated_at?: true
  }

  export type Master_tutorialMaxAggregateInputType = {
    id?: true
    judul?: true
    kode_matakuliah?: true
    url_presentation?: true
    url_finished?: true
    createor_email?: true
    created_at?: true
    updated_at?: true
  }

  export type Master_tutorialCountAggregateInputType = {
    id?: true
    judul?: true
    kode_matakuliah?: true
    url_presentation?: true
    url_finished?: true
    createor_email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Master_tutorialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_tutorial to aggregate.
     */
    where?: master_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_tutorials to fetch.
     */
    orderBy?: master_tutorialOrderByWithRelationInput | master_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: master_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned master_tutorials
    **/
    _count?: true | Master_tutorialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Master_tutorialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Master_tutorialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Master_tutorialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Master_tutorialMaxAggregateInputType
  }

  export type GetMaster_tutorialAggregateType<T extends Master_tutorialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster_tutorial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster_tutorial[P]>
      : GetScalarType<T[P], AggregateMaster_tutorial[P]>
  }




  export type master_tutorialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_tutorialWhereInput
    orderBy?: master_tutorialOrderByWithAggregationInput | master_tutorialOrderByWithAggregationInput[]
    by: Master_tutorialScalarFieldEnum[] | Master_tutorialScalarFieldEnum
    having?: master_tutorialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Master_tutorialCountAggregateInputType | true
    _avg?: Master_tutorialAvgAggregateInputType
    _sum?: Master_tutorialSumAggregateInputType
    _min?: Master_tutorialMinAggregateInputType
    _max?: Master_tutorialMaxAggregateInputType
  }

  export type Master_tutorialGroupByOutputType = {
    id: number
    judul: string
    kode_matakuliah: string
    url_presentation: string
    url_finished: string
    createor_email: string
    created_at: Date
    updated_at: Date
    _count: Master_tutorialCountAggregateOutputType | null
    _avg: Master_tutorialAvgAggregateOutputType | null
    _sum: Master_tutorialSumAggregateOutputType | null
    _min: Master_tutorialMinAggregateOutputType | null
    _max: Master_tutorialMaxAggregateOutputType | null
  }

  type GetMaster_tutorialGroupByPayload<T extends master_tutorialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Master_tutorialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Master_tutorialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Master_tutorialGroupByOutputType[P]>
            : GetScalarType<T[P], Master_tutorialGroupByOutputType[P]>
        }
      >
    >


  export type master_tutorialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    kode_matakuliah?: boolean
    url_presentation?: boolean
    url_finished?: boolean
    createor_email?: boolean
    created_at?: boolean
    updated_at?: boolean
    tutorial_detail?: boolean | master_tutorial$tutorial_detailArgs<ExtArgs>
    _count?: boolean | Master_tutorialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master_tutorial"]>



  export type master_tutorialSelectScalar = {
    id?: boolean
    judul?: boolean
    kode_matakuliah?: boolean
    url_presentation?: boolean
    url_finished?: boolean
    createor_email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type master_tutorialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "kode_matakuliah" | "url_presentation" | "url_finished" | "createor_email" | "created_at" | "updated_at", ExtArgs["result"]["master_tutorial"]>
  export type master_tutorialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorial_detail?: boolean | master_tutorial$tutorial_detailArgs<ExtArgs>
    _count?: boolean | Master_tutorialCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $master_tutorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "master_tutorial"
    objects: {
      tutorial_detail: Prisma.$tutorial_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      kode_matakuliah: string
      url_presentation: string
      url_finished: string
      createor_email: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["master_tutorial"]>
    composites: {}
  }

  type master_tutorialGetPayload<S extends boolean | null | undefined | master_tutorialDefaultArgs> = $Result.GetResult<Prisma.$master_tutorialPayload, S>

  type master_tutorialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<master_tutorialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Master_tutorialCountAggregateInputType | true
    }

  export interface master_tutorialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['master_tutorial'], meta: { name: 'master_tutorial' } }
    /**
     * Find zero or one Master_tutorial that matches the filter.
     * @param {master_tutorialFindUniqueArgs} args - Arguments to find a Master_tutorial
     * @example
     * // Get one Master_tutorial
     * const master_tutorial = await prisma.master_tutorial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends master_tutorialFindUniqueArgs>(args: SelectSubset<T, master_tutorialFindUniqueArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Master_tutorial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {master_tutorialFindUniqueOrThrowArgs} args - Arguments to find a Master_tutorial
     * @example
     * // Get one Master_tutorial
     * const master_tutorial = await prisma.master_tutorial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends master_tutorialFindUniqueOrThrowArgs>(args: SelectSubset<T, master_tutorialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Master_tutorial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_tutorialFindFirstArgs} args - Arguments to find a Master_tutorial
     * @example
     * // Get one Master_tutorial
     * const master_tutorial = await prisma.master_tutorial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends master_tutorialFindFirstArgs>(args?: SelectSubset<T, master_tutorialFindFirstArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Master_tutorial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_tutorialFindFirstOrThrowArgs} args - Arguments to find a Master_tutorial
     * @example
     * // Get one Master_tutorial
     * const master_tutorial = await prisma.master_tutorial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends master_tutorialFindFirstOrThrowArgs>(args?: SelectSubset<T, master_tutorialFindFirstOrThrowArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Master_tutorials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_tutorialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Master_tutorials
     * const master_tutorials = await prisma.master_tutorial.findMany()
     * 
     * // Get first 10 Master_tutorials
     * const master_tutorials = await prisma.master_tutorial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const master_tutorialWithIdOnly = await prisma.master_tutorial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends master_tutorialFindManyArgs>(args?: SelectSubset<T, master_tutorialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Master_tutorial.
     * @param {master_tutorialCreateArgs} args - Arguments to create a Master_tutorial.
     * @example
     * // Create one Master_tutorial
     * const Master_tutorial = await prisma.master_tutorial.create({
     *   data: {
     *     // ... data to create a Master_tutorial
     *   }
     * })
     * 
     */
    create<T extends master_tutorialCreateArgs>(args: SelectSubset<T, master_tutorialCreateArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Master_tutorials.
     * @param {master_tutorialCreateManyArgs} args - Arguments to create many Master_tutorials.
     * @example
     * // Create many Master_tutorials
     * const master_tutorial = await prisma.master_tutorial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends master_tutorialCreateManyArgs>(args?: SelectSubset<T, master_tutorialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Master_tutorial.
     * @param {master_tutorialDeleteArgs} args - Arguments to delete one Master_tutorial.
     * @example
     * // Delete one Master_tutorial
     * const Master_tutorial = await prisma.master_tutorial.delete({
     *   where: {
     *     // ... filter to delete one Master_tutorial
     *   }
     * })
     * 
     */
    delete<T extends master_tutorialDeleteArgs>(args: SelectSubset<T, master_tutorialDeleteArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Master_tutorial.
     * @param {master_tutorialUpdateArgs} args - Arguments to update one Master_tutorial.
     * @example
     * // Update one Master_tutorial
     * const master_tutorial = await prisma.master_tutorial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends master_tutorialUpdateArgs>(args: SelectSubset<T, master_tutorialUpdateArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Master_tutorials.
     * @param {master_tutorialDeleteManyArgs} args - Arguments to filter Master_tutorials to delete.
     * @example
     * // Delete a few Master_tutorials
     * const { count } = await prisma.master_tutorial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends master_tutorialDeleteManyArgs>(args?: SelectSubset<T, master_tutorialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Master_tutorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_tutorialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Master_tutorials
     * const master_tutorial = await prisma.master_tutorial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends master_tutorialUpdateManyArgs>(args: SelectSubset<T, master_tutorialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Master_tutorial.
     * @param {master_tutorialUpsertArgs} args - Arguments to update or create a Master_tutorial.
     * @example
     * // Update or create a Master_tutorial
     * const master_tutorial = await prisma.master_tutorial.upsert({
     *   create: {
     *     // ... data to create a Master_tutorial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master_tutorial we want to update
     *   }
     * })
     */
    upsert<T extends master_tutorialUpsertArgs>(args: SelectSubset<T, master_tutorialUpsertArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Master_tutorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_tutorialCountArgs} args - Arguments to filter Master_tutorials to count.
     * @example
     * // Count the number of Master_tutorials
     * const count = await prisma.master_tutorial.count({
     *   where: {
     *     // ... the filter for the Master_tutorials we want to count
     *   }
     * })
    **/
    count<T extends master_tutorialCountArgs>(
      args?: Subset<T, master_tutorialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Master_tutorialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master_tutorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_tutorialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Master_tutorialAggregateArgs>(args: Subset<T, Master_tutorialAggregateArgs>): Prisma.PrismaPromise<GetMaster_tutorialAggregateType<T>>

    /**
     * Group by Master_tutorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_tutorialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends master_tutorialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: master_tutorialGroupByArgs['orderBy'] }
        : { orderBy?: master_tutorialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, master_tutorialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaster_tutorialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the master_tutorial model
   */
  readonly fields: master_tutorialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for master_tutorial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__master_tutorialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorial_detail<T extends master_tutorial$tutorial_detailArgs<ExtArgs> = {}>(args?: Subset<T, master_tutorial$tutorial_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the master_tutorial model
   */
  interface master_tutorialFieldRefs {
    readonly id: FieldRef<"master_tutorial", 'Int'>
    readonly judul: FieldRef<"master_tutorial", 'String'>
    readonly kode_matakuliah: FieldRef<"master_tutorial", 'String'>
    readonly url_presentation: FieldRef<"master_tutorial", 'String'>
    readonly url_finished: FieldRef<"master_tutorial", 'String'>
    readonly createor_email: FieldRef<"master_tutorial", 'String'>
    readonly created_at: FieldRef<"master_tutorial", 'DateTime'>
    readonly updated_at: FieldRef<"master_tutorial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * master_tutorial findUnique
   */
  export type master_tutorialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which master_tutorial to fetch.
     */
    where: master_tutorialWhereUniqueInput
  }

  /**
   * master_tutorial findUniqueOrThrow
   */
  export type master_tutorialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which master_tutorial to fetch.
     */
    where: master_tutorialWhereUniqueInput
  }

  /**
   * master_tutorial findFirst
   */
  export type master_tutorialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which master_tutorial to fetch.
     */
    where?: master_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_tutorials to fetch.
     */
    orderBy?: master_tutorialOrderByWithRelationInput | master_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_tutorials.
     */
    cursor?: master_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_tutorials.
     */
    distinct?: Master_tutorialScalarFieldEnum | Master_tutorialScalarFieldEnum[]
  }

  /**
   * master_tutorial findFirstOrThrow
   */
  export type master_tutorialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which master_tutorial to fetch.
     */
    where?: master_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_tutorials to fetch.
     */
    orderBy?: master_tutorialOrderByWithRelationInput | master_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_tutorials.
     */
    cursor?: master_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_tutorials.
     */
    distinct?: Master_tutorialScalarFieldEnum | Master_tutorialScalarFieldEnum[]
  }

  /**
   * master_tutorial findMany
   */
  export type master_tutorialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which master_tutorials to fetch.
     */
    where?: master_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_tutorials to fetch.
     */
    orderBy?: master_tutorialOrderByWithRelationInput | master_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing master_tutorials.
     */
    cursor?: master_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_tutorials.
     */
    skip?: number
    distinct?: Master_tutorialScalarFieldEnum | Master_tutorialScalarFieldEnum[]
  }

  /**
   * master_tutorial create
   */
  export type master_tutorialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * The data needed to create a master_tutorial.
     */
    data: XOR<master_tutorialCreateInput, master_tutorialUncheckedCreateInput>
  }

  /**
   * master_tutorial createMany
   */
  export type master_tutorialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many master_tutorials.
     */
    data: master_tutorialCreateManyInput | master_tutorialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * master_tutorial update
   */
  export type master_tutorialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * The data needed to update a master_tutorial.
     */
    data: XOR<master_tutorialUpdateInput, master_tutorialUncheckedUpdateInput>
    /**
     * Choose, which master_tutorial to update.
     */
    where: master_tutorialWhereUniqueInput
  }

  /**
   * master_tutorial updateMany
   */
  export type master_tutorialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update master_tutorials.
     */
    data: XOR<master_tutorialUpdateManyMutationInput, master_tutorialUncheckedUpdateManyInput>
    /**
     * Filter which master_tutorials to update
     */
    where?: master_tutorialWhereInput
    /**
     * Limit how many master_tutorials to update.
     */
    limit?: number
  }

  /**
   * master_tutorial upsert
   */
  export type master_tutorialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * The filter to search for the master_tutorial to update in case it exists.
     */
    where: master_tutorialWhereUniqueInput
    /**
     * In case the master_tutorial found by the `where` argument doesn't exist, create a new master_tutorial with this data.
     */
    create: XOR<master_tutorialCreateInput, master_tutorialUncheckedCreateInput>
    /**
     * In case the master_tutorial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<master_tutorialUpdateInput, master_tutorialUncheckedUpdateInput>
  }

  /**
   * master_tutorial delete
   */
  export type master_tutorialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
    /**
     * Filter which master_tutorial to delete.
     */
    where: master_tutorialWhereUniqueInput
  }

  /**
   * master_tutorial deleteMany
   */
  export type master_tutorialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_tutorials to delete
     */
    where?: master_tutorialWhereInput
    /**
     * Limit how many master_tutorials to delete.
     */
    limit?: number
  }

  /**
   * master_tutorial.tutorial_detail
   */
  export type master_tutorial$tutorial_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    where?: tutorial_detailWhereInput
    orderBy?: tutorial_detailOrderByWithRelationInput | tutorial_detailOrderByWithRelationInput[]
    cursor?: tutorial_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tutorial_detailScalarFieldEnum | Tutorial_detailScalarFieldEnum[]
  }

  /**
   * master_tutorial without action
   */
  export type master_tutorialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_tutorial
     */
    select?: master_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_tutorial
     */
    omit?: master_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_tutorialInclude<ExtArgs> | null
  }


  /**
   * Model tutorial_detail
   */

  export type AggregateTutorial_detail = {
    _count: Tutorial_detailCountAggregateOutputType | null
    _avg: Tutorial_detailAvgAggregateOutputType | null
    _sum: Tutorial_detailSumAggregateOutputType | null
    _min: Tutorial_detailMinAggregateOutputType | null
    _max: Tutorial_detailMaxAggregateOutputType | null
  }

  export type Tutorial_detailAvgAggregateOutputType = {
    master_tutorial_id: number | null
    order: number | null
  }

  export type Tutorial_detailSumAggregateOutputType = {
    master_tutorial_id: number | null
    order: number | null
  }

  export type Tutorial_detailMinAggregateOutputType = {
    id: string | null
    master_tutorial_id: number | null
    type: string | null
    order: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tutorial_detailMaxAggregateOutputType = {
    id: string | null
    master_tutorial_id: number | null
    type: string | null
    order: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tutorial_detailCountAggregateOutputType = {
    id: number
    master_tutorial_id: number
    type: number
    order: number
    status: number
    content_json: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Tutorial_detailAvgAggregateInputType = {
    master_tutorial_id?: true
    order?: true
  }

  export type Tutorial_detailSumAggregateInputType = {
    master_tutorial_id?: true
    order?: true
  }

  export type Tutorial_detailMinAggregateInputType = {
    id?: true
    master_tutorial_id?: true
    type?: true
    order?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Tutorial_detailMaxAggregateInputType = {
    id?: true
    master_tutorial_id?: true
    type?: true
    order?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Tutorial_detailCountAggregateInputType = {
    id?: true
    master_tutorial_id?: true
    type?: true
    order?: true
    status?: true
    content_json?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Tutorial_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutorial_detail to aggregate.
     */
    where?: tutorial_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutorial_details to fetch.
     */
    orderBy?: tutorial_detailOrderByWithRelationInput | tutorial_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tutorial_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutorial_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutorial_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tutorial_details
    **/
    _count?: true | Tutorial_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tutorial_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tutorial_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tutorial_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tutorial_detailMaxAggregateInputType
  }

  export type GetTutorial_detailAggregateType<T extends Tutorial_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorial_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorial_detail[P]>
      : GetScalarType<T[P], AggregateTutorial_detail[P]>
  }




  export type tutorial_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutorial_detailWhereInput
    orderBy?: tutorial_detailOrderByWithAggregationInput | tutorial_detailOrderByWithAggregationInput[]
    by: Tutorial_detailScalarFieldEnum[] | Tutorial_detailScalarFieldEnum
    having?: tutorial_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tutorial_detailCountAggregateInputType | true
    _avg?: Tutorial_detailAvgAggregateInputType
    _sum?: Tutorial_detailSumAggregateInputType
    _min?: Tutorial_detailMinAggregateInputType
    _max?: Tutorial_detailMaxAggregateInputType
  }

  export type Tutorial_detailGroupByOutputType = {
    id: string
    master_tutorial_id: number
    type: string
    order: number
    status: string
    content_json: JsonValue
    created_at: Date
    updated_at: Date
    _count: Tutorial_detailCountAggregateOutputType | null
    _avg: Tutorial_detailAvgAggregateOutputType | null
    _sum: Tutorial_detailSumAggregateOutputType | null
    _min: Tutorial_detailMinAggregateOutputType | null
    _max: Tutorial_detailMaxAggregateOutputType | null
  }

  type GetTutorial_detailGroupByPayload<T extends tutorial_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tutorial_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tutorial_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tutorial_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Tutorial_detailGroupByOutputType[P]>
        }
      >
    >


  export type tutorial_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    master_tutorial_id?: boolean
    type?: boolean
    order?: boolean
    status?: boolean
    content_json?: boolean
    created_at?: boolean
    updated_at?: boolean
    master_tutorial?: boolean | master_tutorialDefaultArgs<ExtArgs>
    images_tutorial?: boolean | tutorial_detail$images_tutorialArgs<ExtArgs>
    _count?: boolean | Tutorial_detailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorial_detail"]>



  export type tutorial_detailSelectScalar = {
    id?: boolean
    master_tutorial_id?: boolean
    type?: boolean
    order?: boolean
    status?: boolean
    content_json?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tutorial_detailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "master_tutorial_id" | "type" | "order" | "status" | "content_json" | "created_at" | "updated_at", ExtArgs["result"]["tutorial_detail"]>
  export type tutorial_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_tutorial?: boolean | master_tutorialDefaultArgs<ExtArgs>
    images_tutorial?: boolean | tutorial_detail$images_tutorialArgs<ExtArgs>
    _count?: boolean | Tutorial_detailCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tutorial_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tutorial_detail"
    objects: {
      master_tutorial: Prisma.$master_tutorialPayload<ExtArgs>
      images_tutorial: Prisma.$images_tutorialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      master_tutorial_id: number
      type: string
      order: number
      status: string
      content_json: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tutorial_detail"]>
    composites: {}
  }

  type tutorial_detailGetPayload<S extends boolean | null | undefined | tutorial_detailDefaultArgs> = $Result.GetResult<Prisma.$tutorial_detailPayload, S>

  type tutorial_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tutorial_detailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tutorial_detailCountAggregateInputType | true
    }

  export interface tutorial_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tutorial_detail'], meta: { name: 'tutorial_detail' } }
    /**
     * Find zero or one Tutorial_detail that matches the filter.
     * @param {tutorial_detailFindUniqueArgs} args - Arguments to find a Tutorial_detail
     * @example
     * // Get one Tutorial_detail
     * const tutorial_detail = await prisma.tutorial_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutorial_detailFindUniqueArgs>(args: SelectSubset<T, tutorial_detailFindUniqueArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutorial_detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutorial_detailFindUniqueOrThrowArgs} args - Arguments to find a Tutorial_detail
     * @example
     * // Get one Tutorial_detail
     * const tutorial_detail = await prisma.tutorial_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutorial_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, tutorial_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutorial_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorial_detailFindFirstArgs} args - Arguments to find a Tutorial_detail
     * @example
     * // Get one Tutorial_detail
     * const tutorial_detail = await prisma.tutorial_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutorial_detailFindFirstArgs>(args?: SelectSubset<T, tutorial_detailFindFirstArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutorial_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorial_detailFindFirstOrThrowArgs} args - Arguments to find a Tutorial_detail
     * @example
     * // Get one Tutorial_detail
     * const tutorial_detail = await prisma.tutorial_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutorial_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, tutorial_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutorial_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorial_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutorial_details
     * const tutorial_details = await prisma.tutorial_detail.findMany()
     * 
     * // Get first 10 Tutorial_details
     * const tutorial_details = await prisma.tutorial_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorial_detailWithIdOnly = await prisma.tutorial_detail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tutorial_detailFindManyArgs>(args?: SelectSubset<T, tutorial_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutorial_detail.
     * @param {tutorial_detailCreateArgs} args - Arguments to create a Tutorial_detail.
     * @example
     * // Create one Tutorial_detail
     * const Tutorial_detail = await prisma.tutorial_detail.create({
     *   data: {
     *     // ... data to create a Tutorial_detail
     *   }
     * })
     * 
     */
    create<T extends tutorial_detailCreateArgs>(args: SelectSubset<T, tutorial_detailCreateArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutorial_details.
     * @param {tutorial_detailCreateManyArgs} args - Arguments to create many Tutorial_details.
     * @example
     * // Create many Tutorial_details
     * const tutorial_detail = await prisma.tutorial_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tutorial_detailCreateManyArgs>(args?: SelectSubset<T, tutorial_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tutorial_detail.
     * @param {tutorial_detailDeleteArgs} args - Arguments to delete one Tutorial_detail.
     * @example
     * // Delete one Tutorial_detail
     * const Tutorial_detail = await prisma.tutorial_detail.delete({
     *   where: {
     *     // ... filter to delete one Tutorial_detail
     *   }
     * })
     * 
     */
    delete<T extends tutorial_detailDeleteArgs>(args: SelectSubset<T, tutorial_detailDeleteArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutorial_detail.
     * @param {tutorial_detailUpdateArgs} args - Arguments to update one Tutorial_detail.
     * @example
     * // Update one Tutorial_detail
     * const tutorial_detail = await prisma.tutorial_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tutorial_detailUpdateArgs>(args: SelectSubset<T, tutorial_detailUpdateArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutorial_details.
     * @param {tutorial_detailDeleteManyArgs} args - Arguments to filter Tutorial_details to delete.
     * @example
     * // Delete a few Tutorial_details
     * const { count } = await prisma.tutorial_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tutorial_detailDeleteManyArgs>(args?: SelectSubset<T, tutorial_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutorial_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorial_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutorial_details
     * const tutorial_detail = await prisma.tutorial_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tutorial_detailUpdateManyArgs>(args: SelectSubset<T, tutorial_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tutorial_detail.
     * @param {tutorial_detailUpsertArgs} args - Arguments to update or create a Tutorial_detail.
     * @example
     * // Update or create a Tutorial_detail
     * const tutorial_detail = await prisma.tutorial_detail.upsert({
     *   create: {
     *     // ... data to create a Tutorial_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutorial_detail we want to update
     *   }
     * })
     */
    upsert<T extends tutorial_detailUpsertArgs>(args: SelectSubset<T, tutorial_detailUpsertArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutorial_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorial_detailCountArgs} args - Arguments to filter Tutorial_details to count.
     * @example
     * // Count the number of Tutorial_details
     * const count = await prisma.tutorial_detail.count({
     *   where: {
     *     // ... the filter for the Tutorial_details we want to count
     *   }
     * })
    **/
    count<T extends tutorial_detailCountArgs>(
      args?: Subset<T, tutorial_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tutorial_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutorial_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tutorial_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tutorial_detailAggregateArgs>(args: Subset<T, Tutorial_detailAggregateArgs>): Prisma.PrismaPromise<GetTutorial_detailAggregateType<T>>

    /**
     * Group by Tutorial_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutorial_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tutorial_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tutorial_detailGroupByArgs['orderBy'] }
        : { orderBy?: tutorial_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tutorial_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorial_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tutorial_detail model
   */
  readonly fields: tutorial_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tutorial_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tutorial_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    master_tutorial<T extends master_tutorialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, master_tutorialDefaultArgs<ExtArgs>>): Prisma__master_tutorialClient<$Result.GetResult<Prisma.$master_tutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images_tutorial<T extends tutorial_detail$images_tutorialArgs<ExtArgs> = {}>(args?: Subset<T, tutorial_detail$images_tutorialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tutorial_detail model
   */
  interface tutorial_detailFieldRefs {
    readonly id: FieldRef<"tutorial_detail", 'String'>
    readonly master_tutorial_id: FieldRef<"tutorial_detail", 'Int'>
    readonly type: FieldRef<"tutorial_detail", 'String'>
    readonly order: FieldRef<"tutorial_detail", 'Int'>
    readonly status: FieldRef<"tutorial_detail", 'String'>
    readonly content_json: FieldRef<"tutorial_detail", 'Json'>
    readonly created_at: FieldRef<"tutorial_detail", 'DateTime'>
    readonly updated_at: FieldRef<"tutorial_detail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tutorial_detail findUnique
   */
  export type tutorial_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * Filter, which tutorial_detail to fetch.
     */
    where: tutorial_detailWhereUniqueInput
  }

  /**
   * tutorial_detail findUniqueOrThrow
   */
  export type tutorial_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * Filter, which tutorial_detail to fetch.
     */
    where: tutorial_detailWhereUniqueInput
  }

  /**
   * tutorial_detail findFirst
   */
  export type tutorial_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * Filter, which tutorial_detail to fetch.
     */
    where?: tutorial_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutorial_details to fetch.
     */
    orderBy?: tutorial_detailOrderByWithRelationInput | tutorial_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutorial_details.
     */
    cursor?: tutorial_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutorial_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutorial_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutorial_details.
     */
    distinct?: Tutorial_detailScalarFieldEnum | Tutorial_detailScalarFieldEnum[]
  }

  /**
   * tutorial_detail findFirstOrThrow
   */
  export type tutorial_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * Filter, which tutorial_detail to fetch.
     */
    where?: tutorial_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutorial_details to fetch.
     */
    orderBy?: tutorial_detailOrderByWithRelationInput | tutorial_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutorial_details.
     */
    cursor?: tutorial_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutorial_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutorial_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutorial_details.
     */
    distinct?: Tutorial_detailScalarFieldEnum | Tutorial_detailScalarFieldEnum[]
  }

  /**
   * tutorial_detail findMany
   */
  export type tutorial_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * Filter, which tutorial_details to fetch.
     */
    where?: tutorial_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutorial_details to fetch.
     */
    orderBy?: tutorial_detailOrderByWithRelationInput | tutorial_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tutorial_details.
     */
    cursor?: tutorial_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutorial_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutorial_details.
     */
    skip?: number
    distinct?: Tutorial_detailScalarFieldEnum | Tutorial_detailScalarFieldEnum[]
  }

  /**
   * tutorial_detail create
   */
  export type tutorial_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a tutorial_detail.
     */
    data: XOR<tutorial_detailCreateInput, tutorial_detailUncheckedCreateInput>
  }

  /**
   * tutorial_detail createMany
   */
  export type tutorial_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutorial_details.
     */
    data: tutorial_detailCreateManyInput | tutorial_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tutorial_detail update
   */
  export type tutorial_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a tutorial_detail.
     */
    data: XOR<tutorial_detailUpdateInput, tutorial_detailUncheckedUpdateInput>
    /**
     * Choose, which tutorial_detail to update.
     */
    where: tutorial_detailWhereUniqueInput
  }

  /**
   * tutorial_detail updateMany
   */
  export type tutorial_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tutorial_details.
     */
    data: XOR<tutorial_detailUpdateManyMutationInput, tutorial_detailUncheckedUpdateManyInput>
    /**
     * Filter which tutorial_details to update
     */
    where?: tutorial_detailWhereInput
    /**
     * Limit how many tutorial_details to update.
     */
    limit?: number
  }

  /**
   * tutorial_detail upsert
   */
  export type tutorial_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the tutorial_detail to update in case it exists.
     */
    where: tutorial_detailWhereUniqueInput
    /**
     * In case the tutorial_detail found by the `where` argument doesn't exist, create a new tutorial_detail with this data.
     */
    create: XOR<tutorial_detailCreateInput, tutorial_detailUncheckedCreateInput>
    /**
     * In case the tutorial_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tutorial_detailUpdateInput, tutorial_detailUncheckedUpdateInput>
  }

  /**
   * tutorial_detail delete
   */
  export type tutorial_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
    /**
     * Filter which tutorial_detail to delete.
     */
    where: tutorial_detailWhereUniqueInput
  }

  /**
   * tutorial_detail deleteMany
   */
  export type tutorial_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutorial_details to delete
     */
    where?: tutorial_detailWhereInput
    /**
     * Limit how many tutorial_details to delete.
     */
    limit?: number
  }

  /**
   * tutorial_detail.images_tutorial
   */
  export type tutorial_detail$images_tutorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    where?: images_tutorialWhereInput
    orderBy?: images_tutorialOrderByWithRelationInput | images_tutorialOrderByWithRelationInput[]
    cursor?: images_tutorialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Images_tutorialScalarFieldEnum | Images_tutorialScalarFieldEnum[]
  }

  /**
   * tutorial_detail without action
   */
  export type tutorial_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutorial_detail
     */
    select?: tutorial_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutorial_detail
     */
    omit?: tutorial_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutorial_detailInclude<ExtArgs> | null
  }


  /**
   * Model images_tutorial
   */

  export type AggregateImages_tutorial = {
    _count: Images_tutorialCountAggregateOutputType | null
    _avg: Images_tutorialAvgAggregateOutputType | null
    _sum: Images_tutorialSumAggregateOutputType | null
    _min: Images_tutorialMinAggregateOutputType | null
    _max: Images_tutorialMaxAggregateOutputType | null
  }

  export type Images_tutorialAvgAggregateOutputType = {
    id: number | null
  }

  export type Images_tutorialSumAggregateOutputType = {
    id: number | null
  }

  export type Images_tutorialMinAggregateOutputType = {
    id: number | null
    tutorial_detail_id: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Images_tutorialMaxAggregateOutputType = {
    id: number | null
    tutorial_detail_id: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Images_tutorialCountAggregateOutputType = {
    id: number
    tutorial_detail_id: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Images_tutorialAvgAggregateInputType = {
    id?: true
  }

  export type Images_tutorialSumAggregateInputType = {
    id?: true
  }

  export type Images_tutorialMinAggregateInputType = {
    id?: true
    tutorial_detail_id?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type Images_tutorialMaxAggregateInputType = {
    id?: true
    tutorial_detail_id?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type Images_tutorialCountAggregateInputType = {
    id?: true
    tutorial_detail_id?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Images_tutorialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images_tutorial to aggregate.
     */
    where?: images_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tutorials to fetch.
     */
    orderBy?: images_tutorialOrderByWithRelationInput | images_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: images_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images_tutorials
    **/
    _count?: true | Images_tutorialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Images_tutorialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Images_tutorialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Images_tutorialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Images_tutorialMaxAggregateInputType
  }

  export type GetImages_tutorialAggregateType<T extends Images_tutorialAggregateArgs> = {
        [P in keyof T & keyof AggregateImages_tutorial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages_tutorial[P]>
      : GetScalarType<T[P], AggregateImages_tutorial[P]>
  }




  export type images_tutorialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: images_tutorialWhereInput
    orderBy?: images_tutorialOrderByWithAggregationInput | images_tutorialOrderByWithAggregationInput[]
    by: Images_tutorialScalarFieldEnum[] | Images_tutorialScalarFieldEnum
    having?: images_tutorialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Images_tutorialCountAggregateInputType | true
    _avg?: Images_tutorialAvgAggregateInputType
    _sum?: Images_tutorialSumAggregateInputType
    _min?: Images_tutorialMinAggregateInputType
    _max?: Images_tutorialMaxAggregateInputType
  }

  export type Images_tutorialGroupByOutputType = {
    id: number
    tutorial_detail_id: string
    url: string
    created_at: Date
    updated_at: Date
    _count: Images_tutorialCountAggregateOutputType | null
    _avg: Images_tutorialAvgAggregateOutputType | null
    _sum: Images_tutorialSumAggregateOutputType | null
    _min: Images_tutorialMinAggregateOutputType | null
    _max: Images_tutorialMaxAggregateOutputType | null
  }

  type GetImages_tutorialGroupByPayload<T extends images_tutorialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Images_tutorialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Images_tutorialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Images_tutorialGroupByOutputType[P]>
            : GetScalarType<T[P], Images_tutorialGroupByOutputType[P]>
        }
      >
    >


  export type images_tutorialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorial_detail_id?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    tutorial_detail?: boolean | tutorial_detailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images_tutorial"]>



  export type images_tutorialSelectScalar = {
    id?: boolean
    tutorial_detail_id?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type images_tutorialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorial_detail_id" | "url" | "created_at" | "updated_at", ExtArgs["result"]["images_tutorial"]>
  export type images_tutorialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorial_detail?: boolean | tutorial_detailDefaultArgs<ExtArgs>
  }

  export type $images_tutorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images_tutorial"
    objects: {
      tutorial_detail: Prisma.$tutorial_detailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tutorial_detail_id: string
      url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["images_tutorial"]>
    composites: {}
  }

  type images_tutorialGetPayload<S extends boolean | null | undefined | images_tutorialDefaultArgs> = $Result.GetResult<Prisma.$images_tutorialPayload, S>

  type images_tutorialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<images_tutorialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Images_tutorialCountAggregateInputType | true
    }

  export interface images_tutorialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images_tutorial'], meta: { name: 'images_tutorial' } }
    /**
     * Find zero or one Images_tutorial that matches the filter.
     * @param {images_tutorialFindUniqueArgs} args - Arguments to find a Images_tutorial
     * @example
     * // Get one Images_tutorial
     * const images_tutorial = await prisma.images_tutorial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends images_tutorialFindUniqueArgs>(args: SelectSubset<T, images_tutorialFindUniqueArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images_tutorial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {images_tutorialFindUniqueOrThrowArgs} args - Arguments to find a Images_tutorial
     * @example
     * // Get one Images_tutorial
     * const images_tutorial = await prisma.images_tutorial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends images_tutorialFindUniqueOrThrowArgs>(args: SelectSubset<T, images_tutorialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images_tutorial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tutorialFindFirstArgs} args - Arguments to find a Images_tutorial
     * @example
     * // Get one Images_tutorial
     * const images_tutorial = await prisma.images_tutorial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends images_tutorialFindFirstArgs>(args?: SelectSubset<T, images_tutorialFindFirstArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images_tutorial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tutorialFindFirstOrThrowArgs} args - Arguments to find a Images_tutorial
     * @example
     * // Get one Images_tutorial
     * const images_tutorial = await prisma.images_tutorial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends images_tutorialFindFirstOrThrowArgs>(args?: SelectSubset<T, images_tutorialFindFirstOrThrowArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images_tutorials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tutorialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images_tutorials
     * const images_tutorials = await prisma.images_tutorial.findMany()
     * 
     * // Get first 10 Images_tutorials
     * const images_tutorials = await prisma.images_tutorial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const images_tutorialWithIdOnly = await prisma.images_tutorial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends images_tutorialFindManyArgs>(args?: SelectSubset<T, images_tutorialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images_tutorial.
     * @param {images_tutorialCreateArgs} args - Arguments to create a Images_tutorial.
     * @example
     * // Create one Images_tutorial
     * const Images_tutorial = await prisma.images_tutorial.create({
     *   data: {
     *     // ... data to create a Images_tutorial
     *   }
     * })
     * 
     */
    create<T extends images_tutorialCreateArgs>(args: SelectSubset<T, images_tutorialCreateArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images_tutorials.
     * @param {images_tutorialCreateManyArgs} args - Arguments to create many Images_tutorials.
     * @example
     * // Create many Images_tutorials
     * const images_tutorial = await prisma.images_tutorial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends images_tutorialCreateManyArgs>(args?: SelectSubset<T, images_tutorialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images_tutorial.
     * @param {images_tutorialDeleteArgs} args - Arguments to delete one Images_tutorial.
     * @example
     * // Delete one Images_tutorial
     * const Images_tutorial = await prisma.images_tutorial.delete({
     *   where: {
     *     // ... filter to delete one Images_tutorial
     *   }
     * })
     * 
     */
    delete<T extends images_tutorialDeleteArgs>(args: SelectSubset<T, images_tutorialDeleteArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images_tutorial.
     * @param {images_tutorialUpdateArgs} args - Arguments to update one Images_tutorial.
     * @example
     * // Update one Images_tutorial
     * const images_tutorial = await prisma.images_tutorial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends images_tutorialUpdateArgs>(args: SelectSubset<T, images_tutorialUpdateArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images_tutorials.
     * @param {images_tutorialDeleteManyArgs} args - Arguments to filter Images_tutorials to delete.
     * @example
     * // Delete a few Images_tutorials
     * const { count } = await prisma.images_tutorial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends images_tutorialDeleteManyArgs>(args?: SelectSubset<T, images_tutorialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images_tutorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tutorialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images_tutorials
     * const images_tutorial = await prisma.images_tutorial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends images_tutorialUpdateManyArgs>(args: SelectSubset<T, images_tutorialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images_tutorial.
     * @param {images_tutorialUpsertArgs} args - Arguments to update or create a Images_tutorial.
     * @example
     * // Update or create a Images_tutorial
     * const images_tutorial = await prisma.images_tutorial.upsert({
     *   create: {
     *     // ... data to create a Images_tutorial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images_tutorial we want to update
     *   }
     * })
     */
    upsert<T extends images_tutorialUpsertArgs>(args: SelectSubset<T, images_tutorialUpsertArgs<ExtArgs>>): Prisma__images_tutorialClient<$Result.GetResult<Prisma.$images_tutorialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images_tutorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tutorialCountArgs} args - Arguments to filter Images_tutorials to count.
     * @example
     * // Count the number of Images_tutorials
     * const count = await prisma.images_tutorial.count({
     *   where: {
     *     // ... the filter for the Images_tutorials we want to count
     *   }
     * })
    **/
    count<T extends images_tutorialCountArgs>(
      args?: Subset<T, images_tutorialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Images_tutorialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images_tutorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Images_tutorialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Images_tutorialAggregateArgs>(args: Subset<T, Images_tutorialAggregateArgs>): Prisma.PrismaPromise<GetImages_tutorialAggregateType<T>>

    /**
     * Group by Images_tutorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tutorialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends images_tutorialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: images_tutorialGroupByArgs['orderBy'] }
        : { orderBy?: images_tutorialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, images_tutorialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImages_tutorialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images_tutorial model
   */
  readonly fields: images_tutorialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images_tutorial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__images_tutorialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorial_detail<T extends tutorial_detailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tutorial_detailDefaultArgs<ExtArgs>>): Prisma__tutorial_detailClient<$Result.GetResult<Prisma.$tutorial_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the images_tutorial model
   */
  interface images_tutorialFieldRefs {
    readonly id: FieldRef<"images_tutorial", 'Int'>
    readonly tutorial_detail_id: FieldRef<"images_tutorial", 'String'>
    readonly url: FieldRef<"images_tutorial", 'String'>
    readonly created_at: FieldRef<"images_tutorial", 'DateTime'>
    readonly updated_at: FieldRef<"images_tutorial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * images_tutorial findUnique
   */
  export type images_tutorialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which images_tutorial to fetch.
     */
    where: images_tutorialWhereUniqueInput
  }

  /**
   * images_tutorial findUniqueOrThrow
   */
  export type images_tutorialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which images_tutorial to fetch.
     */
    where: images_tutorialWhereUniqueInput
  }

  /**
   * images_tutorial findFirst
   */
  export type images_tutorialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which images_tutorial to fetch.
     */
    where?: images_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tutorials to fetch.
     */
    orderBy?: images_tutorialOrderByWithRelationInput | images_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images_tutorials.
     */
    cursor?: images_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images_tutorials.
     */
    distinct?: Images_tutorialScalarFieldEnum | Images_tutorialScalarFieldEnum[]
  }

  /**
   * images_tutorial findFirstOrThrow
   */
  export type images_tutorialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which images_tutorial to fetch.
     */
    where?: images_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tutorials to fetch.
     */
    orderBy?: images_tutorialOrderByWithRelationInput | images_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images_tutorials.
     */
    cursor?: images_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images_tutorials.
     */
    distinct?: Images_tutorialScalarFieldEnum | Images_tutorialScalarFieldEnum[]
  }

  /**
   * images_tutorial findMany
   */
  export type images_tutorialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * Filter, which images_tutorials to fetch.
     */
    where?: images_tutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tutorials to fetch.
     */
    orderBy?: images_tutorialOrderByWithRelationInput | images_tutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images_tutorials.
     */
    cursor?: images_tutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tutorials.
     */
    skip?: number
    distinct?: Images_tutorialScalarFieldEnum | Images_tutorialScalarFieldEnum[]
  }

  /**
   * images_tutorial create
   */
  export type images_tutorialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * The data needed to create a images_tutorial.
     */
    data: XOR<images_tutorialCreateInput, images_tutorialUncheckedCreateInput>
  }

  /**
   * images_tutorial createMany
   */
  export type images_tutorialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images_tutorials.
     */
    data: images_tutorialCreateManyInput | images_tutorialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images_tutorial update
   */
  export type images_tutorialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * The data needed to update a images_tutorial.
     */
    data: XOR<images_tutorialUpdateInput, images_tutorialUncheckedUpdateInput>
    /**
     * Choose, which images_tutorial to update.
     */
    where: images_tutorialWhereUniqueInput
  }

  /**
   * images_tutorial updateMany
   */
  export type images_tutorialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images_tutorials.
     */
    data: XOR<images_tutorialUpdateManyMutationInput, images_tutorialUncheckedUpdateManyInput>
    /**
     * Filter which images_tutorials to update
     */
    where?: images_tutorialWhereInput
    /**
     * Limit how many images_tutorials to update.
     */
    limit?: number
  }

  /**
   * images_tutorial upsert
   */
  export type images_tutorialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * The filter to search for the images_tutorial to update in case it exists.
     */
    where: images_tutorialWhereUniqueInput
    /**
     * In case the images_tutorial found by the `where` argument doesn't exist, create a new images_tutorial with this data.
     */
    create: XOR<images_tutorialCreateInput, images_tutorialUncheckedCreateInput>
    /**
     * In case the images_tutorial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<images_tutorialUpdateInput, images_tutorialUncheckedUpdateInput>
  }

  /**
   * images_tutorial delete
   */
  export type images_tutorialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
    /**
     * Filter which images_tutorial to delete.
     */
    where: images_tutorialWhereUniqueInput
  }

  /**
   * images_tutorial deleteMany
   */
  export type images_tutorialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images_tutorials to delete
     */
    where?: images_tutorialWhereInput
    /**
     * Limit how many images_tutorials to delete.
     */
    limit?: number
  }

  /**
   * images_tutorial without action
   */
  export type images_tutorialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tutorial
     */
    select?: images_tutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images_tutorial
     */
    omit?: images_tutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tutorialInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Master_tutorialScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    kode_matakuliah: 'kode_matakuliah',
    url_presentation: 'url_presentation',
    url_finished: 'url_finished',
    createor_email: 'createor_email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Master_tutorialScalarFieldEnum = (typeof Master_tutorialScalarFieldEnum)[keyof typeof Master_tutorialScalarFieldEnum]


  export const Tutorial_detailScalarFieldEnum: {
    id: 'id',
    master_tutorial_id: 'master_tutorial_id',
    type: 'type',
    order: 'order',
    status: 'status',
    content_json: 'content_json',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Tutorial_detailScalarFieldEnum = (typeof Tutorial_detailScalarFieldEnum)[keyof typeof Tutorial_detailScalarFieldEnum]


  export const Images_tutorialScalarFieldEnum: {
    id: 'id',
    tutorial_detail_id: 'tutorial_detail_id',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Images_tutorialScalarFieldEnum = (typeof Images_tutorialScalarFieldEnum)[keyof typeof Images_tutorialScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const master_tutorialOrderByRelevanceFieldEnum: {
    judul: 'judul',
    kode_matakuliah: 'kode_matakuliah',
    url_presentation: 'url_presentation',
    url_finished: 'url_finished',
    createor_email: 'createor_email'
  };

  export type master_tutorialOrderByRelevanceFieldEnum = (typeof master_tutorialOrderByRelevanceFieldEnum)[keyof typeof master_tutorialOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const tutorial_detailOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status'
  };

  export type tutorial_detailOrderByRelevanceFieldEnum = (typeof tutorial_detailOrderByRelevanceFieldEnum)[keyof typeof tutorial_detailOrderByRelevanceFieldEnum]


  export const images_tutorialOrderByRelevanceFieldEnum: {
    tutorial_detail_id: 'tutorial_detail_id',
    url: 'url'
  };

  export type images_tutorialOrderByRelevanceFieldEnum = (typeof images_tutorialOrderByRelevanceFieldEnum)[keyof typeof images_tutorialOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type master_tutorialWhereInput = {
    AND?: master_tutorialWhereInput | master_tutorialWhereInput[]
    OR?: master_tutorialWhereInput[]
    NOT?: master_tutorialWhereInput | master_tutorialWhereInput[]
    id?: IntFilter<"master_tutorial"> | number
    judul?: StringFilter<"master_tutorial"> | string
    kode_matakuliah?: StringFilter<"master_tutorial"> | string
    url_presentation?: StringFilter<"master_tutorial"> | string
    url_finished?: StringFilter<"master_tutorial"> | string
    createor_email?: StringFilter<"master_tutorial"> | string
    created_at?: DateTimeFilter<"master_tutorial"> | Date | string
    updated_at?: DateTimeFilter<"master_tutorial"> | Date | string
    tutorial_detail?: Tutorial_detailListRelationFilter
  }

  export type master_tutorialOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    kode_matakuliah?: SortOrder
    url_presentation?: SortOrder
    url_finished?: SortOrder
    createor_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tutorial_detail?: tutorial_detailOrderByRelationAggregateInput
    _relevance?: master_tutorialOrderByRelevanceInput
  }

  export type master_tutorialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: master_tutorialWhereInput | master_tutorialWhereInput[]
    OR?: master_tutorialWhereInput[]
    NOT?: master_tutorialWhereInput | master_tutorialWhereInput[]
    judul?: StringFilter<"master_tutorial"> | string
    kode_matakuliah?: StringFilter<"master_tutorial"> | string
    url_presentation?: StringFilter<"master_tutorial"> | string
    url_finished?: StringFilter<"master_tutorial"> | string
    createor_email?: StringFilter<"master_tutorial"> | string
    created_at?: DateTimeFilter<"master_tutorial"> | Date | string
    updated_at?: DateTimeFilter<"master_tutorial"> | Date | string
    tutorial_detail?: Tutorial_detailListRelationFilter
  }, "id">

  export type master_tutorialOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    kode_matakuliah?: SortOrder
    url_presentation?: SortOrder
    url_finished?: SortOrder
    createor_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: master_tutorialCountOrderByAggregateInput
    _avg?: master_tutorialAvgOrderByAggregateInput
    _max?: master_tutorialMaxOrderByAggregateInput
    _min?: master_tutorialMinOrderByAggregateInput
    _sum?: master_tutorialSumOrderByAggregateInput
  }

  export type master_tutorialScalarWhereWithAggregatesInput = {
    AND?: master_tutorialScalarWhereWithAggregatesInput | master_tutorialScalarWhereWithAggregatesInput[]
    OR?: master_tutorialScalarWhereWithAggregatesInput[]
    NOT?: master_tutorialScalarWhereWithAggregatesInput | master_tutorialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"master_tutorial"> | number
    judul?: StringWithAggregatesFilter<"master_tutorial"> | string
    kode_matakuliah?: StringWithAggregatesFilter<"master_tutorial"> | string
    url_presentation?: StringWithAggregatesFilter<"master_tutorial"> | string
    url_finished?: StringWithAggregatesFilter<"master_tutorial"> | string
    createor_email?: StringWithAggregatesFilter<"master_tutorial"> | string
    created_at?: DateTimeWithAggregatesFilter<"master_tutorial"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"master_tutorial"> | Date | string
  }

  export type tutorial_detailWhereInput = {
    AND?: tutorial_detailWhereInput | tutorial_detailWhereInput[]
    OR?: tutorial_detailWhereInput[]
    NOT?: tutorial_detailWhereInput | tutorial_detailWhereInput[]
    id?: StringFilter<"tutorial_detail"> | string
    master_tutorial_id?: IntFilter<"tutorial_detail"> | number
    type?: StringFilter<"tutorial_detail"> | string
    order?: IntFilter<"tutorial_detail"> | number
    status?: StringFilter<"tutorial_detail"> | string
    content_json?: JsonFilter<"tutorial_detail">
    created_at?: DateTimeFilter<"tutorial_detail"> | Date | string
    updated_at?: DateTimeFilter<"tutorial_detail"> | Date | string
    master_tutorial?: XOR<Master_tutorialScalarRelationFilter, master_tutorialWhereInput>
    images_tutorial?: Images_tutorialListRelationFilter
  }

  export type tutorial_detailOrderByWithRelationInput = {
    id?: SortOrder
    master_tutorial_id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    status?: SortOrder
    content_json?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    master_tutorial?: master_tutorialOrderByWithRelationInput
    images_tutorial?: images_tutorialOrderByRelationAggregateInput
    _relevance?: tutorial_detailOrderByRelevanceInput
  }

  export type tutorial_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tutorial_detailWhereInput | tutorial_detailWhereInput[]
    OR?: tutorial_detailWhereInput[]
    NOT?: tutorial_detailWhereInput | tutorial_detailWhereInput[]
    master_tutorial_id?: IntFilter<"tutorial_detail"> | number
    type?: StringFilter<"tutorial_detail"> | string
    order?: IntFilter<"tutorial_detail"> | number
    status?: StringFilter<"tutorial_detail"> | string
    content_json?: JsonFilter<"tutorial_detail">
    created_at?: DateTimeFilter<"tutorial_detail"> | Date | string
    updated_at?: DateTimeFilter<"tutorial_detail"> | Date | string
    master_tutorial?: XOR<Master_tutorialScalarRelationFilter, master_tutorialWhereInput>
    images_tutorial?: Images_tutorialListRelationFilter
  }, "id">

  export type tutorial_detailOrderByWithAggregationInput = {
    id?: SortOrder
    master_tutorial_id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    status?: SortOrder
    content_json?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: tutorial_detailCountOrderByAggregateInput
    _avg?: tutorial_detailAvgOrderByAggregateInput
    _max?: tutorial_detailMaxOrderByAggregateInput
    _min?: tutorial_detailMinOrderByAggregateInput
    _sum?: tutorial_detailSumOrderByAggregateInput
  }

  export type tutorial_detailScalarWhereWithAggregatesInput = {
    AND?: tutorial_detailScalarWhereWithAggregatesInput | tutorial_detailScalarWhereWithAggregatesInput[]
    OR?: tutorial_detailScalarWhereWithAggregatesInput[]
    NOT?: tutorial_detailScalarWhereWithAggregatesInput | tutorial_detailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tutorial_detail"> | string
    master_tutorial_id?: IntWithAggregatesFilter<"tutorial_detail"> | number
    type?: StringWithAggregatesFilter<"tutorial_detail"> | string
    order?: IntWithAggregatesFilter<"tutorial_detail"> | number
    status?: StringWithAggregatesFilter<"tutorial_detail"> | string
    content_json?: JsonWithAggregatesFilter<"tutorial_detail">
    created_at?: DateTimeWithAggregatesFilter<"tutorial_detail"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tutorial_detail"> | Date | string
  }

  export type images_tutorialWhereInput = {
    AND?: images_tutorialWhereInput | images_tutorialWhereInput[]
    OR?: images_tutorialWhereInput[]
    NOT?: images_tutorialWhereInput | images_tutorialWhereInput[]
    id?: IntFilter<"images_tutorial"> | number
    tutorial_detail_id?: StringFilter<"images_tutorial"> | string
    url?: StringFilter<"images_tutorial"> | string
    created_at?: DateTimeFilter<"images_tutorial"> | Date | string
    updated_at?: DateTimeFilter<"images_tutorial"> | Date | string
    tutorial_detail?: XOR<Tutorial_detailScalarRelationFilter, tutorial_detailWhereInput>
  }

  export type images_tutorialOrderByWithRelationInput = {
    id?: SortOrder
    tutorial_detail_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tutorial_detail?: tutorial_detailOrderByWithRelationInput
    _relevance?: images_tutorialOrderByRelevanceInput
  }

  export type images_tutorialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: images_tutorialWhereInput | images_tutorialWhereInput[]
    OR?: images_tutorialWhereInput[]
    NOT?: images_tutorialWhereInput | images_tutorialWhereInput[]
    tutorial_detail_id?: StringFilter<"images_tutorial"> | string
    url?: StringFilter<"images_tutorial"> | string
    created_at?: DateTimeFilter<"images_tutorial"> | Date | string
    updated_at?: DateTimeFilter<"images_tutorial"> | Date | string
    tutorial_detail?: XOR<Tutorial_detailScalarRelationFilter, tutorial_detailWhereInput>
  }, "id">

  export type images_tutorialOrderByWithAggregationInput = {
    id?: SortOrder
    tutorial_detail_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: images_tutorialCountOrderByAggregateInput
    _avg?: images_tutorialAvgOrderByAggregateInput
    _max?: images_tutorialMaxOrderByAggregateInput
    _min?: images_tutorialMinOrderByAggregateInput
    _sum?: images_tutorialSumOrderByAggregateInput
  }

  export type images_tutorialScalarWhereWithAggregatesInput = {
    AND?: images_tutorialScalarWhereWithAggregatesInput | images_tutorialScalarWhereWithAggregatesInput[]
    OR?: images_tutorialScalarWhereWithAggregatesInput[]
    NOT?: images_tutorialScalarWhereWithAggregatesInput | images_tutorialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"images_tutorial"> | number
    tutorial_detail_id?: StringWithAggregatesFilter<"images_tutorial"> | string
    url?: StringWithAggregatesFilter<"images_tutorial"> | string
    created_at?: DateTimeWithAggregatesFilter<"images_tutorial"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"images_tutorial"> | Date | string
  }

  export type master_tutorialCreateInput = {
    judul: string
    kode_matakuliah: string
    url_presentation?: string
    url_finished?: string
    createor_email?: string
    created_at?: Date | string
    updated_at?: Date | string
    tutorial_detail?: tutorial_detailCreateNestedManyWithoutMaster_tutorialInput
  }

  export type master_tutorialUncheckedCreateInput = {
    id?: number
    judul: string
    kode_matakuliah: string
    url_presentation?: string
    url_finished?: string
    createor_email?: string
    created_at?: Date | string
    updated_at?: Date | string
    tutorial_detail?: tutorial_detailUncheckedCreateNestedManyWithoutMaster_tutorialInput
  }

  export type master_tutorialUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    kode_matakuliah?: StringFieldUpdateOperationsInput | string
    url_presentation?: StringFieldUpdateOperationsInput | string
    url_finished?: StringFieldUpdateOperationsInput | string
    createor_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorial_detail?: tutorial_detailUpdateManyWithoutMaster_tutorialNestedInput
  }

  export type master_tutorialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    kode_matakuliah?: StringFieldUpdateOperationsInput | string
    url_presentation?: StringFieldUpdateOperationsInput | string
    url_finished?: StringFieldUpdateOperationsInput | string
    createor_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorial_detail?: tutorial_detailUncheckedUpdateManyWithoutMaster_tutorialNestedInput
  }

  export type master_tutorialCreateManyInput = {
    id?: number
    judul: string
    kode_matakuliah: string
    url_presentation?: string
    url_finished?: string
    createor_email?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type master_tutorialUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    kode_matakuliah?: StringFieldUpdateOperationsInput | string
    url_presentation?: StringFieldUpdateOperationsInput | string
    url_finished?: StringFieldUpdateOperationsInput | string
    createor_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type master_tutorialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    kode_matakuliah?: StringFieldUpdateOperationsInput | string
    url_presentation?: StringFieldUpdateOperationsInput | string
    url_finished?: StringFieldUpdateOperationsInput | string
    createor_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutorial_detailCreateInput = {
    id: string
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    master_tutorial: master_tutorialCreateNestedOneWithoutTutorial_detailInput
    images_tutorial?: images_tutorialCreateNestedManyWithoutTutorial_detailInput
  }

  export type tutorial_detailUncheckedCreateInput = {
    id: string
    master_tutorial_id: number
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    images_tutorial?: images_tutorialUncheckedCreateNestedManyWithoutTutorial_detailInput
  }

  export type tutorial_detailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    master_tutorial?: master_tutorialUpdateOneRequiredWithoutTutorial_detailNestedInput
    images_tutorial?: images_tutorialUpdateManyWithoutTutorial_detailNestedInput
  }

  export type tutorial_detailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    master_tutorial_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images_tutorial?: images_tutorialUncheckedUpdateManyWithoutTutorial_detailNestedInput
  }

  export type tutorial_detailCreateManyInput = {
    id: string
    master_tutorial_id: number
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tutorial_detailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutorial_detailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    master_tutorial_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type images_tutorialCreateInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    tutorial_detail: tutorial_detailCreateNestedOneWithoutImages_tutorialInput
  }

  export type images_tutorialUncheckedCreateInput = {
    id?: number
    tutorial_detail_id: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type images_tutorialUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorial_detail?: tutorial_detailUpdateOneRequiredWithoutImages_tutorialNestedInput
  }

  export type images_tutorialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorial_detail_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type images_tutorialCreateManyInput = {
    id?: number
    tutorial_detail_id: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type images_tutorialUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type images_tutorialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorial_detail_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tutorial_detailListRelationFilter = {
    every?: tutorial_detailWhereInput
    some?: tutorial_detailWhereInput
    none?: tutorial_detailWhereInput
  }

  export type tutorial_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type master_tutorialOrderByRelevanceInput = {
    fields: master_tutorialOrderByRelevanceFieldEnum | master_tutorialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type master_tutorialCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    kode_matakuliah?: SortOrder
    url_presentation?: SortOrder
    url_finished?: SortOrder
    createor_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type master_tutorialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type master_tutorialMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    kode_matakuliah?: SortOrder
    url_presentation?: SortOrder
    url_finished?: SortOrder
    createor_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type master_tutorialMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    kode_matakuliah?: SortOrder
    url_presentation?: SortOrder
    url_finished?: SortOrder
    createor_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type master_tutorialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Master_tutorialScalarRelationFilter = {
    is?: master_tutorialWhereInput
    isNot?: master_tutorialWhereInput
  }

  export type Images_tutorialListRelationFilter = {
    every?: images_tutorialWhereInput
    some?: images_tutorialWhereInput
    none?: images_tutorialWhereInput
  }

  export type images_tutorialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tutorial_detailOrderByRelevanceInput = {
    fields: tutorial_detailOrderByRelevanceFieldEnum | tutorial_detailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tutorial_detailCountOrderByAggregateInput = {
    id?: SortOrder
    master_tutorial_id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    status?: SortOrder
    content_json?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutorial_detailAvgOrderByAggregateInput = {
    master_tutorial_id?: SortOrder
    order?: SortOrder
  }

  export type tutorial_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    master_tutorial_id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutorial_detailMinOrderByAggregateInput = {
    id?: SortOrder
    master_tutorial_id?: SortOrder
    type?: SortOrder
    order?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tutorial_detailSumOrderByAggregateInput = {
    master_tutorial_id?: SortOrder
    order?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type Tutorial_detailScalarRelationFilter = {
    is?: tutorial_detailWhereInput
    isNot?: tutorial_detailWhereInput
  }

  export type images_tutorialOrderByRelevanceInput = {
    fields: images_tutorialOrderByRelevanceFieldEnum | images_tutorialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type images_tutorialCountOrderByAggregateInput = {
    id?: SortOrder
    tutorial_detail_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type images_tutorialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type images_tutorialMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorial_detail_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type images_tutorialMinOrderByAggregateInput = {
    id?: SortOrder
    tutorial_detail_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type images_tutorialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tutorial_detailCreateNestedManyWithoutMaster_tutorialInput = {
    create?: XOR<tutorial_detailCreateWithoutMaster_tutorialInput, tutorial_detailUncheckedCreateWithoutMaster_tutorialInput> | tutorial_detailCreateWithoutMaster_tutorialInput[] | tutorial_detailUncheckedCreateWithoutMaster_tutorialInput[]
    connectOrCreate?: tutorial_detailCreateOrConnectWithoutMaster_tutorialInput | tutorial_detailCreateOrConnectWithoutMaster_tutorialInput[]
    createMany?: tutorial_detailCreateManyMaster_tutorialInputEnvelope
    connect?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
  }

  export type tutorial_detailUncheckedCreateNestedManyWithoutMaster_tutorialInput = {
    create?: XOR<tutorial_detailCreateWithoutMaster_tutorialInput, tutorial_detailUncheckedCreateWithoutMaster_tutorialInput> | tutorial_detailCreateWithoutMaster_tutorialInput[] | tutorial_detailUncheckedCreateWithoutMaster_tutorialInput[]
    connectOrCreate?: tutorial_detailCreateOrConnectWithoutMaster_tutorialInput | tutorial_detailCreateOrConnectWithoutMaster_tutorialInput[]
    createMany?: tutorial_detailCreateManyMaster_tutorialInputEnvelope
    connect?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tutorial_detailUpdateManyWithoutMaster_tutorialNestedInput = {
    create?: XOR<tutorial_detailCreateWithoutMaster_tutorialInput, tutorial_detailUncheckedCreateWithoutMaster_tutorialInput> | tutorial_detailCreateWithoutMaster_tutorialInput[] | tutorial_detailUncheckedCreateWithoutMaster_tutorialInput[]
    connectOrCreate?: tutorial_detailCreateOrConnectWithoutMaster_tutorialInput | tutorial_detailCreateOrConnectWithoutMaster_tutorialInput[]
    upsert?: tutorial_detailUpsertWithWhereUniqueWithoutMaster_tutorialInput | tutorial_detailUpsertWithWhereUniqueWithoutMaster_tutorialInput[]
    createMany?: tutorial_detailCreateManyMaster_tutorialInputEnvelope
    set?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    disconnect?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    delete?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    connect?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    update?: tutorial_detailUpdateWithWhereUniqueWithoutMaster_tutorialInput | tutorial_detailUpdateWithWhereUniqueWithoutMaster_tutorialInput[]
    updateMany?: tutorial_detailUpdateManyWithWhereWithoutMaster_tutorialInput | tutorial_detailUpdateManyWithWhereWithoutMaster_tutorialInput[]
    deleteMany?: tutorial_detailScalarWhereInput | tutorial_detailScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tutorial_detailUncheckedUpdateManyWithoutMaster_tutorialNestedInput = {
    create?: XOR<tutorial_detailCreateWithoutMaster_tutorialInput, tutorial_detailUncheckedCreateWithoutMaster_tutorialInput> | tutorial_detailCreateWithoutMaster_tutorialInput[] | tutorial_detailUncheckedCreateWithoutMaster_tutorialInput[]
    connectOrCreate?: tutorial_detailCreateOrConnectWithoutMaster_tutorialInput | tutorial_detailCreateOrConnectWithoutMaster_tutorialInput[]
    upsert?: tutorial_detailUpsertWithWhereUniqueWithoutMaster_tutorialInput | tutorial_detailUpsertWithWhereUniqueWithoutMaster_tutorialInput[]
    createMany?: tutorial_detailCreateManyMaster_tutorialInputEnvelope
    set?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    disconnect?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    delete?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    connect?: tutorial_detailWhereUniqueInput | tutorial_detailWhereUniqueInput[]
    update?: tutorial_detailUpdateWithWhereUniqueWithoutMaster_tutorialInput | tutorial_detailUpdateWithWhereUniqueWithoutMaster_tutorialInput[]
    updateMany?: tutorial_detailUpdateManyWithWhereWithoutMaster_tutorialInput | tutorial_detailUpdateManyWithWhereWithoutMaster_tutorialInput[]
    deleteMany?: tutorial_detailScalarWhereInput | tutorial_detailScalarWhereInput[]
  }

  export type master_tutorialCreateNestedOneWithoutTutorial_detailInput = {
    create?: XOR<master_tutorialCreateWithoutTutorial_detailInput, master_tutorialUncheckedCreateWithoutTutorial_detailInput>
    connectOrCreate?: master_tutorialCreateOrConnectWithoutTutorial_detailInput
    connect?: master_tutorialWhereUniqueInput
  }

  export type images_tutorialCreateNestedManyWithoutTutorial_detailInput = {
    create?: XOR<images_tutorialCreateWithoutTutorial_detailInput, images_tutorialUncheckedCreateWithoutTutorial_detailInput> | images_tutorialCreateWithoutTutorial_detailInput[] | images_tutorialUncheckedCreateWithoutTutorial_detailInput[]
    connectOrCreate?: images_tutorialCreateOrConnectWithoutTutorial_detailInput | images_tutorialCreateOrConnectWithoutTutorial_detailInput[]
    createMany?: images_tutorialCreateManyTutorial_detailInputEnvelope
    connect?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
  }

  export type images_tutorialUncheckedCreateNestedManyWithoutTutorial_detailInput = {
    create?: XOR<images_tutorialCreateWithoutTutorial_detailInput, images_tutorialUncheckedCreateWithoutTutorial_detailInput> | images_tutorialCreateWithoutTutorial_detailInput[] | images_tutorialUncheckedCreateWithoutTutorial_detailInput[]
    connectOrCreate?: images_tutorialCreateOrConnectWithoutTutorial_detailInput | images_tutorialCreateOrConnectWithoutTutorial_detailInput[]
    createMany?: images_tutorialCreateManyTutorial_detailInputEnvelope
    connect?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
  }

  export type master_tutorialUpdateOneRequiredWithoutTutorial_detailNestedInput = {
    create?: XOR<master_tutorialCreateWithoutTutorial_detailInput, master_tutorialUncheckedCreateWithoutTutorial_detailInput>
    connectOrCreate?: master_tutorialCreateOrConnectWithoutTutorial_detailInput
    upsert?: master_tutorialUpsertWithoutTutorial_detailInput
    connect?: master_tutorialWhereUniqueInput
    update?: XOR<XOR<master_tutorialUpdateToOneWithWhereWithoutTutorial_detailInput, master_tutorialUpdateWithoutTutorial_detailInput>, master_tutorialUncheckedUpdateWithoutTutorial_detailInput>
  }

  export type images_tutorialUpdateManyWithoutTutorial_detailNestedInput = {
    create?: XOR<images_tutorialCreateWithoutTutorial_detailInput, images_tutorialUncheckedCreateWithoutTutorial_detailInput> | images_tutorialCreateWithoutTutorial_detailInput[] | images_tutorialUncheckedCreateWithoutTutorial_detailInput[]
    connectOrCreate?: images_tutorialCreateOrConnectWithoutTutorial_detailInput | images_tutorialCreateOrConnectWithoutTutorial_detailInput[]
    upsert?: images_tutorialUpsertWithWhereUniqueWithoutTutorial_detailInput | images_tutorialUpsertWithWhereUniqueWithoutTutorial_detailInput[]
    createMany?: images_tutorialCreateManyTutorial_detailInputEnvelope
    set?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    disconnect?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    delete?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    connect?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    update?: images_tutorialUpdateWithWhereUniqueWithoutTutorial_detailInput | images_tutorialUpdateWithWhereUniqueWithoutTutorial_detailInput[]
    updateMany?: images_tutorialUpdateManyWithWhereWithoutTutorial_detailInput | images_tutorialUpdateManyWithWhereWithoutTutorial_detailInput[]
    deleteMany?: images_tutorialScalarWhereInput | images_tutorialScalarWhereInput[]
  }

  export type images_tutorialUncheckedUpdateManyWithoutTutorial_detailNestedInput = {
    create?: XOR<images_tutorialCreateWithoutTutorial_detailInput, images_tutorialUncheckedCreateWithoutTutorial_detailInput> | images_tutorialCreateWithoutTutorial_detailInput[] | images_tutorialUncheckedCreateWithoutTutorial_detailInput[]
    connectOrCreate?: images_tutorialCreateOrConnectWithoutTutorial_detailInput | images_tutorialCreateOrConnectWithoutTutorial_detailInput[]
    upsert?: images_tutorialUpsertWithWhereUniqueWithoutTutorial_detailInput | images_tutorialUpsertWithWhereUniqueWithoutTutorial_detailInput[]
    createMany?: images_tutorialCreateManyTutorial_detailInputEnvelope
    set?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    disconnect?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    delete?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    connect?: images_tutorialWhereUniqueInput | images_tutorialWhereUniqueInput[]
    update?: images_tutorialUpdateWithWhereUniqueWithoutTutorial_detailInput | images_tutorialUpdateWithWhereUniqueWithoutTutorial_detailInput[]
    updateMany?: images_tutorialUpdateManyWithWhereWithoutTutorial_detailInput | images_tutorialUpdateManyWithWhereWithoutTutorial_detailInput[]
    deleteMany?: images_tutorialScalarWhereInput | images_tutorialScalarWhereInput[]
  }

  export type tutorial_detailCreateNestedOneWithoutImages_tutorialInput = {
    create?: XOR<tutorial_detailCreateWithoutImages_tutorialInput, tutorial_detailUncheckedCreateWithoutImages_tutorialInput>
    connectOrCreate?: tutorial_detailCreateOrConnectWithoutImages_tutorialInput
    connect?: tutorial_detailWhereUniqueInput
  }

  export type tutorial_detailUpdateOneRequiredWithoutImages_tutorialNestedInput = {
    create?: XOR<tutorial_detailCreateWithoutImages_tutorialInput, tutorial_detailUncheckedCreateWithoutImages_tutorialInput>
    connectOrCreate?: tutorial_detailCreateOrConnectWithoutImages_tutorialInput
    upsert?: tutorial_detailUpsertWithoutImages_tutorialInput
    connect?: tutorial_detailWhereUniqueInput
    update?: XOR<XOR<tutorial_detailUpdateToOneWithWhereWithoutImages_tutorialInput, tutorial_detailUpdateWithoutImages_tutorialInput>, tutorial_detailUncheckedUpdateWithoutImages_tutorialInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type tutorial_detailCreateWithoutMaster_tutorialInput = {
    id: string
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    images_tutorial?: images_tutorialCreateNestedManyWithoutTutorial_detailInput
  }

  export type tutorial_detailUncheckedCreateWithoutMaster_tutorialInput = {
    id: string
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    images_tutorial?: images_tutorialUncheckedCreateNestedManyWithoutTutorial_detailInput
  }

  export type tutorial_detailCreateOrConnectWithoutMaster_tutorialInput = {
    where: tutorial_detailWhereUniqueInput
    create: XOR<tutorial_detailCreateWithoutMaster_tutorialInput, tutorial_detailUncheckedCreateWithoutMaster_tutorialInput>
  }

  export type tutorial_detailCreateManyMaster_tutorialInputEnvelope = {
    data: tutorial_detailCreateManyMaster_tutorialInput | tutorial_detailCreateManyMaster_tutorialInput[]
    skipDuplicates?: boolean
  }

  export type tutorial_detailUpsertWithWhereUniqueWithoutMaster_tutorialInput = {
    where: tutorial_detailWhereUniqueInput
    update: XOR<tutorial_detailUpdateWithoutMaster_tutorialInput, tutorial_detailUncheckedUpdateWithoutMaster_tutorialInput>
    create: XOR<tutorial_detailCreateWithoutMaster_tutorialInput, tutorial_detailUncheckedCreateWithoutMaster_tutorialInput>
  }

  export type tutorial_detailUpdateWithWhereUniqueWithoutMaster_tutorialInput = {
    where: tutorial_detailWhereUniqueInput
    data: XOR<tutorial_detailUpdateWithoutMaster_tutorialInput, tutorial_detailUncheckedUpdateWithoutMaster_tutorialInput>
  }

  export type tutorial_detailUpdateManyWithWhereWithoutMaster_tutorialInput = {
    where: tutorial_detailScalarWhereInput
    data: XOR<tutorial_detailUpdateManyMutationInput, tutorial_detailUncheckedUpdateManyWithoutMaster_tutorialInput>
  }

  export type tutorial_detailScalarWhereInput = {
    AND?: tutorial_detailScalarWhereInput | tutorial_detailScalarWhereInput[]
    OR?: tutorial_detailScalarWhereInput[]
    NOT?: tutorial_detailScalarWhereInput | tutorial_detailScalarWhereInput[]
    id?: StringFilter<"tutorial_detail"> | string
    master_tutorial_id?: IntFilter<"tutorial_detail"> | number
    type?: StringFilter<"tutorial_detail"> | string
    order?: IntFilter<"tutorial_detail"> | number
    status?: StringFilter<"tutorial_detail"> | string
    content_json?: JsonFilter<"tutorial_detail">
    created_at?: DateTimeFilter<"tutorial_detail"> | Date | string
    updated_at?: DateTimeFilter<"tutorial_detail"> | Date | string
  }

  export type master_tutorialCreateWithoutTutorial_detailInput = {
    judul: string
    kode_matakuliah: string
    url_presentation?: string
    url_finished?: string
    createor_email?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type master_tutorialUncheckedCreateWithoutTutorial_detailInput = {
    id?: number
    judul: string
    kode_matakuliah: string
    url_presentation?: string
    url_finished?: string
    createor_email?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type master_tutorialCreateOrConnectWithoutTutorial_detailInput = {
    where: master_tutorialWhereUniqueInput
    create: XOR<master_tutorialCreateWithoutTutorial_detailInput, master_tutorialUncheckedCreateWithoutTutorial_detailInput>
  }

  export type images_tutorialCreateWithoutTutorial_detailInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type images_tutorialUncheckedCreateWithoutTutorial_detailInput = {
    id?: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type images_tutorialCreateOrConnectWithoutTutorial_detailInput = {
    where: images_tutorialWhereUniqueInput
    create: XOR<images_tutorialCreateWithoutTutorial_detailInput, images_tutorialUncheckedCreateWithoutTutorial_detailInput>
  }

  export type images_tutorialCreateManyTutorial_detailInputEnvelope = {
    data: images_tutorialCreateManyTutorial_detailInput | images_tutorialCreateManyTutorial_detailInput[]
    skipDuplicates?: boolean
  }

  export type master_tutorialUpsertWithoutTutorial_detailInput = {
    update: XOR<master_tutorialUpdateWithoutTutorial_detailInput, master_tutorialUncheckedUpdateWithoutTutorial_detailInput>
    create: XOR<master_tutorialCreateWithoutTutorial_detailInput, master_tutorialUncheckedCreateWithoutTutorial_detailInput>
    where?: master_tutorialWhereInput
  }

  export type master_tutorialUpdateToOneWithWhereWithoutTutorial_detailInput = {
    where?: master_tutorialWhereInput
    data: XOR<master_tutorialUpdateWithoutTutorial_detailInput, master_tutorialUncheckedUpdateWithoutTutorial_detailInput>
  }

  export type master_tutorialUpdateWithoutTutorial_detailInput = {
    judul?: StringFieldUpdateOperationsInput | string
    kode_matakuliah?: StringFieldUpdateOperationsInput | string
    url_presentation?: StringFieldUpdateOperationsInput | string
    url_finished?: StringFieldUpdateOperationsInput | string
    createor_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type master_tutorialUncheckedUpdateWithoutTutorial_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    kode_matakuliah?: StringFieldUpdateOperationsInput | string
    url_presentation?: StringFieldUpdateOperationsInput | string
    url_finished?: StringFieldUpdateOperationsInput | string
    createor_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type images_tutorialUpsertWithWhereUniqueWithoutTutorial_detailInput = {
    where: images_tutorialWhereUniqueInput
    update: XOR<images_tutorialUpdateWithoutTutorial_detailInput, images_tutorialUncheckedUpdateWithoutTutorial_detailInput>
    create: XOR<images_tutorialCreateWithoutTutorial_detailInput, images_tutorialUncheckedCreateWithoutTutorial_detailInput>
  }

  export type images_tutorialUpdateWithWhereUniqueWithoutTutorial_detailInput = {
    where: images_tutorialWhereUniqueInput
    data: XOR<images_tutorialUpdateWithoutTutorial_detailInput, images_tutorialUncheckedUpdateWithoutTutorial_detailInput>
  }

  export type images_tutorialUpdateManyWithWhereWithoutTutorial_detailInput = {
    where: images_tutorialScalarWhereInput
    data: XOR<images_tutorialUpdateManyMutationInput, images_tutorialUncheckedUpdateManyWithoutTutorial_detailInput>
  }

  export type images_tutorialScalarWhereInput = {
    AND?: images_tutorialScalarWhereInput | images_tutorialScalarWhereInput[]
    OR?: images_tutorialScalarWhereInput[]
    NOT?: images_tutorialScalarWhereInput | images_tutorialScalarWhereInput[]
    id?: IntFilter<"images_tutorial"> | number
    tutorial_detail_id?: StringFilter<"images_tutorial"> | string
    url?: StringFilter<"images_tutorial"> | string
    created_at?: DateTimeFilter<"images_tutorial"> | Date | string
    updated_at?: DateTimeFilter<"images_tutorial"> | Date | string
  }

  export type tutorial_detailCreateWithoutImages_tutorialInput = {
    id: string
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    master_tutorial: master_tutorialCreateNestedOneWithoutTutorial_detailInput
  }

  export type tutorial_detailUncheckedCreateWithoutImages_tutorialInput = {
    id: string
    master_tutorial_id: number
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tutorial_detailCreateOrConnectWithoutImages_tutorialInput = {
    where: tutorial_detailWhereUniqueInput
    create: XOR<tutorial_detailCreateWithoutImages_tutorialInput, tutorial_detailUncheckedCreateWithoutImages_tutorialInput>
  }

  export type tutorial_detailUpsertWithoutImages_tutorialInput = {
    update: XOR<tutorial_detailUpdateWithoutImages_tutorialInput, tutorial_detailUncheckedUpdateWithoutImages_tutorialInput>
    create: XOR<tutorial_detailCreateWithoutImages_tutorialInput, tutorial_detailUncheckedCreateWithoutImages_tutorialInput>
    where?: tutorial_detailWhereInput
  }

  export type tutorial_detailUpdateToOneWithWhereWithoutImages_tutorialInput = {
    where?: tutorial_detailWhereInput
    data: XOR<tutorial_detailUpdateWithoutImages_tutorialInput, tutorial_detailUncheckedUpdateWithoutImages_tutorialInput>
  }

  export type tutorial_detailUpdateWithoutImages_tutorialInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    master_tutorial?: master_tutorialUpdateOneRequiredWithoutTutorial_detailNestedInput
  }

  export type tutorial_detailUncheckedUpdateWithoutImages_tutorialInput = {
    id?: StringFieldUpdateOperationsInput | string
    master_tutorial_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tutorial_detailCreateManyMaster_tutorialInput = {
    id: string
    type: string
    order: number
    status: string
    content_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tutorial_detailUpdateWithoutMaster_tutorialInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images_tutorial?: images_tutorialUpdateManyWithoutTutorial_detailNestedInput
  }

  export type tutorial_detailUncheckedUpdateWithoutMaster_tutorialInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images_tutorial?: images_tutorialUncheckedUpdateManyWithoutTutorial_detailNestedInput
  }

  export type tutorial_detailUncheckedUpdateManyWithoutMaster_tutorialInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type images_tutorialCreateManyTutorial_detailInput = {
    id?: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type images_tutorialUpdateWithoutTutorial_detailInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type images_tutorialUncheckedUpdateWithoutTutorial_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type images_tutorialUncheckedUpdateManyWithoutTutorial_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}