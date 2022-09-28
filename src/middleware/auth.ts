// import { callbackMiddleware } from "@/utils/middleware-callback"
// import { makeAuthMiddleware } from "@/main/factories"
// import { LoadAccountByToken } from "@/domain/usecases"

// export const auth = callbackMiddleware(makeAuthMiddleware("admin"))

// export class AuthMiddleware implements Middleware {
//   // constructor(
//   //   private readonly loadAccountByToken: LoadAccountByToken,
//   //   private readonly role?: string
//   // ) {}

//   // async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
//   //   try {
//   //     const { accessToken } = request
//   //     if (accessToken) {
//   //       const account = await this.loadAccountByToken.load(
//   //         accessToken,
//   //         this.role
//   //       )
//   //       if (account) {
//   //         return ok({ accountId: account.id })
//   //       }
//   //     }
//   //     return forbidden(new AccessDeniedError())
//   //   } catch (error) {
//   //     return serverError(error)
//   //   }
//   // }
// }
